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
    // Replace this with your actual login API logic
    console.log('Logging in with:', loginData);
    setShowModal(false);
  };

  // Simple form validation
  const isFormValid = loginData.identifier.trim().length >= 4 && loginData.password.trim().length >= 6;

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <div className='user-bg-image bg-cover bg-center bg-no-repeat min-h-[60vh]'>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-20 text-[var(--color-primary)]">

          {/* Settings Icon */}
          <div className="relative">
            <a href="/Account/Settings" className="ml-3 md:ml-7 absolute top-0 right-0 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="..." />
                <path strokeLinecap="round" strokeLinejoin="round" d="..." />
              </svg>
            </a>
          </div>

          {/* User Avatar + Welcome Message */}
          <div className="flex flex-col items-center mt-10">
            <img
              src="src/assets/images/defaultUserImage.png"
              alt="User"
              className="rounded-full w-40 h-40 object-cover shadow-lg bg-[var(--color-primary)] outline outline-4 outline-offset-8 outline-[var(--color-accent)] p-2"
            />
            <h2 className="mt-4 text-xl font-semibold text-center">
              {user?.isLoggedIn
                ? `Welcome to TUTAM Cafe, ${user.name || 'User'}`
                : 'Welcome to TUTAM Cafe'}
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
      </div>

      {/* Login Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="relative bg-[var(--color-background)] rounded-lg shadow-xl p-6 w-1/2 max-w-md text-[var(--color-primary)]">
            <a
              className="text-sm font-semibold absolute top-0 right-0 m-5 cursor-pointer"
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
              className="w-full mb-3 border-b focus:outline-none py-1"
            />

            <p className="text-md font-bold">PASSWORD</p>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleInputChange}
              className="w-full mb-3 border-b focus:outline-none py-1"
            />

            <div className="flex justify-center mt-4">
              <button
                onClick={handleLogin}
                disabled={!isFormValid}
                className={`flex items-center justify-center w-auto mt-2 px-4 py-2 rounded transition ${
                  isFormValid
                    ? 'bg-[var(--color-primary)] text-[var(--color-background)] hover:opacity-90'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Login
              </button>
            </div>

            <div className="flex flex-col items-center justify-center mt-4 mb-4">
              <small>Or continue with</small>
              <button className="flex items-center justify-center w-full mt-2 px-4 py-2 border-2 rounded-full hover:bg-[var(--color-primary)] hover:text-[var(--color-background)] transition">
                <GoogleIcon className="mr-2" />
                Google
              </button>
            </div>

            <small className="text-sm font-semibold">
              Don&apos;t have an account? &nbsp;
              <a href="/Registration" className="text-[var(--color-accent)] underline">Signup for TUTAM</a>
            </small>
          </div>
        </div>
      )}

      <UserOptions isLoggedIn={user?.isLoggedIn} />
    </div>
  );
}

export default UserProfile;
