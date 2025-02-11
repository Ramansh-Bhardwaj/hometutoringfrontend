import React from "react";
import Footer from "../components/Footer"; // ✅ Navbar removed, only Footer remains

const About = () => {
  return (
    <>
      {/* About Us Section */}
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          At Proton Classes, we believe that every student deserves personalized and high-quality education to unlock their full potential.
          We offer expert home and online tutoring for students from Class 1 to 12, covering all subjects, all boards (CBSE, ICSE, IB, State Boards, etc.),
          competitive exams, language learning, and fine arts.
        </p>

        <h3>What We Offer?</h3>
        <ul>
          <li>✅ <strong>School Curriculum Support:</strong> All subjects for Class 1 to 12 across various educational boards.</li>
          <li>✅ <strong>Competitive Exam Preparation:</strong> IIT-JEE, NEET, NTSE, CUET, NDA, and more.</li>
          <li>✅ <strong>Language Learning:</strong> English, Hindi, French, German, Sanskrit, and other regional/international languages.</li>
          <li>✅ <strong>Fine Arts & Creative Learning:</strong> Drawing, Painting, Music, Dance, and Craft classes.</li>
          <li>✅ <strong>Flexible Learning Options:</strong> Choose between in-person or online tutoring as per your convenience.</li>
          <li>✅ <strong>Personalized Approach:</strong> One-on-one or small-group classes tailored to the student’s learning style.</li>
          <li>✅ <strong>Free Demo Class:</strong> Experience our teaching quality before making a commitment.</li>
        </ul>

        <p>
          At Proton Classes, we are committed to making learning engaging, effective, and result-driven.
        </p>

        <h3>📞 Contact us today to book a free demo class and give your child the best learning experience from the comfort of home!</h3>
      </section>

      
    </>
  );
};

export default About;
