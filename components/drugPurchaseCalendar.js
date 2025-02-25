import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format, differenceInDays } from 'date-fns';
import drugData from "../drugData"

function DrugPurchaseCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [drug, setDrug] = useState(""); // Default drug

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const findClosestPurchaseDate = (drugName, selectedDate) => {
    if (!selectedDate) return null;
    const cheapestDates = drugData[drugName];

    // Calculate which cheapest date is closest to the selected date
    let closestDate = cheapestDates[0];
    let minDiff = differenceInDays(new Date(selectedDate), new Date(cheapestDates[0]));

    cheapestDates.forEach((date) => {
      const diff = differenceInDays(new Date(selectedDate), new Date(date));
      if (Math.abs(diff) < Math.abs(minDiff)) {
        closestDate = date;
        minDiff = diff;
      }
    });

    return closestDate;
  };

  const closestPurchaseDate = findClosestPurchaseDate(drug, selectedDate);

  return (
    <div>
      <h2>Find the Best Time to Buy {drug}</h2>

      <div>
        <label>Select a Date:</label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
        />
      </div>

      {selectedDate && closestPurchaseDate && (
        <div>
          <p>
            You selected: {format(selectedDate, 'yyyy-MM-dd')}
          </p>
          <p>
            The closest purchase date for {drug} is: {closestPurchaseDate}
          </p>
        </div>
      )}
      <PharmacyFinder medication={drugName} />
    </div>
  );
}

export default DrugPurchaseCalendar;
