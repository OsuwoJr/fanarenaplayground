import React, { useState } from 'react';
import '../index.css';

interface CreateFanClubModalProps {
  onClose: () => void;
}

const CreateFanClubModal: React.FC<CreateFanClubModalProps> = ({ onClose }) => {
  const [clubName, setClubName] = useState('');
  const [clubDescription, setClubDescription] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // New state for simulating success

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate creating the new fan club
    const newClub = { name: clubName, description: clubDescription, members: 1 };
    console.log("New Club created:", newClub); // Log the new club to simulate backend action
    
    setIsSubmitted(true); // Show success message after submission

    setTimeout(() => {
      setIsSubmitted(false); // Reset the form after some time
      onClose(); // Close the modal
    }, 2000); // Close modal after 2 seconds
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Create New Fan Club</h2>
        
        {isSubmitted ? (
          <p className="success-message">Fan Club Created Successfully!</p> // Simulate success message
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Fan Club Name</label>
              <input 
                type="text" 
                className="form-input" 
                value={clubName} 
                onChange={(e) => setClubName(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea 
                className="form-input" 
                value={clubDescription} 
                onChange={(e) => setClubDescription(e.target.value)} 
                required 
              />
            </div>
            <div className="text-center mt-4">
              <button type="submit" className="button">Create Fan Club</button>
              <button type="button" className="button back-button ml-3" onClick={onClose}>Cancel</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CreateFanClubModal;


// for real backend

// import React, { useState } from 'react';
// import '../index.css';

// interface CreateFanClubModalProps {
//   onClose: () => void;
// }

// const CreateFanClubModal: React.FC<CreateFanClubModalProps> = ({ onClose }) => {
//   const [clubName, setClubName] = useState('');
//   const [clubDescription, setClubDescription] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const newClub = { name: clubName, description: clubDescription, members: 1 };
//     // Add logic to handle creating a new fan club
//     onClose();
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <h2>Create New Fan Club</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Fan Club Name</label>
//             <input 
//               type="text" 
//               className="form-input" 
//               value={clubName} 
//               onChange={(e) => setClubName(e.target.value)} 
//               required 
//             />
//           </div>
//           <div className="form-group">
//             <label>Description</label>
//             <textarea 
//               className="form-input" 
//               value={clubDescription} 
//               onChange={(e) => setClubDescription(e.target.value)} 
//               required 
//             />
//           </div>
//           <div className="text-center mt-4">
//             <button type="submit" className="button">Create Fan Club</button>
//             <button type="button" className="button back-button ml-3" onClick={onClose}>Cancel</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateFanClubModal;
