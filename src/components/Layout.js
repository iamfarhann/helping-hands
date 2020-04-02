/* /components/Layout.js */

import React from "react";
import Header from "./Header";
import Footer from "./Footer";



function Layout(props) {

    const { children } = props;

    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Layout;
