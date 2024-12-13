import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { PageDefault } from "./components/pageDefault"
import "./index.css"
import { Register } from "./pages/register"

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageDefault/>}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/signup" element={<Register/>} />
      </Routes>
    </Router>
  )
}