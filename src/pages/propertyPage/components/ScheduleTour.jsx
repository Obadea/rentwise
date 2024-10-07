// src/ScheduleTour.js
import React, { useState } from "react";

const ScheduleTour = () => {
  const daysToShow = 5;
  const totalDays = 14; // Total days to show (current + next 13 days)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null); // State for the selected date
  const currentDate = new Date();

  const formatDate = (date) => {
    return date.toLocaleDateString(); // Customize as needed
  };

  const renderDates = () => {
    const dates = [];
    for (let i = 0; i < daysToShow; i++) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() + currentIndex + i);
      if (date >= currentDate) {
        dates.push(date); // Store Date objects
      }
    }
    return dates;
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - daysToShow, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + daysToShow, totalDays - daysToShow)
    );
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    console.log("Selected Date:", formatDate(date)); // You can replace this with any action
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handlePrev}
        className="px-4 py-2 bg-blue-500 text-white rounded-l hover:bg-blue-600 mb-2"
        disabled={currentIndex === 0}
      >
        ←
      </button>
      <div className="flex overflow-hidden mx-4">
        {renderDates().map((date, index) => (
          <div
            key={index}
            className={`min-w-[100px] p-2 border border-gray-300 rounded mx-1 text-center cursor-pointer 
                        ${
                          selectedDate &&
                          selectedDate.toDateString() === date.toDateString()
                            ? "bg-blue-200"
                            : ""
                        }`}
            onClick={() => handleDateClick(date)}
          >
            {formatDate(date)}
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 mb-2"
        disabled={currentIndex >= totalDays - daysToShow}
      >
        →
      </button>
      {selectedDate && (
        <div className="mt-4">
          <p className="text-lg">Selected Date: {formatDate(selectedDate)}</p>
        </div>
      )}
    </div>
  );
};

export default ScheduleTour;
