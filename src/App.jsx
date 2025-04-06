import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import html2pdf from 'html2pdf.js';
import Controller from './components/Controller';
import FormContainer from './components/FormContainer';
import Preview from './components/Preview';

function App() {
  const sampleData = {
    personalDetails: {
      fullName: 'Nirob Chowdhury',
      email: 'nirbo.chowdhury@dummy.com',
      phoneNumber: '+880123-456-7891',
      address: 'Shibchar, Madaripur, BD',
      summary: 'Experienced web developer with a strong background in frontend and backend development.',
      photo: 'default-photo.png',
    },
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        school: 'University of Example',
        startDate: '2016',
        endDate: '2020',
        location: 'Example City',
        visible: true
      },
      {
        degree: 'Bachelor of Science in Computer Science',
        school: 'University of Example',
        startDate: '2016',
        endDate: '2020',
        location: 'Example City',
        visible: true
      }
    ],
    experience: [
      {
        title: 'Frontend Developer',
        company: 'Tech Solutions Inc.',
        startDate: '2020',
        endDate: '2023',
        location: 'Remote',
        description: 'Worked on scalable React applications and integrated APIs.',
        visible: true
      },
      {
        title: 'Frontend Developer',
        company: 'Tech Solutions Inc.',
        startDate: '2020',
        endDate: '2023',
        location: 'Remote',
        description: 'Worked on scalable React applications and integrated APIs.',
        visible: true
      }

    ]
  };

  const [formData, setFormData] = useState(sampleData);

  useEffect(() => {
    handleLoadExample(); 
  }, []);
  

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

  const handleLoadExample = () => {
    setFormData(sampleData);
  };

  const handleClear = () => {
    setFormData({
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
  };

  return (
    <div className="app">
      <div className="controller">
        <Controller 
          handleDownload={handleDownload} 
          handleLoadExample={handleLoadExample}
          handleClear={handleClear}          
        />
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