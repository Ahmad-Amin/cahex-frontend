import React, { useState } from "react";

const UserRolesManagement = () => {
  const [roles, setRoles] = useState({
    Merchant: true,
    Owner: false,
  });
  const [newRole, setNewRole] = useState("");

  const handleToggle = (role) => {
    setRoles((prevRoles) => ({
      ...prevRoles,
      [role]: !prevRoles[role],
    }));
  };

  const handleAddRole = () => {
    if (newRole.trim() !== "" && !roles[newRole]) {
      setRoles((prevRoles) => ({
        ...prevRoles,
        [newRole]: false,
      }));
      setNewRole("");
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-2xl w-full font-jakarta">
      <h2 className="text-2xl font-impact text-gray-800 mb-6">
        User Roles Management
      </h2>

      {/* Roles List */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-[#333b69] mb-4">Roles</h3>
        {Object.keys(roles).map((role) => (
          <div key={role} className="flex items-center mb-4">
            <input
              type="checkbox"
              id={role}
              className="sr-only"
              checked={roles[role]}
              onChange={() => handleToggle(role)}
            />
            <div
              className={`w-11 h-6 rounded-full cursor-pointer ${
                roles[role] ? "bg-[#293d5d]" : "bg-gray-300"
              } flex items-center transition-all duration-300`}
              onClick={() => handleToggle(role)}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300 ${
                  roles[role] ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </div>
            <label
              htmlFor={role}
              className="ml-3 text-sm font-medium text-gray-700"
            >
              {role}
            </label>
          </div>
        ))}
      </div>

      {/* Add New Role */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Create New Role
        </h3>
        <div className="flex items-center gap-10 w-3/5">
          <input
            type="text"
            placeholder="Add Role Name"
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
            className="w-full p-2 border border-[#dfeaf2] rounded-lg shadow-sm outline-none placeholder-[#718ebf] text-[#718ebf]"
          />
          <button
            onClick={handleAddRole}
            className="px-10 py-2 bg-[#2a3e5f] text-white rounded-lg shadow hover:bg-[#131c2c] outline-none"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserRolesManagement;
