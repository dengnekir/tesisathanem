import { MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

const FloatingContact = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Merhaba! Tesisat, döşeme ve renovasyon hizmetleriniz hakkında bilgi almak istiyorum.");
    window.open(`https://wa.me/905551234567?text=${message}`, "_blank");
  };

  const handlePhoneClick = () => {
    window.open("tel:+905551234567", "_self");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Menu */}
      {isExpanded && (
        <div className="mb-4 space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-strong transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            <span className="font-medium">WhatsApp</span>
          </button>
          
          <button
            onClick={handlePhoneClick}
            className="flex items-center bg-primary hover:bg-primary-dark text-primary-foreground px-4 py-3 rounded-full shadow-strong transition-all duration-300 hover:scale-105"
          >
            <Phone className="w-5 h-5 mr-2" />
            <span className="font-medium">Ara</span>
          </button>
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`floating-btn ${isExpanded ? 'rotate-45' : ''}`}
        aria-label="İletişim"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default FloatingContact;