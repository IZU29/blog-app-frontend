import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default styles

const DiaryCalendar = () => {

    const [date, setDate] = useState(new Date());
  
    return (
      <div className="p-4 bg-white rounded-xl shadow-md max-w-md mx-auto">
        <Calendar
          onChange={setDate}
          value={date}
        />
        <div className="mt-4 text-center text-gray-700">
          Selected Date: <strong>{date.toDateString()}</strong>
        </div>
      </div>
    );
  };
  
  export default DiaryCalendar;