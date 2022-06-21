import React from 'react';

function MainContainer({stocks, stocksPrice, stocksHigh, stocksLow, }) {

    return(
        <div>
            <h3>{stocks} | {stocksPrice} | {stocksHigh} | {stocksLow}</h3>
            <h3></h3>
        </div>
    )
}

export default MainContainer;