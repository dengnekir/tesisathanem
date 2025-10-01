import { useState } from "react";
import { Play, Pause } from "lucide-react";
import video1 from "./video1.mp4";
import video2 from "./video2.mp4";

const VideoShowcase = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const videos = [
    {
      id: 1,
      src: video1,
      title: "Profesyonel Fayans Döşeme",
      description: "Uzman ekibimizin özenli çalışması",
    },
    {
      id: 2,
      src: video2,
      title: "Tesisat Renovasyonu",
      description: "Modern tesisat sistemleri kurulumu",
    },
  ];

  const handlePlayPause = (videoId: number) => {
    const videoElement = document.getElementById(
      `video-${videoId}`
    ) as HTMLVideoElement;

    if (playingVideo === videoId) {
      videoElement.pause();
      setPlayingVideo(null);
    } else {
      // Pause other videos
      videos.forEach((v) => {
        if (v.id !== videoId) {
          const otherVideo = document.getElementById(
            `video-${v.id}`
          ) as HTMLVideoElement;
          if (otherVideo) otherVideo.pause();
        }
      });

      videoElement.play();
      setPlayingVideo(videoId);
    }
  };

  return (
    <section id="videos" className="section-padding bg-gradient-to-b from-background to-secondary/10">
      <div className="container-max">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Projelerimiz
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Gerçekleştirdiğimiz projelerin bazılarını videolarla keşfedin
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="video-card relative rounded-xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500">
                <video
                  id={`video-${video.id}`}
                  className="w-full aspect-video object-cover"
                  muted
                  playsInline
                  onEnded={() => setPlayingVideo(null)}
                >
                  <source src={video.src} type="video/mp4" />
                  Tarayıcınız video etiketini desteklemiyor.
                </video>

                {/* Play/Pause Overlay */}
                <div
                  className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer transition-opacity duration-300 hover:bg-black/40"
                  onClick={() => handlePlayPause(video.id)}
                >
                  <button
                    className="bg-primary/90 hover:bg-primary text-white rounded-full p-6 transition-transform duration-300 hover:scale-110 shadow-2xl"
                    aria-label={
                      playingVideo === video.id ? "Duraklat" : "Oynat"
                    }
                  >
                    {playingVideo === video.id ? (
                      <Pause className="w-8 h-8" />
                    ) : (
                      <Play className="w-8 h-8" />
                    )}
                  </button>
                </div>
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold mb-2 font-serif">
                  {video.title}
                </h3>
                <p className="text-muted-foreground">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
