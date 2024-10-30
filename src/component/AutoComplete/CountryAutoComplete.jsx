// src/components/CountryAutocomplete.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';

const CountryAutocomplete = ({ onCountrySelect }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length < 1) { // Begrens forespørslene til minst 2 tegn
      setSuggestions([]);
      return;
    }

    try {
      // Forespør land fra REST Countries API
      const response = await fetch(`https://restcountries.com/v3.1/name/${value}`);
      const data = await response.json();

      // Hent bare de nødvendige dataene fra responsen
      const countries = data.map((country) => ({
        name: country.name.common, // Landets navn
      }));

      setSuggestions(countries.slice(0, 5)); // Begrens til 5 forslag
    } catch (error) {
      console.error('Error fetching country suggestions:', error);
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (country) => {
    setQuery(country.name);
    setSuggestions([]);
    onCountrySelect(country.name); // Sender valgt land tilbake til hovedkomponenten
  };

  return (
    <div className="autocomplete">
      <input
        type="text"
        placeholder="Enter country"
        value={query}
        onChange={handleInputChange}
        className="autocomplete-input"
      />
      {suggestions.length > 0 && (
        <ul className="autocomplete-suggestions">
          {suggestions.map((country, index) => (
            <li key={index} onClick={() => handleSuggestionClick(country)}>
              {country.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

CountryAutocomplete.propTypes = {
  onCountrySelect: PropTypes.func.isRequired,
};

export default CountryAutocomplete;
