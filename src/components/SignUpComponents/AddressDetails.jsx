import PropTypes from "prop-types";

const AddressDetails = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleInputChange = (e, type, field) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [type]: {
          ...prevData.address?.[type],
          [field]: value,
        },
      },
    }));
  };

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setFormData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        sameAsPermanent: isChecked,
        permanent: isChecked ? { ...prevData.address?.current } : {}, // Copy current to permanent if checked
      },
    }));
  };

  return (
    <div>
      {/* ✅ Added Step Heading */}
      <h2>Step-2: Address Details</h2>

      {/* Current Address */}
      <fieldset>
        <legend>Current Address</legend>
        <input
          type="text"
          placeholder="Street"
          value={formData?.address?.current?.street || ""}
          onChange={(e) => handleInputChange(e, "current", "street")}
        />
        <input
          type="text"
          placeholder="City"
          value={formData?.address?.current?.city || ""}
          onChange={(e) => handleInputChange(e, "current", "city")}
        />
        <input
          type="text"
          placeholder="State"
          value={formData?.address?.current?.state || ""}
          onChange={(e) => handleInputChange(e, "current", "state")}
        />
        <input
          type="text"
          placeholder="Country"
          value={formData?.address?.current?.country || ""}
          onChange={(e) => handleInputChange(e, "current", "country")}
        />
        <input
          type="text"
          placeholder="PIN Code"
          value={formData?.address?.current?.pin || ""}
          onChange={(e) => handleInputChange(e, "current", "pin")}
        />
      </fieldset>

      {/* Permanent Address */}
      <fieldset>
        <legend>Permanent Address</legend>
        <input
          type="text"
          placeholder="Street"
          value={formData?.address?.permanent?.street || ""}
          onChange={(e) => handleInputChange(e, "permanent", "street")}
          disabled={formData?.address?.sameAsPermanent}
        />
        <input
          type="text"
          placeholder="City"
          value={formData?.address?.permanent?.city || ""}
          onChange={(e) => handleInputChange(e, "permanent", "city")}
          disabled={formData?.address?.sameAsPermanent}
        />
        <input
          type="text"
          placeholder="State"
          value={formData?.address?.permanent?.state || ""}
          onChange={(e) => handleInputChange(e, "permanent", "state")}
          disabled={formData?.address?.sameAsPermanent}
        />
        <input
          type="text"
          placeholder="Country"
          value={formData?.address?.permanent?.country || ""}
          onChange={(e) => handleInputChange(e, "permanent", "country")}
          disabled={formData?.address?.sameAsPermanent}
        />
        <input
          type="text"
          placeholder="PIN Code"
          value={formData?.address?.permanent?.pin || ""}
          onChange={(e) => handleInputChange(e, "permanent", "pin")}
          disabled={formData?.address?.sameAsPermanent}
        />
      </fieldset>

      {/* Checkbox for Copying Current to Permanent */}
      <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
        <input
          type="checkbox"
          id="sameAsPermanent"
          checked={formData?.address?.sameAsPermanent || false}
          onChange={handleCheckboxChange}
          style={{ width: "16px", height: "16px", cursor: "pointer", marginRight: "8px" }}
        />
        <label htmlFor="sameAsPermanent" style={{ cursor: "pointer" }}>
          Set Current Address as Permanent Address
        </label>
      </div>

      {/* Navigation Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={prevStep}>Back</button>
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

// ✅ Define Prop Types for validation
AddressDetails.propTypes = {
  formData: PropTypes.shape({
    address: PropTypes.shape({
      permanent: PropTypes.shape({
        street: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        country: PropTypes.string,
        pin: PropTypes.string,
      }),
      current: PropTypes.shape({
        street: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        country: PropTypes.string,
        pin: PropTypes.string,
      }),
      sameAsPermanent: PropTypes.bool,
    }),
  }),
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default AddressDetails;
