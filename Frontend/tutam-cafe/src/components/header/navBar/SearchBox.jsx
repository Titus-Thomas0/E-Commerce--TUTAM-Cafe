import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

function SearchBox() {
  return (
    <>
      <div 
        className="flex hidden lg:block lg:w-full items-center rounded-md pl-3 outline-1 -outline-offset-1 outline-[var(--color-primary)] text-[var(--color-text)]
                  has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-[var(--color-accent)]"
      >
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
          <a href="/Search" className="p-2 text-[var(--color-primary)] hover:text-[var(--color-accent)]">
            <span className="sr-only">Search</span>
            <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
          </a>
        </form>
      </div>

      <a href="/Search" className='lg:hidden text-[var(--color-primary)] hover:text-[var(--color-accent)]'>
          <MagnifyingGlassIcon className="size-6" />
      </a>
    </>
  )
}

export default SearchBox