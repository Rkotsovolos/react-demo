import React from 'react';
import PlacesAutocomplete, {
  } from "react-places-autocomplete";
import {useState} from 'react';

function AddressSearch() {

    const [address, setAddress] = useState("")

    //async function, recieves suggested address.
    const handleSelect = async value => {};

    return (
        <div>
            <h2>Search an Address</h2>
            <PlacesAutocomplete 
            value={address}
            onChange={setAddress}
            onClick={handleSelect}
            >
                
                {/* render prop function from docs*/}
                {({getInputProps, suggestions, getSuggestionItemProps, loading})=> (
                <div>
                    <input class="text-center fs-4" {...getInputProps({placeholder:"Type Address"})}/>
                    {/* display suggestions */}
                    <div>

                        {/* ternary to display ...loading if it is searching for an address */}
                        {loading ? <div>...Loading</div> : null}

                        {/* inline css to style for suggested address options when scrolling over one. */}
                        {/* map and displays suggested addresses from typing in the search container */}
                        {suggestions.map((suggestion) => {
                            const style ={
                                backgroundColor: suggestion.active ? "#41b6e6" : "white"
                            };

                            // implement inline style to suggested address that dropdown from search field
                            return <div {...getSuggestionItemProps(suggestion, { style })}>
                                {suggestion.description}
                                   </div>
                        })}
                    </div>
                </div>
                )}
            </PlacesAutocomplete>
        </div>
            
    )

}

export default AddressSearch;




