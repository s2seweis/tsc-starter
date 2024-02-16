// CalendarList.tsx
import React, { useState, useEffect } from 'react';
import calendarEvents from '../src/data/events';
import MobileInner from '../src/components/Banner/MobileInner';
import '../styles/components/calender.scss';
import FullBanner from '../src/components/Banner/FullBanner';

interface CalendarEvent {
  id: number;
  title: string;
  date: Date;
  imageUrl: string;
  state?: string; // Add state property
  isMobileComponent?:boolean;
  
}

const CalendarList: React.FC = () => {
  const [filteredEvents, setFilteredEvents] = useState<CalendarEvent[]>(calendarEvents);
  const [selectedYear, setSelectedYear] = useState<number | null>(2024);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  const filterEvents = () => {
    let filtered = calendarEvents;

    if (selectedYear !== null) {
      filtered = filtered.filter((event) => event.date.getFullYear() === selectedYear);
    }

    if (selectedMonth !== null) {
      filtered = filtered.filter((event) => event.date.getMonth() === selectedMonth);
    }

    if (selectedState !== null) {
      filtered = filtered.filter((event) => event.state === selectedState);
    }

    setFilteredEvents(filtered);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const year = parseInt(event.target.value, 10);
    setSelectedYear(year === 0 ? null : year);
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const month = parseInt(event.target.value, 10);
    setSelectedMonth(month === 0 ? null : month - 1);
  };

  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const state = event.target.value;
    setSelectedState(state === '0' ? null : state);
  };

  useEffect(() => {
    filterEvents();
  }, [selectedYear, selectedMonth, selectedState]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const groupedEventsByMonth = () => {
    const groupedByMonth: { [key: string]: CalendarEvent[] } = {};
    let eventCounter = 0;

    filteredEvents.forEach((event) => {
      const monthKey = event.date.toLocaleString('default', { month: 'long', year: 'numeric' });
      if (!groupedByMonth[monthKey]) {
        groupedByMonth[monthKey] = [];
      }

      if (eventCounter % 15 === 0 && eventCounter !== 0) {
        groupedByMonth[monthKey].push({ isMobileComponent: true } as CalendarEvent);
      }

      groupedByMonth[monthKey].push(event);
      eventCounter += 1;
    });

    return Object.entries(groupedByMonth).map(([month, events]) => (
      <div key={month}>
        <h2>{month}</h2>
        <div className="event-list">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              {event.isMobileComponent ? (
                <MobileInner key={`mobile-component-${index}`} />
              ) : (
                <>
                  <div className="event-details">
                    <h3>{event.title}</h3>
                    <h5>{event.state}</h5>
                    <p>Date: {event.date.toDateString()}</p>
                  </div>
                  <img src={event.imageUrl} alt="Event Thumbnail" className="event-image" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className="calendar-container">
      <FullBanner/>
      <div className="filter-section" style={{ display: 'grid' }}>
        <label>Jahr:</label>
        <select value={selectedYear || '0'} onChange={handleYearChange}>
          <option value="0">All</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>

      <div className="filter-section" style={{ display: 'grid' }}>
        <label>Monat:</label>
        <select value={selectedMonth !== null ? String(selectedMonth + 1) : '0'} onChange={handleMonthChange}>
          <option value="0">All</option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>

      <div className="filter-section" style={{ display: 'grid' }}>
        <label>Bundesland:</label>
        <select value={selectedState || '0'} onChange={handleStateChange}>
          <option value="0">All</option>
          <option value="Berlin">Berlin</option>
          <option value="Hamburg">Hamburg</option>
          {/* Add more states as needed */}
        </select>
      </div>

      {isClient && (
        <div className="event-list">{groupedEventsByMonth()}</div>
      )}
    </div>
  );
};

export default CalendarList;
