'use client';
import React, { useState } from 'react';

export default function ContactpageN() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <div>
      <div className="text-center">
        <h4 className="text-4xl">Contact</h4>
        <p className="text-gray-400">
          Feel free to reach out to me for any questions or opportunities!
        </p>
      </div>

      <div className="p-4">
        <div className="max-w-130 p-8 mx-auto rounded-md">
          <form
            className="space-y-4 bg-[#1F2937] p-8 rounded-xl"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full text-white rounded-md py-2.5 px-4 border border-[#9333EA] text-sm outline-0 focus:border-[#9333EA]"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full text-white rounded-md py-2.5 px-4 border border-[#9333EA] text-sm outline-0 focus:border-[#9333EA]"
            />
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full text-white rounded-md py-2.5 px-4 border border-[#9333EA] text-sm outline-0 focus:border-[#9333EA]"
            />
            <textarea
              placeholder="Message"
              rows="6"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full text-white rounded-md px-4 border border-[#9333EA] text-sm pt-2.5 outline-0 focus:border-[#9333EA]"
            ></textarea>


            <button
              type="submit"
              className="text-white bg-[#9333EA] hover:bg-[#A855F7] rounded-md text-sm font-medium px-4 py-2.5 w-full cursor-pointer border-0 mt-2"
            >
              Send
            </button>


          </form>
        </div>
      </div>
    </div>
  );
}
