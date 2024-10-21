import React, { useState } from 'react';
import { 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  eachDayOfInterval, 
  format, 
  subMonths, 
  addMonths, 
  isSameDay, 
  isSameMonth 
} from 'date-fns';

interface ICustomCalendar {
  selectedDate: Date | string;
  onSelect: (date: Date) => void;
}

const CustomCalendar = ({ selectedDate, onSelect }: ICustomCalendar) => {
  const [currentDate, setCurrentDate] = useState<Date>(selectedDate instanceof Date ? selectedDate : new Date());
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);

  const handleCurrentDay = (day: Date) => {
    setSelectedDay(day);
    onSelect(day); 
  };

  const showCalendar = (date: Date) => {
    const firstDayOfMonth = startOfMonth(date);
    const lastDayOfMonth = endOfMonth(date);
    const start = startOfWeek(firstDayOfMonth);
    const end = endOfWeek(lastDayOfMonth);

    const days = eachDayOfInterval({ start, end });

    return (
      <div className="p-[14px] dark:bg-gray-800 rounded-lg bg-orangeWhite">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between w-full pb-[14px] border-b border-whiteGray-20">
            <button
              aria-label="calendar backward"
              className="focus:text-gray-400 hover:text-gray-400 text-whiteGray-0 dark:text-gray-100"
              onClick={() => setCurrentDate(prevDate => subMonths(prevDate, 1))}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="15 6 9 12 15 18" />
              </svg>
            </button>
            <span className="focus:outline-none text-[16px] text-whiteGray-0 font-medium leading-[19px] dark:text-gray-100 text-gray-800">
              {format(date, 'MMMM yyyy')}
            </span>
            <button
              aria-label="calendar forward"
              className="focus:text-gray-400 hover:text-gray-400 ml-3 text-whiteGray-0 dark:text-gray-100"
              onClick={() => setCurrentDate(prevDate => addMonths(prevDate, 1))}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between overflow-x-auto pt-[14px]">
          <table className="w-full">
            <thead className='text-whiteGray-50 text-[14px] font-medium'>
              <tr>
                {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => (
                  <th key={day}>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">{day}</p>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: Math.ceil(days.length / 7) }).map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {days.slice(rowIndex * 7, rowIndex * 7 + 7).map((day, cellIndex) => (
                    <td key={cellIndex} onClick={() => handleCurrentDay(day)}>
                      <div
                        className={`px-2 py-2 cursor-pointer flex w-full justify-center ${
                          selectedDay && isSameDay(day, selectedDay) ? 'bg-black text-white' : ''
                        } ${
                          !isSameMonth(day, currentDate) ? 'text-whiteGray-60' : 'text-whiteGray-0'
                        }`}
                      >
                        <p className="text-[14px] font-normal leading-[18px]">{format(day, 'd')}</p>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return showCalendar(currentDate);
};

export default CustomCalendar;