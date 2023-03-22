import "./styles/styles.css";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import AppCtn from "./components/AppCtn";
import Aboutme from './pages/Aboutme';

function App() {
  return (
    <main className="App">
      <nav className="App__ctn" />
      <AppCtn />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/details" element={<ProductDetails />}>
          <Route exact path=":id" element={<Homepage />} />
        </Route>
        <Route exact path="/about-me" element={<Aboutme />} />
      </Routes>
    </main>
  );
}

export default App;
