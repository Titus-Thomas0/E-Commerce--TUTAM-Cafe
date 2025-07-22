import React, { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const BasicInfo = ({ formData, setFormData, onContinue }) => {
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  // Password strength checks
  const passwordChecks = {
    minLength: formData.password?.length >= 8,
    hasUppercase: /[A-Z]/.test(formData.password),
    hasSymbol: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password),
    hasNumber: /\d/.test(formData.password),
  };

  useEffect(() => {
    const newErrors = {};

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email.';
    }

    if (formData.mobileNumber && !/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Enter a valid 10-digit mobile number.';
    }

    if (
      formData.password &&
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);
  }, [formData]);

  const handleContinue = () => {
    const isValid =
      formData.email &&
      /\S+@\S+\.\S+/.test(formData.email) &&
      /^[6-9]\d{9}$/.test(formData.mobileNumber) &&
      formData.password &&
      formData.password === formData.confirmPassword &&
      passwordChecks.minLength &&
      passwordChecks.hasUppercase &&
      passwordChecks.hasSymbol &&
      passwordChecks.hasNumber;

    if (isValid) {
      onContinue();
    } else {
      alert('Please fix the validation errors before continuing.');
    }
  };

  const getTagStyle = condition =>
    `px-2 py-1 rounded text-sm mr-2 mb-2 ${
      condition
        ? 'bg-[var(--color-success-light)] text-[var(--color-success)]'
        : 'bg-[var(--color-error-light)] text-[var(--color-error)]'
    }`;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Login to TUTAM Cafe</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Email */}
        <div>
          <label className="text-md font-bold block mb-1">EMAIL ID</label>
          <input
            type="email"
            placeholder="Enter Email ID"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            className={`w-full border-b py-2 focus:outline-none ${
              errors.email ? 'border-[var(--color-error)]' : ''
            }`}
          />
          {errors.email && (
            <p className="text-[var(--color-error)] text-sm mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Mobile */}
        <div>
          <label className="text-md font-bold block mb-1">MOBILE NUMBER</label>
          <input
            type="tel"
            placeholder="Enter Mobile Number"
            value={formData.mobileNumber}
            onChange={e =>
              setFormData({ ...formData, mobileNumber: e.target.value })
            }
            className={`w-full border-b py-2 focus:outline-none ${
              errors.mobileNumber ? 'border-[var(--color-error)]' : ''
            }`}
          />
          {errors.mobileNumber && (
            <p className="text-[var(--color-error)] text-sm mt-1">
              {errors.mobileNumber}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="relative">
          <label className="text-md font-bold block mb-1">CREATE PASSWORD</label>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter Password"
            value={formData.password}
            onChange={e =>
              setFormData({ ...formData, password: e.target.value })
            }
            onFocus={() => setPasswordTouched(true)}
            className={`w-full border-b py-2 pr-10 focus:outline-none ${
              errors.password ? 'border-[var(--color-error)]' : ''
            }`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-8 text-gray-500"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>

          {/* Password tags */}
          {passwordTouched && (
            <div className="flex flex-wrap mt-3">
              <span className={getTagStyle(passwordChecks.minLength)}>
                8 Characters
              </span>
              <span className={getTagStyle(passwordChecks.hasUppercase)}>
                1 Uppercase
              </span>
              <span className={getTagStyle(passwordChecks.hasSymbol)}>
                1 Symbol
              </span>
              <span className={getTagStyle(passwordChecks.hasNumber)}>
                1 Numeric
              </span>
            </div>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="text-md font-bold block mb-1">
            CONFIRM PASSWORD
          </label>
          <input
            type="password"
            placeholder="Re-enter Password"
            value={formData.confirmPassword}
            onChange={e =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            className={`w-full border-b py-2 focus:outline-none ${
              errors.confirmPassword ? 'border-[var(--color-error)]' : ''
            }`}
          />
          {errors.confirmPassword && (
            <p className="text-[var(--color-error)] text-sm mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>
      </div>

      {/* Continue Button */}
      <div className="flex items-center justify-center">
        <button
          onClick={handleContinue}
          className="btn-primary rounded-full"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default BasicInfo;
