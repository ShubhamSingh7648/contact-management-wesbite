import React, { useState } from 'react';

const ContactForm = ({ onSubmit, loading }) => {
  // Store all form values in one state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });



  // Store validation error messages
  const [errors, setErrors] = useState({});

  // Validate form inputs before submitting
  const validateForm = () => {
    const tempErrors = {};


    // Name validation
    if (formData.name.trim() === '') {
      tempErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      tempErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (formData.email.trim() === '') {
      tempErrors.email = 'Email is required';
    } else if (!formData.email.includes('@')) {
      tempErrors.email = 'Please enter a valid email';

    }


    // Phone validation
    const phoneOnlyNumbers = formData.phone.replace(/\D/g, '');
    if (formData.phone.trim() === '') {
      tempErrors.phone = 'Phone number is required';
    } else if (phoneOnlyNumbers.length < 10) {
      tempErrors.phone = 'Phone number must be at least 10 digits';
    }


    // Update error state
    setErrors(tempErrors);

    // If no errors, form is valid
    return Object.keys(tempErrors).length === 0;
  };

  // Update form data when user types
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((oldData) => ({
      ...oldData,
      [name]: value
    }));


    // Remove error message when user starts correcting input
    if (errors[name]) {
      setErrors((oldErrors) => ({
        ...oldErrors,
        [name]: ''
      }));
    }
  };
  

  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit only if validation passes
    if (validateForm()) {
      onSubmit(formData);

      // Clear form after successful submit
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      setErrors({});
    }
  };

  // Check basic required fields
  const isFormFilled =
    formData.name && formData.email && formData.phone;

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
      <h2 className="text-2xl font-bold mb-6">Add New Contact</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Name Input */}
        <div>
          <label className="block mb-1">Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            placeholder="Enter name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name}</p>
          )}
        </div>

        {/* Email Input */}
        <div>
          <label className="block mb-1">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            placeholder="example@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Phone Input */}
        <div>
          <label className="block mb-1">Phone *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            placeholder="1234567890"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>

        {/* Message Input */}
        <div>
          <label className="block mb-1">Message (optional)</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            rows="4"
            placeholder="Write something..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isFormFilled || loading}
          className={`w-full py-2 rounded text-white ${
            !isFormFilled || loading
              ? 'bg-gray-400'
              : 'bg-purple-600 hover:bg-purple-700'
          }`}
        >
          {loading ? 'Submitting...' : 'Add Contact'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
