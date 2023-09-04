import { InfoType } from "../client/client";
import { PagesofEpisodes, PagesofEpisodesType } from "../models/episodes";
import { PagesofShows, PagesofShowsType, Show } from "../models/shows";
import { ShowType } from "../models/shows";
import {
  SetofSimplifiedShows,
  SetofSimplifiedShowsType,
} from "../models/shows-simplified";
import { get_req } from "../utils/requests";

class Shows {
  private info: InfoType;
  private api_url: string;

  constructor(info: InfoType) {
    this.info = info;
    this.api_url = this.info.api_url + "/shows/";
  }

  /**
   * Get Show - https://developer.spotify.com/documentation/web-api/reference/get-a-show
   * Get Spotify catalog information for a single show identified by its unique Spotify ID.
   * @param id
   * The Spotify ID for the show.
   * Example value: "38bS44xjbVVZ3No3ByF1dJ"
   * @param market
   * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.
   * If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.
   * Note: If neither market or user country are provided, the content is considered unavailable for the client.
   * Users can view the country that is associated with their account in the account settings.
   * Example value: "ES"
   * @scopes Authorization scopes
   * - user-read-playback-position
   * @returns
   * Promise<{
   * result?: ShowType;
   * error?: Error;
   * }>
   */
  public async get_show(
    id: string,
    market?: string
  ): Promise<{ result?: ShowType; error?: Error }> {
    let url = `${this.api_url}${id}`;
    if (market) url += `?market=${market}`;

    return await get_req(url, this.info.user_access_token, Show, this.info);
  }

  /**
   * Get Several Shows - https://developer.spotify.com/documentation/web-api/reference/get-multiple-shows
   * Get Spotify catalog information for several shows based on their Spotify IDs.
   * @param ids
   * A comma-separated list of the Spotify IDs for the shows. Maximum: 50 IDs.
   * Example value: "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ"
   * @param market
   * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.
   * If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.
   * Note: If neither market or user country are provided, the content is considered unavailable for the client.
   * Users can view the country that is associated with their account in the account settings.
   * Example value: "ES"
   * @returns
   * Promise<{
   * result?: SetofSimplifiedShowsType;
   * error?: Error;
   * }>
   */
  public async get_several_shows(
    ids: string[],
    market: string
  ): Promise<{ result?: SetofSimplifiedShowsType; error?: Error }> {
    let url = `${this.api_url}?ids=${ids.join(",")}&market=${market}`;

    return await get_req(
      url,
      this.info.client_access_token,
      SetofSimplifiedShows,
      this.info
    );
  }

  /**
   * Get Show Episodes - https://developer.spotify.com/documentation/web-api/reference/get-a-shows-episodes
   * Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.
   * @param id
   * The Spotify ID for the show.
   * Example value: "38bS44xjbVVZ3No3ByF1dJ"
   * @param market
   * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.
   * If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.
   * Note: If neither market or user country are provided, the content is considered unavailable for the client.
   * Users can view the country that is associated with their account in the account settings.
   * Example value: "ES"
   * @param limit
   * The maximum number of items to return.
   * Example value: 10
   * Default value: 20
   * Range: 0 - 50
   * @param offset
   * The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.
   * Example value: 5
   * Default value: 0
   * @scopes Authorization scopes
   * - user-read-playback-position
   * @returns
   * Promise<{
   * result?: PagesofEpisodesType;
   * error?: Error;
   * }>
   */
  public async get_show_episodes(
    id: string,
    market?: string,
    limit: number = 20,
    offset: number = 0
  ): Promise<{ result?: PagesofEpisodesType; error?: Error }> {
    let url = `${this.api_url}${id}/episodes?&limit=${limit}&offset=${offset}`;
    if (market) url += `&market=${market}`;

    return await get_req(
      url,
      this.info.user_access_token,
      PagesofEpisodes,
      this.info
    );
  }

  /**
   * Get User's Saved Shows - https://developer.spotify.com/documentation/web-api/reference/get-users-saved-shows
   * Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.
   * @param limit
   * The maximum number of items to return.
   * Example value: 10
   * Default value: 20
   * Range: 0 - 50
   * @param offset
   * The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.
   * Example value: 5
   * Default value: 0
   * @scopes Authorization scopes
   * - user-library-read
   * @returns
   * Promise<{
   * result?: PagesofShowsType;
   * error?: Error;
   * }>
   */
  public async get_users_saved_shows(
    limit: number = 20,
    offset: number = 0
  ): Promise<{ result?: PagesofShowsType; error?: Error }> {
    let url = `${this.info.api_url}/me/shows?&limit=${limit}&offset=${offset}`;

    return await get_req(
      url,
      this.info.user_access_token,
      PagesofShows,
      this.info
    );
  }
}

export { Shows };
