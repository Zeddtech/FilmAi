import React from 'react'

function Banner() {
  return (
    <div>
        <div className="relative bg-center bg-cover bg-no-repeat h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px] bg-hero">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-2/5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-4">Unlimited movies, TV shows, and more.</h1>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-white mb-8">Watch anywhere. Cancel anytime.</p>
            <button className="bg-white text-black text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold px-6 py-3 rounded-md mr-4">Watch Free For 30 Days</button>
            <button className="bg-gray-800 text-white text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold px-6 py-3 rounded-md">More Info</button>
            </div>
        </div>
    </div>
  )
}

export default Banner