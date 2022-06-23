import React from 'react';
import PlacesAutocomplete, {
  } from "react-places-autocomplete";
import {useState} from 'react';

function AddressSearch() {

    //The state below is starting out as an empty string on initial loading of the page and as you type into the input field that state will change and 
    //after selection of an address the initial state will change and will now be setAddress
    const [address, setAddress] = useState("")

    return (
        // The PlacesAutocomplete tag will work with the input tag on line 26. the initial value will be an emptry string on load, and each keystroke the state will change 
        // to setAddress per onChange event handler on line 19.
        <div>
            <h2>Search an Address</h2>
            <PlacesAutocomplete 
            value={address}
            onChange={setAddress}
            >
                
                {/* render prop function from docs*/}
                {/* getInputProps is specific to input tags for searching addresses within the api */}
                {/* suggestions is the "autocomplete of whatever has been typed to suggest addresses that may match as you type into the input field" */}
                {/* getSuggestionItemProps works with suggestions to display those addresses within a different tag and a mapping format */}
                {/* loading is used as a placeholder while searching through the api to find matches */}
                {({getInputProps, suggestions, getSuggestionItemProps, loading})=> (
                <div>
                    <input class="text-center fs-4 input-group mb-6 " {...getInputProps({placeholder:"Type Address"})}/>
                    <div>

                        {/* ternary to display "...loading" if it is searching for an address and has not found a match and if matches are found it will not display 
                            the "...loading div"
                        */}
                        {loading ? <div>...Loading</div> : null}

                        {/* The api supplies us with "suggestion" which is taking in the onChange event handler from line 19 and maps through those suggestions below
                            the input field as their own div containers.*/}

                        {/* inline css to style for suggested address options when scrolling over one. This will allow for ease of know which one your mouse
                            is hovered over to select. */}
                        {suggestions.map((suggestion) => {
                         
                            const style ={
                                backgroundColor: suggestion.active ? "#41b6e6" : "white"
                            };

                            // implement inline style to suggested address that dropdown from search field
                            // Below the getSuggestionItemProps is giving us a list of the suggested addresses within the API however it needs to be paired with 
                            // ".description" in order to find key value pairs of what is being typed. 
                
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




