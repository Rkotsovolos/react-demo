import { useState, useEffect } from "react";
import StockDisplay from "./StockDisplay";

function StockExchange () {

    const [stocks, setStocks] = useState([])
    const [search, setSearch] = useState('')


    //fetching the json data in db.json and rendering it to the page on initial load
    useEffect(() => {
        fetch(`http://localhost:8000/stocks`) 
        .then(resp => resp.json())
        .then(data => setStocks(data)) 
      }, []);
      

   
      // Search bar will filter through all stocks pulled from db.json as you type into the input field
      // by grabbing the stocksObj.name and removes other stocks that don't match (using capital or lowercase wont matter in the search field)
      // We will then pass this function down as a prop to render the new displayed stocks.
      const displayCurrent = stocks.filter(stocksObj => {
        return stocksObj.name.toLowerCase().includes(search.toLowerCase())
      })


      //Search bar jsx and title of app
    return (
        <div>
            <h2 class="p-2">NYSE Ticker/Symbol</h2>

            {/* Initial input field will have a state of "search" state which is an empty string and the onChange handler will update state as it is being typed in */}
            <input 
                class="text-center fs-4 "
                type="text"
                placeholder="Stock Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <div>
                <StockDisplay displayCurrent={displayCurrent}/>
            </div>
        </div>
    )

}

export default StockExchange;