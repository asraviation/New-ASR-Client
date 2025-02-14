import React, { useState } from "react";

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section className="my-20 font-sans font-thin">
      <div className="text-center mb-12">
        <h1 className="font-sans text-center text-5xl mb-10">CONTACT US</h1>
        <p className="text-xl text-black mb-10">
          Reach out to us with your queries or requests, and our team will get
          back to you promptly.
        </p>
      </div>

      {/* Embed Google Form */}
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSc-_vBk69T_KyKpVnhVpseTdtrXw7HT7wSFpDYJb7cdP5dOpA/viewform?usp=dialog"
        width="640"
        height="1500"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Contact Us Form"
      >
        Loading…
      </iframe>

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

export default ContactUs;
