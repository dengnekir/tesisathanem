import { MessageCircle } from "lucide-react";

const FloatingContact = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Merhaba! Fayans, tesisat ve dekorasyon hizmetleriniz hakkında bilgi almak istiyorum."
    );
    window.open(`https://wa.me/905354703826?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Direct WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="floating-btn bg-green-500 hover:bg-green-600 text-white"
        aria-label="WhatsApp ile İletişim"
        title="WhatsApp ile mesaj gönder"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default FloatingContact;
