import { Route, Routes, BrowserRouter } from "react-router-dom"
import { Home } from './pages/Home';
import { Layout } from "./pages/Layout";
import { About } from "./pages/About";
import { Detail } from "./pages/Detail";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/sobre' element={<About />} />
              <Route path='/movies/:id' element={<Detail />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
