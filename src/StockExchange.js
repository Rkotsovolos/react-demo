import { useState, useEffect } from "react";
import StockDisplay from "./StockDisplay";

function StockExchange () {

    const [stocks, setStocks] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch('http://localhost:8000/stocks') 
        .then(resp => resp.json())
        .then(data => setStocks(data)) 
      }, []);
      console.log(stocks)

   

      const displayCurrent = stocks.filter(stocksObj => {
        return stocksObj.name.toLowerCase().includes(search.toLowerCase())
      })

    return (
        <div>
            <h2 class="p-2">NYSE Ticker/Symbol</h2>
            <input 
                class="text-center fs-4 "
                type="text"
                placeholder="Stock or Symbol Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                   
            />
            <button class=" fs-4 p-0">Search</button>
            <div>
                <StockDisplay displayCurrent={displayCurrent}/>
            </div>
        </div>
    )

}

export default StockExchange;