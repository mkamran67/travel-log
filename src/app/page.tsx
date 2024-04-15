import Navbar from '@/components/nav/Navbar';
import Link from 'next/link';


export default function Landing() {

  return (
    <div className="bg-gray-900">
      <Navbar />
      <div className="relative isolate overflow-hidden pt-14">
        {/* background - landing */}
        <img
          src="/dooley.jpg"
          alt=""
          className="absolute inset-0 -z-10 opacity-40 h-full w-full object-cover"
        />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          {/* Upper left gradient */}
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#2f9e41] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
          {/* Top Article */}
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-300 group hover:text-gray-100 ring-1 ring-white/20 hover:ring-white/40">
              Upcoming locations by seasons. {' '}
              <a href="#" className="font-semibold text-white">
                <span className="absolute inset-0 " aria-hidden="true" />
                Read more{' '}
                <span aria-hidden="true" className='group-hover:pl-1 pr-1 group-hover:pr-0 transition-all'>
                  &rarr;
                </span>
              </a>
            </div>
          </div>
          {/* Headliner Section */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Craft Your Perfect Journey: Effortless Itinerary Planning & Budgeting
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Customize your travel route, manage expenses, and optimize your schedule—all in one place. Start building your dream trip today!
            </p>
            {/* Call to Action */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/planit"
                className="rounded-md bg-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-yellow-500 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
              >
                Try it now
              </Link>
              <a href="#" className="text-sm font-semibold leading-6 text-white hover:translate-x-2 transition-all ease-in-out">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        {/* Bottom right gradient */}
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#00ff88] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
