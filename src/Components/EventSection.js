import React from 'react';
import './EventSection.css';

const events = [
  {
    id: 1,
    title: 'Event 1',
    description: 'Event description goes here. Free.',
  },
  {
    id: 2,
    title: 'Event 2',
    description: 'Event description goes here. Free.',
  }
];

const EventSection = () => {
  return (
    <div className="event-section">
      <h2>Campus Events</h2>
      <div className="event-list">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <div className="event-image">
              {/* Event image placeholder */}
            </div>
            <div className="event-info">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all-button">View All Events</button>
    </div>
  );
};

export default EventSection;
