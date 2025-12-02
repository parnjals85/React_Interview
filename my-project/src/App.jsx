import './App.css'
import Navbar from './Header/Header'
import Home from './home/Home'
import Integrates from './Integrates/Integrates'
import MealDetails from './Integrates/Meal'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Why from './why/Why'
import Footer from './footer/Footer'
import Veg from './veg/Veg'
import MealTwo from './veg/Meal_2'
import Quick from './quick_recipes/Quick'
import Create from './create/Create'
import Chicken from './Chicken/Chicken'
import Creation from './creation/Creation'
import Ideas from './ideas/Ideas'
import Explore from './explore/Explore'
import Contact from './contact/Contact'

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
                <Why />
                <Footer />
              </>
            }
          />
          <Route path='/veg'
          element={
            <>
            <Veg />
            </>
          }
          /> 
          <Route path='/quick'
          element={
            <>
             <Quick />
            </>
          }
          />
          <Route path='/create' element={<Create/>} />
          <Route path='/explore' element={<Explore/>} />
          <Route path='/ideas' element={<Ideas/>} />
          <Route path='/creation' element={<Creation />} />
          <Route path='/chicken' element={<Chicken/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/meal/:id' element={<MealTwo/>} />
          <Route path="/meal/:id" element={<MealDetails />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
