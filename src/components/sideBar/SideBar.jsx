import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed">
      <div className="py-4 px-6 text-2xl font-bold text-blue-400">DashStack</div>
      <nav className="mt-6">
        <ul>
          <li className="mb-2">
            <Link
              to="/create"
              className="flex items-center p-3 hover:bg-gray-700 rounded"
            >
              📝 Create
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/delete"
              className="flex items-center p-3 hover:bg-gray-700 rounded"
            >
              ❌ Delete
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/read"
              className="flex items-center p-3 hover:bg-gray-700 rounded"
            >
              📖 Read
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
