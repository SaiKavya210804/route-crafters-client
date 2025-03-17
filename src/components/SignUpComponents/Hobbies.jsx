import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
  color: #4a4a4a;
`;

const HobbyContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  background: #f9f9f9;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Button = styled.button`
  background: ${(props) => (props.primary ? "#28a745" : "#6c757d")};
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 10px;
  margin-right: 5px;
  &:hover {
    background: ${(props) => (props.primary ? "#218838" : "#5a6268")};
  }
`;

const Hobbies = ({ formData, setFormData, nextStep, prevStep }) => {
  const { hobbies } = formData;

  const handleInputChange = (e) => {
    setFormData({ ...formData, hobbyInput: e.target.value });
  };

  const addHobby = () => {
    if (formData.hobbyInput.trim() !== "") {
      setFormData({
        ...formData,
        hobbies: [...hobbies, formData.hobbyInput.trim()],
        hobbyInput: "",
      });
    }
  };

  const removeHobby = (index) => {
    setFormData({
      ...formData,
      hobbies: hobbies.filter((_, i) => i !== index),
    });
  };

  return (
    <Container>
      <Title>Step 4: Hobbies</Title>

      <Input
        type="text"
        value={formData.hobbyInput || ""}
        onChange={handleInputChange}
        placeholder="Enter hobby"
      />
      <Button onClick={addHobby}>Add Hobby</Button>

      {hobbies.map((hobby, index) => (
        <HobbyContainer key={index}>
          <Input type="text" value={hobby} readOnly />
          <Button onClick={() => removeHobby(index)}>Remove</Button>
        </HobbyContainer>
      ))}

      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "15px" }}>
        <Button onClick={prevStep}>Back</Button>
        <Button primary onClick={nextStep}>Next</Button>
      </div>
    </Container>
  );
};

Hobbies.propTypes = {
  formData: PropTypes.shape({
    hobbies: PropTypes.arrayOf(PropTypes.string),
    hobbyInput: PropTypes.string,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default Hobbies;
