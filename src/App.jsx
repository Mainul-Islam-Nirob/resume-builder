import './App.css';
import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import Controller from './components/Controller';
import FormContainer from './components/FormContainer';
import Preview from './components/Preview';

function App() {
  const [formData, setFormData] = useState({
    personalDetails: {
      fullName: '',
      email: '',
      phoneNumber: '',
      address: '',
      summary: '',
      photo: null,
    },
    education: [],
    experience: [],
  });

  const previewRef = useRef();
  const handleDownload = () => {
    const element = previewRef.current;
    const opt = {
      margin:       0.2,
      filename:     'resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="app">
      <div className="controller">
        <Controller handleDownload={handleDownload} />
      </div>
      <div className="left">
        <FormContainer formData={formData} setFormData={setFormData} />
      </div>
     <div className="right">
      <Preview ref={previewRef} personalDetails={formData.personalDetails} education = {formData.education}  experience = {formData.experience} />
    </div>
    </div>
  );
}

export default App;