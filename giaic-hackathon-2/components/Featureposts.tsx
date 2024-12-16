"use client"

const Featureposts = () => {
  return (
    
    <section className="py-16 bg-gray-50">
  <div className="text-center mb-8">
    <p className="text-blue-500 font-semibold text-sm">Practice Advice</p>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
      Featured Posts
    </h2>
    <p className="text-gray-500 mt-2 text-sm sm:text-base">
      Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
    </p>
  </div>

  {/* Responsive Cards Layout */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto px-4">
    {/* Card 1 */}
    <div className="bg-white shadow-md rounded-lg overflow-hidden group">
      <div className="relative">
        <img
          src="/assets/road.jpg"
          alt="Post 1"
          className="w-full h-56 object-cover"
        />
        <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          NEW
        </span>
      </div>
      <div className="p-6">
        <p className="text-blue-500 text-xs font-semibold mb-2">Google Trending New</p>
        <h3 className="text-gray-800 font-bold text-lg mb-2">
          Loudest à la Madison #1 (L'integral)
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          We focus on ergonomics and meeting you where you work. It’s only a keystroke away.
        </p>
        <div className="flex items-center text-gray-400 text-xs space-x-4">
          <span>📅 22 April 2021</span>
          <span>💬 10 comments</span>
        </div>
        <a
          href="#"
          className="text-blue-500 font-semibold text-sm inline-block mt-4 hover:underline"
        >
          Learn More &rarr;
        </a>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white shadow-md rounded-lg overflow-hidden group">
      <div className="relative">
        <img
          src="/assets/pinkcar.jpg"
          alt="Post 2"
          className="w-full h-56 object-cover"
        />
        <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          NEW
        </span>
      </div>
      <div className="p-6">
        <p className="text-blue-500 text-xs font-semibold mb-2">Google Trending New</p>
        <h3 className="text-gray-800 font-bold text-lg mb-2">
          Loudest à la Madison #1 (L'integral)
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          We focus on ergonomics and meeting you where you work. It’s only a keystroke away.
        </p>
        <div className="flex items-center text-gray-400 text-xs space-x-4">
          <span>📅 22 April 2021</span>
          <span>💬 10 comments</span>
        </div>
        <a
          href="#"
          className="text-blue-500 font-semibold text-sm inline-block mt-4 hover:underline"
        >
          Learn More &rarr;
        </a>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white shadow-md rounded-lg overflow-hidden group">
      <div className="relative">
        <img
          src="/assets/umbrella.jpg"
          alt="Post 3"
          className="w-full h-56 object-cover"
        />
        <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          NEW
        </span>
      </div>
      <div className="p-6">
        <p className="text-blue-500 text-xs font-semibold mb-2">Google Trending New</p>
        <h3 className="text-gray-800 font-bold text-lg mb-2">
          Loudest à la Madison #1 (L'integral)
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          We focus on ergonomics and meeting you where you work. It’s only a keystroke away.
        </p>
        <div className="flex items-center text-gray-400 text-xs space-x-4">
          <span>📅 22 April 2021</span>
          <span>💬 10 comments</span>
        </div>
        <a
          href="#"
          className="text-blue-500 font-semibold text-sm inline-block mt-4 hover:underline"
        >
          Learn More &rarr;
        </a>
      </div>
    </div>
  </div>
</section>

      )}
    

export default Featureposts
