import './App.css'
import Navbar from './Header/Header'
import Home from './home/Home'
import Integrates from './Integrates/Integrates'
import MealDetails from './Integrates/Meal'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>

        {/* Always show Navbar */}
        <Navbar />

        {/* Always show Home + Integrates on landing page */}
        <Routes>

          <Route
            path="/"
            element={
              <>
                <Home />
                <Integrates />
              </>
            }
          />

          {/* Only MealDetails is a separate page */}
          <Route path="/meal/:id" element={<MealDetails />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
