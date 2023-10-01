import CategoriesWidget from './categories-widget';
import SearchWidget from './search-widget';
import TagsWidget from './tags-widget';

const Sidebar = () => (
  <aside className='flex flex-col gap-[1.875rem] w-full'>
    <SearchWidget />
    <CategoriesWidget />
    <TagsWidget />
  </aside>
);

export default Sidebar;
