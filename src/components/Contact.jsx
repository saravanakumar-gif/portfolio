import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  console.log("ENV TEST:", process.env.REACT_APP_WEB3_FORM_API);

const handleSubmit = async (event) => {
  event.preventDefault();
  setIsSubmitting(true);
  setResult("");

  const accessKey = process.env.REACT_APP_WEB3_FORM_API;
  console.log("WEB3 KEY:", accessKey);

  if (!accessKey) {
    setResult("API key missing ❌");
    setIsSubmitting(false);
    return;
  }

  const formData = new FormData(event.target);
  formData.append("access_key", accessKey);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log("Web3Forms:", data);

    if (data.success) {
      setResult("Message sent successfully ✅");
      event.target.reset();
    } else {
      setResult(data.message || "Failed ❌");
    }
  } catch {
    setResult("Network error ❌");
  } finally {
    setIsSubmitting(false);
  }
};



  return (
     <section
      id="contact"
      className="bg-[#0f0f0f] text-white min-h-screen flex items-center justify-center"
    >
      <div className="max-w-[90%] md:max-w-[75%] mx-auto space-y-12 py-16">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          Get in Touch
        </h2>

        <div className="flex flex-col md:flex-row gap-20 justify-center items-start">

          {/* LEFT INFO */}
          <div className="space-y-6 text-lg font-medium">
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-[#fe5617]" />
              <span>Salem, Tamil Nadu, India</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#fe5617]" />
              <span>+91 6383533003</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#fe5617]" />
              <span>saravana904218@gmail.com</span>
            </div>

            <div className="pt-6">
              <h3 className="font-bold mb-4 text-white">Follow Me</h3>
              <div className="flex gap-6 text-2xl">
                <a href="https://github.com/saravanakumar-gif" target="_blank" rel="noreferrer"
                  className="hover:text-[#fe5617] hover:scale-110 transition">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/saravanakumar-p-125684295/" target="_blank" rel="noreferrer"
                  className="hover:text-[#fe5617] hover:scale-110 transition">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/soul_king_0010" target="_blank" rel="noreferrer"
                  className="hover:text-[#fe5617] hover:scale-110 transition">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 w-full max-w-md"
          >
            <h3 className="text-2xl font-bold text-center text-[#fe5617]">
              Send Message
            </h3>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="bg-gray-800 border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:border-[#fe5617] transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="bg-gray-800 border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:border-[#fe5617] transition"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="bg-gray-800 border border-gray-700 rounded-md p-3 h-32 text-white focus:outline-none focus:border-[#fe5617] transition"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#fe5617] text-white py-3 rounded-md font-semibold hover:opacity-90 transition disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {result && (
              <p className={`text-center ${isSuccess ? "text-green-500" : "text-red-500"}`}>
                {result}
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;