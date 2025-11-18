import img from '../home/Opening_Img.png'

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 bg-gradient-to-r from-yellow-50 to-orange-50">
      
      {/* Left: Hero Text */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
          Welcome to AI Recipe Generator!
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Generate unique recipes instantly with AI and explore endless culinary ideas.
        </p>
        <button className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600 transition">
          Get Started
        </button>
      </div>

      {/* Right: Chef Character */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center md:justify-end">
        <img
          src={img}
          alt="Friendly Chef Character"
          className="w-72 md:w-96"
        />
      </div>
    </section>
  );
}
