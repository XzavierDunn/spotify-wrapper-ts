import { CustomError, InfoType } from "../models/client";
import { GenresObject, GenresType } from "../models/genres";

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
   * error?: CustomError;
   * }>
   */
  public async get_available_genre_seeds(): Promise<{
    result?: GenresType;
    error?: CustomError;
  }> {
    return await this.info.submit_request<GenresType>({
      url: this.api_url,
      method: "GET",
      object: GenresObject,
    });
  }
}

export { Genres };
