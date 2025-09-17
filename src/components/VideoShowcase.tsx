import { useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, X } from "lucide-react";

const VideoShowcase = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [fullscreenVideo, setFullscreenVideo] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const videos = [
    {
      id: 1,
      title: "Banyo Renovasyonu - Çalışma Sürecim",
      description: "Modern banyo tasarımından kuruluma kadar tüm süreç",
      thumbnail:
        "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder video
      duration: "2:45",
    },
    {
      id: 2,
      title: "Mutfak Döşemesi - Profesyonel Uygulama",
      description: "Seramik döşeme tekniklerim ve detay işçiliği",
      thumbnail:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder video
      duration: "3:20",
    },
    {
      id: 3,
      title: "Dekorasyon ve Tadilat - İç Mekan Düzenlemesi",
      description: "Modern dekorasyon çözümleri ve iç mekan tasarımı",
      thumbnail:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder video
      duration: "1:55",
    },
  ];

  const togglePlay = (videoId: number) => {
    const videoElement = document.getElementById(
      `video-${videoId}`
    ) as HTMLVideoElement;

    if (playingVideo === videoId) {
      videoElement.pause();
      setPlayingVideo(null);
    } else {
      // Pause other videos
      videos.forEach((video) => {
        if (video.id !== videoId) {
          const otherVideo = document.getElementById(
            `video-${video.id}`
          ) as HTMLVideoElement;
          if (otherVideo) {
            otherVideo.pause();
          }
        }
      });

      videoElement.muted = isMuted;
      videoElement.play();
      setPlayingVideo(videoId);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (playingVideo) {
      const videoElement = document.getElementById(
        `video-${playingVideo}`
      ) as HTMLVideoElement;
      if (videoElement) {
        videoElement.muted = !isMuted;
      }
    }
  };

  const openFullscreen = (videoId: number) => {
    setFullscreenVideo(videoId);
    document.body.style.overflow = "hidden";
  };

  const closeFullscreen = () => {
    setFullscreenVideo(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="videos" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-primary fade-in">
            İşbaşında
          </h2>
          <div className="w-32 h-1.5 bg-gradient-accent mx-auto mb-10 rounded-full"></div>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            İstanbul genelindeki projelerimizde çalışma sürecimizi izleyin
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="video-card fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-soft group-hover:shadow-warm transition-all duration-500">
                <video
                  id={`video-${video.id}`}
                  className="w-full h-64 object-cover"
                  poster={video.thumbnail}
                  muted={isMuted}
                  playsInline
                  preload="metadata"
                  onEnded={() => setPlayingVideo(null)}
                >
                  <source src={video.videoUrl} type="video/mp4" />
                  Tarayıcınız video oynatmayı desteklemiyor.
                </video>

                {/* Play/Pause Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                  <button
                    onClick={() => togglePlay(video.id)}
                    className={`
                      w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm text-primary
                      flex items-center justify-center shadow-medium
                      transition-all duration-300 hover:scale-110 hover:bg-white
                      ${
                        playingVideo === video.id
                          ? "opacity-80"
                          : "opacity-90 group-hover:opacity-100"
                      }
                    `}
                    aria-label={
                      playingVideo === video.id ? "Video durdur" : "Video oynat"
                    }
                  >
                    {playingVideo === video.id ? (
                      <Pause size={24} className="text-primary" />
                    ) : (
                      <Play size={24} className="text-primary ml-1" />
                    )}
                  </button>
                </div>

                {/* Control Bar */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={toggleMute}
                    className="w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black/80 transition-all duration-300"
                    aria-label={isMuted ? "Sesi aç" : "Sesi kapat"}
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>

                  <button
                    onClick={() => openFullscreen(video.id)}
                    className="w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black/80 transition-all duration-300"
                    aria-label="Tam ekran"
                  >
                    <Maximize size={16} />
                  </button>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-xl text-sm font-medium backdrop-blur-sm">
                  {video.duration}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-primary group-hover:text-accent transition-colors duration-500">
                  {video.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className="text-center mt-20 fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="bg-gradient-warm text-primary-foreground rounded-3xl p-12 shadow-strong">
            <h3 className="text-3xl font-serif font-bold mb-4">
              Projelerinizi Gerçekleştirmeye Hazırım
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              25 yıllık deneyimimle İstanbul genelinde kaliteli ve güvenilir
              hizmet sunuyorum
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open("tel:+905354703826", "_self")}
                className="btn-hero bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30"
              >
                Hemen Ara: (0535) 470-3826
              </button>
              <button
                onClick={() =>
                  window.open("https://wa.me/905354703826", "_blank")
                }
                className="btn-hero bg-green-600/90 hover:bg-green-600 border border-green-500/50"
              >
                WhatsApp'tan Yaz
              </button>
            </div>
          </div>
        </div>

        {/* Fullscreen Modal */}
        {fullscreenVideo && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center">
              <button
                onClick={closeFullscreen}
                className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black/80 transition-all duration-300"
                aria-label="Kapat"
              >
                <X size={24} />
              </button>

              <video
                key={fullscreenVideo}
                className="w-full h-full object-contain rounded-lg"
                autoPlay
                controls
                muted={isMuted}
                poster={videos.find((v) => v.id === fullscreenVideo)?.thumbnail}
              >
                <source
                  src={videos.find((v) => v.id === fullscreenVideo)?.videoUrl}
                  type="video/mp4"
                />
                Tarayıcınız video oynatmayı desteklemiyor.
              </video>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoShowcase;
