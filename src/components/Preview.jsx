import React from 'react';

function Preview({ personalDetails, education }) {
  return (
    <div className="preview">
      <h2>Resume Preview</h2>
      <p><strong>Full Name:</strong> {personalDetails.fullName || 'N/A'}</p>
      <p><strong>Email:</strong> {personalDetails.email || 'N/A'}</p>
      <p><strong>Phone Number:</strong> {personalDetails.phoneNumber || 'N/A'}</p>
      <p><strong>Address:</strong> {personalDetails.address || 'N/A'}</p>
      <p><strong>Summary:</strong> {personalDetails.summary || 'N/A'}</p>
      {personalDetails.photo && (
        <div>
          <strong>Photo:</strong>
          <img
            src={URL.createObjectURL(personalDetails.photo)}
            alt="Preview"
            style={{ width: '100px', height: '100px', borderRadius: '8px' }}
          />
        </div>
      )}

      <h3>Education</h3>
      {education.filter((edu) => edu.visible).map((edu, index) => (
        <div key={index} className="education-preview">
          <p><strong>{edu.degree}</strong> at {edu.school}</p>
          <p>{edu.startDate} - {edu.endDate}, {edu.location}</p>
        </div>
      ))}
    </div>
  );
}

export default Preview;