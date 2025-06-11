import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';

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
          <div className='flex flex-col md:flex-row'>
            <div className='flex flex-col items-center md:items-start'>
              <h2 className='font-bold text-2xl'>SOCIAL MEDIA</h2>
              <div className='flex space-x-4 mt-2'>
                <a href="#" target="_blank" rel="noopener noreferrer" className='text-[var(--color-background)] hover:text-[var(--color-secondary)]'>
                  <InstagramIcon className='text-4xl mt-2' style={{fontSize:"3rem"}}/>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className='text-[var(--color-background)] hover:text-[var(--color-secondary)]'>
                  <FacebookOutlinedIcon className='text-4xl mt-2' style={{fontSize:"3rem"}}/>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className='text-[var(--color-background)] hover:text-[var(--color-secondary)]'>
                  <XIcon className='text-4xl mt-2' style={{fontSize:"3rem"}}/>
                </a>
              </div>
            </div>
            <div className='flex flex-col mt-8 md:mt-0 md:ml-20'>
              <a href="#" className='flex flex-col items-center md:items-start'>
                <img src={'src/assets/images/Get on applestore image.png'} alt="Get on Apple store image" className='w-75'/>
              </a>
              <a href="#" className='flex flex-col items-center md:items-start'>
                <img src={'src/assets/images/Get on playstore image.png'} alt="Get on Apple store image" className='w-75'/>
              </a>
            </div>
          </div>
          <hr className='mt-15' />
          <div className='flex flex-col md:flex-row justify-between mt-2'>
            <div className='flex flex-col md:flex-row items-center md:items-start md:py-12 mt-6 md:mt-0'>
              <a href='#' className='text-[var(--color-background)] hover:text-[var(--color-secondary)]'>Web Accessibility</a> <span className='hidden md:block ml-2'>|</span>
              <a href='#' className='text-[var(--color-background)] hover:text-[var(--color-secondary)] mt-4 md:mt-0 md:ml-2'>Privacy Statement</a> <span className='hidden md:block ml-2'>|</span>
              <a href='#' className='text-[var(--color-background)] hover:text-[var(--color-secondary)] mt-4 md:mt-0 md:ml-2'>Terms of Use</a> <span className='hidden md:block ml-2'>|</span>
              <a href='#' className='text-[var(--color-background)] hover:text-[var(--color-secondary)] mt-4 md:mt-0 md:ml-2'>Contact Us</a>
            </div>
            <div className='flex flex-col md:flex-row items-center md:items-start md:py-12 mt-6 md:mt-0'>
              <p>&copy; 2025 TUTAM Cafe.</p>
              <p>All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer