// events.ts

interface CalendarEvent {
    id: number;
    title: string;
    date: Date;
    imageUrl: string; // Add image Url Field
  }

  const imagePlaceholder = 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg';
  
  const calendarEvents: CalendarEvent[] = [
    { id: 1, title: 'Event 1', date: new Date('2024-01-15'), imageUrl: imagePlaceholder },
    { id: 2, title: 'Event 2', date: new Date('2024-02-20'), imageUrl: imagePlaceholder },
    { id: 3, title: 'Event 3', date: new Date('2024-03-25'), imageUrl: imagePlaceholder },
    { id: 4, title: 'Event 4', date: new Date('2024-04-10'), imageUrl: imagePlaceholder },
    { id: 5, title: 'Event 5', date: new Date('2024-05-05'), imageUrl: imagePlaceholder },
    { id: 6, title: 'Event 6', date: new Date('2024-06-15'), imageUrl: imagePlaceholder },
    { id: 7, title: 'Event 7', date: new Date('2024-07-20'), imageUrl: imagePlaceholder },
    { id: 8, title: 'Event 8', date: new Date('2024-08-25'), imageUrl: imagePlaceholder },
    { id: 9, title: 'Event 9', date: new Date('2024-09-10'), imageUrl: imagePlaceholder },
    { id: 10, title: 'Event 10', date: new Date('2024-10-05'), imageUrl: imagePlaceholder },
    { id: 11, title: 'Event 11', date: new Date('2024-11-15'), imageUrl: imagePlaceholder },
    { id: 12, title: 'Event 12', date: new Date('2024-12-20'), imageUrl: imagePlaceholder },
    { id: 12, title: 'Event 13', date: new Date('2024-12-24'), imageUrl: imagePlaceholder },
    // Add more events as needed
    // Examples for 2025
    { id: 13, title: 'Event 13', date: new Date('2025-01-10'), imageUrl: imagePlaceholder },
    { id: 14, title: 'Event 14', date: new Date('2025-02-15'), imageUrl: imagePlaceholder },
    { id: 15, title: 'Event 15', date: new Date('2025-03-20'), imageUrl: imagePlaceholder },
    { id: 16, title: 'Event 16', date: new Date('2025-04-25'), imageUrl: imagePlaceholder },
    { id: 17, title: 'Event 17', date: new Date('2025-05-10'), imageUrl: imagePlaceholder },
    { id: 18, title: 'Event 18', date: new Date('2025-06-15'), imageUrl: imagePlaceholder },
    { id: 19, title: 'Event 19', date: new Date('2025-07-20'), imageUrl: imagePlaceholder },
    { id: 20, title: 'Event 20', date: new Date('2025-08-25'), imageUrl: imagePlaceholder },
    { id: 21, title: 'Event 21', date: new Date('2025-09-10'), imageUrl: imagePlaceholder },
    { id: 22, title: 'Event 22', date: new Date('2025-10-05'), imageUrl: imagePlaceholder },
    { id: 23, title: 'Event 23', date: new Date('2025-11-15'), imageUrl: imagePlaceholder },
    { id: 24, title: 'Event 24', date: new Date('2025-12-20'), imageUrl: imagePlaceholder },
  ];
  
  export default calendarEvents;
  