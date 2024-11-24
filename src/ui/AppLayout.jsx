import React from 'react';
import Header from "./Header.jsx";
import CartOverview from "../features/cart/CartOverview.jsx";
import {Outlet} from "react-router-dom";

export default function AppLayout() {
    return (
        <div>
            <Header/>
            <main>
                <h1>Content</h1>
                <Outlet/>
            </main>
            <CartOverview/>
        </div>
    );
}