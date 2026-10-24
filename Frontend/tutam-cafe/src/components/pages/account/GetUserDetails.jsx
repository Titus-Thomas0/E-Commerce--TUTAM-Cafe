import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Stepper from './Stepper';
import BasicInfo from './BasicInfo';
import VerifyUser from './VerifyUser';
import AdditionalDetails from './AdditionalDetails';

function GetUserDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const queryStep = parseInt(new URLSearchParams(location.search).get('step')) || 1;
  const [currentStep, setCurrentStep] = useState(queryStep);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
    otp: '',
    code: '',
    mail: false,
    sms: false,
  });

  const [isStepValid, setIsStepValid] = useState(false);

  useEffect(() => {
    navigate(`?step=${currentStep}`, { replace: true });
  }, [currentStep]);

  const goToNextStep = () => {
    if (currentStep < 3) setCurrentStep(prev => prev + 1);
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <BasicInfo
            formData={formData}
            setFormData={setFormData}
            onContinue={goToNextStep}
            setIsValid={setIsStepValid}
          />
        );
      case 2:
        return (
          <VerifyUser
            formData={formData}
            setFormData={setFormData}
            onContinue={goToNextStep}
            setIsValid={setIsStepValid}
          />
        );
      case 3:
        return (
          <AdditionalDetails
            formData={formData}
            setFormData={setFormData}
            setIsValid={setIsStepValid}
          />
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      const newStep = parseInt(new URLSearchParams(window.location.search).get('step')) || 1;
      setCurrentStep(newStep);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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
