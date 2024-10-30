// src/components/CityAutocomplete.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';

const CityAutoComplete = ({ onCitySelect }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length < 3) {  // Begrens søk til minst 3 tegn
      setSuggestions([]);
      return;
    }

    try {
      // DataMuse Places API for å hente byer basert på søkestrengen
      const response = await fetch(`https://api.datamuse.com/sug?s=${value}&max=5`);
      const data = await response.json();

      // Formater resultatene hvis det finnes gyldige data
      if (data) {
        const cities = data.map((item) => ({
          city: item.word, // Byens navn
        }));
        setSuggestions(cities); // Vis de første 5 forslagene
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error('Error fetching city suggestions:', error);
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (city) => {
    setQuery(city.city);
    setSuggestions([]);
    onCitySelect(city.city); // Sender valgt by tilbake til hovedkomponenten
  };

  return (
    <div className="autocomplete">
      <input
        type="text"
        placeholder="Enter city"
        value={query}
        onChange={handleInputChange}
        className="autocomplete-input"
      />
      {suggestions.length > 0 && (
        <ul className="autocomplete-suggestions">
          {suggestions.map((city, index) => (
            <li key={index} onClick={() => handleSuggestionClick(city)}>
              {city.city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

CityAutoComplete.propTypes = {
  onCitySelect: PropTypes.func.isRequired,
};

export default CityAutoComplete;



