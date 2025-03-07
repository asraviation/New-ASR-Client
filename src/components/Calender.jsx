import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Calendar = ({ onSelectDate }) => {
  // Get current date information
  const today = new Date();
  const currentDay = today.getDate();

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(currentDay);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  // Initialize with current month/year when component mounts
  useEffect(() => {
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
    setSelectedDate(currentDay);
  }, []);

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const handleSelectDate = (day) => {
    setSelectedDate(day);
    // Pass the selected date up to the parent component if the callback exists
    if (onSelectDate) {
      onSelectDate(currentYear, currentMonth, day);
    }
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="w-8 h-8"></div>);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      // Check if this day is today - compare full date including month and year
      const isToday =
        day === today.getDate() &&
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear();

      // Check if this is the selected day
      const isSelected = (day === selectedDate && currentMonth === today.getMonth() && currentYear === today.getFullYear());

      // Check if this is a past day (disabled)
      const isPastDay =
        new Date(currentYear, currentMonth, day) <
        new Date(today.getFullYear(), today.getMonth(), today.getDate());

      days.push(
        <div
          key={day}
          className={`w-8 h-8 flex items-center justify-center text-sm rounded-full transition-all duration-200
            ${isPastDay ? "text-gray-300 cursor-not-allowed" : "cursor-pointer"}
            ${
              isSelected
                ? "bg-yellow-500 text-white shadow-md"
                : isToday
                ? "border border-yellow-400 font-medium hover:bg-yellow-50"
                : "hover:bg-gray-100"
            }`}
          onClick={() => !isPastDay && handleSelectDate(day)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const handlePrevMonth = () => {
    let newMonth, newYear;

    if (currentMonth === 0) {
      newMonth = 11;
      newYear = currentYear - 1;
    } else {
      newMonth = currentMonth - 1;
      newYear = currentYear;
    }

    // Get days in new month to ensure valid date selection
    const daysInNewMonth = getDaysInMonth(newMonth, newYear);

    // If currently selected date is greater than days in new month,
    // adjust selected date to last day of new month
    const newSelectedDate =
      selectedDate > daysInNewMonth ? daysInNewMonth : selectedDate;

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
    setSelectedDate(newSelectedDate);
  };

  const handleNextMonth = () => {
    let newMonth, newYear;

    if (currentMonth === 11) {
      newMonth = 0;
      newYear = currentYear + 1;
    } else {
      newMonth = currentMonth + 1;
      newYear = currentYear;
    }

    // Get days in new month to ensure valid date selection
    const daysInNewMonth = getDaysInMonth(newMonth, newYear);

    // If currently selected date is greater than days in new month,
    // adjust selected date to last day of new month
    const newSelectedDate =
      selectedDate > daysInNewMonth ? daysInNewMonth : selectedDate;

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
    setSelectedDate(newSelectedDate);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100 w-64 transition-all">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrevMonth}
          className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <h2 className="text-base font-medium text-gray-800">
          {months[currentMonth]} {currentYear}
        </h2>
        <button
          onClick={handleNextMonth}
          className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="w-8 h-8 flex items-center justify-center text-xs font-semibold text-gray-500"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">{renderCalendarDays()}</div>

      {/* Selected Date Display */}
      <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-center">
        {selectedDate ? (
          <div className="flex flex-col items-center">
            <div className="text-gray-400 text-xs mb-1">SELECTED DATE</div>
            <div className="text-sm font-medium text-gray-800">
              {months[currentMonth]} {selectedDate}, {currentYear}
            </div>
          </div>
        ) : (
          <span className="text-gray-500">Select a date</span>
        )}
      </div>
    </div>
  );
};

Calendar.propTypes = {
  onSelectDate: PropTypes.func,
};

export default Calendar;
