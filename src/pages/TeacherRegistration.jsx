import React, { useState } from "react";
import Footer from "../components/Footer";
import axios from "axios"; // ✅ Import Axios
import API_BASE_URL from "../config"; // ✅ Import API URL

const TeacherRegistration = () => {
  // 🔹 State for Form Data
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    experience: "",
    contact: "",
    qualification: "",
  });

  // 🔹 State for Messages
  const [message, setMessage] = useState("");

  // 🔹 Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages

    try {
      console.log("🚀 Sending data to API:", formData); // ✅ Debugging

      const response = await axios.post(
        `${API_BASE_URL}/api/teachers/register`, // ✅ Uses Render backend URL
        formData
      );

      console.log("✅ API Response:", response.data); // ✅ Debugging
      setMessage(response.data.message || "Registration successful!");

      // ✅ Reset form only if registration is successful
      setFormData({
        fullName: "",
        subject: "",
        experience: "",
        contact: "",
        qualification: "",
      });
    } catch (error) {
      console.error("❌ API Error:", error); // ✅ Debugging
      console.error("❌ Error Response:", error.response); // ✅ Debugging

      setMessage(error.response?.data?.error || "Registration failed. Try again.");
    }
  };

  return (
    <>
      <section className="teacher-registration">
        <div className="registration-container">
          <h2>Teacher Registration</h2>
          {message && <p className="message">{message}</p>}
          <form className="registration-form" onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <label>Subject Expertise</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <label>Teaching Experience (in years)</label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
            />

            <label>Phone Number</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />

            <label>Qualification</label>
            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              required
            />

            <button type="submit">Register</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default TeacherRegistration;
