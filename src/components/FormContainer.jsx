import React from 'react';
import PersonalDetails from './PersonalDetails'; // Example Form Component
import Education from './Education';

function FormContainer({ formData, setFormData }) {
  const handlePersonalDetailsChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      personalDetails: {
        ...prevData.personalDetails,
        [name]: value,
      },
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      personalDetails: {
        ...prevData.personalDetails,
        photo: file,
      },
    }));
  };

  const setEducation = (educationData) => {
    setFormData((prevData) => ({
      ...prevData,
      education: educationData,
    }));
  };

  return (
    <div className="form-container">
      <PersonalDetails
        personalDetails={formData.personalDetails}
        onChange={handlePersonalDetailsChange}
        onPhotoChange={handlePhotoChange}
      />
      <Education
        education={formData.education}
        setEducation={setEducation}
      />
    </div>
  );
}


export default FormContainer;