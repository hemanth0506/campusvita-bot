/*************  ✨ Codeium Command 🌟  *************/
import React from 'react';
import { Link } from 'react-router-dom';
import './AcademicTools.css';

const AcademicTools = () => {
  return (
    <div className="academic-tools">
      <h2>Academic Tools</h2>
      <div className="tool-buttons">
        <Link to="/course-schedule">
          <button className="tool-button">
            <i className="icon-schedule" /> Course Schedule
          </button>
        </Link>
        <Link to="/grades">
          <button className="tool-button">
            <i className="icon-grades" /> Grades
          </button>
        </Link>
        <Link to="/assignments">
          <button className="tool-button">
            <i className="icon-assignments" /> Assignments
          </button>
        </Link>
        <Link to="/exam-schedule">
          <button className="tool-button">
            <i className="icon-exam" /> Exam Schedule
          </button>
        </Link>
       
      </div>
    </div>
  );
}

export default AcademicTools;

/******  85f8d657-5234-467e-b307-aeae941f0a91  *******/