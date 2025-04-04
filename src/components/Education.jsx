import React, { useState } from 'react';
import { Eye, EyeOff, Plus, Save, X, Trash2, GraduationCap, ChevronDown, ChevronUp} from 'lucide-react';
import '../styles/Education.css';

function Education({ education, setEducation }) {
  const [expanded, setExpanded] = useState(true);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...education];
    updated[index][name] = value;
    setEducation(updated);
  };

  const handleSave = () => {
    setEditingIndex(null);
  };

  const handleCancel = () => {
    setEditingIndex(null);
  };

  const handleDelete = (index) => {
    const updated = [...education];
    updated.splice(index, 1);
    setEducation(updated);
    setEditingIndex(null);
  };

  const toggleVisibility = (index) => {
    const updated = [...education];
    updated[index].visible = !updated[index].visible;
    setEducation(updated);
  };

  const addNewEducation = () => {
    setEducation([
      ...education,
      {
        degree: '',
        school: '',
        startDate: '',
        endDate: '',
        location: '',
        visible: true,
      },
    ]);
    setEditingIndex(education.length);
  };

  return (
    <div className="educationSection">
      <div className="educationHeader" onClick={() => setExpanded(!expanded)}>
        <h1>Education</h1>
        {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>

      {expanded && (
        <div className="educationContent">
          {education.map((entry, index) => (
            <div key={index} className="educationEntry">
              <div className="entryHeader" onClick={() => setEditingIndex(index)}>
                <strong>{entry.degree || 'Untitled Degree'}</strong>
                <span
                  className="visibilityToggle"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleVisibility(index);
                  }}
                >
                  {entry.visible ? <Eye size={18} /> : <EyeOff size={18} />}
                </span>
              </div>

              {editingIndex === index && (
                <div className="educationForm">
                  <label>Degree</label>
                  <input
                    name="degree"
                    value={entry.degree}
                    onChange={(e) => handleChange(index, e)}
                  />
                  <label>School</label>
                  <input
                    name="school"
                    value={entry.school}
                    onChange={(e) => handleChange(index, e)}
                  />
                  <label>Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    value={entry.startDate}
                    onChange={(e) => handleChange(index, e)}
                  />
                  <label>End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    value={entry.endDate}
                    onChange={(e) => handleChange(index, e)}
                  />
                  <label>Location</label>
                  <input
                    name="location"
                    value={entry.location}
                    onChange={(e) => handleChange(index, e)}
                  />
                  <div className="formActions">
                    <button className="iconButton" onClick={handleSave}><Save size={16} /></button>
                    <button className="iconButton" onClick={handleCancel}><X size={16} /></button>
                    <button className="iconButton" onClick={() => handleDelete(index)}><Trash2 size={16} /></button>
                  </div>
                </div>
              )}
            </div>
          ))}
          <button onClick={addNewEducation} className="addButton">
            <Plus size={18} /> Add New Education
          </button>
        </div>
      )}
    </div>
  );
}

export default Education;