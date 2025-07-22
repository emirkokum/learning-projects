import { useState } from "react";

const mockUsers = [
  { id: 1, name: "Ali", email: "ali@example.com" },
  { id: 2, name: "Ayşe", email: "ayse@example.com" },
  { id: 3, name: "Mehmet", email: "mehmet@example.com" },
];

function UserList() {
  const [showEmails, setShowEmails] = useState(false);

  return (
    <div>
      <button onClick={() => setShowEmails(!showEmails)}>
        {showEmails ? "Hide Emails" : "Show Emails"}
      </button>

      <ul>
        {mockUsers.map((user) => (
          <li key={user.id}>
            {user.name}
            {showEmails && <span> – {user.email}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
