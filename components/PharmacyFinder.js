import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import data from "../medication_prices"

const PharmacyFinder = ({medication}) => {
  const [topPharmacies, setTopPharmacies] = useState([]);
  const [error, setError] = useState('');

  const cap = (str) => {
    if (typeof str !== 'string') return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const findCheapestPharmacies = (medicationName, topN = 3) => {
    const filteredData = data.filter(item => item.Medication.toLowerCase() === medication.toLowerCase());
    const sortedData = filteredData.sort((a, b) => {
        const priceA = parseFloat(a.Price.replace('$', ''));
        const priceB = parseFloat(b.Price.replace('$', ''));
        return priceA - priceB;
    });
    console.log("inside findCheapeastPharms");
    // Step 4: Get the top 3 pharmacies with the lowest prices
    const top3Pharmacies = sortedData.slice(0, 3);

    // Return an array of pharmacies with prices
    console.log("print pharms:", top3Pharmacies);

    return top3Pharmacies.map(item => ({
    Pharmacy: item.Pharmacy,
    Price: item.Price
    }));
    
  };

  useEffect(() => {
    if (medication) {
      const pharmacies = findCheapestPharmacies(medication);
      setTopPharmacies(pharmacies); // Update state when medication is provided
    }
  }, [medication]);

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {topPharmacies.length > 0 && (
        <div className = "pharmacy">
          <h3>Top 3 Pharmacies for {cap(medication)}:</h3>
          <div>
            {topPharmacies.map((pharmacy, index) => (
                <div key={index} style={{ marginBottom: '10px' }}>
                    <strong>{cap(pharmacy.Pharmacy)}</strong>: {pharmacy.Price}
                </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PharmacyFinder;