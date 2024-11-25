import React from 'react';
import {Link} from "react-router-dom";
import SearchOrder from "../features/order/searchOrder.jsx";

export default function Header() {
    return (
        <header>
            <Link to={"/"}>FastPizza</Link>
            <SearchOrder/>
            <p>Sina</p>
        </header>
    );
}