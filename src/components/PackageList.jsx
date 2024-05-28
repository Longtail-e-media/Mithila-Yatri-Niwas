import React, { useState, useEffect, useRef } from "react";
import { PackageSlider, PackageContent, Button } from "../constants/data";

const PackageList = ({ contents }) => {
  const [activeRoom, setActiveRoom] = useState(contents[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRefs = useRef({});

  const handleRoomClick = (room) => {
    setIsTransitioning(true);
    setActiveRoom(room);
    setTimeout(() => {
      setIsTransitioning(false);
      const section = document.getElementById(room.id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 400);

    window.location.hash = room.id;
  };

  useEffect(() => {
    const hashChangeHandler = () => {
      const slug = window.location.hash.substring(1);
      const room = contents.find((room) => room.id === slug);
      if (room) {
        setActiveRoom(room);
        setTimeout(() => {
          const section = document.getElementById(room.id);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }, 0); // Delay to ensure the component is rendered before scrolling
      }
    };
    window.addEventListener("hashchange", hashChangeHandler);
    hashChangeHandler();

    return () => window.removeEventListener("hashchange", hashChangeHandler);
  }, [contents]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newHash = `#${entry.target.id}`;
            if (window.location.hash !== newHash) {
              window.history.replaceState(null, null, newHash);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="sticky top-12 py-2 bg-custom-white backdrop-blur-md filter-buttons flex items-center justify-center md:gap-8 mb-12 md:mb-24 z-50">
        {contents.map((room) => (
          <button
            key={room.id}
            className={`font-title px-6 py-2 transition-linear text-xs md:text-base uppercase tracking-wide text-custom-black hover:bg-custom-black/10 rounded-full ${
              activeRoom.id === room.id
                ? "opacity-100 scale-100 font-bold"
                : "opacity-50 scale-90 hover:opacity-80 font-semibold"
            } ${isTransitioning ? "transition-linear" : ""}`}
            onClick={() => handleRoomClick(room)}
          >
            {room.title}
          </button>
        ))}
      </div>
      <div
        id={activeRoom.id}
        ref={(el) => (sectionRefs.current[activeRoom.id] = el)}
        className={`scroll-mt-32 container transition-linear ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="grid grid-cols-5 gap-16">
          <div className="col-span-5 lg:col-span-2 order-2 lg:order-1">
            <PackageContent room={activeRoom} />
          </div>
          <div className="col-span-5 lg:col-span-3 order-1 lg:order-2">
            <div className="sticky top-32 mx-3">
              <PackageSlider contents={contents} sizeClassName="size-full" />
              <div className="mt-12 mx-auto flex items-center justify-center">
                <Button title="Booking" router={activeRoom.booking} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageList;
