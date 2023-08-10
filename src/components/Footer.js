import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import links from '../utils/constants';

export default function Footer() {
  return (
    <footer>
      <ul className="social-list">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon className='social-icon' icon={link.icon} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}