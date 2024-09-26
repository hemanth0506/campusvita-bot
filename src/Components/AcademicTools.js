import React from 'react';
import './AcademicTools.css';

const AcademicTools = () => {
  return (
    <div className="academic-tools">
      <h2>Academic Tools</h2>
      <div className="tool-buttons">
        <button className="tool-button">
          <i className="icon-schedule" /> Course Schedule
        </button>
        <button className="tool-button">
          <i className="icon-grades" /> Grades
        </button>
        <button className="tool-button">
          <i className="icon-assignments" /> Assignments
        </button>
        <button className="tool-button">
          <i className="icon-exam" /> Exam Schedule
        </button>
      </div>
    </div>
  );
}

export default AcademicTools;
