import React from "react";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <>
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-container">
          <div className="service">
            <h3>One-on-One Tuition</h3>
            <p>Personalized learning with a dedicated tutor.</p>
          </div>
          <div className="service">
            <h3>Online Classes</h3>
            <p>Convenient and interactive online classes.</p>
          </div>
          <div className="service">
            <h3>Group Tuition</h3>
            <p>Collaborative learning with small group sessions.</p>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Services;
