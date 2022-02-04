import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Wallet from "./components/Wallet";
import AddExpense from "./components/AddExpense";
import AddIncome from "./components/AddIncome";
import { useState } from "react";
import UserContext from "./contexts/UserContext.js";
import './style/reset.css';
import './style/style.css';

export default function App() {

    const localToken = localStorage.getItem('localToken');
    const localUserName = localStorage.getItem('userName');

    const [userName, setUserName] = useState(localUserName);
    const [token, setToken] = useState(localToken);

    return (
        <UserContext.Provider value={{ token, setToken, userName, setUserName }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/sign-in" element={<Login />} />
                    <Route path="/sign-up" element={<Register />} />
                    <Route path="/" element={<Wallet />} />
                    <Route path="/add-expense" element={<AddExpense />} />
                    <Route path="/add-income" element={<AddIncome />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}