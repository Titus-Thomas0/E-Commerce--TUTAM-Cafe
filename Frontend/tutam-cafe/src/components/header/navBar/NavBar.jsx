import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useLocation } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchBox from './SearchBox'
import UserAvatar from './UserAvatar';

const navigation = [
  { name: 'Home', href: '/'},
  { name: 'Order', href: '/Order'},
  { name: 'Pay', href: '/Pay'},
  { name: 'Gift', href: '/Gift' },
  { name: 'Store', href: '/Store'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function NavBar() {
  const location = useLocation();

  return (
    <>
      <Disclosure as="nav" className="sticky top-0 z-50 bg-[var(--color-background)] text-[var(--color-primary)] border-b-1">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 hover:bg-[var(--color-text)] hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <a href="/" className="flex justify-center items-center">
                  <img src={'src/assets/images/TUTAM Cafe logo.png'} alt="TUTAM Cafe" className="w-15 h-15 w-auto"/>
                </a>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => {
                    const isCurrent = location.pathname === item.href;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          isCurrent 
                            ? 'text-[var(--color-accent)] border-b-3 font-bold'
                            : 'hover:text-[var(--color-accent)]',
                            'px-3 py-5 text-base'
                        )}
                      >
                        {item.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Search box */}
              <SearchBox />

              {/* Profile dropdown */}
              <UserAvatar />
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-[var(--color-background)] text-[var(--color-primary)]' : 'hover:bg-[var(--color-text)] hover:text-[var(--color-background)]',
                  'block rounded-md px-3 py-2 text-base font-medium',
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </>
  )
}

export default NavBar