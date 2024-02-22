import React, { useState, useEffect } from 'react';
import calendarEvents from '../src/data/events';
import MobileInner from '../src/components/Banner/MobileInner';
import '../styles/components/calender.scss';
import FullBanner from '../src/components/Banner/FullBanner';
import Select, { ValueType } from 'react-select'; // Import react-select
import { OptionTypeBase } from 'react-select/src/types';

interface CalendarEvent {
  id: number;
  title: string;
  date: Date;
  imageUrl: string;
  state?: string;
  isMobileComponent?: boolean;
}

const stateOptions = [
  { value: '0', label: 'All' },
  { value: 'Berlin', label: 'Berlin' },
  { value: 'Hamburg', label: 'Hamburg' },
  { value: 'Baden-Württemberg', label: 'Baden-Württemberg' },
  { value: 'Bavaria', label: 'Bavaria' },
  { value: 'Brandenburg', label: 'Brandenburg' },
  { value: 'Bremen', label: 'Bremen' },
  { value: 'Hesse', label: 'Hesse' },
  { value: 'Lower Saxony', label: 'Lower Saxony' },
  { value: 'Mecklenburg-Vorpommern', label: 'Mecklenburg-Vorpommern' },
  { value: 'North Rhine-Westphalia', label: 'North Rhine-Westphalia' },
  { value: 'Rhineland-Palatinate', label: 'Rhineland-Palatinate' },
  { value: 'Saarland', label: 'Saarland' },
  { value: 'Saxony', label: 'Saxony' },
  { value: 'Saxony-Anhalt', label: 'Saxony-Anhalt' },
  { value: 'Schleswig-Holstein', label: 'Schleswig-Holstein' },
  { value: 'Thuringia', label: 'Thuringia' },
];

const CalendarList: React.FC = () => {
  const [filteredEvents, setFilteredEvents] = useState<CalendarEvent[]>(calendarEvents);
  const [selectedYear, setSelectedYear] = useState<number | null>(2024);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const [selectedState, setSelectedState] = useState<ValueType<OptionTypeBase, false>>(null);
  const [isClient, setIsClient] = useState(false);

  const filterEvents = () => {
    let filtered = calendarEvents;

    if (selectedYear !== null) {
      filtered = filtered.filter((event) => event.date.getFullYear() === selectedYear);
    }

    if (selectedMonth !== null) {
      filtered = filtered.filter((event) => event.date.getMonth() === selectedMonth);
    }

    if (selectedState !== null && selectedState.value !== '0') {
      filtered = filtered.filter((event) => event.state === selectedState.value);
    }

    setFilteredEvents(filtered);
  };

  const handleYearChange = (selectedOption: ValueType<OptionTypeBase, false>) => {
    setSelectedYear(selectedOption?.value === '0' ? null : parseInt(selectedOption?.value || '0', 10));
  };

  const handleMonthChange = (selectedOption: ValueType<OptionTypeBase, false>) => {
    setSelectedMonth(selectedOption?.value === '0' ? null : parseInt(selectedOption?.value || '0', 10) - 1);
  };

  const handleStateChange = (selectedOption: ValueType<OptionTypeBase, false>) => {
    setSelectedState(selectedOption);
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
        <Select
          options={[
            { value: '0', label: 'All' },
            { value: '2024', label: '2024' },
            { value: '2025', label: '2025' },
          ]}
          value={{ value: selectedYear ? selectedYear.toString() : '0', label: selectedYear ? selectedYear.toString() : 'All' }}
          onChange={handleYearChange}
        />
      </div>

      <div className="filter-section" style={{ display: 'grid' }}>
        <label>Monat:</label>
        <Select
          options={[
            { value: '0', label: 'All' },
            { value: '1', label: 'January' },
            { value: '2', label: 'February' },
            { value: '3', label: 'March' },
            { value: '4', label: 'April' },
            { value: '5', label: 'May' },
            { value: '6', label: 'June' },
            { value: '7', label: 'July' },
            { value: '8', label: 'August' },
            { value: '9', label: 'September' },
            { value: '10', label: 'October' },
            { value: '11', label: 'November' },
            { value: '12', label: 'December' },
          ]}
          value={{ value: selectedMonth !== null ? (selectedMonth + 1).toString() : '0', label: selectedMonth !== null ? (selectedMonth + 1).toString() : 'All' }}
          onChange={handleMonthChange}
        />
      </div>

      <div className="filter-section" style={{ display: 'grid' }}>
        <label>Bundesland:</label>
        <Select
          options={stateOptions}
          value={selectedState}
          onChange={handleStateChange}
        />
      </div>

      {isClient && (
        <div className="event-list">{groupedEventsByMonth()}</div>
      )}
    </div>
  );
};

export default CalendarList;
