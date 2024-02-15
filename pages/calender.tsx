// CalendarList.tsx

import React, { useState, useEffect } from 'react';
import calendarEvents from '../src/data/events';

import '../styles/calender.scss'; // Import CSS for styling

interface CalendarEvent {
    id: number;
    title: string;
    date: Date;
    imageUrl: string;
}

const CalendarList: React.FC = () => {
    const [filteredEvents, setFilteredEvents] = useState<CalendarEvent[]>(calendarEvents);
    const [selectedYear, setSelectedYear] = useState<number | null>(2024);
    const [selectedMonth, setSelectedMonth] = useState<number | null>(null);

    const filterEvents = () => {
        let filtered = calendarEvents;

        if (selectedYear !== null) {
            filtered = filtered.filter((event) => event.date.getFullYear() === selectedYear);
        }

        if (selectedMonth !== null) {
            filtered = filtered.filter((event) => event.date.getMonth() === selectedMonth);
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

    useEffect(() => {
        filterEvents();
    }, [selectedYear, selectedMonth]);

    const groupedEventsByMonth = () => {
        const groupedByMonth: { [key: string]: CalendarEvent[] } = {};

        filteredEvents.forEach((event) => {
            const monthKey = event.date.toLocaleString('default', { month: 'long', year: 'numeric' });
            if (!groupedByMonth[monthKey]) {
                groupedByMonth[monthKey] = [];
            }
            groupedByMonth[monthKey].push(event);
        });

        return Object.entries(groupedByMonth).map(([month, events]) => (
            <div key={month}>
                <h2>{month}</h2>
                {/* <div>
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <img src={event.imageUrl} alt="Event Thumbnail" className="event-image" />
              <div className="event-details">
                <h3>{event.title}</h3>
                <p>Date: {event.date.toDateString()}</p>
              </div>
            </div>
          ))}
        </div> */}
                <div className="event-list">
                    {events.map((event) => (
                        <div key={event.id} className="event-card">
                            <div className="event-details">
                                <h3>{event.title}</h3>
                                <p>Date: {event.date.toDateString()}</p>
                            </div>
                            <img src={event.imageUrl} alt="Event Thumbnail" className="event-image" />
                        </div>
                    ))}
                </div>
            </div>
        ));
    };

    return (
        <div className="calendar-container">
            <div className="filter-section">
                <label>Select Year:</label>
                <select value={selectedYear || '0'} onChange={handleYearChange}>
                    <option value="0">All</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </select>
            </div>

            <div className="filter-section">
                <label>Select Month:</label>
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
                    {/* Add more months as needed */}
                </select>
            </div>

            <div className="event-list">{groupedEventsByMonth()}</div>
        </div>
    );
};

export default CalendarList;
