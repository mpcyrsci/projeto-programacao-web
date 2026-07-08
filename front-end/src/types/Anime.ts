export interface Anime {
  mal_id: number;
  title: string;
  score: number | null;
  episodes: number | null;
  images: {
    jpg: {
      image_url: string;
    };
  };
}
