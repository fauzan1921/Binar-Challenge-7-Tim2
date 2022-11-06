import "./App.css";
import "./assets/stylesheets/profilePage.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Game from "./pages/game_detail";
import Profile from "./pages/profile";
import Layout from "./components/Layout";
import Register from "./pages/register";
import { decodedToken } from "./action/authentication";

function App() {
    let user;
    if (localStorage.getItem("jwt-token")) {
        user = decodedToken(localStorage.getItem("jwt-token"));
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Landing />} />
                    <Route path="profile" element={<Profile user={user} />} />
                    <Route path="game" element={<Game />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
