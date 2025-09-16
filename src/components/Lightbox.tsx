import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: { before: string; after: string; title: string }[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox = ({ isOpen, onClose, images, currentIndex, onNext, onPrev }: LightboxProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrev();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors duration-300"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Navigation Buttons */}
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image Content */}
        <div className="bg-white">
          <div className="grid grid-cols-2">
            <div className="relative">
              <img 
                src={currentImage.before} 
                alt={`${currentImage.title} - Önce`}
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-medium">
                Önce
              </div>
            </div>
            <div className="relative">
              <img 
                src={currentImage.after} 
                alt={`${currentImage.title} - Sonra`}
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-medium">
                Sonra
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-2xl font-serif font-semibold text-primary mb-2">
              {currentImage.title}
            </h3>
            <div className="text-center text-muted-foreground">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;