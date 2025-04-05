// const DestinationModal = ({ destination = {}, onClose = () => {} }) => {
//     if (!destination.name) return null; // Hide modal if no data
  
//     return (
//       <div className="modal-overlay">
//         <div className="modal-content">
//           <h2>{destination.name || "Unknown Destination"}</h2>
//           <p><strong>Description:</strong> {destination.description || "No details available"}</p>
//           <p><strong>Best Time to Visit:</strong> {destination.bestTimeToVisit || "Not specified"}</p>
//           <p><strong>Cultural Highlights:</strong> {destination.culturalHighlights || "Not specified"}</p>
//           <p><strong>Average Cost:</strong> ${destination.averageCost ? destination.averageCost.toLocaleString() : "Not specified"}</p>
  
//           {destination.interests && destination.interests.length > 0 && (
//             <p><strong>Interests:</strong> {destination.interests.join(", ")}</p>
//           )}
  
//           {destination.popularActivities && destination.popularActivities.length > 0 && (
//             <p><strong>Popular Activities:</strong> {destination.popularActivities.join(", ")}</p>
//           )}
  
//           <button onClick={onClose}>Close</button>
//         </div>
//       </div>
//     );
//   };
  
//   export default DestinationModal;
  