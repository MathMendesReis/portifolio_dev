import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "../pages/homepage";


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route index path="/" element={<Homepage />} />
            </Routes>
        </BrowserRouter>
    )
}