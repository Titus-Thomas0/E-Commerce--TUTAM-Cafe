import React, { useEffect, useState } from 'react';
import { Tab, TabGroup, TabList, TabPanels, TabPanel } from '@headlessui/react';
import New from './New';
import Favorites from './Favorites';
import Bestseller from './Bestseller';
import Drinks from './Drinks';
import Food from './Food';
import Merchandise from './Merchandise';
import CoffeeAtHome from './CoffeeAtHome';
import ReadyToEat from './ReadyToEat';

function ProductPage() {
  // Replace with real auth & data logic
  const isUserLoggedIn = false;
  const isFavouritesExists = true;
  const isBestsellerExists = true;

  const [tabIndex, setTabIndex] = useState(0);

  // Define tabs conditionally
  const tabs = [
    { label: 'New', component: <New /> },
    ...(isUserLoggedIn && isFavouritesExists ? [{ label: 'Favorites', component: <Favorites /> }] : []),
    ...(isBestsellerExists ? [{ label: 'Bestseller', component: <Bestseller /> }] : []),
    { label: 'Drinks', component: <Drinks /> },
    { label: 'Food', component: <Food /> },
    { label: 'Merchandise', component: <Merchandise /> },
    { label: 'Coffee At Home', component: <CoffeeAtHome /> },
    { label: 'Ready to Eat', component: <ReadyToEat /> }
  ];

  // Load saved tab index
  useEffect(() => {
    const savedTab = localStorage.getItem('productType');
    const tabValue = savedTab !== null ? Number(savedTab) : 0;
    if (tabValue < tabs.length) {
      setTabIndex(tabValue);
    }
  }, [tabs.length]);

  const handleTabChange = (index) => {
    setTabIndex(index);
    localStorage.setItem('productType', index);
  };

  return (
    <TabGroup selectedIndex={tabIndex} onChange={handleTabChange}>
      {/* Tab Navigation */}
      <div className='bg-[var(--color-secondary)] text-[var(--color-primary)] w-full'>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <TabList className="flex overflow-x-auto whitespace-nowrap no-scrollbar items-center">
            {tabs.map((tab, idx) => (
              <React.Fragment key={tab.label}>
                {idx !== 0 && <span className="mx-2">|</span>}
                <Tab
                  className={({ selected }) =>
                    `py-2 px-3 transition-colors duration-200 ${
                      selected
                        ? 'font-bold border-b-2 border-[var(--color-primary)]'
                        : 'hover:border-b-2'
                    }`
                  }
                >
                  {tab.label}
                </Tab>
              </React.Fragment>
            ))}
          </TabList>
        </div>
      </div>

      {/* Tab Panels */}
      <div className='bg-[var(--color-background)] text-[var(--color-primary)]'>
        <TabPanels>
          {tabs.map((tab, idx) => (
            <TabPanel key={idx}>{tab.component}</TabPanel>
          ))}
        </TabPanels>
      </div>
    </TabGroup>
  );
}

export default ProductPage;
