import Sidebar from './components/sideBar/SideBar'
import Create from './pages/create/create'
import Delete from './pages/delete/delete'
import Read from './pages/read/Read'
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
