import CategoriesWidget from './categories-widget';
import FreelanceWorkWidget from './freelance-work-widget';
import SearchWidget from './search-widget';
import TagsWidget from './tags-widget';

const Sidebar2 = () => (
  <aside className='flex flex-col gap-[1.875rem] w-full'>
    <SearchWidget />
    <CategoriesWidget />
    <TagsWidget />
    <FreelanceWorkWidget />
  </aside>
);

export default Sidebar2;
