import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tab, TabGroup, TabList } from '@headlessui/react';
import { Dialog, DialogTitle, DialogPanel, Description } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';

function StoreLocation() {
  const [location, setLocation] = useState('');
  const [errorVisible, setErrorVisible] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [eta, setEta] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);
  const navigate = useNavigate();

  // Load tab, location, fetch ETA
  useEffect(() => {
    const rawLocation = localStorage.getItem('userLocation');
    const savedLocation = rawLocation !== 'undefined' ? rawLocation : null;
    const savedTab = localStorage.getItem('orderType');
    const tabValue = savedTab !== null ? Number(savedTab) : 0;

    setTabIndex(tabValue);
    if (savedLocation) {
      setLocation(savedLocation);

      // Fetch ETA from backend
      fetch(`/api/store/eta?location=${encodeURIComponent(savedLocation)}&orderType=${tabValue}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.eta !== undefined) {
            setEta(data.eta);
          } else {
            setEta(null);
          }
        })
        .catch(() => setEta(null));
    } else {
      setErrorVisible(true);
      setDialogOpen(true);
    }
  }, []);

  const handleLocationClick = () => {
    navigate('/Order/SelectStore');
  };

  const handleTabChange = (index) => {
    setTabIndex(index);
    localStorage.setItem('orderType', index);
  };

  return (
    <>
      {/* Main UI */}
      <div className="bg-[var(--color-primary)] text-[var(--color-background)] w-full">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-5 h-auto">
          <div className="flex flex-col md:flex-row justify-between items-center w-full">

            {/* Left Section */}
            <div className="flex flex-row w-full md:w-1/2 justify-between md:justify-start items-center">
              <div
                className="flex flex-row items-center w-1/2"
                onClick={handleLocationClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  />
                </svg>
                <input
                  type="text"
                  readOnly
                  value={location || ''}
                  placeholder="No Store Selected"
                  className="border-b bg-transparent w-full focus:outline-none ml-2 cursor-pointer"
                />
              </div>

              {/* ETA Section */}
              <div className="flex flex-row items-center w-1/2 ml-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <p className="font-bold text-sm ml-1">
                  {eta !== null ? `${eta} mins` : '00 mins'}
                </p>
              </div>
            </div>

            {/* Right Section (Tabs) */}
            <div className="mt-4 md:mt-0">
              <TabGroup selectedIndex={tabIndex} onChange={handleTabChange}>
                <TabList className="flex outline-1 rounded-lg">
                  {['Dine-in', 'Takeaway'].map((label, idx) => (
                    <Tab
                      key={idx}
                      className={({ selected }) =>
                        `px-8 py-2 ${
                          idx === 0 ? 'rounded-l-lg' : 'rounded-r-lg'
                        } cursor-pointer outline-none ${
                          selected
                            ? 'bg-[var(--color-background)] text-[var(--color-primary)]'
                            : 'text-[var(--color-background)] hover:bg-white/20'
                        }`
                      }
                    >
                      {label}
                    </Tab>
                  ))}
                </TabList>
              </TabGroup>
            </div>
          </div>

          {/* Warning Notification */}
          <div className="flex flex-row items-center w-full md:w-1/2 mt-4 md:mt-0">
            {errorVisible && !location && (
              <div className="bg-[var(--color-error-light)] text-[var(--color-error)] px-4 py-2 rounded-md flex items-center text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  />
                </svg>
                <div className="ml-2">
                  <h5 className="text-sm">No store found!</h5>
                  <small className="text-[var(--color-text)]">
                    Please enter a different location to find the nearest store.
                  </small>
                </div>
                <button onClick={() => setErrorVisible(false)}>
                  <XMarkIcon className="h-5 w-5 text-[var(--color-error)] ml-2" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Popup Dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="bg-[var(--color-background)] rounded-md max-w-sm w-full p-6 text-[var(--color-primary)] shadow-xl">
            <DialogTitle className="text-lg font-semibold mb-2">Store Not Selected</DialogTitle>
            <Description className="text-base mb-4">
              Please select a store to continue ordering.
            </Description>
            <div className="flex justify-center space-x-2">
              <button
                onClick={() => setDialogOpen(false)}
                className="px-4 py-2 bg-[var(--color-primary)] text-[var(--color-background)] rounded-md"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

export default StoreLocation;
