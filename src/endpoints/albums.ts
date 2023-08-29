import { delete_method, get, put } from "../utils/utils";
import { InfoType } from "../client/client";
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
import { UsersAlbums, UsersAlbumsType } from "../models/users-albums";
import { z } from "zod";
import { NewReleases, NewReleasesType } from "../models/albums-simplified";

class Albums {
  private info: InfoType;
  private api_url: string;

  constructor(info: InfoType) {
    this.info = info;
    this.api_url = this.info.api_url + "/albums/";
  }

  /**
   * Get Album - https://developer.spotify.com/documentation/web-api/reference/get-an-album
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
   * Promise<{
   * result?: AlbumType;
   * error?: Error;
   * }>
   */
  public async get_album({
    id,
    market,
  }: {
    id: string;
    market?: string;
  }): Promise<{
    result?: AlbumType;
    error?: Error;
  }> {
    let url = `${this.api_url}${id}`;
    if (market) url += `?market=${market}`;

    return await get(url, Album, this.info);
  }

  /**
   * Get Several Albums - https://developer.spotify.com/documentation/web-api/reference/get-multiple-albums
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
   * Promise<{
   * result?: SeveralAlbumsType;
   * error?: Error;
   * }>
   */
  public async get_several_albums({
    ids,
    market,
  }: {
    ids: string[];
    market?: string;
  }): Promise<{
    result?: SeveralAlbumsType;
    error?: Error;
  }> {
    let url = `${this.api_url}?ids=${ids.toString()}`;
    if (market) url += `&market=${market}`;

    return await get(url, SeveralAlbums, this.info);
  }

  /**
   * Get Album Tracks - https://developer.spotify.com/documentation/web-api/reference/get-an-albums-tracks
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
   * Promise<{
   * result?: SimplifiedTracksType;
   * error?: Error;
   * }>
   */
  public async get_album_tracks({
    id,
    market,
    limit = 20,
    offset = 0,
  }: {
    id: string;
    market?: string;
    limit?: number;
    offset?: number;
  }): Promise<{
    result?: SimplifiedTracksType;
    error?: Error;
  }> {
    let url = `${this.api_url}${id}/tracks?limit=${limit}&offset=${offset}`;
    if (market) url += `&market=${market}`;

    return await get(url, SimplifiedTracks, this.info);
  }

  /**
   * Get User's Saved Albums - https://developer.spotify.com/documentation/web-api/reference/get-users-saved-albums
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
   * error?: Error;
   * }>
   */
  public async get_users_saved_albums({
    market,
    limit = 20,
    offset = 0,
  }: {
    market?: string;
    limit?: number;
    offset?: number;
  }): Promise<{
    result?: UsersAlbumsType;
    error?: Error;
  }> {
    if (
      !this.info.userInfo.access_token ||
      this.info.userInfo.access_token === ""
    )
      throw new Error("This endpoint requires a user access token");

    let url = `${this.info.api_url}/me/albums?limit=${limit}&offset=${offset}`;
    if (market) url += `&market=${market}`;

    return await get(url, UsersAlbums, this.info, true);
  }

  /**
   * Save Albums for Current User - https://developer.spotify.com/documentation/web-api/reference/save-albums-user
   * Save one or more albums to the current user's 'Your Music' library.
   * @param ids
   * A comma-separated list of the Spotify IDs for the albums. Maximum: 20 IDs.
   * Example value: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc"
   * @scopes Authorization scopes
   * - user-library-modify
   * @returns
   * Promise<{
   * result?: string;
   * error?: Error;
   * }>
   */
  public async save_albums_for_current_user({
    ids,
  }: {
    ids: string[];
  }): Promise<{
    result?: string;
    error?: Error;
  }> {
    if (
      !this.info.userInfo.access_token ||
      this.info.userInfo.access_token === ""
    )
      throw new Error("This endpoint requires a user access token");

    let url = `${this.info.api_url}/me/albums?ids=${ids.toString()}`;
    return await put(url, { ids }, this.info);
  }

  /**
   * Remove Users' Saved Albums - https://developer.spotify.com/documentation/web-api/reference/remove-albums-user
   * Remove one or more albums from the current user's 'Your Music' library.
   * @param ids
   * A comma-separated list of the Spotify IDs for the albums. Maximum: 20 IDs.
   * Example value: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc"
   * @scopes Authorization scopes
   * - user-library-modify
   * @returns
   * Promise<{
   * result?: string;
   * error?: Error;
   * }>
   */
  public async remove_users_saved_albums({ ids }: { ids: string[] }): Promise<{
    result?: string;
    error?: Error;
  }> {
    if (
      !this.info.userInfo.access_token ||
      this.info.userInfo.access_token === ""
    )
      throw new Error("This endpoint requires a user access token");

    let url = `${this.info.api_url}/me/albums?ids=${ids.toString()}`;
    return await delete_method(url, { ids }, this.info);
  }

  /**
   * Check User's Saved Albums - https://developer.spotify.com/documentation/web-api/reference/check-users-saved-albums
   * Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.
   * @param ids
   * A comma-separated list of the Spotify IDs for the albums. Maximum: 20 IDs.
   * Example value: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc"
   * @scopes Authorization scopes
   * - user-library-read
   * @returns
   * Promise<{
   * result?: boolean[];
   * error?: Error;
   * }>
   */
  public async check_users_saved_albums({ ids }: { ids: string[] }): Promise<{
    result?: boolean[];
    error?: Error;
  }> {
    if (
      !this.info.userInfo.access_token ||
      this.info.userInfo.access_token === ""
    )
      throw new Error("This endpoint requires a user access token");

    let url = `${this.info.api_url}/me/albums/contains?ids=${ids.toString()}`;
    return await get(url, z.array(z.boolean()), this.info, true);
  }

  /**
   * Get New Releases - https://developer.spotify.com/documentation/web-api/reference/get-new-releases
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
   * Promise<{
   * result?: SeveralSimplifiedAlbumsType;
   * error?: Error;
   * }>
   */
  public async get_new_releases({
    country,
    limit = 20,
    offset = 0,
  }: {
    country?: string;
    limit?: number;
    offset?: number;
  }): Promise<{
    result?: NewReleasesType;
    error?: Error;
  }> {
    let url = `${this.info.api_url}/browse/new-releases?limit=${limit}&offset=${offset}`;
    if (country) url += `&country=${country}`;

    return await get(url, NewReleases, this.info);
  }
}

export { Albums };
