import React, { useRef, useState } from 'react';
import axios from 'axios';

const VerifyUser = ({ formData, setFormData, onContinue, setIsValid }) => {
  const inputsRef = useRef([]);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/^[0-9]$/.test(value) || value === '') {
      const newOtpArray = formData.otp.split('');
      newOtpArray[index] = value;
      const updatedOtp = newOtpArray.join('');
      setFormData({ ...formData, otp: updatedOtp });
      setIsVerified(false);
      setIsValid(false);

      if (value && index < 5) {
        inputsRef.current[index + 1]?.focus();
      }

      if (updatedOtp.length === 6 && /^[0-9]{6}$/.test(updatedOtp)) {
        verifyOtp(updatedOtp);
      }
    }
  };

  const verifyOtp = async (otp) => {
    setLoading(true);
    try {
      const res = await axios.post('https://your-backend-api.com/verify-otp', { otp });
      if (res.status === 200 && res.data.verified) {
        setIsVerified(true);
        setIsValid(true);
        setError('');
      } else {
        setError('Invalid OTP');
        setIsValid(false);
      }
    } catch (error) {
      console.error('Verification error:', error);
      setError('Verification failed');
      setIsValid(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl mb-4">OTP was sent to <a className="underline font-semibold cursor-pointer">+91xxxxxxxx02</a></h2>
      <div className="flex justify-center space-x-3 mb-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <input
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            type="text"
            maxLength="1"
            className="w-12 h-14 border-2 rounded-md text-center text-2xl focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
            defaultValue={formData.otp?.[index] || ''}
            onChange={(e) => handleChange(e, index)}
          />
        ))}
      </div>

      {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

      <div className="flex justify-center">
        <button
          onClick={onContinue}
          disabled={!isVerified || loading}
          className="btn-primary rounded-full"
        >
          {loading ? 'Verifying...' : 'Continue'}
        </button>
      </div>
    </div>
  );
};

export default VerifyUser;
