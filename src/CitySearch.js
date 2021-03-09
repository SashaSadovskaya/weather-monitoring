import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import './CitySearch.css'

function CitySearch ({weather}) {
  const [address, setAddress] =  React.useState("");

  return (
    <div>
      <form onSubmit={weather} className='form'>
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
        >
        {({ getInputProps, suggestions, loading }) => (
          <div>
            <input type='text' name='city'  {...getInputProps({
              placeholder: 'Введите город'
            })}
            />
            <div>
              {loading ? <div>...loading</div> : null}
              {suggestions.map((suggestion, i) => {
                return <div key={i}>{suggestion.description}</div>
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <button className='form-button'  type='submit'>Получить погоду</button>
      </form>
    </div>
  );
}

export default CitySearch;
