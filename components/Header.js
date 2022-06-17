import HeaderIcon from './HeaderIcon';
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline';

function Header() {
  return (
    <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-between">
      <div className="flex mt-5 mb-3">
        <HeaderIcon title="Home" Icon={HomeIcon} />
        <HeaderIcon title="Trending" Icon={LightningBoltIcon} />
        <HeaderIcon title="WatchList" Icon={BadgeCheckIcon} />
        <HeaderIcon title="Collection" Icon={CollectionIcon} />
        <HeaderIcon title="Search" Icon={SearchIcon} />
        <HeaderIcon title="User" Icon={UserIcon} />
      </div>
      <div className="mr-5">
        <h1 className="text-bold hover:scale-110 hover:cursor-pointer">
          MOVIES HUB
        </h1>
      </div>
    </div>
  );
}

export default Header;
