import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsOfService = () => {
  return (
    <>
  
      <section className="terms-of-service">
        <h2>Terms of Service</h2>
        <p>
          Welcome to Proton Classes! By using our services, you agree to the following terms and conditions.
        </p>

        <div className="tos-section">
          <h3>1. Service Description</h3>
          <p>
            Proton Classes provides home tutoring services for students of all grade levels. Our services include
            one-on-one tuition, group tutoring, and online classes across various subjects and educational boards.
          </p>
        </div>

        <div className="tos-section">
          <h3>2. Booking and Payments</h3>
          <p>
            To book a tutoring session, users must complete the registration form. Payment must be made in advance, 
            and details will be provided upon confirmation.
          </p>
        </div>

        <div className="tos-section">
          <h3>3. Cancellation & Refunds</h3>
          <p>
            Cancellations must be made at least <strong>24 hours</strong> before the scheduled session. Refund eligibility 
            depends on the timing and reason for cancellation.
          </p>
        </div>

        <div className="tos-section">
          <h3>4. Tutor Qualifications</h3>
          <p>
            Our tutors undergo a thorough verification process, but Proton Classes does not guarantee specific academic results.
          </p>
        </div>

        <div className="tos-section">
          <h3>5. Code of Conduct</h3>
          <p>
            Students and tutors are expected to maintain a respectful and professional learning environment. Any misconduct 
            may result in termination of services.
          </p>
        </div>

        <div className="tos-section">
          <h3>6. Limitation of Liability</h3>
          <p>
            Proton Classes is not liable for any damages, including lost learning time, financial loss, or technical disruptions.
          </p>
        </div>

        <div className="tos-section">
          <h3>7. Changes to Terms</h3>
          <p>
            We reserve the right to modify these terms at any time. Changes will be communicated via our website.
          </p>
        </div>
      </section>

    </>
  );
};

export default TermsOfService;
