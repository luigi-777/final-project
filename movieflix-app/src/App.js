
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import EditMovie from "./components/Movieforms/EditMovie";
import NewMovie from "./components/Movieforms/NewMovie";
import Genres from "./components/Genres/Genres";
import NewGenre from "./components/GenreForms/NewGenre";
import EditGenre from "./components/GenreForms/EditGenre";


function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}>
            <Route path="edit/:id" element={<EditMovie />} />
            <Route path="new" element={<NewMovie />} />
          </Route>
          <Route path="genres" element={<Genres />} />
          <Route path="genres/new" element={<NewGenre />} />
          <Route path="genres/edit/:id" element={<EditGenre />} />
        </Route>
      </Routes>
   </Router>
  );
}

export default App;
