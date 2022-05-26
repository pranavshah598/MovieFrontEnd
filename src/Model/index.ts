export interface Movie {
  name: string;
  productionYear: number;
  genre: string;
  synopsisShort: string;
  synopsis: string;
  image: string;
}
interface CommonDataForm {
  isLoading: boolean;
  error: string;
}
interface MovieForm extends CommonDataForm {
  data: Movie[];
}

export interface AppState {
  movieList: MovieForm;
}
