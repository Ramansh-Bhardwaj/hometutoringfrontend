import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import "../assets/styles.css"; // ✅ Ensure styles are applied
import TestimonialSlider from "../components/TestimonialSlider"; // ✅ Ensure this file exists
import API_BASE_URL from "../config"; // ✅ Import API URL



const Home = () => {
  const demoSectionRef = useRef(null);

  // 🔹 State for Testimonials Auto-Slider
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔹 Testimonials Data
  const testimonials = [
    { name: "Amit Sharma", relation: "Father of Riya, Class 10, CBSE", review: "The tutors provided by this platform are excellent! My daughter's confidence and grades improved significantly." },
    { name: "Sunita Verma", relation: "Mother of Aarav, Class 6, ICSE", review: "Finding a tutor who understands my child's learning style was tough, but this platform made it easy." },
    { name: "Rajesh Malhotra", relation: "Father of Kunal, Class 12, CBSE", review: "The home tutor helped my son excel in Physics and Chemistry. His concepts are now rock solid." },
  ];

  // 🔹 Auto-Slide Testimonials Every 5 Seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // 🔹 Scroll to "Book a Demo" Section
  const scrollToDemoSection = () => {
    if (demoSectionRef.current) {
      demoSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 🔹 State to Store Book a Demo Form Data
  const [formData, setFormData] = useState({
    fullName: "",
    classCourse: "",
    board: "",
    mobile: "",
    email: "",
  });

  // 🔹 State for Showing Messages
  const [message, setMessage] = useState("");

  // 🔹 Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Handle Form Submission (API Call)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages

    try {
      console.log("🚀 Sending data to API:", formData); // ✅ Debugging

      // ✅ Send data to API
      const response = await axios.post(`${API_BASE_URL}/api/demo/book`, formData);

      console.log("✅ API Response:", response.data); // ✅ Debugging
      setMessage(response.data.message); // Show success message

      // Reset form after success
      setFormData({ fullName: "", classCourse: "", board: "", mobile: "", email: "" });
    } catch (error) {
      console.error("❌ API Error:", error);
      setMessage(error.response?.data?.error || "Submission failed. Try again.");
    }
  };

  return (
    <>
   
      {/* Hero Section */}
   
      <section className="hero">
        <div className="hero-content">
          <h2>Get the Best Home Tutors for Your Child</h2>
          <p>Professional and personalized tuition for all classes and subjects</p>
          <button className="cta-btn" onClick={scrollToDemoSection}>
            Book a Demo Class
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service">
          <h3>One-on-One Tuition</h3>
          <p>Personalized learning with a dedicated tutor for your child.</p>
        </div>
        <div className="service">
          <h3>Online Classes</h3>
          <p>Convenient and interactive online classes from the comfort of your home.</p>
        </div>
        <div className="service">
          <h3>Group Tuition</h3>
          <p>Collaborative learning with small group sessions.</p>
        </div>
      </section>

      {/* ✅ Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Parents Say</h2>
        <div className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`testimonial ${index === currentIndex ? "active" : ""}`}>
              <p>
                <strong>⭐⭐⭐⭐⭐ {testimonial.name}</strong> ({testimonial.relation})
              </p>
              <p>"{testimonial.review}"</p>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="slider-navigation">
          <span onClick={() => setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
            &#10094;
          </span>
          <span onClick={() => setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
            &#10095;
          </span>
        </div>
      </section>

      {/* ✅ Book a Demo Section */}
      <section className="demo-booking" ref={demoSectionRef}>
        <h3>Book a Demo Class</h3>
        {message && <p className="message">{message}</p>} {/* ✅ Show Success/Error Message */}
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

          <label>Class / Course</label>
          <input type="text" name="classCourse" value={formData.classCourse} onChange={handleChange} required />

          <label>Board</label>
          <select name="board" value={formData.board} onChange={handleChange} required>
            <option value="">Select Board</option>
            <option value="CBSE">CBSE</option>
            <option value="ICSE">ICSE</option>
            <option value="State">State Board</option>
            <option value="IB">IB</option>
          </select>

          <label>Mobile Number</label>
          <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required />

          <label>Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <button type="submit">Book Now</button>
        </form>
      </section>

     
    </>
  );
};

export default Home;
