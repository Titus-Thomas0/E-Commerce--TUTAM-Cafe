import React from 'react';

const VerifyUser = ({ formData, setFormData, onContinue }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Step 2: Verify OTP</h2>

      <input
        type="text"
        placeholder="Enter OTP"
        value={formData.otp}
        onChange={e => setFormData({ ...formData, otp: e.target.value })}
        className="block w-full border p-2 rounded mb-4"
      />

      <button onClick={onContinue} className="btn-primary">Continue</button>
    </div>
  );
};

export default VerifyUser;
