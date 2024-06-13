import { signOut } from "next-auth/react";

const SignoutButton: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <button
      onClick={() => {
        signOut();
        onClose();
      }}
      className="text-gray-12"
    >
      Sign Out
    </button>
  );
};

export default SignoutButton;
