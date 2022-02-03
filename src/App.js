import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import MainPage from "./components/MainPage";
import { useState } from "react";
import UserContext from "./contexts/UserContext.js";
import './style/reset.css';
import './style/style.css';

export default function App() {

    const [userName, setUserName] = useState(null);
    const [token, setToken] = useState();

    return (
        <UserContext.Provider value={{ token, setToken, userName, setUserName }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<Register />} />
                    <Route path="/wallet" element={<MainPage />} />
                    {/* <Route path="/in" element={<In />} />
                <Route path="/out" element={<Out />} /> */}
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}