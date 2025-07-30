import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { SquareCheckBigIcon } from 'lucide-react'

export default function Calendar() {
    const today = new Date().toDateString()
    return (
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            weekends={true}
            dayCellClassNames={(arg) => {
                const isWeekend = [0, 6].includes(arg.date.getDay())
                return isWeekend ? "bg-emerald-100 text-green-800 font-semibold" : ""
            }}
            dayCellContent={(arg) => {
                const isToday = arg.date.toDateString() === new Date().toDateString()
                return (
                    <div className="flex items-center justify-center gap-1 w-full h-full">
                        {arg.dayNumberText}
                        {isToday && (
                            <span className="text-emerald-800">
                                <SquareCheckBigIcon className="w-4 h-4" />
                            </span>
                        )}
                    </div>
                )
            }}
            dayCellDidMount={(arg) => {
                const isToday = arg.date.toDateString() === new Date().toDateString()
                if (isToday) {
                    // Apply class directly to the cell's background container
                    arg.el.style.backgroundColor = "#83c5be" // Tailwind's blue-400
                }
            }}
                events = {
                    [
                    { title: 'Meeting 1', date: '2025-07-01' },
                    { title: 'Meeting 2', date: '2025-07-02' },

                    {
                        date: "2025-02-05",
                        title: "Kashmir Solidarity Day"
                    },
                    {
                        date: "2025-03-23",
                        title: "Pakistan Day"
                    },
                    {
                        date: "2025-04-01",
                        title: "Eid-ul-Fitr (Tentative)"
                    },
                    {
                        date: "2025-04-02",
                        title: "Eid-ul-Fitr Holiday (Tentative)"
                    },
                    {
                        date: "2025-04-03",
                        title: "Eid-ul-Fitr Holiday (Tentative)"
                    },
                    {
                        date: "2025-05-01",
                        title: "Labour Day"
                    },
                    {
                        date: "2025-06-07",
                        title: "Eid-ul-Adha (Tentative)"
                    },
                    {
                        date: "2025-06-08",
                        title: "Eid-ul-Adha Holiday (Tentative)"
                    },
                    {
                        date: "2025-06-09",
                        title: "Eid-ul-Adha Holiday (Tentative)"
                    },
                    {
                        date: "2025-06-27",
                        title: "Ashura (9th Muharram, Tentative)"
                    },
                    {
                        date: "2025-06-28",
                        title: "Ashura (10th Muharram, Tentative)"
                    },
                    {
                        date: "2025-08-14",
                        title: "Independence Day"
                    },
                    {
                        date: "2025-09-16",
                        title: "Eid Milad-un-Nabi (Tentative)"
                    },
                    {
                        date: "2025-11-09",
                        title: "Iqbal Day"
                    },
                    {
                        date: "2025-12-25",
                        title: "Quaid-e-Azam Day / Christmas"
                    },
                    {
                        date: "2025-12-26",
                        title: "Day after Christmas (for Christians)"
                    }

                    ]}
                    />
    )
            }