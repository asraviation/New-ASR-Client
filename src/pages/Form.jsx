import React, { useState } from "react";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="my-20 font-sans font-thin max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="font-sans text-5xl mb-10">Drop Your Charter Query!</h1>
      </div>

      {/* Charter Query Form */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="flex flex-col space-y-4">
          <input type="text" placeholder="From *" className="input-field" required />
          <input type="text" placeholder="To *" className="input-field" required />
          <input type="date" placeholder="Journey Date *" className="input-field" required />
          <input type="time" placeholder="Time *" className="input-field" required />
          <input type="number" placeholder="No. of Pax *" className="input-field" required />
          <input type="text" placeholder="Name *" className="input-field" required />
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-4">
          <input type="tel" placeholder="Phone (WhatsApp) *" className="input-field" required />
          <input type="email" placeholder="Email *" className="input-field" required />
          <textarea placeholder="Any Special Requirements" rows="5" className="input-field"></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 text-center mt-4">
          <button type="submit" className="bg-yellow-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-yellow-600 transition">
            SUBMIT
          </button>
        </div>
      </form>

      {/* Thank You Pop-Up */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p>Your submission has been received. We'll get back to you soon.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Tailwind Styles for Inputs */}
      <style jsx>{`
        .input-field {
          border: 1px solid #e0e0e0;
          padding: 12px;
          border-radius: 6px;
          font-size: 14px;
          width: 100%;
          background-color: #f9f9f9;
        }
        .input-field:focus {
          outline: none;
          border-color: #000;
          background-color: white;
        }
      `}</style>
    </section>
  );
};

export default Form;
