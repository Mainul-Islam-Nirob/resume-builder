import React from 'react';
import '../styles/PersonalDetails.css';

function PersonalDetails({ personalDetails, onChange, onPhotoChange }) {
  return (
    <form className="personalDetails">
      <h3>Personal Details</h3>

      <label htmlFor="full-name">Full Name</label>
      <input
        type="text"
        id="full-name"
        name="fullName"
        value={personalDetails.fullName}
        onChange={onChange}
        placeholder="Enter your full name"
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={personalDetails.email}
        onChange={onChange}
        placeholder="Enter your email"
        required
      />

      <label htmlFor="phone-number">Phone Number</label>
      <input
        type="tel"
        id="phone-number"
        name="phoneNumber"
        value={personalDetails.phoneNumber}
        onChange={onChange}
        placeholder="Enter your phone number"
        required
      />

      <label htmlFor="address">Address</label>
      <input
        id="address"
        name="address"
        value={personalDetails.address}
        onChange={onChange}
        placeholder="Enter your address"
        required
      />

      <label htmlFor="summary">Summary</label>
      <textarea
        id="summary"
        name="summary"
        value={personalDetails.summary}
        onChange={onChange}
        placeholder="Write a brief personal summary"
      ></textarea>

      <label htmlFor="photo">Photo</label>
      <input
        type="file"
        id="photo"
        name="photo"
        onChange={onPhotoChange}
        accept="image/*"
      />
    </form>
  );
}

export default PersonalDetails;
