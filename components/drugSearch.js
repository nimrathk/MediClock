import { useState } from "react";
import drugData from "../drugData";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format, differenceInDays } from 'date-fns';
import React from "react";
import cheapestDates2 from "../cheapestDates2";
import PharmacyFinder from "./PharmacyFinder";

function DrugSearch() {

    const cap = (str) => {
      if (typeof str !== 'string') return str;
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    const [selectedDate, setSelectedDate] = useState(null);
    const [drugName, setDrugName] = useState("");
    const [bestTime, setBestTime] = useState("");
    const [error, setError] = useState("");

    const allDrugNames = Object.values(drugData).flat();

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const clearDate = () => {
        setSelectedDate(null);  // Clears the selected date
    };
    
    const findClosestPurchaseDate = (drugCategory, selectedDate) => {
        if (!selectedDate) {
            return "Please select a date!";
        }
        const cheapestDatesList = cheapestDates2[drugCategory];

        console.log("Inside findClosestPurchaseData & cheapestDatesList is: ", cheapestDatesList);
        
        if (!cheapestDatesList) return null;

        // Calculate which cheapest date is closest to the selected date
        
        let closestDate = cheapestDatesList[0];
        let minDiff = differenceInDays(new Date(selectedDate), cheapestDatesList[0]);

        cheapestDatesList.forEach((date) => {
            const diff = differenceInDays(new Date(selectedDate), date);
            if (Math.abs(diff) < Math.abs(minDiff) && diff < 0) {
                closestDate = date;
                minDiff = diff;
            }
        });
    
        return closestDate;
    };
    
    const handleSubmit = (event) => {
      event.preventDefault();
      setError("");
      setBestTime("");
  
      let foundCategory = null;
  
      // Search for the drug in the local data
      for (const category in drugData) {
        if (drugData[category].some((name) => name.toLowerCase() === drugName.toLowerCase())) {
          foundCategory = category;
          break;
        }
      }
  
      if (foundCategory) {
        const closestPurchaseDate = findClosestPurchaseDate(foundCategory, selectedDate);

        // Find the closest purchase date using the sanitized drug name
        if (closestPurchaseDate) {
            setBestTime(closestPurchaseDate);
        } else {
            setError("No closest purchase date found");
        }
      } else {
        setError("Drug not found");
      }
    };
  
    return (
      <div className="drug-search-container">
        <h2>Your Smart Shopper for Medications</h2>
        <form onSubmit={handleSubmit}>
          <label class="enter-drug-name-label">
            Medicine:
            <input
              type="text"
              value={drugName}
              onChange={(e) => setDrugName(e.target.value)}
              required
              list="drugNames"  // Connect the input field with the datalist
            />
            <datalist id="drugNames">
                {allDrugNames
                    .filter((drug) => drug.toLowerCase().includes(drugName.toLowerCase()))  // Filter drug names based on the user input
                    .map((drug, index) => (  // Iterate over the filtered drug names and create <option> elements
                    <option key={index} value={drug} />
                    ))}
            </datalist>

          </label>

          <label class="select-date-label"><br></br>Select a Date:</label>
            <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="MM-dd-YYYY"
            />
          <button type="submit" class="search-button">Search</button>
          <button type="button" className="clear-button" onClick={clearDate}>Clear</button>
        </form>
        {bestTime && (
        <div className="best-time-container">
            <p className="recommended-time-label">
            Recommended time to purchase "<span>{cap(drugName)}</span>": {format(bestTime, 'MM-dd-yyyy')}
            </p>
        </div>
        )}
        {error && <p className="error">{error}</p>}
        <PharmacyFinder medication={drugName} />
        </div>
    );
};
export default DrugSearch;