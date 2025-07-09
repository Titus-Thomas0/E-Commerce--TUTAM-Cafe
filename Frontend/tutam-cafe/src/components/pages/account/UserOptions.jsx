import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LocalCafeRoundedIcon from '@mui/icons-material/LocalCafeRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
import HelpCenterRoundedIcon from '@mui/icons-material/HelpCenterRounded';
import TurnedInRoundedIcon from '@mui/icons-material/TurnedInRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

// Full list of links
const userLinks = [
  { label: 'TUTAM REWARDS', icon: <AutoAwesomeIcon className='mr-2' />, href: '/rewards' },
  { label: 'ORDERS', icon: <LocalCafeRoundedIcon className='mr-2' />, href: '/orders' },
  { label: 'MY EVENTS', icon: <CalendarMonthRoundedIcon className='mr-2' />, href: '/events' },
  { label: 'TUTAM PAY', icon: <AccountBalanceWalletRoundedIcon className='mr-2' />, href: '/tutampay' },
  { label: 'OTHER PAYMENT MODE', icon: <CreditCardRoundedIcon className='mr-2' />, href: '/payments' },
  { label: 'MY ADDRESS', icon: <FmdGoodRoundedIcon className='mr-2' />, href: '/address' },
  { label: 'HELP CENTER', icon: <HelpCenterRoundedIcon className='mr-2' />, href: '/help', alwaysShow: true },
  { label: 'SAVED ARTICLES & NEWS', icon: <TurnedInRoundedIcon className='mr-2' />, href: '/saved' },
];

const UserOptions = ({ isLoggedIn }) => {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-10 text-[var(--color-primary)] space-y-2">
      {/* Show links conditionally based on login status */}
      {userLinks
        .filter(link => isLoggedIn || link.alwaysShow) // show all if logged in, else only alwaysShow
        .map((link, index) => (
          <div key={index} className="border-b last:border-none">
            <a
              href={link.href}
              className="flex items-center justify-between py-4 px-2 transition rounded"
            >
              <span className="font-semibold flex items-center">
                {link.icon}{link.label}
              </span>
              {/* Show arrow icon except for HELP CENTER in minimal mode */}
              <ArrowForwardIosIcon className="w-4 h-4" />
            </a>
          </div>
        ))}

      {/* Logout only if logged in */}
      {isLoggedIn && (
        <div className="border-b">
          <a
            href="/logout"
            className="flex items-center justify-between py-4 px-2 text-[var(--color-error)] transition rounded"
          >
            <span className="font-medium flex items-center">
              <LogoutRoundedIcon className='mr-2' />
              LOG OUT
            </span>
          </a>
        </div>
      )}
    </div>
  );
};

export default UserOptions;
