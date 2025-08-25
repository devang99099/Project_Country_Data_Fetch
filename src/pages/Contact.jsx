import React from "react";

const handleFormSubmit = (formData) => {
  const formInputData = Object.fromEntries(formData.entries());
  console.log(formInputData);
};

const Contact = () => {
  return (
    <section className="min-h-screen bg-black text-white px-4 py-20">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-[700] mb-10">Contact Us</h2>
        <form className="space-y-8" action={handleFormSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className="w-full p-3 border border-gray-600 bg-transparent rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="w-full p-3 border border-gray-600 bg-transparent rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
            required
          />
          <textarea
            rows="10"
            name="message"
            placeholder="Enter Your Message"
            className="w-full p-3 border border-gray-600 bg-transparent rounded focus:outline-none focus:ring-1 focus:ring-gray-400 resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full py-2 bg-transparent border border-gray-600 rounded-xl hover:bg-white hover:text-black transition duration-200"
          >
            SEND
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
