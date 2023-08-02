"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

export const Contact = () => {
  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name: event.target?.name?.value,
      email: event.target?.email?.value,
      subject: event.target?.subject?.value,
      message: event.target?.message?.value,
    };

    console.log(data);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Message Sent Successfully");
    } else if (!response.ok) {
      alert("Error Sending Message");
    }
  }

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651ef]">
          Contact
        </p>
        <h2 className="py4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8 ">
          {/* LEFT */}
          <div className="col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl"
                  src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-4">Soran Raof</h2>
                <p>Full Stack Developer</p>
                <br></br>
                <p>
                  I'm available for full-time positions. Feel free to contact
                  me.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 text-[#5651ef]">Contact Me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a
                      href="http://linkedin.com/in/soran-raof-3a142726b"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a
                      href="http://www.github.com/SoranRaof"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      minLength={3}
                      max={150}
                      required
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      autoComplete="off"
                      id="name"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    minLength={5}
                    maxLength={150}
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    autoComplete="off"
                    id="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    required
                    name="subject"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label
                    className="uppercase text-sm py-2"
                    htmlFor="Message"
                    type="text"
                  >
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    required
                    maxLength={500}
                    rows={10}
                    name="message"
                  ></textarea>
                </div>
                <button
                  className="w-full p-4 text-gray-100 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff]"
                  // type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={25} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
