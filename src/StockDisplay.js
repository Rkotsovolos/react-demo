import React from 'react';
import MainContainer from './MainContainer';

function StockDisplay({displayCurrent}) {


    return (
        <div>
            {displayCurrent.map((stocks) =>  (
                <MainContainer stocks={stocks.name} stocksPrice={stocks.price} stocksHigh={stocks.high} stocksLow={stocks.low} stocksSymbol={stocks.symbol}
                key={stocks.id} 
                />
                )
                
            )}
            
        </div>

    )

}

export default StockDisplay;