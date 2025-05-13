import { useState, useEffect } from "react";
import axios from "axios";

const Read = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("https://6822a481b342dce8004ee696.mockapi.io/employe/employee");
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="ml-64 p-6">
      <h1 className="text-2xl font-bold mb-4">Employee List</h1>
      <ul className="bg-white p-4 shadow rounded">
        {employees.map((employee) => (
          <li
            key={employee.id}
            className="flex items-center justify-between p-2 border-b border-gray-200"
          >
            <div>
              <p className="text-gray-700 font-bold">{employee.name}</p>
              <p className="text-sm text-gray-500">{employee.createdAt}</p>
            </div>
            <img
              src={employee.avatar}
              alt={employee.name}
              className="w-10 h-10 rounded-full"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Read;
