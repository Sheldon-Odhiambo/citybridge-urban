import React from 'react';

const GlassGlowBlobs: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">

      {/* Blob 1 */}
      <div className="glass-blob blob-1"></div>

      {/* Blob 2 */}
      <div className="glass-blob blob-2"></div>

      {/* Blob 3 */}
      <div className="glass-blob blob-3"></div>

      {/* Blob 4 */}
      <div className="glass-blob blob-4"></div>

      <style>{`
        .glass-blob {
          position: absolute;
          border-radius: 50%;
          backdrop-filter: blur(100px) brightness(1.2);
          background: rgba(59, 130, 246, 0.25); /* semi-transparent blue */
          box-shadow: 0 0 120px rgba(59, 130, 246, 0.4);
          animation: drift 40s ease-in-out infinite alternate,
                     breathe 15s ease-in-out infinite;
        }

        .blob-1 {
          width: 50vw;
          height: 50vw;
          top: -10%;
          left: -10%;
        }

        .blob-2 {
          width: 40vw;
          height: 40vw;
          bottom: -10%;
          right: -15%;
          background: rgba(37, 99, 235, 0.25);
          box-shadow: 0 0 100px rgba(37, 99, 235, 0.4);
          animation-delay: 5s;
        }

        .blob-3 {
          width: 35vw;
          height: 35vw;
          top: 30%;
          left: 45%;
          background: rgba(96, 165, 250, 0.25);
          box-shadow: 0 0 90px rgba(96, 165, 250, 0.35);
          animation-delay: 8s;
        }

        .blob-4 {
          width: 25vw;
          height: 25vw;
          bottom: 20%;
          left: 20%;
          background: rgba(147, 197, 253, 0.25);
          box-shadow: 0 0 80px rgba(147, 197, 253, 0.3);
          animation-delay: 12s;
        }

        @keyframes drift {
          0% { transform: translate(0px, 0px); }
          100% { transform: translate(70px, -50px); }
        }

        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.25; }
          50% { transform: scale(1.08); opacity: 0.45; }
        }
      `}</style>
    </div>
  );
};

export default GlassGlowBlobs;
