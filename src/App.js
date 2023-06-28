import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import SignUP from "./pages/SignUp";
import {RecoilRoot,} from 'recoil';


function App() {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/*" element={<NotFound/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/join" element={<SignUP/>}/>
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
}

export default App;
