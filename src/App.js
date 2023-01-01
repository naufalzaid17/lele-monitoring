import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register"

import InputReminder from './pages/InputReminder';
import SetReminder from "./pages/SetReminder";
import InputIkan from "./pages/InputIkan";
import InputKolam from "./pages/InputKolam";
import InputAir from "./pages/InputAir";
import ListKolam from "./pages/ListKolam";
import Menu from "./pages/Menu";
import ListAir from "./pages/ListAir";
import ListIkan from "./pages/ListIkan";
import DetailReminder from './pages/DetailReminder';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/input_reminder" element={<InputReminder />} />
        <Route path="/set_reminder" element={<SetReminder />} />
        <Route path="/reminder/:id" element={<DetailReminder />} />
        <Route path="/input_ikan" element={<InputIkan />} />
        <Route path="/input_kolam" element={<InputKolam />} />
        <Route path="/input_air" element={<InputAir />} />
        <Route path="/list_kolam" element={<ListKolam />} />
        <Route path="/list_air" element={<ListAir />} />
        <Route path="/list_ikan" element={<ListIkan />} />
        <Route path="/home" element={<Menu />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
