import Hero from '@/components/Hero';
import MovieList from '@/components/MovieList';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <MovieList title="Trending Now" />
        <MovieList title="New Releases" />
        <MovieList title="Top Picks for You" />
      </div>
    </main>
  );
}