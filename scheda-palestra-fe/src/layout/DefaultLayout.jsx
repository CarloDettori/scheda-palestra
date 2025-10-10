import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";


export default function DefaultLayout() {
    return (

        <div>
            <Header />
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}