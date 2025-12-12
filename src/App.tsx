import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {Favorites} from "./pages/Favorites/Favorites";
import {SingleArtInfo} from "./pages/SingleArtInfo/SingleArtInfo";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/single-art-info" element={<SingleArtInfo />} />
        </Routes>
    </div>
  );
}

export default App;
