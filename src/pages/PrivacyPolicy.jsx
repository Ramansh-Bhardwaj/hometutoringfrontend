import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      
      <section className="privacy-policy">
        <h2>Privacy Policy</h2>
        <p>
          At Proton Classes, we value your privacy. This Privacy Policy outlines the types of personal information that we collect and how we use it.
        </p>

        <h3>Information We Collect</h3>
        <p>We collect personal information from you when you register on our website, book a demo class, or use other services offered. This includes:</p>
        <ul>
          <li>Full Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Class/Course and Board Details</li>
        </ul>

        <h3>How We Use Your Information</h3>
        <p>The information we collect is used to provide and improve our services, including:</p>
        <ul>
          <li>Processing class bookings</li>
          <li>Sending confirmation emails or SMS</li>
          <li>Providing customer support</li>
        </ul>

        <h3>Data Protection</h3>
        <p>We take reasonable precautions to protect your personal information from unauthorized access, loss, or misuse.</p>

        <h3>Sharing Your Information</h3>
        <p>We do not sell, trade, or share your personal information with third parties except in the following cases:</p>
        <ul>
          <li>To comply with legal obligations</li>
          <li>With trusted service providers who help us deliver services</li>
        </ul>

        <h3>Your Rights</h3>
        <p>You have the right to access, correct, or delete your personal information at any time. Contact us to update your data.</p>
      </section>

    </>
  );
};

export default PrivacyPolicy;
