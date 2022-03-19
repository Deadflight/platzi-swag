
import React from 'react';
import Layout from "./src/components/layout";
import CartProvider from './src/context/cart/CartProvider';
import "./src/styles/globals.css";

export const wrapRootElement = ({ element }) => (
    <>
        <CartProvider>
            <Layout>{element}</Layout>
        </CartProvider>
    </>
);