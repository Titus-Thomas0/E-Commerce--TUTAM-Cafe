import React from 'react';

const Stepper = ({ currentStep = 1 }) => {
  const steps = [1, 2, 3];

  return (
    <div className="flex justify-center items-center py-5 text-[var(--color-primary)]">
      <div className="flex items-center">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center">
            {/* Step Circle */}
            <div
              className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 
              ${currentStep >= step
                ? 'border-[var(--color-primary)] bg-[var(--color-background)]'
                : 'border-[var(--color-secondary)] bg-[var(--color-background)]'}`}
            >
              <span className="text-sm font-medium">{step}</span>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div
                className={`w-100 h-1
                ${currentStep > step
                  ? 'bg-[var(--color-primary)]'
                  : 'bg-[var(--color-secondary)]'}`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;

