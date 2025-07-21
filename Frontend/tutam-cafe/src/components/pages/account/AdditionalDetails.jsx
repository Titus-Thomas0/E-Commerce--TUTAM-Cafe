import React, { useState } from 'react';
import axios from 'axios';

const AdditionalDetails = ({ formData, setFormData }) => {
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setResponseMsg('');

    try {
      const response = await axios.post('https://your-backend-api.com/register', formData);

      if (response.status === 200 || response.status === 201) {
        setResponseMsg('Registration successful!');
      } else {
        setResponseMsg('Unexpected response. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setResponseMsg('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Step 3: Additional Details</h2>

      <textarea
        placeholder="Address"
        value={formData.address}
        onChange={e => setFormData({ ...formData, address: e.target.value })}
        className="block w-full border p-2 rounded mb-4"
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="px-4 py-2 rounded-full bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)] transition"
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>

      {responseMsg && (
        <p className="mt-4 text-sm text-green-600">{responseMsg}</p>
      )}
    </div>
  );
};

export default AdditionalDetails;


