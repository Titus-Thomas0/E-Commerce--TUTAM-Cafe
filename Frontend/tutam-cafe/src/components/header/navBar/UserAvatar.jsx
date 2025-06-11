import React, { useEffect, useState } from 'react';

function UserAvatar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/user/me')
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => {
        console.error('Error fetching user:', err);
        setUser({ isLoggedIn: false });
      });
  }, []);

  return (
    <a href="/Account" className="ml-3 md:ml-7 flex items-center rounded-full">
      {!user?.isLoggedIn ? (
        // Not logged in: Show default SVG
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-9 text-[var(--color-primary)] hover:text-[var(--color-accent)]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975
             m11.963 0a9 9 0 1 0-11.963 0
             m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275
             M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      ) : user.profileImage ? (
        // Has profile image
        <img
          src={user.profileImage}
          alt="Profile"
          className="size-9 rounded-full object-cover border border-[var(--color-primary)]"
        />
      ) : (
        // Logged in, no image
        <div className="size-9 rounded-full bg-[var(--color-primary)] text-[var(--color-background)] flex items-center justify-center font-bold text-lg uppercase">
          {user.firstName?.charAt(0)}
        </div>
      )}
    </a>
  );
}

export default UserAvatar;
