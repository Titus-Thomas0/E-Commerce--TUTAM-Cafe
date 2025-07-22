import React, { useState } from 'react';
import axios from 'axios';

const AdditionalDetails = ({ formData, setFormData }) => {
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.birthDate) newErrors.birthDate = 'Birth Date is required';
    if (!formData.mail && !formData.sms)
      newErrors.preferences = 'At least one communication preference is required';
    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validate();
    setErrors(validationErrors);
    setResponseMsg('');

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
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
      <h2 className="text-xl font-semibold mb-10">ONE FINAL STEP, TELL US MORE ABOUT YOU</h2>

      <div className='mb-10'>
        <label className="text-md font-bold block mb-1">FIRST NAME</label>
        <input
          type="text"
          placeholder="Enter First Name"
          value={formData.firstName}
          onChange={e => setFormData({ ...formData, firstName: e.target.value })}
          className="w-full border-b py-2 focus:outline-none"
        />
        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
      </div>

      <div className='mb-10'>
        <label className="text-md font-bold block mb-1">LAST NAME</label>
        <input
          type="text"
          placeholder="Enter Last Name"
          value={formData.lastName}
          onChange={e => setFormData({ ...formData, lastName: e.target.value })}
          className="w-full border-b py-2 focus:outline-none"
        />
        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
      </div>

      <div className='mb-10'>
        <label className="text-md font-bold block mb-1">BIRTH DATE</label>
        <input
          type="date"
          placeholder="DD/MM/YY*"
          value={formData.birthDate}
          onChange={e => setFormData({ ...formData, birthDate: e.target.value })}
          className="w-full border-b py-2 focus:outline-none"
        />
        <p className="text-sm text-gray-600">Share your birthday to receive a reward during that month. It cannot be changed after submission.</p>
        {errors.birthDate && <p className="text-red-500 text-sm">{errors.birthDate}</p>}
      </div>

      <div className='mb-10'>
        <label className="text-md font-bold block mb-1">Got a referral code</label>
        <input
          type="number"
          placeholder="Enter Code"
          value={formData.code}
          onChange={e => setFormData({ ...formData, code: e.target.value })}
          className="w-full border-b py-2 focus:outline-none"
        />
        <p className="text-sm text-gray-600">If you got a TUTAM referral code, enter it here for a special reward.</p>
      </div>

      <h2 className="text-xl font-semibold mb-10">PREFERENCES and TERMS</h2>

      <div className='mb-10'>
        <p className="text-md font-bold block mb-4">Where shall we reach you?</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="email"
              name="email"
              checked={formData.mail}
              onChange={e => setFormData({ ...formData, mail: e.target.checked })}
              className="w-8 h-8 border-5 border-[var(--color-primary)] rounded-md focus:ring-[var(--color-primary)] accent-[var(--color-primary)]"
            />
            <span className="font-semibold">E-Mail</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="sms"
              name="sms"
              checked={formData.sms}
              onChange={e => setFormData({ ...formData, sms: e.target.checked })}
              className="w-8 h-8 border-5 border-[var(--color-primary)] rounded-md focus:ring-[var(--color-primary)] accent-[var(--color-primary)]"
            />
            <span className="font-semibold">SMS</span>
          </label>
        </div>
        {errors.preferences && <p className="text-red-500 text-sm">{errors.preferences}</p>}

        <p>
          By joining I confirm that I read the{' '}
          <a href="#" className="underline font-semibold cursor-pointer">Terms Of Use</a> and{' '}
          <a href="#" className="underline font-semibold cursor-pointer">Privacy Policy</a>. I agree with the Terms and Conditions.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="btn-primary rounded-full"
        >
          {loading ? 'Finishing...' : 'Finish Sign Up'}
        </button>
      </div>
      

      {responseMsg && (
        <p className="mt-4 text-sm text-green-600">{responseMsg}</p>
      )}
    </div>
  );
};

export default AdditionalDetails;
