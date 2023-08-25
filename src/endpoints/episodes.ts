import { z } from "zod";
import { InfoType } from "../client/client";
import {
  Episode,
  EpisodePages,
  EpisodeType,
  EpisodesType,
  SeveralEpisodes,
  SeveralEpisodesType,
} from "../models/episodes";
import { delete_method, get, put } from "../utils/utils";

class Episodes {
  private info: InfoType;
  private api_url: string;

  constructor(info: InfoType) {
    this.info = info;
    this.api_url = this.info.api_url + "/episodes/";
  }

  /**
   * Get Episode - https://developer.spotify.com/documentation/web-api/reference/get-an-episode
   * Get Spotify catalog information for a single episode identified by its unique Spotify ID.
   * @param id
   * The Spotify ID for the episode.
   * Example value: "512ojhOuo1ktJprKbVcKyQ"
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
   * result?: EpisodeType;
   * error?: Error;
   * }>
   */
  async get_episode(
    id: string,
    market?: string
  ): Promise<{ result?: EpisodeType; error?: Error }> {
    if (!this.info.user_access_token || this.info.user_access_token === "")
      throw new Error("This endpoint requires a user access token");

    let url = `${this.api_url}${id}`;
    if (market) url += "?market=" + market;

    return await get(url, Episode, this.info, true);
  }

  /**
   * Get Several Episodes - https://developer.spotify.com/documentation/web-api/reference/get-multiple-episodes
   * Get Spotify catalog information for several episodes based on their Spotify IDs.
   * @param ids
   * A comma-separated list of the Spotify IDs for the episodes. Maximum: 50 IDs.
   * Example value: "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf"
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
   * result?: SeveralEpisodesType;
   * error?: Error;
   * }>
   */
  async get_several_episodes(
    ids: string[],
    market?: string
  ): Promise<{ result?: SeveralEpisodesType; error?: Error }> {
    if (!this.info.user_access_token || this.info.user_access_token === "")
      throw new Error("This endpoint requires a user access token");

    let url = `${this.api_url}?ids=${ids.join(",")}`;
    if (market) url += "&market=" + market;

    return await get(url, SeveralEpisodes, this.info, true);
  }

  /**
   * Get User's Saved Episodes - https://developer.spotify.com/documentation/web-api/reference/get-users-saved-episodes
   * Get a list of the episodes saved in the current Spotify user's library.
   * This API endpoint is in beta and could change without warning. Please share any feedback that you have, or issues that you discover, in our developer community forum.
   * @param market
   * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.
   * If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.
   * Note: If neither market or user country are provided, the content is considered unavailable for the client.
   * Users can view the country that is associated with their account in the account settings.
   * Example value: "ES"
   * @param limit
   * The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
   * Example value: 10
   * Default value: 20
   * Range: 0 - 50
   * @param offset
   * The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.
   * Example value: 5
   * Default value: 0
   * @scopes Authorization scopes
   * - user-library-read
   * - user-read-playback-position
   * @returns
   * Promise<{
   * result?: EpisodesType;
   * error?: Error;
   * }>
   */
  async get_users_saved_episodes(
    markets?: string,
    limit: number = 20,
    offset: number = 0
  ): Promise<{ result?: EpisodesType; error?: Error }> {
    if (!this.info.user_access_token || this.info.user_access_token === "")
      throw new Error("This endpoint requires a user access token");

    let url = `${this.info.api_url}/me/episodes?limit=${limit}&offset=${offset}`;
    if (markets) url += "&market=" + markets;

    return await get(url, EpisodePages, this.info, true);
  }

  /**
   * Save Episodes for Current User - https://developer.spotify.com/documentation/web-api/reference/save-episodes-user
   * Save one or more episodes to the current user's library.
   * This API endpoint is in beta and could change without warning. Please share any feedback that you have, or issues that you discover, in our developer community forum.
   * @param ids
   * A comma-separated list of the Spotify IDs. Maximum: 50 IDs.
   * Example value: "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf"
   * @scopes Authorization scopes
   * - user-library-modify
   * @returns
   * Promise<{
   * result?: string;
   * error?: Error;
   * }>
   */
  async save_episodes_for_current_user(
    ids: string[]
  ): Promise<{ result?: string; error?: Error }> {
    if (!this.info.user_access_token || this.info.user_access_token === "")
      throw new Error("This endpoint requires a user access token");

    let url = `${this.info.api_url}/me/episodes?ids=${ids.join(",")}`;

    return await put(url, { ids }, this.info);
  }

  /**
   * Remove User's Saved Episodes - https://developer.spotify.com/documentation/web-api/reference/remove-episodes-user
   * Remove one or more episodes from the current user's library.
   * This API endpoint is in beta and could change without warning. Please share any feedback that you have, or issues that you discover, in our developer community forum.
   * @param ids
   * A comma-separated list of the Spotify IDs. Maximum: 50 IDs.
   * Example value: "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf"
   * @scopes Authorization scopes
   * - user-library-modify
   * @returns
   * Promise<{
   * result?: string;
   * error?: Error;
   * }>
   */
  async remove_users_saved_episodes(
    ids: string[]
  ): Promise<{ result?: string; error?: Error }> {
    if (!this.info.user_access_token || this.info.user_access_token === "")
      throw new Error("This endpoint requires a user access token");

    let url = `${this.info.api_url}/me/episodes?ids=${ids.join(",")}`;

    return await delete_method(url, { ids }, this.info);
  }

  /**
   * Check User's Saved Episodes - https://developer.spotify.com/documentation/web-api/reference/check-users-saved-episodes
   * Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.
This API endpoint is in beta and could change without warning. Please share any feedback that you have, or issues that you discover, in our developer community forum.
   * @param ids
   * A comma-separated list of the Spotify IDs. Maximum: 50 IDs.
   * Example value: "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf"
   * @scopes Authorization scopes
   * - user-library-read
   * @returns
   * Promise<{
   * result?: boolean[];
   * error?: Error;
   * }>
   */
  async check_users_saved_episodes(
    ids: string[]
  ): Promise<{ result?: boolean[]; error?: Error }> {
    if (!this.info.user_access_token || this.info.user_access_token === "")
      throw new Error("This endpoint requires a user access token");

    let url = `${this.info.api_url}/me/episodes/contains?ids=${ids.join(",")}`;

    return await get(url, z.array(z.boolean()), this.info, true);
  }
}

export { Episodes };
