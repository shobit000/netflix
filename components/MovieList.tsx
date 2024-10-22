"use client";

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Movie, movies } from '@/lib/movieData';

interface MovieListProps {
  title: string;
}

const MovieList: React.FC<MovieListProps> = ({ title }) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const checkArrows = () => {
    const container = containerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', checkArrows);
      checkArrows();
    }
    return () => container?.removeEventListener('scroll', checkArrows);
  }, []);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="relative">
        {showLeftArrow && (
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 p-2 rounded-full"
            onClick={() => handleScroll('left')}
          >
            <ChevronLeft className="text-white" />
          </button>
        )}
        <div
          ref={containerRef}
          className="flex space-x-4 overflow-x-scroll scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {movies.map((movie) => (
            <div key={movie.id} className="flex-shrink-0 w-48">
              <div className="relative group">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-72 object-cover rounded-md transition-transform duration-300 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300 rounded-md flex flex-col justify-end p-4">
                  <h3 className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{movie.title}</h3>
                  <p className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">{movie.duration} • {movie.type}</p>
                  <div className="flex items-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Star className="text-yellow-400 w-4 h-4 mr-1" />
                    <span className="text-white text-xs">{movie.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {showRightArrow && (
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 p-2 rounded-full"
            onClick={() => handleScroll('right')}
          >
            <ChevronRight className="text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieList;