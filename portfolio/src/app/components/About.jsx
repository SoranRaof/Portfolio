import React from "react";

export default function About() {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex md:flex-row flex-col items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8"></div>
      <div className="col-span-2">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          About
        </p>
        <h2 className="py-4">Who I Am</h2>
        <p className="py-2 text-gray-600">
          I am a Full Stack Developer that has been studying diligently in my
          spare time, and recently completed the Northcoders Software
          Development Bootcamp, which has equipped me with valuable skills and
          knowledge in the field. This pursuit was driven by a strong desire to
          explore my passion for technology and create a meaningful impact
          through coding.
        </p>
        <p className="py-2 text-gray-600">
          By embarking on this career change and investing time and effort into
          learning Software Development, I have demonstrated my unwavering
          commitment. It showcases my ability to adapt, learn new skills,
          effectively organise my time, and embrace challenges head-on.
        </p>
        <p className="py-2 text-[#5651e5] underline cursor-pointer">
          View my projects here
        </p>
      </div>
      {/* <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1516101922849-2bf0be616449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80"
            alt="placeholder"
          />
        </div> */}
    </div>
  );
}
