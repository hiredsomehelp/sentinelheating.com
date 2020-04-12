import { graphql, useStaticQuery, Link } from 'gatsby';
import React, { useState } from 'react';

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="bg-white shadow-sm text-gray-800 text-gray w-full">
      <div className="flex flex-wrap items-center justify-between mt-2 py-8">
        <div className="flex">
          <svg
            viewBox="0 0 384 512"
            height="1.5rem"
            className="d-inline-block align-middle mr-2 text-gray-300"
          >
            <path className="fill-current" d="M81.241 215.027C80.957 258.92 77.411 348.076 48 448h287.982c-29.4-99.604-32.936-188.912-33.221-232.975l45.418-42.312a11.998 11.998 0 0 0 3.82-8.78V44c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v44h-48V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v44H96V44c0-6.627-5.373-12-12-12H44c-6.627 0-12 5.373-12 12v119.932c0 3.33 1.384 6.51 3.82 8.78l45.421 42.315zM160 256c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v64.004h-64V256zm224 220v24c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12z"></path>
          </svg>
          <Link className="flex items-center no-underline" to="/">
            <span className="font-bold text-sm md:text-xl tracking-tight">
              {site.siteMetadata.title}
            </span>
          </Link>
        </div>
        <div className="flex">
          <span className="block md:hidden mr-4 inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md bg-white hover:bg-gray-100 transition ease-in-out duration-150"
            >
              Contact Us
            </button>
          </span>

          <button
            className="block md:hidden flex items-center"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                className={`${isExpanded ? 'block' : 'hidden'}`}
                fillRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
              <path
                className={`${isExpanded ? 'hidden' : 'block'}`}
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/#services`,
              title: `Services`,
            },
            {
              route: `/about`,
              title: `Our Work`,
            },
            {
              route: `/about`,
              title: `About Us`,
            },
          ].map((link, idx) => (
            <a
              className="block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline"
              href={link.route}
              key={idx}
            >
              {link.title}
            </a>
          ))}
          <span className="md:ml-6 md:mr-2 inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className="hidden md:block inline-flex items-center h-12 w-32 px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md bg-gray-900 text-white hover:bg-gray-800 transition ease-in-out duration-150"
            >
              Contact Us
            </button>
          </span>
        </nav>
      </div>
    </header>
  );
}

export default Header;
