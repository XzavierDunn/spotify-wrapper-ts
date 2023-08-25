import { InfoType } from "../client/client";
import { GenresObject, GenresType } from "../models/genres";
import { get } from "../utils/utils";

class Genres {
  private info: InfoType;
  private api_url: string;

  constructor(info: InfoType) {
    this.info = info;
    this.api_url = this.info.api_url + "/recommendations/available-genre-seeds";
  }

  /**
   * Get Available Genre Seeds - https://developer.spotify.com/documentation/web-api/reference/get-recommendation-genres
   * Retrieve a list of available genres seed parameter values for recommendations.
   * @returns
   * Promise<{
   * result?: GenresType;
   * error?: Error;
   * }>
   */
  async get_available_genre_seeds(): Promise<{
    result?: GenresType;
    error?: Error;
  }> {
    return await get(this.api_url, GenresObject, this.info);
  }
}

export { Genres };
