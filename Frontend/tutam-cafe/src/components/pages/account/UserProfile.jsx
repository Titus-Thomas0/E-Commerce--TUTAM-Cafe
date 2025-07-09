import React, { useEffect, useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import UserOptions from './UserOptions';

function UserProfile() {
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loginData, setLoginData] = useState({ identifier: '', password: '' });

  useEffect(() => {
    fetch('/api/user/me')
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => {
        console.error('Error fetching user:', err);
        setUser({ isLoggedIn: false });
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    // 🔐 Your login logic here (e.g. POST to `/api/login`)
    console.log('Logging in with:', loginData);
    setShowModal(false); // Close modal on success
  };

  return (
    <div>
      <div className='user-bg-image bg-cover bg-center bg-no-repeat h-full'>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-20 text-[var(--color-primary)]">
          
          {/* Settings Icon */}
          <div className="relative">
            <a href="/Account/Settings" className="ml-3 md:ml-7 absolute top-0 right-0 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 
                  1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 
                  1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 
                  1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 
                  1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 
                  1.109v1.094c0 .55-.397 1.02-.94 
                  1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 
                  1.204l.527.738c.32.447.269 1.06-.12 
                  1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 
                  0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 
                  1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 
                  1.125 0 0 1 .12-1.45l.773-.773a1.125 
                  1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 
                  1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </a>
          </div>

          {/* User Avatar + Name */}
          <div className="flex flex-col items-center mt-10">
            <img
              src="src/assets/images/defaultUserImage.png"
              alt="User"
              className="rounded-full w-50 h-50 object-cover shadow-lg bg-[var(--color-primary)] outline outline-4 outline-offset-8 outline-[var(--color-accent)] p-2"
            />
            <h2 className="mt-4 text-xl font-semibold">
              {user?.isLoggedIn ? `Welcome to TUTAM Cafe, ${user.name || 'User'}` : 'Welcome to TUTAM Cafe'}
            </h2>
            {!user?.isLoggedIn && (
              <button
                onClick={() => setShowModal(true)}
                className="mt-4 px-6 py-2 rounded-md bg-[var(--color-primary)] text-[var(--color-background)] hover:opacity-90 transition"
              >
                Login or Sign Up
              </button>
            )}
          </div>
        </div>

        {/* Login Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="relative bg-[var(--color-background)] rounded-lg shadow-xl p-6 w-1/2 h-1/2 max-w-md text-[var(--color-primary)]">
              <a 
                className='text-sm font-semibold absolute top-0 right-0 m-5'
                onClick={() => setShowModal(false)}
                href="/#"
              >
                SKIP
              </a>
              <h2 className="text-xl font-bold mt-4 mb-4">Login</h2>
              <p className="text-md font-bold">USERNAME</p>
              <input
                type="text"
                name="identifier"
                placeholder="Email or Mobile Number"
                value={loginData.identifier}
                onChange={handleInputChange}
                className="w-full mb-3 border-b rounded focus:outline-none"
              />
              <p className="text-md font-bold">PASSWORD</p>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleInputChange}
                className="w-full mb-3 border-b rounded focus:outline-none"
              />
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleLogin}
                  className="flex items-center justify-center w-auto mt-2 px-4 py-2 bg-[var(--color-primary)] text-[var(--color-background)] rounded hover:opacity-90 transition"
                >
                  Login
                </button>
              </div>
              <div className='flex flex-col items-center justify-center mt-4 mb-4'>
                <small>Or continue with</small>
                <div>
                  <button className="flex items-center justify-center w-full mt-2 px-4 py-2 border-2 rounded-full hover:bg-[var(--color-primary)] hover:text-[var(--color-background)] transition">
                    <GoogleIcon className='mr-2' />
                    Google
                  </button>
                </div>
              </div>
              <small className='text-sm font-semibold'>
                Don't have an account? &nbsp;
                <a href="/Registration" className="text-[var(--color-accent)] underline">Signup for TUTAM</a>
              </small>
            </div>
          </div>
        )}
      </div>
      <UserOptions isLoggedIn={user?.isLoggedIn} />
    </div>
    
  );
}

export default UserProfile;
