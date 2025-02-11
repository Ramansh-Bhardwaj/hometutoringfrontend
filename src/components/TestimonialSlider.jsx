import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Amit Sharma",
    relation: "Father of Riya, Class 10, CBSE",
    feedback: "The tutors provided by this platform are excellent! My daughter's confidence and grades improved significantly.",
  },
  {
    name: "Sunita Verma",
    relation: "Mother of Aarav, Class 6, ICSE",
    feedback: "Finding a tutor who understands my child's learning style was tough, but this platform made it easy.",
  },
  {
    name: "Rajesh Malhotra",
    relation: "Father of Kunal, Class 12, CBSE",
    feedback: "The home tutor helped my son excel in Physics and Chemistry. His concepts are now rock solid.",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials">
      <h2>What Our Parents Say</h2>
      <div className="testimonial">
        <p><strong>⭐⭐⭐⭐⭐ {testimonials[currentIndex].name}</strong> ({testimonials[currentIndex].relation})</p>
        <p>"{testimonials[currentIndex].feedback}"</p>
      </div>
      <div className="slider-navigation">
        <button onClick={() => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}>
          ❮
        </button>
        <button onClick={() => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}>
          ❯
        </button>
      </div>
    </section>
  );
};

export default TestimonialSlider;
