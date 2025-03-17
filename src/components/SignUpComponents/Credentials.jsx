import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Credentials = ({ formData, setFormData, prevStep, handleSubmit }) => { 
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Ensure `credentials` exists in `formData`
  const credentials = formData.credentials || { username: "", password: "", confirmPassword: "" };

  return (
    <Container>
      <Title>Step 5: Credentials</Title>

      {/* Username Field */}
      <InputContainer>
        <Input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) =>
            setFormData({
              ...formData,
              credentials: {
                ...credentials,
                username: e.target.value,
              },
            })
          }
          required
        />
      </InputContainer>

      {/* Password Field */}
      <InputContainer>
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={credentials.password}
          onChange={(e) =>
            setFormData({
              ...formData,
              credentials: {
                ...credentials,
                password: e.target.value,
              },
            })
          }
          required
        />
        <ToggleIcon onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </ToggleIcon>
      </InputContainer>

      {/* Confirm Password Field */}
      <InputContainer>
        <Input
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm Password"
          value={credentials.confirmPassword}
          onChange={(e) =>
            setFormData({
              ...formData,
              credentials: {
                ...credentials,
                confirmPassword: e.target.value,
              },
            })
          }
          required
        />
        <ToggleIcon onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
        </ToggleIcon>
      </InputContainer>

      {/* Navigation Buttons */}
      <ButtonContainer>
        {prevStep && <Button onClick={prevStep}>Back</Button>}
        <Button onClick={handleSubmit}>Submit</Button>
      </ButtonContainer>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 400px;
  margin: auto;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const ToggleIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  background-color: #007bff;
  color: white;

  &:hover {
    background-color: #0056b3;
  }
`;

// PropTypes for validation
Credentials.propTypes = {
  formData: PropTypes.shape({
    credentials: PropTypes.shape({
      username: PropTypes.string,
      password: PropTypes.string,
      confirmPassword: PropTypes.string,
    }),
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
  prevStep: PropTypes.func, // Optional if not always used
  handleSubmit: PropTypes.func.isRequired,
};

export default Credentials;
