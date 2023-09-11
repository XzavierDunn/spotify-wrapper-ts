import { z } from "zod";
import {
  Album,
  AlbumType,
  SeveralAlbums,
  SeveralAlbumsType,
} from "../models/albums";
import {
  SimplifiedTracks,
  SimplifiedTracksType,
} from "../models/tracks-simplified";
import { InfoType, CustomError } from "../models/client";
import { UsersAlbums, UsersAlbumsType } from "../models/users-albums";
import { NewReleases, NewReleasesType } from "../models/albums-simplified";
import { OptionalType, handle_optional } from "../utils/helpers";

class Albums {
  private info: InfoType;
  private api_url: string;

  constructor(info: InfoType) {
    this.info = info;
    this.api_url = this.info.api_url + "/albums/";
  }

  /**
   * Get Album - https:developer.spotify.com/documentation/web-api/reference/get-an-album
   * @param id
   * The Spotify ID of the album
   * Example value: "4aawyAB9vmqN3uQ7FjRGTy"
   * @param market
   * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.
   * If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.
   * Note: If neither market or user country are provided, the content is considered unavailable for the client.
   * Users can view the country that is associated with their account in the account settings.
   * Example value: "ES"
   * @returns
   * Promise<{ result?: AlbumType; error?: CustomError }>
   */
  public async get_album(
    id: string,
    market?: string
  ): Promise<{ result?: AlbumType; error?: CustomError }> {
    let url = `${this.api_url}${id}`;
    if (market) url += `?market=${market}`;

    return await this.info.submit_request<AlbumType>({
      url,
      method: "GET",
      object: Album,
    });
  }

  /**
   * Get Several Albums - https:developer.spotify.com/documentation/web-api/reference/get-multiple-albums
   * @param ids
   * A comma-separated list of the Spotify IDs for the albums. Maximum: 20 IDs.
   * Example value: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc"
   * @param market
   * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.
   * If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.
   * Note: If neither market or user country are provided, the content is considered unavailable for the client.
   * Users can view the country that is associated with their account in the account settings.
   * Example value: "ES"
   * @returns
   * Promise<{ result?: SeveralAlbumsType; error?: CustomError }>
   */
  public async get_several_albums(
    ids: string[],
    market?: string
  ): Promise<{ result?: SeveralAlbumsType; error?: CustomError }> {
    let url = `${this.api_url}?ids=${ids.toString()}`;
    if (market) url += `&market=${market}`;

    return await this.info.submit_request<SeveralAlbumsType>({
      url,
      method: "GET",
      object: SeveralAlbums,
    });
  }

  /**
   * Get Album Tracks - https:developer.spotify.com/documentation/web-api/reference/get-an-albums-tracks
   * @param id
   * The Spotify ID of the album
   * Example value: "4aawyAB9vmqN3uQ7FjRGTy"
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
   * @returns
   * Promise<{ result?: SimplifiedTracksType; error?: CustomError }>
   */
  public async get_album_tracks(
    id: string,
    optional?: OptionalType
  ): Promise<{ result?: SimplifiedTracksType; error?: CustomError }> {
    const { limit, offset, market } = handle_optional(optional);

    let url = `${this.api_url}${id}/tracks?limit=${limit}&offset=${offset}`;
    if (market) url += `&market=${market}`;

    return await this.info.submit_request<SimplifiedTracksType>({
      url,
      method: "GET",
      object: SimplifiedTracks,
    });
  }

  /**
   * Get User's Saved Albums - https:developer.spotify.com/documentation/web-api/reference/get-users-saved-albums
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
   * - user-library-read
   * @returns
   * Promise<{
   * result?: UsersAlbumsType;
   * error?: { message: string; scopes?: string[] };
   * }>
   */
  public async get_users_saved_albums(optional?: OptionalType): Promise<{
    result?: UsersAlbumsType;
    error?: { message: string; scopes?: string[] };
  }> {
    const { limit, offset, market } = handle_optional(optional);

    let url = `${this.info.api_url}/me/albums?limit=${limit}&offset=${offset}`;
    if (market) url += `&market=${market}`;

    return await this.info.submit_user_scoped_request({
      url,
      method: "GET",
      object: UsersAlbums,
      scopes: ["user-library-read"],
    });
  }

