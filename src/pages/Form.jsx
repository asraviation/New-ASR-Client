import React, { useState } from "react";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section className="my-20 font-sans font-thin">
      <div className="text-center mb-12">
        <h1 className="font-sans text-center text-5xl mb-10">Drop Your Charter Query!</h1>
      </div>

      {/* Embed Google Form */}
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdmM95ilBrE6sOGfRsQu7A7Fau0qJH2ImwUGa3CgXZzQe0v6A/viewform?embedded=true" width="640" height="1961" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

      {/* Thank You Pop-Up */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p>
              Your submission has been received. We'll get back to you soon.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Form;