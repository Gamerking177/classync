import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Delay opening the modal by 3 seconds after a successful login
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 3000);

        // Clear timeout if the user logs out before 3 seconds pass
        return () => clearTimeout(timer);
      } else {
        setIsOpen(false);
      }
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 bg-white rounded-full p-1 text-gray-600 hover:text-gray-800"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Image section */}
            <img
              src="/teckinka2.jpeg"
              alt="Sample"
              className="w-full max-w-md h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default NewsletterModal;
