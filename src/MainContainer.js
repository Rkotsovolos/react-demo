import React from 'react';

function MainContainer({stocks, stocksPrice, stocksHigh, stocksLow, stocksSymbol }) {

    //returning the fetched data
    return(
        <div class="row row-cols-2">
            <div class="col">
                <div class="card-body d-flex">
                    <div class="card-body ">
                        <div class="card-body">
                            <h5 class="card-title p">{stocksSymbol}</h5>
                            <h5 class="card-title ">{stocks}</h5>
                        </div>
                    </div>
                    <div class="card-body ">
                        <div class="card-body d-flex justify-content-evenly">
                            <p class="card-text">{stocksPrice}</p>
                            <p class="card-text">{stocksHigh}</p>
                            <p class="card-text">{stocksLow}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContainer;

<div class="text-center">

</div>