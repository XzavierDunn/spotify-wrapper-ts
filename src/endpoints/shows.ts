import { z } from "zod";
import { InfoType } from "../models/client";
import { PagesofEpisodes, PagesofEpisodesType } from "../models/episodes";
import { PagesofShows, PagesofShowsType, Show } from "../models/shows";
import { ShowType } from "../models/shows";
import {
  SetofSimplifiedShows,
  SetofSimplifiedShowsType,
} from "../models/shows-simplified";
import { CustomError } from "../models/client";
import { OptionalType, handle_optional } from "../utils/helpers";

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
   * error?: CustomError;
   * }>
   */
  public async get_show(
    id: string,
    market?: string
  ): Promise<{ result?: ShowType; error?: CustomError }> {
    let url = `${this.api_url}${id}`;
    if (market) url += `?market=${market}`;

    return await this.info.submit_user_scoped_request<ShowType>({
      url,
      method: "GET",
      object: Show,
      scopes: ["user-read-playback-position"],
    });
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
   *
   * REQUIRES USER TOKEN (UNDOCUMENTED)
   *
   * @returns
   * Promise<{
   * result?: SetofSimplifiedShowsType;
   * error?: CustomError;
   * }>
   */
  public async get_several_shows(
    ids: string[],
    market?: string
  ): Promise<{ result?: SetofSimplifiedShowsType; error?: CustomError }> {
    let url = `${this.api_url}?ids=${ids.join(",")}`;
    if (market) url += `&market=${market}`;

    return await this.info.submit_user_scoped_request<SetofSimplifiedShowsType>(
      {
        url,
        method: "GET",
        object: SetofSimplifiedShows,
      }
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
   * error?: CustomError;
   * }>
   */
  public async get_show_episodes(
    id: string,
    optional?: OptionalType
  ): Promise<{ result?: PagesofEpisodesType; error?: CustomError }> {
    const { market, limit, offset } = handle_optional(optional);
    let url = `${this.api_url}${id}/episodes?&limit=${limit}&offset=${offset}`;
    if (market) url += `&market=${market}`;

    return await this.info.submit_user_scoped_request<PagesofEpisodesType>({
      url,
      method: "GET",
      object: PagesofEpisodes,
      scopes: ["user-read-playback-position"],
    });
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
   * error?: CustomError;
   * }>
   */
  public async get_users_saved_shows(
    optional?: Omit<OptionalType, "market">
  ): Promise<{ result?: PagesofShowsType; error?: CustomError }> {
    const { limit, offset } = handle_optional(optional);
    const url = `${this.info.api_url}/me/shows?&limit=${limit}&offset=${offset}`;

    return await this.info.submit_user_scoped_request<PagesofShowsType>({
      url,
      method: "GET",
      object: PagesofShows,
      scopes: ["user-library-read"],
    });
  }

  /**
   * Save Shows for Current User - https://developer.spotify.com/documentation/web-api/reference/save-shows-user
   * Save one or more shows to current Spotify user's library.
   * @param ids
   * A comma-separated list of the Spotify IDs for the shows. Maximum: 50 IDs.
   * Example value: "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ"
   * @scopes Authorization scopes
   * - user-library-modify
   * @returns
   * Promise<{
   * result?: string;
   * error?: CustomError;
   * }>
   */
  public async save_shows_for_current_user(
    ids: string[]
  ): Promise<{ result?: string; error?: CustomError }> {
    const url = `${this.info.api_url}/me/shows?ids=${ids.join(",")}`;

    return await this.info.submit_user_scoped_request({
      url,
      method: "PUT",
      scopes: ["user-library-modify"],
    });
  }

  /**
   * Remove User's Saved Shows - https://developer.spotify.com/documentation/web-api/reference/remove-shows-user
   * Delete one or more shows from current Spotify user's library.
   * @param ids
   * A comma-separated list of the Spotify IDs for the shows. Maximum: 50 IDs.
   * Example value: "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ"
   * @param market
   * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.
   * If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.
   * Note: If neither market or user country are provided, the content is considered unavailable for the client.
   * Users can view the country that is associated with their account in the account settings.
   * Example value: "ES"
   * @scopes Authorization scopes
   * - user-library-modify
   * @returns
   * Promise<{
   * result?: string;
   * error?: CustomError;
   * }>
   */
  public async remove_users_saved_shows(
    ids: string[],
    market?: string
  ): Promise<{ result?: string; error?: CustomError }> {
    let url = `${this.info.api_url}/me/shows?ids=${ids.join(",")}`;
    if (market) url += `&market=${market}`;

    return await this.info.submit_user_scoped_request({
      url,
      method: "DELETE",
      scopes: ["user-library-modify"],
    });
  }

  /**
   * Check User's Saved Shows - https://developer.spotify.com/documentation/web-api/reference/check-users-saved-shows
   * Check if one or more shows is already saved in the current Spotify user's library.
   * @param ids
   * A comma-separated list of the Spotify IDs for the shows. Maximum: 50 IDs.
   * Example value: "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ"
   * @scopes Authorization scopes
   * - user-library-read
   * - user-library-modify // THIS IS UNDOCUMENTED!
   * @returns
   * Promise<{
   * result?: boolean[];
   * error?: CustomError;
   * }>
   */
  public async check_users_saved_shows(
    ids: string[]
  ): Promise<{ result?: boolean[]; error?: CustomError }> {
    const url = `${this.info.api_url}/me/shows/contains?ids=${ids.join(",")}`;

    return await this.info.submit_user_scoped_request({
      url,
      method: "GET",
      object: z.array(z.boolean()),
      scopes: ["user-library-read", "user-library-modify"],
    });
  }
}

export { Shows };
