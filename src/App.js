import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import './style/reset.css';
import './style/style.css';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/sign-up" element={<Register />} />
                {/* <Route path="/wallet" element={<MainPage />} />
                <Route path="/in" element={<In />} />
                <Route path="/out" element={<Out />} /> */}
            </Routes>
        </BrowserRouter>
    );
}