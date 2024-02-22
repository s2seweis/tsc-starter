import React, { useState, useEffect } from 'react';
import calendarEvents from '../src/data/events';
import MobileInner from '../src/components/Banner/MobileInner';
import '../styles/components/calender.scss';
import FullBanner from '../src/components/Banner/FullBanner';
import Select, { ActionMeta, OptionTypeBase, ValueType } from 'react-select';

interface CalendarEvent {
  id: number;
  title: string;
  date: Date;
  imageUrl: string;
  state?: string;
  isMobileComponent?: boolean;
}

const stateOptions = [
  { value: '', label: 'Alle' }, // 'All' is represented by an empty string
  { value: 'Baden-Württemberg', label: 'Baden-Württemberg' },
  { value: 'Bayern', label: 'Bayern' },
  { value: 'Berlin', label: 'Berlin' },
  { value: 'Brandenburg', label: 'Brandenburg' },
  { value: 'Bremen', label: 'Bremen' },
  { value: 'Hamburg', label: 'Hamburg' },
  { value: 'Hessen', label: 'Hessen' },
  { value: 'Mecklenburg-Vorpommern', label: 'Mecklenburg-Vorpommern' },
  { value: 'Niedersachsen', label: 'Niedersachsen' },
  { value: 'Nordrhein-Westfalen', label: 'Nordrhein-Westfalen' },
  { value: 'Rheinland-Pfalz', label: 'Rheinland-Pfalz' },
  { value: 'Saarland', label: 'Saarland' },
  { value: 'Sachsen', label: 'Sachsen' },
  { value: 'Sachsen-Anhalt', label: 'Sachsen-Anhalt' },
  { value: 'Schleswig-Holstein', label: 'Schleswig-Holstein' },
  { value: 'Thüringen', label: 'Thüringen' },
];

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

    if (selectedState !== null && selectedState !== '') {
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

  const handleStateChange = (selectedOption: ValueType<OptionTypeBase>, actionMeta: ActionMeta<OptionTypeBase>) => {
    const state = selectedOption ? (selectedOption as { value: string }).value : null;
    setSelectedState(state);
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
      <FullBanner />
      <div className="filter-section" style={{ display: 'grid' }}>
        <label>Jahr:</label>
        <select value={selectedYear || '0'} onChange={handleYearChange}>
          <option value="0">Alle</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>

      <div className="filter-section" style={{ display: 'grid' }}>
        <label>Monat:</label>
        <select value={selectedMonth !== null ? String(selectedMonth + 1) : '0'} onChange={handleMonthChange}>
          <option value="0">Alle</option>
          <option value="1">Januar</option>
          <option value="2">Februar</option>
          <option value="3">März</option>
          <option value="4">April</option>
          <option value="5">Mai</option>
          <option value="6">Juni</option>
          <option value="7">Juli</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">Oktober</option>
          <option value="11">November</option>
          <option value="12">Dezember</option>
        </select>
      </div>

      <div className="filter-section" style={{ display: 'grid' }}>
        <label>Bundesland:</label>
        <Select
          options={stateOptions}
          value={stateOptions.find((option) => option.value === selectedState)}
          onChange={handleStateChange}
        />
      </div>

      {isClient && <div className="event-list">{groupedEventsByMonth()}</div>}
    </div>
  );
};

export default CalendarList;
