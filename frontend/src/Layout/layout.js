import React from 'react';
import Footer from "./header";
import "./layout.css"
import Header from "./footer";


const Layout = () => {

    return (
        <div className="layout">
            <Header />
            <main className="main">
                <h2>Layout</h2>
            </main>
            <Footer />
        </div>
    )
}
export default Layout