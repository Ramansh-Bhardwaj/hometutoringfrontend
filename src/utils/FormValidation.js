export const validateForm = (formData) => {
    let errors = {};
  
    if (!formData.fullName.trim()) errors.fullName = "Full Name is required";
    if (!formData.subjectExpertise.trim()) errors.subjectExpertise = "Subject Expertise is required";
    if (!formData.experience.trim()) errors.experience = "Experience is required";
    if (!/^\d{10}$/.test(formData.contact)) errors.contact = "Invalid phone number";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Invalid email address";
  
    return errors;
  };
  
  // ✅ Add this function for "Book a Demo" validation
  export const validateDemoForm = (formData) => {
    let errors = {};
  
    if (!formData.fullName.trim()) errors.fullName = "Full Name is required";
    if (!formData.classCourse.trim()) errors.classCourse = "Class/Course is required";
    if (!formData.board.trim()) errors.board = "Board selection is required";
    if (!/^\d{10}$/.test(formData.mobile)) errors.mobile = "Invalid phone number";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Invalid email address";
  
    return errors;
  };
  