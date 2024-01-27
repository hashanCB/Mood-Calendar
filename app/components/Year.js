import React from "react";

const Calendar = () => {
  const year = 2024;

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

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();
  console.log(new Date(2024, 1, 1).getDay());
  const renderedCalendar = [];

  for (let monthIndex = 0; monthIndex < months.length; monthIndex++) {
    const monthName = months[monthIndex];
    const daysCount = daysInMonth(monthIndex, year);
    const firstDay = getFirstDayOfMonth(monthIndex, year);

    const renderedDays = [];

    // Add empty cells for the days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      renderedDays.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    for (let day = 1; day <= daysCount; day++) {
      renderedDays.push(
        <div
          key={day}
          className="day bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
        >
          {day}
        </div>
      );
    }

    renderedCalendar.push(
      <div key={monthIndex} className="month mb-8">
        <h2 className="text-2xl font-bold mb-4">{monthName}</h2>
        <div className="grid grid-cols-7 gap-2">
          <div className="col-span-7 grid grid-cols-7 gap-2">
            <div className="text-center text-gray-500">Mon</div>
            <div className="text-center text-gray-500">Tue</div>
            <div className="text-center text-gray-500">Wed</div>
            <div className="text-center text-gray-500">Thu</div>
            <div className="text-center text-gray-500">Fri</div>
            <div className="text-center text-gray-500">Sat</div>
            <div className="text-center text-gray-500">Sun</div>
          </div>
          {renderedDays}
        </div>
      </div>
    );
  }

  return <div className="calendar">{renderedCalendar}</div>;
};

export default Calendar;
