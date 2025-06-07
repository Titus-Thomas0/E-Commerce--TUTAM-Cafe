import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

function Footer() {
  return (
    <>
      <div className='bg-[var(--color-primary)] text-[var(--color-background)] py-4'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-20'>
          <div className='flex flex-col md:flex-row justify-between'>
            <a href="/" className="flex justify-center ">
              <img src={'src/assets/images/TUTAM Cafe logo DC.png'} alt="TUTAM Cafe" className="h-30 w-auto"/>
            </a>

            <div className='flex flex-col items-center md:items-start md:py-12 mt-6 md:mt-0'>
              <a href="" className='hover:text-[var(--color-secondary)]'>
                <h3 className='font-bold text-xl'>About Us</h3>
              </a>
              
              <div className='hidden md:flex md:flex-col pt-2'>
                <a href="" className='font-base text-base hover:text-[var(--color-secondary)] pt-3'>Our Heritage</a>
                <a href="" className='font-base text-base hover:text-[var(--color-secondary)] pt-3'>Coffee House</a>
                <a href="" className='font-base text-base hover:text-[var(--color-secondary)] pt-3'>Our Company</a>
              </div>
            </div>

            <div className='flex flex-col items-center md:items-start md:py-12 mt-6 md:mt-0'>
              <a href="" className='hover:text-[var(--color-secondary)]'>
                <h3 className='font-bold text-xl'>Responsibility</h3>
              </a>
              
              <div className='hidden md:flex md:flex-col pt-2'>
                <a href="" className='font-base text-base hover:text-[var(--color-secondary)] pt-3'>Diversity</a> 
                <a href="" className='font-base text-base hover:text-[var(--color-secondary)] pt-3'>Community</a>
                <a href="" className='font-base text-base hover:text-[var(--color-secondary)] pt-3'>Ethical Sourcing</a>
                <a href="" className='font-base text-base hover:text-[var(--color-secondary)] pt-3'>Environmental Stewardship</a>
                <a href="" className='font-base text-base hover:text-[var(--color-secondary)] pt-3'>Learn More</a>
              </div>
            </div>

            <div className='flex flex-col items-center md:items-start md:py-12 mt-6 md:mt-0'>
              <a href="" className='hover:text-[var(--color-secondary)]'>
                <h3 className='font-bold text-xl'>Quick Links</h3>
              </a>
              
              <div className='hidden md:flex md:flex-col pt-2'>
                <a href="" className='font-base text-base hover:text-[var(--color-secondary)] pt-3'>privacy Policy</a>
                <a href="" className='font-base text-base hover:text-[var(--color-secondary)] pt-3'>FAQs</a>
                <a href="" className='font-base text-base hover:text-[var(--color-secondary)] pt-3'>Customer Service</a>
                <a href="" className='font-base text-base hover:text-[var(--color-secondary)] pt-3'>Delivery</a> 
                <a href="" className='font-base text-base hover:text-[var(--color-secondary)] pt-3'>Loyalty Program Terms and Conditions</a>
                <a href="" className='font-base text-base hover:text-[var(--color-secondary)] pt-3'>TUTAM India Mobile App Terms of Use</a>
                <a href="" className='font-base text-base hover:text-[var(--color-secondary)] pt-3'>Special Discount 25% Off Offer</a>
                <a href="" className='font-base text-base hover:text-[var(--color-secondary)] pt-3'>Get 2x Bonus Points</a>
                <a href="" className='font-base text-base hover:text-[var(--color-secondary)] pt-3'>TUTAM&reg; Rewards Program</a>
                <a href="" className='font-base text-base hover:text-[var(--color-secondary)] pt-3'>Beverage Subscription</a>
              </div>
            </div>

            <div className='flex flex-col items-center md:items-start md:py-12 mt-6 md:mt-0'>
              <a href="" className='hover:text-[var(--color-secondary)]'>
                <h3 className='font-bold text-xl'>Legal</h3>
              </a>
              
              <div className='hidden md:flex md:flex-col pt-3'>
                <a href="" className='font-base text-base hover:text-[var(--color-secondary)] pt-2'>Disclaimer</a>
              </div>
            </div>

            <div className='flex flex-col items-start py-12 mt-6 md:mt-0'>
              
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-between'>
            Titus
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer