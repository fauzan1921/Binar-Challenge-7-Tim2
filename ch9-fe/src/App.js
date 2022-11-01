import "./App.css";
import "./assets/stylesheets/profilePage.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/login_register";
import Game from "./pages/game_detail";
import Profile from "./pages/profile";
import Layout from "./components/Layout";
import Register from "./pages/register";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Landing />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="game" element={<Game />} />
                    <Route path="login_register" element={<Login />} />
                    <Route path="register" element={<Register/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
