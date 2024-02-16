// events.ts

interface CalendarEvent {
  id: number;
  title: string;
  date: Date;
  imageUrl: string;
  state?: string; // Add state property
}

const imagePlaceholder = 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg';

const calendarEvents: CalendarEvent[] = [
  { id: 1, title: 'Event 1', date: new Date('2024-01-15'), imageUrl: imagePlaceholder, state: 'Berlin' },
  { id: 2, title: 'Event 2', date: new Date('2024-02-20'), imageUrl: imagePlaceholder, state: 'Hamburg' },
  { id: 3, title: 'Event 3', date: new Date('2024-03-25'), imageUrl: imagePlaceholder, state: 'Berlin' },
  { id: 4, title: 'Event 4', date: new Date('2024-04-10'), imageUrl: imagePlaceholder, state: 'Hamburg' },
  { id: 5, title: 'Event 5', date: new Date('2024-05-05'), imageUrl: imagePlaceholder, state: 'Berlin' },
  { id: 6, title: 'Event 6', date: new Date('2024-06-15'), imageUrl: imagePlaceholder, state: 'Hamburg' },
  { id: 7, title: 'Event 7', date: new Date('2024-07-20'), imageUrl: imagePlaceholder, state: 'Berlin' },
  { id: 8, title: 'Event 8', date: new Date('2024-08-25'), imageUrl: imagePlaceholder, state: 'Hamburg' },
  { id: 9, title: 'Event 9', date: new Date('2024-09-10'), imageUrl: imagePlaceholder, state: 'Berlin' },
  { id: 10, title: 'Event 10', date: new Date('2024-10-05'), imageUrl: imagePlaceholder, state: 'Hamburg' },
  { id: 11, title: 'Event 11', date: new Date('2024-11-15'), imageUrl: imagePlaceholder, state: 'Berlin' },
  { id: 12, title: 'Event 12', date: new Date('2024-12-20'), imageUrl: imagePlaceholder, state: 'Hamburg' },
  // Add more events as needed
  // Examples for 2025
  { id: 13, title: 'Event 13', date: new Date('2025-01-10'), imageUrl: imagePlaceholder, state: 'Berlin' },
  { id: 14, title: 'Event 14', date: new Date('2025-02-15'), imageUrl: imagePlaceholder, state: 'Hamburg' },
  { id: 15, title: 'Event 15', date: new Date('2025-03-20'), imageUrl: imagePlaceholder, state: 'Berlin' },
  { id: 16, title: 'Event 16', date: new Date('2025-04-25'), imageUrl: imagePlaceholder, state: 'Hamburg' },
  { id: 17, title: 'Event 17', date: new Date('2025-05-10'), imageUrl: imagePlaceholder, state: 'Berlin' },
  { id: 18, title: 'Event 18', date: new Date('2025-06-15'), imageUrl: imagePlaceholder, state: 'Hamburg' },
  { id: 19, title: 'Event 19', date: new Date('2025-07-20'), imageUrl: imagePlaceholder, state: 'Berlin' },
  { id: 20, title: 'Event 20', date: new Date('2025-08-25'), imageUrl: imagePlaceholder, state: 'Hamburg' },
  { id: 21, title: 'Event 21', date: new Date('2025-09-10'), imageUrl: imagePlaceholder, state: 'Berlin' },
  { id: 22, title: 'Event 22', date: new Date('2025-10-05'), imageUrl: imagePlaceholder, state: 'Hamburg' },
  { id: 23, title: 'Event 23', date: new Date('2025-11-15'), imageUrl: imagePlaceholder, state: 'Berlin' },
  { id: 24, title: 'Event 24', date: new Date('2025-12-20'), imageUrl: imagePlaceholder, state: 'Hamburg' },
  // more events for testing
  { id: 25, title: 'Event 25', date: new Date('2024-04-05'), imageUrl: imagePlaceholder, state: 'Berlin' },
  { id: 26, title: 'Event 26', date: new Date('2024-04-15'), imageUrl: imagePlaceholder, state: 'Hamburg' },
  { id: 27, title: 'Event 27', date: new Date('2024-04-25'), imageUrl: imagePlaceholder, state: 'Berlin' },
  { id: 28, title: 'Event 28', date: new Date('2024-05-05'), imageUrl: imagePlaceholder, state: 'Hamburg' },
  { id: 29, title: 'Event 29', date: new Date('2024-05-15'), imageUrl: imagePlaceholder, state: 'Berlin' },
  { id: 30, title: 'Event 30', date: new Date('2024-05-25'), imageUrl: imagePlaceholder, state: 'Hamburg' },
  { id: 31, title: 'Event 31', date: new Date('2024-06-05'), imageUrl: imagePlaceholder, state: 'Berlin' },
  { id: 32, title: 'Event 32', date: new Date('2024-06-15'), imageUrl: imagePlaceholder, state: 'Hamburg' },
  { id: 33, title: 'Event 33', date: new Date('2024-06-25'), imageUrl: imagePlaceholder, state: 'Berlin' },
  { id: 34, title: 'Event 34', date: new Date('2024-07-05'), imageUrl: imagePlaceholder, state: 'Hamburg' },
  { id: 35, title: 'Event 35', date: new Date('2024-07-15'), imageUrl: imagePlaceholder, state: 'Berlin' },
  { id: 36, title: 'Event 36', date: new Date('2024-07-25'), imageUrl: imagePlaceholder, state: 'Hamburg' },
  { id: 37, title: 'Event 37', date: new Date('2024-08-05'), imageUrl: imagePlaceholder, state: 'Berlin' },
  { id: 38, title: 'Event 38', date: new Date('2024-08-15'), imageUrl: imagePlaceholder, state: 'Hamburg' },
  { id: 39, title: 'Event 39', date: new Date('2024-08-25'), imageUrl: imagePlaceholder, state: 'Berlin' },
  { id: 40, title: 'Event 40', date: new Date('2024-09-05'), imageUrl: imagePlaceholder, state: 'Hamburg' },
  { id: 41, title: 'Event 41', date: new Date('2024-09-15'), imageUrl: imagePlaceholder, state: 'Berlin' },
  { id: 42, title: 'Event 42', date: new Date('2024-09-25'), imageUrl: imagePlaceholder, state: 'Hamburg' },
  { id: 43, title: 'Event 43', date: new Date('2024-10-05'), imageUrl: imagePlaceholder, state: 'Berlin' },
  { id: 44, title: 'Event 44', date: new Date('2024-10-15'), imageUrl: imagePlaceholder, state: 'Hamburg' },
  // ... (remaining events for 2024)
  // Examples for 2025
  { id: 45, title: 'Event 45', date: new Date('2025-01-05'), imageUrl: imagePlaceholder, state: 'Berlin' },
  { id: 46, title: 'Event 46', date: new Date('2025-01-15'), imageUrl: imagePlaceholder, state: 'Hamburg' },
  { id: 47, title: 'Event 47', date: new Date('2025-01-25'), imageUrl: imagePlaceholder, state: 'Berlin' },
  { id: 48, title: 'Event 48', date: new Date('2025-02-05'), imageUrl: imagePlaceholder, state: 'Hamburg' },
  { id: 49, title: 'Event 49', date: new Date('2025-02-15'), imageUrl: imagePlaceholder, state: 'Berlin' },
  { id: 50, title: 'Event 50', date: new Date('2025-02-25'), imageUrl: imagePlaceholder, state: 'Hamburg' },
  { id: 51, title: 'Event 51', date: new Date('2025-03-05'), imageUrl: imagePlaceholder, state: 'Berlin' },
];
  
  export default calendarEvents;
  