import Navbar from "./components/Navbar";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
