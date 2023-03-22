import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from "react"
import HeaderLayout from "./components/layout/HeaderLayout"
import HomePage from "./components/pages/homepage/HomePage"
import PagesPage from "./components/pages/pages/PagesPage"
import ContactPage from "./components/pages/contact/ContactPage"
import BlogPage from "./components/pages/blog/BlogPage"
import LandingPage from "./components/pages/landing/LandingPage"
import LoginPage from "./components/pages/login/LoginPage"
import BookTablePage from "./components/pages/book-table/BookTablePage"
import ErrorPage from "./components/pages/404-page/ErrorPage"
import FoodDetailsPage from "./components/pages/pages/FoodDetailsPage"
import SavedFoods from "./components/pages/saved-foods/SavedFoods"

function App() {


  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="pages" element={<PagesPage/>}/>
            <Route path="pages/:id" element={<FoodDetailsPage cart={cart} setCart={setCart}/>}/>
            <Route path="contact-us" element={<ContactPage/>}/>
            <Route path="blog" element={<BlogPage/>}/>
            <Route path="landing" element={<LandingPage/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="book-table" element={<BookTablePage/>}/>
            <Route path="saved-foods" element={<SavedFoods cart={cart} setCart={setCart} />} />
            <Route path="*" element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
