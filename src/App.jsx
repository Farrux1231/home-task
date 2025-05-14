import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './components/sideBar/SideBar';
import Create from './pages/create/Create';
import Delete from './pages/delete/Delete';
import Read from './pages/read/Read';

function App() {
  return (
    <main>
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
    </main>
  );
}

export default App;
