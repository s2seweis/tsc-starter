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
    // more events for testing
    { id: 25, title: 'Event 25', date: new Date('2024-04-05'), imageUrl: imagePlaceholder },
{ id: 26, title: 'Event 26', date: new Date('2024-04-15'), imageUrl: imagePlaceholder },
{ id: 27, title: 'Event 27', date: new Date('2024-04-25'), imageUrl: imagePlaceholder },
{ id: 28, title: 'Event 28', date: new Date('2024-05-05'), imageUrl: imagePlaceholder },
{ id: 29, title: 'Event 29', date: new Date('2024-05-15'), imageUrl: imagePlaceholder },
{ id: 30, title: 'Event 30', date: new Date('2024-05-25'), imageUrl: imagePlaceholder },
{ id: 31, title: 'Event 31', date: new Date('2024-06-05'), imageUrl: imagePlaceholder },
{ id: 32, title: 'Event 32', date: new Date('2024-06-15'), imageUrl: imagePlaceholder },
{ id: 33, title: 'Event 33', date: new Date('2024-06-25'), imageUrl: imagePlaceholder },
{ id: 34, title: 'Event 34', date: new Date('2024-07-05'), imageUrl: imagePlaceholder },
{ id: 35, title: 'Event 35', date: new Date('2024-07-15'), imageUrl: imagePlaceholder },
{ id: 36, title: 'Event 36', date: new Date('2024-07-25'), imageUrl: imagePlaceholder },
{ id: 37, title: 'Event 37', date: new Date('2024-08-05'), imageUrl: imagePlaceholder },
{ id: 38, title: 'Event 38', date: new Date('2024-08-15'), imageUrl: imagePlaceholder },
{ id: 39, title: 'Event 39', date: new Date('2024-08-25'), imageUrl: imagePlaceholder },
{ id: 40, title: 'Event 40', date: new Date('2024-09-05'), imageUrl: imagePlaceholder },
{ id: 41, title: 'Event 41', date: new Date('2024-09-15'), imageUrl: imagePlaceholder },
{ id: 42, title: 'Event 42', date: new Date('2024-09-25'), imageUrl: imagePlaceholder },
{ id: 43, title: 'Event 43', date: new Date('2024-10-05'), imageUrl: imagePlaceholder },
{ id: 44, title: 'Event 44', date: new Date('2024-10-15'), imageUrl: imagePlaceholder },
// ... (remaining events for 2024)
// Examples for 2025
{ id: 45, title: 'Event 45', date: new Date('2025-01-05'), imageUrl: imagePlaceholder },
{ id: 46, title: 'Event 46', date: new Date('2025-01-15'), imageUrl: imagePlaceholder },
{ id: 47, title: 'Event 47', date: new Date('2025-01-25'), imageUrl: imagePlaceholder },
{ id: 48, title: 'Event 48', date: new Date('2025-02-05'), imageUrl: imagePlaceholder },
{ id: 49, title: 'Event 49', date: new Date('2025-02-15'), imageUrl: imagePlaceholder },
{ id: 50, title: 'Event 50', date: new Date('2025-02-25'), imageUrl: imagePlaceholder },
{ id: 51, title: 'Event 51', date: new Date('2025-03-05'), imageUrl: imagePlaceholder },
{ id: 52, title: 'Event 52', date: new Date('2025-03-15'), imageUrl: imagePlaceholder },
{ id: 53, title: 'Event 53', date: new Date('2025-03-25'), imageUrl: imagePlaceholder },
{ id: 54, title: 'Event 54', date: new Date('2025-04-05'), imageUrl: imagePlaceholder },
{ id: 55, title: 'Event 55', date: new Date('2025-04-15'), imageUrl: imagePlaceholder },
{ id: 56, title: 'Event 56', date: new Date('2025-04-25'), imageUrl: imagePlaceholder },
{ id: 57, title: 'Event 57', date: new Date('2025-05-05'), imageUrl: imagePlaceholder },
{ id: 58, title: 'Event 58', date: new Date('2025-05-15'), imageUrl: imagePlaceholder },
{ id: 59, title: 'Event 59', date: new Date('2025-05-25'), imageUrl: imagePlaceholder },
{ id: 60, title: 'Event 60', date: new Date('2025-06-05'), imageUrl: imagePlaceholder },
{ id: 61, title: 'Event 61', date: new Date('2025-06-15'), imageUrl: imagePlaceholder },
{ id: 62, title: 'Event 62', date: new Date('2025-06-25'), imageUrl: imagePlaceholder },
{ id: 63, title: 'Event 63', date: new Date('2025-07-05'), imageUrl: imagePlaceholder },
{ id: 64, title: 'Event 64', date: new Date('2025-07-15'), imageUrl: imagePlaceholder },
];
  
  export default calendarEvents;
  