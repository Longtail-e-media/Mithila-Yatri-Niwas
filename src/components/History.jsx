import React from "react";

const History = () => {
  return (
    <>
      <div
        // className={`relative min-h-screen bg-[url('https://3.bp.blogspot.com/_dFHgYO4fOVk/S4LXrpqQ-JI/AAAAAAAAAA0/-Nh2V4Xv0dE/s1600/FILE0561.JPG')] bg-cover bg-top bg-fixed`}
        // className={`relative min-h-screen bg-[url('/src/assets/hmmm.jpg')] bg-cover bg-center bg-fixed`}
        className="relative h-auto bg-logo-bg"
      >
        {/* <div className="absolute bg-black/40 inset-0 z-0" /> */}
        <section className="z-10 text-custom-black pt-24 pb-48 md:pt-32 md:pb-96">
          <div className="text-justify sm:text-center mb-12 container max-w-7xl mx-auto space-y-4 text-custom-black">
            <h3 className="text-center text-2xl md:text-3xl mb-6">
              Cultural Legacy of Mithila, Janakpur
            </h3>
            <p className="text-base text-gray-600">
              The Janaki Temple in Janakpur, Nepal, dedicated to goddess Sita
              from the Ramayana, intertwines its history with her legendary
              tale. Commissioned by Queen Vrisha Bhanu in 1910, the temple
              features a blend of Mughal and Koiri architecture with intricate
              designs and vibrant depictions of Ramayana scenes. It serves as a
              cultural hub attracting thousands during festivals like Vivah
              Panchami and Ram Navami. The temple stands as a testament to
              enduring devotion, embodying Sita and Rama's timeless love story
              and inspiring reverence across generations.
            </p>
            <p className="text-base text-gray-600">
              Janakpur, is renowned for its vibrant Mithila art, stemming from
              King Janak's commission for paintings depicting Sita's wedding to
              Lord Rama. Predominantly practiced by women, this art form serves
              as a visual narrative for cultural events, featuring intricate
              designs and bold colors. Widely recognized in the 20th century,
              Mithila art now enjoys global acclaim, with Janakpur as its hub
              and initiatives like the Janakpur Women's Development Center
              preserving its legacy, showcasing the resilience and creativity of
              the Maithil people.
            </p>
            <p className="text-base text-gray-600">
              Near Janaki Mandir in Janakpur, several holy sites like Ram
              Mandir, Janaki Kund, Mani Mandap, Ganga Sagar, and Dhanushadham
              hold deep significance in Hindu culture. These sites are dedicated
              to Lord Rama, Goddess Sita, and King Janak offering spiritual
              purification and a glimpse into Janakpur's royal heritage. Each
              location resonates with the echoes of the Ramayana, drawing
              pilgrims and visitors to experience the profound spirituality and
              cultural richness of Janakpur.
            </p>
            <p className="text-base text-gray-600">
              Experience Janakpur's cultural and spiritual charm at Mithila
              Yatrai Nawas, centrally located in this historic city. Explore the
              iconic Janaki Temple and immerse yourself in the rich heritage of
              Mithila art. Embark on a spiritual quest to nearby holy sites like
              Ram Mandir and Janaki Kund, ensuring a memorable stay with
              comfortable accommodation and warm hospitality.
            </p>
          </div>
        </section>
        <div
          className={`absolute inset-0 h-full w-full bg-[url('/src/assets/graphics/texture.avif')] bg-cover bg-center bg-no-repeat z-0 mix-blend-darken opacity-50`}
        />
        <div
          className={`absolute bottom-0 h-96 w-full bg-[url('/src/assets/sketch.webp')] bg-contain bg-bottom bg-repeat-x z-0 mix-blend-multiply`}
        />
      </div>
    </>
  );
};

export default History;
