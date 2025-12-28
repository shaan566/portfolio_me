import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaCheckCircle } from "react-icons/fa";
import emailjs from "@emailjs/browser";


export default function Contact() {
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject:""
  });

  const sendEmail = async (data) => {
  try {
    const templateParams = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      time: new Date().toLocaleString()
    };

 

    const response = await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,   // ✅ service id
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // ✅ template id
  templateParams,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // ✅ public key
);
// console.log("SERVICE:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
// console.log("TEMPLATE:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
// console.log("PUBLIC:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);


     console.log("Email sent successfully:", response);
    return true;
  } catch (error) {
    console.error("Email sending failed:", error);
    return false;
  }
};

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  // console.log("kuc bbhi")

  // console.log("Form Data:", formData);

  const isSent = await sendEmail(formData);

  if (isSent) {
    setShowModal(true);

    // reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } else {
    alert("Failed to send email. Please try again.");
  }
};


  return (
    <section id="contact" className="pt-28 pb-16 bg-black  text-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-400 mb-4">Contact Me</h2>
          {/* <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div> */}
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SIDE: Address & Contact Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-white">Let's Connect</h3>
              <p className="text-gray-400 text-lg">
                I am interested in freelance opportunities and full-time roles. Let's build something amazing together.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-gray-900 flex items-center justify-center rounded-xl border border-gray-700 text-blue-500">
                  <FaEnvelope size={22} />
                </div>
                <div>
                  <h4 className="text-gray-500 text-sm uppercase tracking-wider">Email Me</h4>
                  <p className="text-xl font-medium">workingshaan@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-gray-900 flex items-center justify-center rounded-xl border border-gray-700 text-blue-500">
                  <FaPhoneAlt size={22} />
                </div>
                <div>
                  <h4 className="text-gray-500 text-sm uppercase tracking-wider">Call Me</h4>
                  <p className="text-xl font-medium">+(91) 9917715105</p>
                </div>
              </div>

              {/* <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-gray-900 flex items-center justify-center rounded-xl border border-gray-700 text-blue-500">
                  <FaMapMarkerAlt size={22} />
                </div>
                <div>
                  <h4 className="text-gray-500 text-sm uppercase tracking-wider">My Office</h4>
                  <p className="text-xl font-medium">Dehradun, Uttarakhand, India</p>
                </div>
              </div> */}
            </div>
          </div>

          {/* RIGHT SIDE: Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-900 p-10 rounded-3xl border border-gray-800 shadow-2xl space-y-6  hover:-translate-y-3  hover:border-blue-500 hover:shadow-blue-500/50"
          >
            <div className="grid grid-cols-1 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:border-blue-500 outline-none transition-all"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:border-blue-500 outline-none transition-all"
                required
              />
               <input
                type="subject"
                name="subject"
                placeholder="Subject..."
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:border-blue-500 outline-none transition-all"
                required
              />
              <textarea
                name="message"
                placeholder="How can I help you?"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-black border border-gray-700 focus:border-blue-500 outline-none transition-all resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-900/20 transition-all transform hover:-translate-y-1"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          ></div>
          
          {/* Modal Card */}
          <div className="relative bg-gray-900 border border-gray-700 p-8 rounded-3xl max-w-sm w-full text-center shadow-3xl animate-in zoom-in duration-300">
            <div className="w-20 h-20 bg-green-500/10 text-green-500 mx-auto flex items-center justify-center rounded-full mb-6">
              <FaCheckCircle size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
            <p className="text-gray-400 mb-8">
              Thank you for reaching out, Shaan will get back to you shortly.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors"
            >
              Awesome
            </button>
          </div>
        </div>
      )}
    </section>
  );
}