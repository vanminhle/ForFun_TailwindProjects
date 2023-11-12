import { ImFacebook, ImTwitter, ImPinterest, ImInstagram, ImYoutube } from 'react-icons/im';

import { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';

export default function Socials() {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaverHandler}
      className='ml-24 hidden xl:flex'
    >
      <ul className='flex gap-x-4'>
        <li>
          <a href='http://www.facebook.com' target='_blank' rel='noreferrer'>
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href='http://www.twitter.com' target='_blank' rel='noreferrer'>
            <ImTwitter />
          </a>
        </li>
        <li>
          <a href='http://www.pinterest.com' target='_blank' rel='noreferrer'>
            <ImPinterest />
          </a>
        </li>
        <li>
          <a href='http://www.instagram.com' target='_blank' rel='noreferrer'>
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href='http://www.youtube.com' target='_blank' rel='noreferrer'>
            <ImYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
}
