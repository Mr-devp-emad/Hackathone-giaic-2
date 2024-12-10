"use client"

const Featureposts = () => {
  return (
    
    <main className="flex-grow">
    <section className="text-center my-8">
      <h1 className="text-3xl font-bold">Featured Posts</h1>
      <p className="text-gray-500 mt-2">
        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
      </p>
    </section>

    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {[1, 2, 3].map((post, idx) => (
        <div
          key={idx}
          className="border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
        >
          <img
            src={`/assets/amb.png`}
            alt="Post Image"
            className="w-348px h-300 object-cover"
          />
          <div className="p-4">
            <span className="text-xs text-blue-500">Google Trending New</span>
            <h2 className="font-semibold text-lg mt-2">Loudest à la Madison #1 (L&apos;Integral)</h2>
            <p className="text-sm text-gray-600 mt-2">
              We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.
            </p>
            <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
              <span>22 April 2021</span>
              <span>10 comments</span>
            </div>
            <button className="text-blue-600 text-sm mt-4">Learn More &rarr;</button>
          </div>
        </div>
      ))}
    </section>
  </main>

  )
}

export default Featureposts
