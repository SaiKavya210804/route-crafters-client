import { useState, useContext } from "react";
import { CommunityContext } from "../context/CommunityContext";
import "../styles/Community.css";

const CreateCommunity = () => {
  const { addCommunity } = useContext(CommunityContext);
  const [newCommunity, setNewCommunity] = useState({ name: "", description: "" });

  const handleCreate = async (e) => {
    e.preventDefault();
    await addCommunity(newCommunity);
    setNewCommunity({ name: "", description: "" });
  };

  return (
    <form className="create-community" onSubmit={handleCreate}>
      <input
        type="text"
        placeholder="Community Name"
        value={newCommunity.name}
        onChange={(e) => setNewCommunity({ ...newCommunity, name: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={newCommunity.description}
        onChange={(e) => setNewCommunity({ ...newCommunity, description: e.target.value })}
        required
      />
      <button type="submit">Create Community</button>
    </form>
  );
};

export default CreateCommunity;
