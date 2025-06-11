import React from 'react'

function Discover() {
  return (
    <div className='bg-[var(--color-secondary)] w-full my-15 py-10'>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-7 isolate">
        <div className='flex flex-row justify-between items-center'>
          <h3 className="font-bold text-3xl">Learn more about the world of coffee!</h3>
          <a href="/" className='text-sm'>Discover More</a>
        </div>
        <div className='relative bg-[var(--color-black)] cursor-pointer rounded-lg'>
          <div className='bg-[url(https://preprodtsbstorage.blob.core.windows.net/cms/uploads/ICW_Live_Event_Day5_41f11ca3d2.jpg)] mask-b-from-50% mask-b-to-100% hover:mask-b-from-0% hover:mask-b-to-95% flex flex-col justify-between items-centers bg-cover bg-center h-100 rounded-lg mt-10'>
            <div className='px-7 py-2'>
              <small className='bg-[var(--color-success-light)] text-[var(--color-success)] text-xs rounded-xs outline-1'>Coffee Culture</small>
            </div>
          </div>
          <div className='absolute bottom-0 left-0 text-[var(--color-background)] text-balance isolate px-7 py-15'>
              <h3 className="font-bold text-2xl">Art & Science of Coffee Brewing</h3>
              <p className="font-bold text-sm">
                Master the perfect brew with TUTAM! Learn the art and science of coffee brewing.
              </p>
              <button type="button" className='rounded-full bg-[var(--color-background)] text-[var(--color-primary)] cursor-pointer font-bold px-10 py-2 mt-10'>
                Learn More
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Discover