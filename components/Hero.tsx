"use client";

import { Button } from '@/components/ui/button';
import { Play, Info } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-[56.25vw]">
      <img
        src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Hero Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Movie Title</h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-6 max-w-2xl">
          A brief description of the movie or TV show, highlighting its key features and appeal to viewers.
        </p>
        <div className="flex space-x-4">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200">
            <Play className="mr-2 h-5 w-5" /> Play
          </Button>
          <Button size="lg" variant="secondary">
            <Info className="mr-2 h-5 w-5" /> More Info
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;