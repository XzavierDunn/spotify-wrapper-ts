import { z } from "zod";
import { CustomError, InfoType } from "../models/client";
import {
  Episode,
  EpisodePages,
  EpisodeType,
  EpisodesType,
  SeveralEpisodes,
  SeveralEpisodesType,
} from "../models/episodes";
import { OptionalType, handle_optional } from "../utils/helpers";

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
   * error?: CustomError;
   * }>
   */
  public async get_episode(
    id: string,
    market?: string
  ): Promise<{ result?: EpisodeType; error?: CustomError }> {
    let url = `${this.api_url}${id}`;
    if (market) url += "?market=" + market;

    return await this.info.submit_user_scoped_request({
      url,
      method: "GET",
      object: Episode,
      scopes: ["user-read-playback-position"],
    });
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
   * error?: CustomError;
   * }>
   */
  public async get_several_episodes(
    ids: string[],
    market?: string
  ): Promise<{ result?: SeveralEpisodesType; error?: CustomError }> {
    let url = `${this.api_url}?ids=${ids.join(",")}`;
    if (market) url += "&market=" + market;

    return await this.info.submit_user_scoped_request<SeveralEpisodesType>({
      url,
      method: "GET",
      object: SeveralEpisodes,
      scopes: ["user-read-playback-position"],
    });
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
   * error?: CustomError;
   * }>
   */
  public async get_users_saved_episodes(
    optional?: OptionalType
  ): Promise<{ result?: EpisodesType; error?: CustomError }> {
    const { limit, offset, market } = handle_optional(optional);

    let url = `${this.info.api_url}/me/episodes?limit=${limit}&offset=${offset}`;
    if (market) url += "&market=" + market;

    return await this.info.submit_user_scoped_request<EpisodesType>({
      url,
      method: "GET",
      object: EpisodePages,
      scopes: ["user-library-read", "user-read-playback-position"],
    });
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
   * error?: CustomError;
   * }>
   */
  public async save_episodes_for_current_user(
    ids: string[]
  ): Promise<{ result?: string; error?: CustomError }> {
    let url = `${this.info.api_url}/me/episodes?ids=${ids.join(",")}`;

    return await this.info.submit_user_scoped_request({
      url,
      method: "PUT",
      body: JSON.stringify({ ids }),
      scopes: ["user-library-modify"],
    });
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
   * error?: CustomError;
   * }>
   */
  public async remove_users_saved_episodes(
    ids: string[]
  ): Promise<{ result?: string; error?: CustomError }> {
    let url = `${this.info.api_url}/me/episodes?ids=${ids.join(",")}`;

    return await this.info.submit_user_scoped_request({
      url,
      method: "DELETE",
      scopes: ["user-library-modify"],
    });
  }

  /**
   * Check User's Saved Episodes - https://developer.spotify.com/documentation/web-api/reference/check-users-saved-episodes
   * Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.
   * This API endpoint is in beta and could change without warning. Please share any feedback that you have, or issues that you discover, in our developer community forum.
   * @param ids
   * A comma-separated list of the Spotify IDs. Maximum: 50 IDs.
   * Example value: "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf"
   * @scopes Authorization scopes
   * - user-library-read
   * @returns
   * Promise<{
   * result?: boolean[];
   * error?: CustomError;
   * }>
   */
  public async check_users_saved_episodes(
    ids: string[]
  ): Promise<{ result?: boolean[]; error?: CustomError }> {
    let url = `${this.info.api_url}/me/episodes/contains?ids=${ids.join(",")}`;

    return await this.info.submit_user_scoped_request({
      url,
      method: "GET",
      object: z.array(z.boolean()),
      scopes: ["user-library-read"],
    });
  }
}

export { Episodes };
