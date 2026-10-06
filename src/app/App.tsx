import { Route, Routes } from "react-router-dom"
import NotFound from "../features/shared/components/NotFound"
import Layout from "../features/shared/Layout/Layout"
import Home from "../features/home/pages/Home"
import Cars from "../features/cars/pages/Cars"
import CarDetail from "../features/cars/pages/CarDetail"
import Contact from "../features/contact/pages/Contact"


const App = () => {
  return (
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/cars" element={<Cars/>}/>
          <Route path="/cars/:id" element={<CarDetail/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>  
  )
}

export default App

