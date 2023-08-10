import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import ProfilePhoto from '../assets/nobg.png';


export default function Header() {
  return (
    <div>
    <img src={ProfilePhoto} alt="My Profile" className='profile-img' />
      <header className="header">
        <h1 className="header__name">Samsor Rahman</h1>
        <h3 className="header__job">Backend & Infra 👩🏻‍💻</h3>
        <a
          className="header__link"
          href="https://glacial-journey-35510-2708be78f7eb.herokuapp.com/"
          target="_blank"
          rel="noreferrer">
            My-Profile 
        </a>
        <div className="header__buttons">
          <a
            href="mailto:rahmansamsor82@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="header__buttons-email">
            <FontAwesomeIcon
              className="icon-email"
              icon={faEnvelope}
            />
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/samsor-rahman18/"
            target="_blank"
            rel="noreferrer"
            className="header__buttons-linkedin">
            <FontAwesomeIcon className="icon-linkedin" icon={faLinkedin}/> LinkedIn 
            
            </a>
        </div>
      </header>
    </div>
  );
}