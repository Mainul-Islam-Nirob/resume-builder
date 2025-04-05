import React from 'react';
import { Download, Trash2, FilePlus, FileUser, Sliders, Github } from 'lucide-react';
import '../styles/Controller.css';

function Controller({handleDownload}) {
  return (
    <div className="controller-container">
      <h1 className="controller-title"><FileUser strokeWidth={3} /> Resume <br /> Generator</h1>

      <button className="controller-button load-btn">
        <FilePlus size={18} /> Example
      </button>

      <button className="controller-button clear-btn">
        <Trash2 size={18} /> Clear
      </button>

      <button className="controller-button download-btn" onClick={handleDownload}>
        <Download size={18} /> Download
      </button>

      <button className="controller-button customize-btn">
        <Sliders size={18} /> Customize
      </button>

      <a
        className="controller-link"
        href="https://github.com/Mainul-Islam-Nirob"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github size={18} /> <span>Mainul Islam</span>
      </a>
    </div>
  );
}

export default Controller;