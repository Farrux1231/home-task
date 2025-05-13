import { useState, useEffect } from "react";
import axios from "axios";

const Delete = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("https://6822a481b342dce8004ee696.mockapi.io/employe/employee");
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://6822a481b342dce8004ee696.mockapi.io/employe/employee/${id}`);
      alert("Employee deleted successfully!");
      fetchEmployees();
    } catch (error) {
      console.error("Error deleting employee:", error);
      alert("Failed to delete employee.");
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="ml-64 p-6">
      <h1 className="text-2xl font-bold mb-4">Delete Employee</h1>
      <ul className="bg-white p-4 shadow rounded">
        {employees.map((employee) => (
          <li
            key={employee.id}
            className="flex items-center justify-between p-2 border-b border-gray-200"
          >
            <div>
              <p className="text-gray-700 font-bold">{employee.name}</p>
            </div>
            <button
              onClick={() => handleDelete(employee.id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Delete;
