import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

const VideoShowcase = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const videoRefs = useRef({});

  const videos = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1519167758481-83f29da8c797?w=800&q=80",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      title: "Luxury Wedding"
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      title: "Corporate Event"
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      title: "Music Festival"
    }
  ];

  const handleVideoClick = (id) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (playingVideo === id) {
      video.pause();
      setPlayingVideo(null);
    } else {
      // Pause all other videos
      Object.keys(videoRefs.current).forEach(key => {
        if (videoRefs.current[key] && parseInt(key) !== id) {
          videoRefs.current[key].pause();
        }
      });
      video.play();
      setPlayingVideo(id);
    }
  };

  const handleMouseEnter = (id) => {
    setHoveredVideo(id);
    const video = videoRefs.current[id];
    if (video && playingVideo !== id) {
      video.play();
      setPlayingVideo(id);
    }
  };

  const handleMouseLeave = (id) => {
    setHoveredVideo(null);
    const video = videoRefs.current[id];
    if (video) {
      video.pause();
      video.currentTime = 0;
      setPlayingVideo(null);
    }
  };

  return (
    <section className="relative w-full bg-white py-20 px-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Texturina:ital,opsz,wght@0,12..72,100..900;1,12..72,100..900&display=swap');
        
        .dark-purple {
          background-color: #2d1b4e;
        }
        
        .golden {
          color: #d4af37;
        }
        
        .golden-bg {
          background-color: #d4af37;
        }
        
        .text-dark-purple {
          color: #2d1b4e;
        }
        
        .texturina {
          font-family: 'Texturina', serif;
        }

        .video-container {
          position: relative;
          aspect-ratio: 9/16;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .video-container:hover {
          border-radius: 20px;
          border: 3px solid #d4af37;
          box-shadow: 0 20px 60px rgba(212, 175, 55, 0.3);
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
          background: rgba(212, 175, 55, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .play-button:hover {
          background: rgba(212, 175, 55, 1);
          transform: translate(-50%, -50%) scale(1.1);
        }

        .video-container:hover .play-button {
          opacity: 0;
        }

        .video-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(45, 27, 78, 0.8), transparent);
          opacity: 1;
          transition: opacity 0.3s ease;
        }

        .video-container:hover .video-overlay {
          opacity: 0;
        }

        .video-title {
          position: absolute;
          bottom: 20px;
          left: 20px;
          right: 20px;
          z-index: 10;
          transition: opacity 0.3s ease;
        }

        .video-container:hover .video-title {
          opacity: 0;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] golden font-semibold mb-4">
            Watch Our Work
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-purple texturina mb-4">
            Video Showcase
          </h2>
          <div className="w-24 h-1 golden-bg mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the magic of our events through these highlight reels
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video) => (
            <div key={video.id} className="flex justify-center">
              <div
                className="video-container w-full max-w-[400px]"
                onMouseEnter={() => handleMouseEnter(video.id)}
                onMouseLeave={() => handleMouseLeave(video.id)}
                onClick={() => handleVideoClick(video.id)}
              >
                <video
                  ref={(el) => (videoRefs.current[video.id] = el)}
                  poster={video.thumbnail}
                  loop
                  playsInline
                  muted
                >
                  <source src={video.videoUrl} type="video/mp4" />
                </video>

                {playingVideo !== video.id && (
                  <div className="play-button">
                    <Play size={32} color="#2d1b4e" fill="#2d1b4e" />
                  </div>
                )}

                <div className="video-overlay"></div>

                <div className="video-title">
                  <h3 className="text-white font-bold text-lg texturina">
                    {video.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;