import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PersonalDetails from "../components/SignUpComponents/PersonalDetails";
import AddressDetails from "../components/SignUpComponents/AddressDetails";
import Languages from "../components/SignUpComponents/Languages";
import Credentials from "../components/SignUpComponents/Credentials";
import Hobbies from "../components/SignUpComponents/Hobbies";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personal: { name: "", email: "", phone: "", dob: "", gender: "" },
    address: { permanent: "", current: "", sameAsPermanent: false },
    languages: [{ name: "", read: false, write: false, speak: false }],
    hobbies: [] ,//create a object in languages array{name: ....}
    credentials: { username: "", email: "", password: "", confirmPassword: "" }
  });

  const navigate = useNavigate();

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async () => {
    console.log(formData)
    if (formData.credentials.password !== formData.credentials.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Ensure email from personal details is stored in credentials
    const updatedFormData = {
      ...formData,
      credentials: {
        ...formData.credentials,
        email: formData.personal.email // Copy email from personal details
      }
    };

    try {
      await axios.post("https://route-crafters-server.onrender.com/users", updatedFormData);
      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        {step === 1 && <PersonalDetails formData={formData} setFormData={setFormData} nextStep={nextStep} />}
        {step === 2 && <AddressDetails formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <Languages formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
        {step === 4 && <Hobbies formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
        {step === 5 && <Credentials formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} prevStep={prevStep} />}
      </div>
    </div>
  );
};

export default SignUp;
