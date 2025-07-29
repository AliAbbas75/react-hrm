import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default function Calendar() {
  return (
    <FullCalendar
  plugins={[ dayGridPlugin ]}
  initialView="dayGridMonth"
  weekends={true}
  events={[
    { title: 'Meeting 1', date: '2025-07-01' },
    { title: 'Meeting 2', date: '2025-07-02' }
  ]}
/>
  )
}