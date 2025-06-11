import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function BreadCrumbs() {
  const location = useLocation();

  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div role="presentation" className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-1 h-auto">
      <Breadcrumbs aria-label="breadcrumb" separator=">" className='text-[var(--color-text)]'>
        <Link underline="hover" component={RouterLink} to="/" color="inherit">
          Home
        </Link>

        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <Typography key={to} color="inherit" className='cursor-pointer'>
              {decodeURIComponent(value)}
            </Typography>
          ) : (
            <Link
              underline="hover"
              component={RouterLink}
              to={to}
              key={to}
              color="inherit"
            >
              {decodeURIComponent(value)}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}

export default BreadCrumbs