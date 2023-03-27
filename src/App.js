import "./styles/styles.css";
import Homepage from "./pages/Homepage";
import { Route, Routes, Navigate } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import AppCtn from "./components/AppCtn";
import Aboutme from './pages/Aboutme';
import Page404 from './pages/404';

function App() {
  return (
    <main className="App">
      <nav className="App__ctn" />
      <AppCtn />
      <Routes>
      <Route
          exact
          path="/"
          element={<Navigate to="/home" />}
        />
        <Route exact path="/home" element={<Homepage />} />
        <Route exact path="/details" element={<ProductDetails />}>
          <Route exact path=":id" element={<Homepage />} />
        </Route>
        <Route exact path="/about-me" element={<Aboutme />} />
        <Route
          exact
          path="/*"
          element={<Navigate to="/404-page-not-found" />}
        />
        <Route exact path="/404-page-not-found" element={<Page404 />} />
      </Routes>
    </main>
  );
}

export default App;
