import { ReactComponent as FacebookIcon } from '../lib/icons/Facebook.svg';
import { ReactComponent as TumblrIcon } from '../lib/icons/Tumblr.svg';
import { ReactComponent as TwitterIcon } from '../lib/icons/Twitter.svg';

const social2 = [
  {
    socialIcon: <FacebookIcon className='h-5 w-5 lg:h-8 lg:w-8 fill-accent2 hover:fill-accent' />,
    socialLink: 'https://www.facebook.com/thanhnd4869/',
    socialTitle: 'Facebook',
  },
  {
    socialIcon: <TumblrIcon className='h-5 w-5 lg:h-8 lg:w-8 fill-accent2 hover:fill-accent' />,
    socialLink: 'https://www.tumblr.com/',
    socialTitle: 'Tumblr',
  },
  {
    socialIcon: <TwitterIcon className='h-5 w-5 lg:h-8 lg:w-8 fill-accent2 hover:fill-accent' />,
    socialLink: 'https://twitter.com/',
    socialTitle: 'Twitter',
  },
];

export default social2;
