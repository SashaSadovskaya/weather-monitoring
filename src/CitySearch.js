import React, {useState} from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';

function CitySearch ({weather}) {
  const [address, setAddress] =  React.useState("");
  // const handleSelect = async value =>{};

  return (
    <div>
      <form onSubmit={weather}>
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          // onSelect={handleSelect}

        >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input type='text' name='city'  {...getInputProps({
              placeholder: 'Type address'
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
