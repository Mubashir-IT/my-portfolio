import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaCommentDots, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) return toast.error("Please Enter Your Name");
    if (!email) return toast.error("Please Enter Your Email Address");
    if (!message) return toast.error("Please Share your Message");

    const templateParams = {
      user_name: name,
      user_email: email,
      message: message,
    };

    emailjs
      .send(
       "service_99s7owh",
        "template_01s2ycm",
        templateParams,
        "IN_SXb2VXO1JMfxUc"
       
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setName("");
        setEmail("");
        
        setMessage("");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        toast.error("Failed to send message. Please try again.");
      });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 px-4 py-12 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white bg-opacity-30 backdrop-blur-lg rounded-2xl shadow-xl border border-white/40 p-6 md:p-10">

        {/* Left Side – Info Content */}
        <div className="text-gray-800 space-y-6">
          <h2 className="text-3xl font-bold text-blue-700">Let's Connect</h2>
          <p className="text-gray-700">
            I'm actively looking for opportunities to grow, collaborate, and contribute to real-world projects.
    <br />Feel free to reach out through this form or my contact info below, <br />
           if you’d like to connect or have any suggestions!
          </p>

          <div className="space-y-4 text-sm">
            <p className="flex items-center gap-3 text-gray-700">
              <FaEnvelope className="text-blue-600" /> mubashirali9323@gmail.com
            </p>
            <p className="flex items-center gap-3 text-gray-700">
              <FaPhone className="text-blue-600" /> +92 328 9323307
            </p>
            <p className="flex items-center gap-3 text-gray-700">
              <FaMapMarkerAlt className="text-blue-600" /> Multan, Pakistan
            </p>
          </div>
        </div>

        {/* Right Side – Form */}
        <div className="bg-white bg-opacity-40 backdrop-blur-xl p-6 rounded-xl shadow-md border border-white/30">
          <h3 className="text-2xl font-semibold text-center mb-6 text-gray-900">Get in Touch</h3>

          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            <div>
              <label className="flex items-center gap-2 mb-1 text-gray-700 font-medium">
                <FaUser className="text-blue-600" /> Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-white bg-opacity-60 border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 mb-1 text-gray-700 font-medium">
                <FaEnvelope className="text-blue-600" /> Email
              </label>
              <input
                type="email"
                name="email"
                required
                 value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-white bg-opacity-60 border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 mb-1 text-gray-700 font-medium">
                <FaCommentDots className="text-blue-600" /> Message
              </label>
              <textarea
                name="message"
                required
                rows="4"
               value={message}
              onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-white bg-opacity-60 border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Write something..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg font-medium shadow hover:scale-105 transition-transform"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
