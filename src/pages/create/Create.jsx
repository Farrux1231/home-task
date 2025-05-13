import { useState } from "react";
import axios from "axios";

const Create = () => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://6822a481b342dce8004ee696.mockapi.io/employe/employee", {
        name,
        avatar,
        createdAt,
      });
      alert("Employee created successfully!");
      setName("");
      setAvatar("");
      setCreatedAt("");
    } catch (error) {
      console.error("Error creating employee:", error);
      alert("Failed to create employee.");
    }
  };

  return (
    <div className="ml-64 p-6">
      <h1 className="text-2xl font-bold mb-4">Create Employee</h1>
      <form onSubmit={handleCreate} className="bg-white p-4 shadow rounded">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Avatar URL</label>
          <input
            type="text"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter avatar URL"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Created At</label>
          <input
            type="date"
            value={createdAt}
            onChange={(e) => setCreatedAt(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Create
        </button>
      </form>
    </div>
  );
};

export default Create;
