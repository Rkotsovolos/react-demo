import "bootstrap";

function Navbar() {
    return (
    <div class="contatiner">
       
            <ul class="d-flex justify-content-between bg-dark p-1">
                <li class="nav-item">
                    <a class="text-light ps-5" href="/Todo">Todo List</a>
                </li>
                <li class="nav-item">
                    <a class="text-light" href="/AddressSearch">Address Search</a>
                </li>
                <li class="nav-item">
                    <a class="text-light pe-5" href="/StockExchange">NYSE/Ticker</a>
                </li>
            </ul>
        
    </div >
    )
}

export default Navbar; 