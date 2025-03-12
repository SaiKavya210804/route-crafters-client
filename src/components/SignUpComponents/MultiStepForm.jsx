import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import AddressDetails from "./AddressDetails";
import LanguageHobbies from "./LanguageHobbies";
import Credentials from "./Credentials";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personal: {
      name: "",
      email: "",
      phone: "",
      dob: "",
      gender: "",
    },
    address: {
      permanentAddress: "",
      currentAddress: "",
      sameAsPermanent: false,
    },
    languages: [],
    hobbies: [],
    credentials: {
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="multi-step-form">
      {step === 1 && (
        <PersonalDetails formData={formData} setFormData={setFormData} nextStep={nextStep} />
      )}
      {step === 2 && (
        <AddressDetails formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
      )}
      {step === 3 && (
        <LanguageHobbies formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
      )}
      {step === 4 && (
        <Credentials formData={formData} setFormData={setFormData} prevStep={prevStep} />
      )}
    </div>
  );
};

export default MultiStepForm;
