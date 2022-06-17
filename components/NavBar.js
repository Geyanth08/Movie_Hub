import genreList from '../util/requests';
import { useRouter } from 'next/router';

function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <div className="flex pl-5 pr-5 pb-3 whitespace-nowrap cursor-pointer overflow-scroll scrollbar-hide scroll-smooth mt-3 md:mt-0">
        {Object.entries(genreList).map(([key, { title }]) => (
          <h2
            className="text-white md:text-[18px] mr-4 sm:mr-8 hover:scale-125 hover:text-green-500 active:text-red-500 hover:underline hover:underline-offset-2 transition duration-500"
            key={key}
            onClick={() => router.push(`?genre=fetch${title}`)}>
            {title}
          </h2>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
