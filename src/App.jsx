import './App.css';
import React, { useState } from 'react';
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
  });

  return (
    <div className="app">
      <div className="controller">
        <Controller />
      </div>
      <div className="left">
        <FormContainer formData={formData} setFormData={setFormData} />
      </div>
     <div className="right">
      <Preview personalDetails={formData.personalDetails} />
    </div>
    </div>
  );
}

export default App;