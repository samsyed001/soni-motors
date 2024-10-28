import { useState } from 'react';
import { Link } from 'react-router-dom';

const SimpleDropdown = ({ title, options, links, isOpen, onToggle ,style}) => {
  const handleOptionClick = () => {
    onToggle(); // Close dropdown after selecting an option
  };

  return (
    <div className="relative inline-block text-left mr-4 py-2" style={{ position: 'relative', ...style }}>
      <div>
        <button
          className="inline-flex justify-between w-full  shadow-sm px-4  h-6 bg-black text-sm font-medium text-white hoverr "
          onClick={onToggle} // Toggle dropdown visibility
          aria-haspopup="true"
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          {title}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06 0L10 10.5l3.71-3.29a.75.75 0 111.04 1.08l-4.25 3.75a.75.75 0 01-1.04 0l-4.25-3.75a.75.75 0 010-1.08z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-full shadow-lg bg-black ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {options.map((option, index) => (
              <Link
                key={index}
                to={links[index]} // Use Link for navigation
                onClick={handleOptionClick} // Close dropdown after selecting an option
                className="block px-4 py-2 text-sm text-white  hover:text-white w-full text-left"
                role="menuitem"
              >
                {option}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleDropdown;
