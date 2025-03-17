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

const LanguageContainer = styled.div`
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

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1rem;
  cursor: pointer;
  user-select: none;
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

const Languages = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleLanguageChange = (index, field) => {
    setFormData((prevFormData) => {
      const updatedLanguages = prevFormData.languages.map((lang, i) =>
        i === index ? { ...lang, [field]: !lang[field] } : lang
      );
      console.log(updatedLanguages)
      return { ...prevFormData, languages: updatedLanguages };
    });
  };
  

  const handleInputChange = (index, value) => {
    const updatedLanguages = formData.languages.map((lang, i) =>
      i === index ? { ...lang, name: value } : lang
    );
    setFormData({ ...formData, languages: updatedLanguages });
  };

  const addLanguage = () => {
    setFormData({
      ...formData,
      languages: [...formData.languages, { name: "", read: true, write: false, speak: false }],
    });
  };

  const removeLanguage = (index) => {
    if (formData.languages.length > 1) {
      const updatedLanguages = formData.languages.filter((_, i) => i !== index);
      setFormData({ ...formData, languages: updatedLanguages });
    }
  };

  return (
    <Container>
      <Title>Step 3: Languages</Title>

      {formData.languages.map((lang, index) => (
        <LanguageContainer key={index}>
          <Input
            type="text"
            placeholder="Language"
            value={lang.name}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />

          <CheckboxContainer>
            <CheckboxLabel>
              <input
                type="checkbox"
              
                checked={lang.read}
                onChange={() => handleLanguageChange(index, "read")}
              />
              Read
            </CheckboxLabel>

            <CheckboxLabel>
              <input
                type="checkbox"
                checked={lang.write}
                onChange={() => handleLanguageChange(index, "write")}
              />
              Write
            </CheckboxLabel>

            <CheckboxLabel>
              <input
                type="checkbox"
                checked={lang.speak}
                onChange={() => handleLanguageChange(index, "speak")}
              />
              Speak
            </CheckboxLabel>
          </CheckboxContainer>

          {formData.languages.length > 1 && <Button onClick={() => removeLanguage(index)}>Remove</Button>}
        </LanguageContainer>
      ))}

      <Button onClick={addLanguage}>Add Language</Button>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "15px" }}>
        <Button onClick={prevStep}>Back</Button>
        <Button primary onClick={nextStep}>Next</Button>
      </div>
    </Container>
  );
};

Languages.propTypes = {
  formData: PropTypes.shape({
    languages: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        read: PropTypes.bool,
        write: PropTypes.bool,
        speak: PropTypes.bool,
      })
    ),
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default Languages;
