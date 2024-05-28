import React from "react";
import ScrollReveal from "./ui/ScrollReveal";

const Janaki = () => {
  return (
    <>
      <div
        // className={`relative min-h-screen bg-[url('https://3.bp.blogspot.com/_dFHgYO4fOVk/S4LXrpqQ-JI/AAAAAAAAAA0/-Nh2V4Xv0dE/s1600/FILE0561.JPG')] bg-cover bg-top bg-fixed`}
        // className={`relative min-h-screen bg-[url('https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/307644824_6560528780646526_8981790166085048237_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yU5dbIdT3gEQ7kNvgH7njhL&_nc_ht=scontent.fktm10-1.fna&oh=00_AfAsy8OQYgQFc3-rggatBdgD5MOEw8A2yibQxlvE7HBfBA&oe=66390858')] bg-cover bg-top bg-fixed`}
        // className={`relative min-h-screen bg-[url('/src/assets/janakiTemple.jpg')] bg-cover bg-top bg-fixed`}
        className={`relative min-h-screen bg-transparent bg-none`}
      >
        {/* <div
          src="/src/assets/janakiSketch.png"
          className={`absolute bottom-0 h-full w-full bg-[url('/src/assets/sketch.webp')] bg-contain bg-bottom bg-repeat-x bg-fixed z-0`}
        /> */}
        <div
          className={`absolute inset-0 h-full w-full bg-[url('/src/assets/graphics/test1.png')] bg-fixed bg-cover bg-center bg-no-repeat z-0 mix-blend-darken opacity-50`}
        />
        {/* <div
          className={`absolute bottom-0 h-full w-full bg-[url('/src/assets/janaki_art.webp')] bg-fixed bg-contain bg-bottom bg-repeat-x z-0 mix-blend-multiply`}
        /> */}
        {/* <div className="absolute bg-black/40 inset-0 z-0" /> */}
        <section className="z-10 text-custom-black">
          <ScrollReveal para="The Janaki Temple is a Hindu temple in Janakpur, Nepal, dedicated to the Hindu goddess Sita." />
          <ScrollReveal para="It is an example of mixed Islam and Hindu Nepali architecture. It is often considered the most important model of Mughal architecture in Nepal." />
          <ScrollReveal para="The Mandir (Temple) is popularly known as the Nau Lakha Mandir (meaning 'nine lakhs'). The cost for the construction of the temple was about rupees nine lakhs, hence the name." />
          <ScrollReveal para="Queen Vrisha Bhanu of Tikamgarh built the temple in 1910 AD. The site was designated as a UNESCO tentative site in 2008." />
          <ScrollReveal para="This seat of Hindu pilgrimage is a sprawling collection of temples, ashrams, images and inscriptions raised over the centuries." />
          <ScrollReveal para="This important Hindu pilgrimage spot is one of the most visited spots in Nepal and attracts thousands of Hindu pilgrims from across the world. " />
          <ScrollReveal para="The temple is even more resplendent on religious feats and special occasions Ram Nawami, Vivaha Panchami, Dashain and Tihar when people flock here in even greater number." />
          <ScrollReveal para="In the shadow of this magnificent temple complex and along the banks of the lakes Hotel Mithila a 3-star spiritual theme hotel came into existence to offer the finest hospitality and an experience of a lifetime." />
        </section>
      </div>
    </>
  );
};

export default Janaki;
