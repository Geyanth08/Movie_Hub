import React from 'react';
import Image from 'next/image';
import { ThumbUpIcon, HeartIcon } from '@heroicons/react/outline';

function MovieCard({ movie }) {
  console.log(movie);
  return (
    <div className="m-5 max-w-prose group cursor-pointer hover:scale-100 md:hover:scale-100 rounded-md shadow-[0px_0px_80px_rgba(5,20,33,0.3)] hover:shadow-[red] overflow-hidden border-[#16425b] border-2 transition-shadow">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        alt="name"
        width={280}
        height={180}
        layout="responsive"
      />
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[18px] group-hover:font-bold p-2">
          {movie.title || movie.original_title || movie.name || 'no'}
        </h2>
        <p className="line-clamp-2 break-all pl-2 pr-2">{movie.overview}</p>
        <div className="flex justify-center items-center opacity-0 group-hover:opacity-100 m-2">
          <ThumbUpIcon className="h-5 w-5 mr-2" />{' '}
          <p className="mr-5">{movie.vote_count}</p>
          <HeartIcon className="h-5 w-5 mr-2" />{' '}
          <p>{movie.vote_average * 10}%</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
