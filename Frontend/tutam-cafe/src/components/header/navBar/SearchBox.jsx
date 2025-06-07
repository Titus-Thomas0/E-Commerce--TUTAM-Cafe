import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

function SearchBox() {
  return (
    <>
      <div className="flex w-60 md:w-75 lg:w-full items-center rounded-md bg-[var(--color-background)] pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-[var(--color-text)]">
        <form className="flex text-sm text-[var(--color-primary)] w-full" role='search'>
          <input 
            type="text"
            placeholder='Looking for something specific?'
            autoComplete='off'
            role='combobox'
            aria-autocomplete='list'
            aria-expanded="false"
            aria-haspopup="listbox"
            className='outline-0 text-[var(--color-primary) w-70'
          />
          <a href="#" className="p-2 text-[var(--color-secondary)] hover:text-[var(--color-primary)]">
            <span className="sr-only">Search</span>
            <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
          </a>
        </form>
      </div>
    </>
  )
}

export default SearchBox