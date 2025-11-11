import { useState } from "react";

export default function Userprofile() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative pr-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300"
      >
        <img
          src="https://i.pravatar.cc/150?img=3" 
          alt="User Avatar"
          className="w-full h-full object-cover"
        />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-50">
         <a href="">
            <div className="px-4 py-2 hover:bg-gray-100">Profile</div>
         </a>
          <button
            onClick={() => alert("Logged out!")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export { Userprofile };