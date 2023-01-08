import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register"

import InputReminder from './pages/InputReminder';
import ListReminder from "./pages/ListReminder";
import InputIkan from "./pages/InputIkan";
import InputKolam from "./pages/InputKolam";
import InputAir from "./pages/InputAir";
import ListKolam from "./pages/ListKolam";
import Home from "./pages/Home";
import ListAir from "./pages/ListAir";
import ListIkan from "./pages/ListIkan";
import DetailReminder from './pages/DetailReminder';
import DetailKolam from './pages/DetailKolam';
import EditKolam from './pages/EditKolam';
import DetailIkan from './pages/DetailIkan';
import EditIkan from './pages/EditIkan';
import DetailAir from './pages/DetailAir';
import EditAir from './pages/EditAir';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/input-reminder" element={<InputReminder />} />
        <Route path="/list-reminder" element={<ListReminder />} />
        <Route path="/reminder/:id" element={<DetailReminder />} />
        <Route path="/input-ikan" element={<InputIkan />} />
        <Route path="/input-kolam" element={<InputKolam />} />
        <Route path="/input-air" element={<InputAir />} />
        <Route path="/list-kolam" element={<ListKolam />} />
        <Route path="/list-air" element={<ListAir />} />
        <Route path="/list-ikan" element={<ListIkan />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/kolam/:id" element={<DetailKolam />} />
        <Route path="/kolam/edit/:id" element={<EditKolam />} />
        <Route path="/ikan/:id" element={<DetailIkan />} />
        <Route path="/ikan/edit/:id" element={<EditIkan />} />
        <Route path="/air/:id" element={<DetailAir />} />
        <Route path="/air/edit/:id" element={<EditAir />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
