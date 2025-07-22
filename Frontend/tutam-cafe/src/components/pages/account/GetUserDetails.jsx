import React, { useState } from 'react';
import Stepper from './Stepper';
import BasicInfo from './BasicInfo';
import VerifyUser from './VerifyUser';
import AdditionalDetails from './AdditionalDetails';

function GetUserDetails() {
  const [currentStep, setCurrentStep] = useState(1);

  // Shared form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
    otp: '',
    address: '',
  });

  const goToNextStep = () => {
    if (currentStep < 3) setCurrentStep(prev => prev + 1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <BasicInfo formData={formData} setFormData={setFormData} onContinue={goToNextStep} />;
      case 2:
        return <VerifyUser formData={formData} setFormData={setFormData} onContinue={goToNextStep} />;
      case 3:
        return <AdditionalDetails formData={formData} setFormData={setFormData} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Stepper currentStep={currentStep} />
      <div className="mx-auto max-w-7xl px-4 py-10 text-[var(--color-primary)]">
        {renderStepContent()}
      </div>
    </div>
  );
}

export default GetUserDetails;

