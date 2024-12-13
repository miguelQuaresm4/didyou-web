import { Outlet } from "react-router-dom";
import { Footer } from "../footer";
import { Header } from "../header";

export function PageDefault(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}