import { useState } from "react";

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    // Handle email submission logic
    console.log("Email submitted:", email);
    onClose(); // Close the popup after submission
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose} // Close popup when clicking outside the box
      />

      {/* Popup Content */}
      <div className="relative bg-black p-8 rounded-lg shadow-lg border-2 border-accent w-[90%] max-w-md">
        {/* Placeholder Text above */}
        <p className="text-lg text-white mb-4">
          {/* Placeholder CTA Text */}
          Get updates on Cureledger Testnet, Marketplace & DSCI token
        </p>

        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent mb-4 text-black"
          placeholder="Enter your email address"
        />
        <div className="flex justify-between">
          <button
            onClick={handleSubmit}
            className="bg-accent text-bg-100 px-4 py-2 rounded hover:bg-opacity-90 transition"
          >
            Submit
          </button>
          <button
            onClick={onClose}
            className="bg-white text-black px-4 py-2 rounded border-2 border-black hover:bg-gray-300 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
