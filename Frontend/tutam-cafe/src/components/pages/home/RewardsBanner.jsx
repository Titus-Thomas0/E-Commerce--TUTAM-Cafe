import React from 'react'

function RewardsBanner() {
  return (
    <>
      <a href="/Rewards">
        <div className='bg-[var(--color-primary)] text-[var(--color-background)] w-full'>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-20'>
            <div className='flex flex-row justify-between items-center h-full'>
              <h2 className=''>TUTAM cafe</h2>
              <div className='outline-solid rounded-full px-2 py-1'>
                <p>Know More</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  )
}

export default RewardsBanner