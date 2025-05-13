import Sidebar from './components/sideBar/SideBar.jsx'
import Create from './pages/create/Create.jsx'
import Delete from './pages/delete/Delete.jsx'
import Read from './pages/read/Read.jsx'
import { Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
       <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/create" element={<Create />} />
            <Route path="/delete" element={<Delete />} />
            <Route path="/read" element={<Read />} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  )
}

export default App
