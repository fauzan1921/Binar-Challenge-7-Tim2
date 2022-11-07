import "./App.css";
import "./assets/stylesheets/profilePage.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Game from "./pages/game_detail";
import Layout from "./components/Layout";
import Register from "./pages/register";
import { decodedToken } from "./action/authentication";
import UserProfile from "./pages/userProfile";
import PlayerProfile from "./pages/playerProfile";

function App() {
    let user;
    if (localStorage.getItem("jwt-token")) {
        user = decodedToken(localStorage.getItem("jwt-token"));
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout user={user} />}>
                    <Route index element={<Landing />} />
                    <Route
                        path="profile"
                        element={<UserProfile user={user} />}
                    />
                    <Route
                        path="player/:id"
                        element={<PlayerProfile user={user} />}
                    />
                    <Route path="game" element={<Game user={user} />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
