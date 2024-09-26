/*************  ✨ Codeium Command 🌟  *************/
import React from 'react';
import './App.css';
import AcademicTools from './Components/AcademicTools';
import EventSection from './Components/EventSection';
import image from './image.png';

function App() {
  return (
    <div className="App">
      <header>
        <h1>CampusVita Bot - Academics & Events</h1>
        <div className="welcome-video">
          <p>Welcome to CampusVita Bot</p>
          
          <img src={image} alt="Image Not Found" />
          
        </div>
      </header>

      <section>
        <AcademicTools />
      </section>

      <section>
        <EventSection />
      </section>

      <footer>
        <nav className="footer-nav">
          <button>Home</button>
          <button>Academics</button>
          <button>Events</button>
          <button>Settings</button>
        </nav>
      </footer>
    </div>
  );
}

export default App;

/******  97f1aaaa-7d24-4e34-9649-52fdfe7ebb08  *******/