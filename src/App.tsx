import './App.css'
import Profile from "./components/Profile";
import {Route, Routes} from "react-router";
import Guest from "./components/Guest";
import ProtectedProfile from "./components/Profile/ProtectedProfile.tsx";
import ProtectedGuest from "./components/Guest/ProtectedGuest.tsx";

function App() {

    //TODO: Implement token retrieval from global state logic

    const token = '';

    //
    return (
        <Routes>
            <Route element={<ProtectedGuest token={token}/>}>
                <Route path='/' element={<Guest/>}/>
            </Route>

            <Route element={<ProtectedProfile token={token}/>}>
                <Route path='/profile' element={<Profile/>}/>
            </Route>
        </Routes>
    )
}

export default App;