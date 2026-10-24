import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdditionalDetails = ({ formData, setFormData }) => {
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateField = (field, value, mail = false, sms = false) => {
    switch (field) {
      case 'firstName':
        return value.trim() ? '' : 'First Name is required';
      case 'lastName':
        return value.trim() ? '' : 'Last Name is required';
      case 'birthDate':
        return value.trim() ? '' : 'Birth Date is required';
      case 'preferences':
        return mail || sms ? '' : 'Select at least one communication preference';
      default:
        return '';
    }
  };

  const handleBlur = (field) => {
    const error = validateField(field, formData[field]);
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleCheckboxChange = (field, checked) => {
    const updatedFormData = { ...formData, [field]: checked };
    setFormData(updatedFormData);
    const error = validateField('preferences', null, updatedFormData.mail, updatedFormData.sms);
    setErrors(prev => ({ ...prev, preferences: error }));
  };

  const handleSubmit = async () => {
    const validationErrors = {
      firstName: validateField('firstName', formData.firstName),
      lastName: validateField('lastName', formData.lastName),
      birthDate: validateField('birthDate', formData.birthDate),
      preferences: validateField('preferences', null, formData.mail, formData.sms),
    };

    setErrors(validationErrors);
    setResponseMsg('');

    const hasErrors = Object.values(validationErrors).some(err => err);
    if (hasErrors) return;

    setLoading(true);
    try {
      const response = await axios.post('https://your-backend-api.com/register', formData);
      if (response.status === 200 || response.status === 201) {
        navigate('/');
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

      {/* First Name */}
      <div className='mb-10'>
        <label className="text-md font-bold block mb-1">FIRST NAME</label>
        <input
          type="text"
          placeholder="Enter First Name"
          value={formData.firstName}
          onChange={e => setFormData({ ...formData, firstName: e.target.value })}
          onBlur={() => handleBlur('firstName')}
          className="w-full border-b py-2 focus:outline-none"
        />
        {errors.firstName && <p className="text-[var(--color-error)] text-sm">{errors.firstName}</p>}
      </div>

      {/* Last Name */}
      <div className='mb-10'>
        <label className="text-md font-bold block mb-1">LAST NAME</label>
        <input
          type="text"
          placeholder="Enter Last Name"
          value={formData.lastName}
          onChange={e => setFormData({ ...formData, lastName: e.target.value })}
          onBlur={() => handleBlur('lastName')}
          className="w-full border-b py-2 focus:outline-none"
        />
        {errors.lastName && <p className="text-[var(--color-error)] text-sm">{errors.lastName}</p>}
      </div>

      {/* Birth Date */}
      <div className='mb-10'>
        <label className="text-md font-bold block mb-1">BIRTH DATE</label>
        <input
          type="date"
          placeholder="DD/MM/YY*"
          value={formData.birthDate}
          onChange={e => setFormData({ ...formData, birthDate: e.target.value })}
          onBlur={() => handleBlur('birthDate')}
          className="w-full border-b py-2 focus:outline-none"
        />
        <p className="text-sm text-[var(--color-text)]">
          Share your birthday to receive a reward during that month. It cannot be changed after submission.
        </p>
        {errors.birthDate && <p className="text-[var(--color-error)] text-sm">{errors.birthDate}</p>}
      </div>

      {/* Referral Code */}
      <div className='mb-10'>
        <label className="text-md font-bold block mb-1">Got a referral code</label>
        <input
          type="number"
          placeholder="Enter Code"
          value={formData.code}
          onChange={e => setFormData({ ...formData, code: e.target.value })}
          className="w-full border-b py-2 focus:outline-none"
        />
        <p className="text-sm text-[var(--color-text)]">
          If you got a TUTAM referral code, enter it here for a special reward.
        </p>
      </div>

      {/* Communication Preferences */}
      <h2 className="text-xl font-semibold mb-10">PREFERENCES and TERMS</h2>
      <div className='mb-10'>
        <p className="text-md font-bold block mb-4">Where shall we reach you?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={formData.mail}
              onChange={e => handleCheckboxChange('mail', e.target.checked)}
              className="w-6 h-6 border-2 border-[var(--color-primary)] rounded-md accent-[var(--color-primary)]"
            />
            <span className="font-semibold">E-Mail</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={formData.sms}
              onChange={e => handleCheckboxChange('sms', e.target.checked)}
              className="w-6 h-6 border-2 border-[var(--color-primary)] rounded-md accent-[var(--color-primary)]"
            />
            <span className="font-semibold">SMS</span>
          </label>
        </div>
        {errors.preferences && <p className="text-[var(--color-error)] text-sm">{errors.preferences}</p>}
        <p className="text-sm">
          By joining I confirm that I read the{' '}
          <a href="#" className="underline font-semibold cursor-pointer">Terms Of Use</a> and{' '}
          <a href="#" className="underline font-semibold cursor-pointer">Privacy Policy</a>. I agree with the Terms and Conditions.
        </p>
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-center">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="btn-primary rounded-full"
        >
          {loading ? 'Finishing...' : 'Finish Sign Up'}
        </button>
      </div>

      {/* Response Message */}
      {responseMsg && (
        <p className="mt-4 text-sm text-[var(--color-error)] text-center">{responseMsg}</p>
      )}
    </div>
  );
};

export default AdditionalDetails;
