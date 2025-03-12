import PropTypes from "prop-types";

const PersonalDetails = ({ formData, setFormData, nextStep }) => {
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      personal: {
        ...prevData.personal,
        [name]: value,
      },
    }));
  };

  return (
    <div className="form-container">
      <h2>Step 1: Personal Details</h2>

      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.personal?.name || ""}
        onChange={handleChange}
        required
      />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.personal?.email || ""}
        onChange={handleChange}
        required
      />

      <label>Phone:</label>
      <input
        type="tel"
        name="phone"
        value={formData.personal?.phone || ""}
        onChange={handleChange}
        required
      />

      <label>Date of Birth:</label>
      <input
        type="date"
        name="dob"
        value={formData.personal?.dob || ""}
        onChange={handleChange}
        required
      />

      <label>Gender:</label>
      <div className="gender-options">
        <label htmlFor="male">
          <input
            type="radio"
            id="male"
            name="gender"
            value="Male"
            checked={formData.personal?.gender === "Male"}
            onChange={handleChange}
            required
          />
          Male
        </label>

        <label htmlFor="female">
          <input
            type="radio"
            id="female"
            name="gender"
            value="Female"
            checked={formData.personal?.gender === "Female"}
            onChange={handleChange}
            required
          />
          Female
        </label>

        <label htmlFor="other">
          <input
            type="radio"
            id="other"
            name="gender"
            value="Other"
            checked={formData.personal?.gender === "Other"}
            onChange={handleChange}
            required
          />
          Other
        </label>
      </div>

      <div className="button-container">
        <button onClick={nextStep} className="next-button">
          Next
        </button>
      </div>
    </div>
  );
};

// Define PropTypes for validation
PersonalDetails.propTypes = {
  formData: PropTypes.shape({
    personal: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
      dob: PropTypes.string,
      gender: PropTypes.string,
    }),
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default PersonalDetails;
