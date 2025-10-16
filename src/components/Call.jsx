import { Phone } from 'lucide-react';

export default function CallIcon() {
  const phoneNumber = '+91 8929712603';

  const handleCall = () => {
    // Opens the phone's native dial pad with the number pre-filled
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-start bottom-2 p-6">
      <div className="text-left">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">
          Contact Support
        </h1>
        
        <button
          onClick={handleCall}
          className="bg-red-600 hover:bg-red-700 text-white rounded-full p-6 shadow-xl transition transform hover:scale-110 active:scale-95"
          aria-label="Call"
        >
          <Phone size={40} />
        </button>

        <p className="text-gray-600 mt-4">Click to call {phoneNumber}</p>
      </div>
    </div>
  );
}