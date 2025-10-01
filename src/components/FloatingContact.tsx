import { MessageCircle } from "lucide-react";

const FloatingContact = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Merhaba! Fayans, tesisat ve dekorasyon hizmetleriniz hakkında bilgi almak istiyorum."
    );
    window.open(`https://wa.me/905354703826?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50">
      {/* Direct WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="floating-btn bg-green-500 hover:bg-green-600 text-white w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center"
        aria-label="WhatsApp ile İletişim"
        title="WhatsApp ile mesaj gönder"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </div>
  );
};

export default FloatingContact;
