import AudioPlayer from "../components/audio-player";
import AnimatedBackground from "../components/animated-background";
import Carousel from "../components/carousel";

export default function WeddingPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <div className="relative section">
        <AnimatedBackground />
        {/* Details Section */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-6 text-center text-white md:p-12 lg:p-24">
          {/* Header */}
          <div className="w-full pt-8 font-montserrat text-sm tracking-widest md:text-base lg:text-lg mb-10">
            WEDDING ANNOUNCEMENT
          </div>

          {/* Main Content */}
          <div className="flex flex-col items-center space-y-4 md:space-y-6 lg:space-y-8">
            <h1 className="invitation-text font-playfair text-4xl font-medium md:text-5xl lg:text-6xl">
              TIFFANY & JARED
            </h1>
            <p className="invitation-text font-montserrat text-xl tracking-wider md:text-2xl lg:text-3xl">
              #TImetoshaRE
            </p>
          </div>
        </div>
        <AnimatedBackground />
      </div>

      <div className="relative section bg-white mt-6">
        {/* Welcome Section */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-6 text-center text-black md:p-12 lg:p-24">
          {/* Header */}
          <div className="font-montserrat text-sm tracking-[0.2em] md:text-dark">
            DEAR MR-MRS-MS,
            <br />
            FAMILY & FRIENDS
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="font-playfair text-2xl font-light md:text-3xl lg:text-4xl">
              Welcome to
            </h1>
            <h2 className="font-playfair text-3xl font-medium md:text-4xl lg:text-5xl">
              Tiffany & Jared's
              <br />
              Wedding Website
            </h2>
          </div>

          {/* Message */}
          <p className="mx-auto max-w-2xl font-montserrat text-sm italic text-gray-800 md:text-base lg:text-lg">
            Together with joyful hearts and the grace of God, we joyfully
            announce the upcoming of our marriage.
          </p>

          {/* Carousel */}
          <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-2 md:py-4 lg:py-6">
            <Carousel />
          </div>
        </div>
      </div>

      {/* Audio Player */}
      <AudioPlayer autoplay={true} />
    </main>
  );
}
