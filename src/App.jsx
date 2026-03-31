import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        {/*Add in the other routes here*/}
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