  /**
   * Save Albums for Current User - https:developer.spotify.com/documentation/web-api/reference/save-albums-user
   * Save one or more albums to the current user's 'Your Music' library.
   * @param ids
   * A comma-separated list of the Spotify IDs for the albums. Maximum: 20 IDs.
   * Example value: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc"
   * @scopes Authorization scopes
   * - user-library-modify
   * @returns
   * Promise<{ result?: string; error?: CustomError }>
   */
  public async save_albums_for_current_user(
    ids: string[]
  ): Promise<{ result?: string; error?: CustomError }> {
    let url = `${this.info.api_url}/me/albums?ids=${ids.toString()}`;

    return await this.info.submit_user_scoped_request({
      url,
      method: "PUT",
      body: JSON.stringify({ ids }),
      scopes: ["user-library-modify"],
    });
  }

  /**
   * Remove Users' Saved Albums - https:developer.spotify.com/documentation/web-api/reference/remove-albums-user
   * Remove one or more albums from the current user's 'Your Music' library.
   * @param ids
   * A comma-separated list of the Spotify IDs for the albums. Maximum: 20 IDs.
   * Example value: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc"
   * @scopes Authorization scopes
   * - user-library-modify
   * @returns
   * Promise<{ result?: string; error?: CustomError }>
   */
  public async remove_users_saved_albums(
    ids: string[]
  ): Promise<{ result?: string; error?: CustomError }> {
    let url = `${this.info.api_url}/me/albums?ids=${ids.toString()}`;

    return await this.info.submit_user_scoped_request({
      url,
      method: "DELETE",
      body: JSON.stringify({ ids }),
      scopes: ["user-library-modify"],
    });
  }

  /**
   * Check User's Saved Albums - https:developer.spotify.com/documentation/web-api/reference/check-users-saved-albums
   * Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.
   * @param ids
   * A comma-separated list of the Spotify IDs for the albums. Maximum: 20 IDs.
   * Example value: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc"
   * @scopes Authorization scopes
   * - user-library-read
   * @returns
   * Promise<{ result?: boolean[]; error?: CustomError }>
   */
  public async check_users_saved_albums(
    ids: string[]
  ): Promise<{ result?: boolean[]; error?: CustomError }> {
    let url = `${this.info.api_url}/me/albums/contains?ids=${ids.toString()}`;

    return await this.info.submit_user_scoped_request({
      url,
      method: "GET",
      object: z.array(z.boolean()),
      scopes: ["user-library-read"],
    });
  }

  /**
   * Get New Releases - https:developer.spotify.com/documentation/web-api/reference/get-new-releases
   * Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).
   * @param country
   * A country: an ISO 3166-1 alpha-2 country code. Provide this parameter if you want the list of returned items to be relevant to a particular country. If omitted, the returned items will be relevant to all countries.
   * Example value: "SE"
   * @param limit
   * The maximum number of items to return.
   * Example value: 10
   * Default value: 20
   * Range: 0 - 50
   * @param offset
   * The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.
   * Example value: 5
   * Default value: 0
   * @returns
   * Promise<{ result?: NewReleasesType; error?: CustomError }>
   */
  public async get_new_releases(
    optional?: OptionalType
  ): Promise<{ result?: NewReleasesType; error?: CustomError }> {
    const { limit, offset, market } = handle_optional(optional);
    const country = market;

    let url = `${this.info.api_url}/browse/new-releases?limit=${limit}&offset=${offset}`;
    if (country) url += `&country=${country}`;

    return await this.info.submit_request<NewReleasesType>({
      url,
      method: "GET",
      object: NewReleases,
    });
  }
}

export { Albums };
