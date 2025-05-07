import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Separator } from '@/components/ui/separator';

const localizer = momentLocalizer(moment);

export default function Calender() {
    const [events, setEvents] = useState([
        {
            title: 'Appointment with Ceo',
            start: new Date(),
            end: moment().add(1, 'hours').toDate(),
        }
    ]);

    const handleSelectSlot = ({ start, end }) => {
        const title = window.prompt('New Event name');
        if (title) {
            setEvents([
                ...events,
                {
                    title,
                    start,
                    end,
                }
            ]);
        }
    };

    return (
        <div className='border rounded-2xl p-4 mt-20 font-poppins'>
            <div className="flex items-center gap-2 w-full ">
                <h2 className="text-[24px] whitespace-nowrap">Upcoming Sessions</h2>
                <Separator className="bg-[#FFCB07] flex-1" />
            </div>
            <div className='' style={{ height: '500px', marginTop: '50px' }}>
                <Calendar
                    className=''
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    defaultView="month"
                    selectable
                    onSelectSlot={handleSelectSlot}
                    onSelectEvent={event => alert(event.title)}
                />
            </div>
        </div>
    );
}