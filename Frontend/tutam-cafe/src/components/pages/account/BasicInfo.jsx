import React from 'react';

const BasicInfo = ({ formData, setFormData, onContinue }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Step 1: Basic Info</h2>

      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={e => setFormData({ ...formData, name: e.target.value })}
        className="block w-full border p-2 rounded mb-4"
      />

      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={e => setFormData({ ...formData, email: e.target.value })}
        className="block w-full border p-2 rounded mb-4"
      />

      <input
        type="tel"
        placeholder="Phone"
        value={formData.phone}
        onChange={e => setFormData({ ...formData, phone: e.target.value })}
        className="block w-full border p-2 rounded mb-4"
      />

      <button onClick={onContinue} className="btn-primary">Continue</button>
    </div>
  );
};

export default BasicInfo;

