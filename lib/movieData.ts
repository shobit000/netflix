export interface Movie {
  id: number;
  title: string;
  image: string;
  duration: string;
  type: 'Movie' | 'Series';
  rating: number;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    image: "https://picsum.photos/seed/1/300/450",
    duration: "148 min",
    type: "Movie",
    rating: 4.8
  },
  {
    id: 2,
    title: "Stranger Things",
    image: "https://picsum.photos/seed/2/300/450",
    duration: "50 min",
    type: "Series",
    rating: 4.7
  },
  {
    id: 3,
    title: "The Shawshank Redemption",
    image: "https://picsum.photos/seed/3/300/450",
    duration: "142 min",
    type: "Movie",
    rating: 4.9
  },
  {
    id: 4,
    title: "Breaking Bad",
    image: "https://picsum.photos/seed/4/300/450",
    duration: "49 min",
    type: "Series",
    rating: 4.9
  },
  {
    id: 5,
    title: "The Dark Knight",
    image: "https://picsum.photos/seed/5/300/450",
    duration: "152 min",
    type: "Movie",
    rating: 4.7
  },
  // Add more movies/series as needed to reach 20 items
];