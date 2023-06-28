import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import SignUP from "./pages/SignUp";
import Rank from "./pages/Rank";
import Mens from "./pages/Mans/index";
import Girls from "./pages/Grils";
import Brand from "./pages/Brand";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/*" element={<NotFound />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<SignUP />}/>
        <Route path="/rank" element={<Rank />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/girls" element={<Girls />} />
        <Route path="/brand" element={<Brand />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
