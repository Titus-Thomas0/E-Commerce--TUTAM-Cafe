import React, { useRef } from 'react';

const VerifyUser = ({ formData, setFormData, onContinue }) => {
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/^[0-9]$/.test(value) || value === '') {
      const newOtpArray = formData.otp.split('');
      newOtpArray[index] = value;
      const updatedOtp = newOtpArray.join('');
      setFormData({ ...formData, otp: updatedOtp });

      if (value && index < 5) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData('text').replace(/\D/g, '');
    if (paste.length === 6) {
      const otpArray = paste.split('').slice(0, 6);
      setFormData({ ...formData, otp: otpArray.join('') });
      otpArray.forEach((digit, i) => {
        inputsRef.current[i].value = digit;
      });
      inputsRef.current[5].focus();
    }
  };

  return (
    <div>
      <h2 className="text-xl mb-15">
        OTP was sent to <a className="underline font-semibold cursor-pointer">+91xxxxxxxx02</a>
      </h2>

      <div
        className="flex justify-center space-x-3 mb-15"
        onPaste={handlePaste}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <input
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            type="text"
            maxLength="1"
            className="w-12 h-14 border-2 border-[var(--color-primary)] rounded-md text-center text-2xl focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
            defaultValue={formData.otp?.[index] || ''}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <button onClick={onContinue} className="btn-primary rounded-full">
          Continue
        </button>
      </div>
    </div>
  );
};

export default VerifyUser;

