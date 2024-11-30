import React from 'react';
import {Link} from "react-router-dom";
import SearchOrder from "../features/order/searchOrder.jsx";

export default function Header() {
    return (
        <header className={"bg-yellow-500"}>
            <Link to={"/"}>FastPizza</Link>
            <SearchOrder/>
            <p>Sina</p>
        </header>
    );
}