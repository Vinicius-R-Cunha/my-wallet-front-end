import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                {/* <Route path="/sign-up" element={<SignUp />} />
                <Route path="/wallet" element={<MainPage />} />
                <Route path="/in" element={<In />} />
                <Route path="/out" element={<Out />} /> */}
            </Routes>
        </BrowserRouter>
    );
}