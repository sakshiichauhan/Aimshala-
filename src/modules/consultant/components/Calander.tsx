// import { useState } from 'react';

// const timeSlots = {
//     today: {
//         morning: ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM'],
//         afternoon: ['12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM'],
//         evening: ['06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM'],
//     },
//     tomorrow: {
//         morning: ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM'],
//         afternoon: ['12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM'],
//         evening: ['06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM'],
//     },
// };

// const Calander = () => {
//     const [selectedDate, setSelectedDate] = useState<string>('today');
//     const [selectedTime, setSelectedTime] = useState('');

//     const handleTimeSelect = (time: string) => {
//         setSelectedTime(time);
//     };

//     const handleDateChange = (date: string) => {
//         setSelectedDate(date);
//         setSelectedTime(''); // Reset selected time when date changes
//     };

//     return (
//         <div className="p-4">
//             <h2 className="text-lg font-semibold mb-4">Pick Date and Time for Business Address Verification</h2>
//             <div className="flex justify-between mb-4">
//                 <button
//                     className={`text-purple-600 ${selectedDate === 'today' ? 'font-bold' : ''}`}
//                     onClick={() => handleDateChange('today')}
//                 >
//                     Today
//                 </button>
//                 <button
//                     className={`text-green-600 ${selectedDate === 'tomorrow' ? 'font-bold' : ''}`}
//                     onClick={() => handleDateChange('tomorrow')}
//                 >
//                     Tomorrow
//                 </button>
//             </div>
//             <div>
//                 {Object.entries(timeSlots[selectedDate]).map(([period, slots]) => (
//                     <div key={period} className="mb-4">
//                         <h3 className="font-medium">{period.charAt(0).toUpperCase() + period.slice(1)} ({slots.length} slot{slots.length > 1 ? 's' : ''})</h3>
//                         <div className="flex flex-wrap">
//                             {slots.map((time) => (
//                                 <button
//                                     key={time}
//                                     className={`m-1 border rounded-md px-3 py-1 ${selectedTime === time ? 'bg-purple-600 text-white' : 'bg-white text-purple-600'}`}
//                                     onClick={() => handleTimeSelect(time)}
//                                 >
//                                     {time}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className="flex justify-between mt-6">
//                 <button className="bg-gray-300 text-black px-4 py-2 rounded">Back</button>
//                 <button className="bg-purple-600 text-white px-4 py-2 rounded" disabled={!selectedTime}>
//                     Next
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Calander;
