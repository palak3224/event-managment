import { useState, useRef } from "react";
import { Play } from "lucide-react";

const VideoShowcase = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef({});

  const videos = [
    {
      id: 1,
      thumbnail:
        "https://res.cloudinary.com/ddnb10zkq/video/upload/so_0/v1760731605/WhatsApp_Video_2025-10-17_at_03.55.36_e7vffp.jpg",
      videoUrl:
        "https://res.cloudinary.com/ddnb10zkq/video/upload/v1760731605/WhatsApp_Video_2025-10-17_at_03.55.36_e7vffp.mp4",
      title: "Luxury Wedding",
    },
    {
      id: 2,
      thumbnail:
        "https://res.cloudinary.com/ddnb10zkq/video/upload/so_0/v1760731606/WhatsApp_Video_2025-10-17_at_04.04.50_1_scmuyl.jpg",
      videoUrl:
        "https://res.cloudinary.com/ddnb10zkq/video/upload/v1760731606/WhatsApp_Video_2025-10-17_at_04.04.50_1_scmuyl.mp4",
      title: "Corporate Event",
    },
    {
      id: 3,
      thumbnail:
        "https://res.cloudinary.com/ddnb10zkq/video/upload/so_0/v1760731607/WhatsApp_Video_2025-10-17_at_04.04.51_msbefd.jpg",
      videoUrl:
        "https://res.cloudinary.com/ddnb10zkq/video/upload/v1760731607/WhatsApp_Video_2025-10-17_at_04.04.51_msbefd.mp4",
      title: "Music Festival",
    },
    {
      id: 4,
      thumbnail:
        "https://res.cloudinary.com/ddnb10zkq/video/upload/so_0/v1760731609/WhatsApp_Video_2025-10-17_at_04.04.50_larxna.jpg",
      videoUrl:
        "https://res.cloudinary.com/ddnb10zkq/video/upload/v1760731609/WhatsApp_Video_2025-10-17_at_04.04.50_larxna.mp4",
      title: "Corporate Gala",
    },
        {
      id: 5,
      thumbnail:
        "https://res.cloudinary.com/ddnb10zkq/video/upload/so_0/v1760732613/WhatsApp_Video_2025-10-18_at_01.52.59_orckti.mp4",
      videoUrl:
        "https://res.cloudinary.com/ddnb10zkq/video/upload/v1760732613/WhatsApp_Video_2025-10-18_at_01.52.59_orckti.mp4",
      title: "Wedding Show",
    },
            {
      id: 6,
      thumbnail:
        "https://res.cloudinary.com/ddnb10zkq/video/upload/so_0/v1760732613/WhatsApp_Video_2025-10-18_at_01.52.09_ilcjae.mp4",
      videoUrl:
        "https://res.cloudinary.com/ddnb10zkq/video/upload/v1760732613/WhatsApp_Video_2025-10-18_at_01.52.09_ilcjae.mp4",
      title: "Cultural Celebration",
    },
  ];

  const handleMouseEnter = (id) => {
    const video = videoRefs.current[id];
    if (video) {
      // Pause all other videos
      Object.keys(videoRefs.current).forEach((key) => {
        if (videoRefs.current[key] && parseInt(key) !== id) {
          videoRefs.current[key].pause();
          videoRefs.current[key].currentTime = 0;
        }
      });

      // Play the hovered video
      video.currentTime = 0;
      video.volume = 1;
      video.muted = false;
      video.play();
      setPlayingVideo(id);
    }
  };

  const handleMouseLeave = (id) => {
    const video = videoRefs.current[id];
    if (video) {
      video.pause();
      video.currentTime = 0;
      setPlayingVideo(null);
    }
  };

  return (
    <section className="relative w-full bg-[#FAF8F5] py-20 px-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Texturina:wght@400;700&display=swap');
        
        .texturina {
          font-family: 'Texturina', serif;
        }

        .video-container {
          position: relative;
          aspect-ratio: 9/16;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s ease;
        }

        .video-container:hover {
          border-radius: 20px;
          border: 3px solid #9D5C63;
          box-shadow: 0 20px 60px rgba(157, 92, 99, 0.3);
          transform: translateY(-8px);
        }

        .video-container video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          background: rgba(157, 92, 99, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .video-container:hover .play-button {
          opacity: 0;
        }

        .video-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(62, 39, 35, 0.8), transparent);
        }

        .video-title {
          position: absolute;
          bottom: 20px;
          left: 20px;
          color: #FFF0E5;
          font-weight: bold;
          font-size: 1.1rem;
          z-index: 10;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-[#9D5C63] font-semibold mb-4">
            Watch Our Work
          </p>
          <h2 className="text-5xl font-bold text-[#3E2723] texturina mb-4">
            Video Showcase
          </h2>
          <div className="w-24 h-1 bg-[#9D5C63] mx-auto mb-6"></div>
          <p className="text-xl text-[#3E2723]/80 max-w-2xl mx-auto">
            Experience the magic of our events through these highlight reels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video) => (
            <div key={video.id} className="flex justify-center">
              <div
                className="video-container w-full max-w-[400px]"
                onMouseEnter={() => handleMouseEnter(video.id)}
                onMouseLeave={() => handleMouseLeave(video.id)}
              >
                <video
                  ref={(el) => (videoRefs.current[video.id] = el)}
                  poster={video.thumbnail}
                  playsInline
                  preload="metadata"
                  className="rounded-lg"
                  controls={false}
                >
                  <source src={video.videoUrl} type="video/mp4" />
                </video>

                {playingVideo !== video.id && (
                  <div className="play-button">
                    <Play size={32} color="#FFF0E5" />
                  </div>
                )}

                <div className="video-overlay"></div>
                <div className="video-title">{video.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;