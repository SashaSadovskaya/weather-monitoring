import React, {useState} from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';

function CitySearch () {
  const [address, setAddress] =  React.useState("");
  const handleSelect = async value =>{};

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input {...getInputProps({
            placeholder: 'Type address'
          })}
          />
          <div>
            {loading ? <div>...loading</div> : null}
            {suggestions.map((suggestion) => {
              return <div>{suggestion.description}</div>
            })}
          </div>
          <button className='form-button' type='submit'>Получить погоду</button>
        </div>
      )}
    </PlacesAutocomplete>
    </div>
  );
}

export default CitySearch;
