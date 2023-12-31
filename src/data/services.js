import { ReactComponent as UiCreativeDesignIcon } from '../lib/icons/Curve.svg';
import { ReactComponent as DesktopApplicationIcon } from '../lib/icons/InformationService.svg';
import { ReactComponent as WebDevelopmentIcon } from '../lib/icons/Monitor.svg';
import { ReactComponent as StrategyIcon } from '../lib/icons/Strategy.svg';
import { ReactComponent as TranslationIcon } from '../lib/icons/Translation.svg';
import { ReactComponent as WireframingServiceIcon } from '../lib/icons/WebProgramming.svg';

const services = [
  {
    id: 1,
    bgColor: 'bg-accent',
    titleColor: 'text-white',
    descColor: 'text-white',
    servIcon: <UiCreativeDesignIcon className='h-[4.25rem] w-[4.25rem] fill-white' />,
    servTitle: 'UI/UX Creative Design',
    servDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore.',
  },
  {
    id: 2,
    bgColor: 'bg-[#f0e1d4]',
    titleColor: 'text-accent2',
    descColor: 'text-desc2',
    servIcon: <WebDevelopmentIcon className='h-[4.25rem] w-[4.25rem] fill-accent' />,
    servTitle: 'Desktop Application',
    servDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore.',
  },
  {
    id: 3,
    bgColor: 'bg-[#d4e4f0]',
    titleColor: 'text-accent2',
    descColor: 'text-desc2',
    servIcon: <WireframingServiceIcon className='h-[4.25rem] w-[4.25rem] fill-accent' />,
    servTitle: 'Website Development',
    servDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore.',
  },
  {
    id: 4,
    bgColor: 'bg-gray',
    titleColor: 'text-accent2',
    descColor: 'text-desc2',
    servIcon: <DesktopApplicationIcon className='h-[4.25rem] w-[4.25rem] fill-accent' />,
    servTitle: 'Wireframing Services',
    servDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore.',
  },
  {
    id: 5,
    bgColor: 'bg-[#f0fbfe]',
    titleColor: 'text-accent2',
    descColor: 'text-desc2',
    servIcon: <StrategyIcon className='h-[4.25rem] w-[4.25rem] fill-accent' />,
    servTitle: 'Strategy & Research',
    servDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore.',
  },
  {
    id: 6,
    bgColor: 'bg-[#fef4f0]',
    titleColor: 'text-accent2',
    descColor: 'text-desc2',
    servIcon: <TranslationIcon className='h-[4.25rem] w-[4.25rem] fill-accent' />,
    servTitle: 'Branding & Strategy',
    servDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore.',
  },
];

export default services;
