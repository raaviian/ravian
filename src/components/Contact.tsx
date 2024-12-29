import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="p-10 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center">Get in Touch</h2>
      <form className="mt-8 max-w-lg mx-auto grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input type="text" className="w-full mt-1 p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" className="w-full mt-1 p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea className="w-full mt-1 p-2 border rounded" rows={5}></textarea>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
