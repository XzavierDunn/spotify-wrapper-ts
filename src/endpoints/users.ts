import { z } from "zod";
import { InfoType } from "../client/client";
import { PagedArtists, PagedArtistsType } from "../models/artists";
import {
  PagesofArtistsOrTracks,
  PagesofArtistsOrTracksType,
} from "../models/pages-of-artists-or-tracks";
import { User, UserType } from "../models/users";
import { delete_req, get_req, put_req } from "../utils/requests";

class Users {
  private info: InfoType;
  private api_url: string;

  constructor(info: InfoType) {
    this.info = info;
    this.api_url = this.info.api_url + "/me/";
  }

  /**
   * Get Current User's Profile - https://developer.spotify.com/documentation/web-api/reference/get-current-users-profile
   * Get detailed profile information about the current user (including the current user's username).
   * @Scopes Authorization scopes
   * - user-read-private
   * - user-read-email
   * @returns
   * Promise<{
   * result?: UserType;
   * error?: Error;
   * }>
   */
  public async get_current_users_profile(): Promise<{
    result?: UserType;
    error?: Error;
  }> {
    return await get_req(
      this.api_url,
      this.info.user_access_token,
      User,
      this.info
    );
  }

  /**
   * Get User's Top Items - https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
   * Get the current user's top artists or tracks based on calculated affinity.
   * @param type
   * The type of entity to return. Valid values: artists or tracks
   * Allowed values: "artists", "tracks"
   * @param time_range
   * Over what time frame the affinities are computed. Valid values: long_term (calculated from several years of data and including all new data as it becomes available), medium_term (approximately last 6 months), short_term (approximately last 4 weeks). Default: medium_term
   * Example value: "medium_term"
   * Default value: "medium_term"
   * @param limit
   * The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
   * Example value: 10
   * Default value: 20
   * Range: 0 - 50
   * @param offset
   * The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.
   * Example value: 5
   * Default value: 0
   * @Scopes Authorization scopes
   * - user-top-read
   * @returns
   * Promise<{
   * result?: PagesofArtistsOrTracksType;
   * error?: Error;
   * }>
   */
  public async get_users_top_items({
    type,
    time_range = "medium_term",
    limit = 20,
    offset = 0,
  }: {
    type: string;
    time_range?: string;
    limit?: number;
    offset?: number;
  }): Promise<{
    result?: PagesofArtistsOrTracksType;
    error?: Error;
  }> {
    let url = `${this.api_url}top/${type}?time_range=${time_range}&limit=${limit}&offset=${offset}`;

    return await get_req(
      url,
      this.info.user_access_token,
      PagesofArtistsOrTracks,
      this.info
    );
  }

  /**
   * Get User's Profile - https://developer.spotify.com/documentation/web-api/reference/get-users-profile
   * Get public profile information about a Spotify user.
   * @param user_id
   * The user's Spotify user ID.
   * Example value: "smedjan"
   * @returns
   * Promise<{
   * result?: UserType;
   * error?: Error;
   * }>
   */
  public async get_users_profile(user_id: string): Promise<{
    result?: UserType;
    error?: Error;
  }> {
    let url = `${this.info.api_url}/users/${user_id}`;

    return await get_req(url, this.info.user_access_token, User, this.info);
  }

  /**
   * Follow Playlist - https://developer.spotify.com/documentation/web-api/reference/follow-playlist
   * Add the current user as a follower of a playlist.
   * @param playlist_id
   * The Spotify ID of the playlist.
   * Example value: "3cEYpjA9oz9GiPac4AsH4n"
   * @param public
   * Defaults to true. If true the playlist will be included in user's public playlists, if false it will remain private.
   * @Scopes Authorization scopes
   * - playlist-modify-public
   * - playlist-modify-private
   * @returns
   * Promise<{
   * result?: string;
   * error?: Error;
   * }>
   */
  public async follow_playlist(
    playlist_id: string,
    public_playlist: boolean = true
  ): Promise<{
    result?: string;
    error?: Error;
  }> {
    let url = `${this.info.api_url}/playlists/${playlist_id}/followers`;

    return await put_req(
      url,
      this.info.user_access_token,
      JSON.stringify({ public: public_playlist }),
      this.info
    );
  }

  /**
   * Unfollow Playlist - https://developer.spotify.com/documentation/web-api/reference/unfollow-playlist
   * Remove the current user as a follower of a playlist.
   * @param playlist_id
   * The Spotify ID of the playlist.
   * Example value: "3cEYpjA9oz9GiPac4AsH4n"
   * @Scopes Authorization scopes
   * - playlist-modify-public
   * - playlist-modify-private
   * @returns
   * Promise<{
   * result?: string;
   * error?: Error;
   * }>
   */
  public async unfollow_playlist(playlist_id: string): Promise<{
    result?: string;
    error?: Error;
  }> {
    let url = `${this.info.api_url}/playlists/${playlist_id}/followers`;

    return await delete_req(url, this.info.user_access_token, this.info);
  }

  /**
   * Get Followed Artists - https://developer.spotify.com/documentation/web-api/reference/get-followed
   * Get the current user's followed artists.
   * @param type
   * The ID type: currently only artist is supported.
   * Example value: "artist"
   * Allowed values: "artist"
   * @param after
   * The last artist ID retrieved from the previous request.
   * Example value: "0I2XqVXqHScXjHhk6AYYRe"
   * @param limit
   * The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
   * Example value: 10
   * Default value: 20
   * Range: 0 - 50
   * @Scopes Authorization scopes
   * - user-follow-read
   * @returns
   * Promise<{
   * result?: PagedArtistsType;
   * error?: Error;
   * }>
   */
  public async get_followed_artists({
    after,
    type = "artist",
    limit = 20,
  }: {
    after?: string;
    type?: string;
    limit?: number;
  }): Promise<{
    result?: PagedArtistsType;
    error?: Error;
  }> {
    let url = `${this.api_url}following?type=${type}&limit=${limit}`;
    if (after) url += `&after=${after}`;

    return await get_req(
      url,
      this.info.user_access_token,
      PagedArtists,
      this.info
    );
  }

  /**
   * Follow Artists or Users - https://developer.spotify.com/documentation/web-api/reference/follow-artists-users
   * Add the current user as a follower of one or more artists or other Spotify users.
   * @param ids
   * A comma-separated list of the artist or the user Spotify IDs. A maximum of 50 IDs can be sent in one request.
   * Example value: "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6"
   * @param type
   * The ID type.
   * Example value: "artist"
   * Allowed values: "artist", "user"
   * @Scopes Authorization scopes
   * - user-follow-modify
   * @returns
   * Promise<{
   * result?: string;
   * error?: Error;
   * }>
   */
  public async follow_artists_or_users({
    ids,
    type = "artist" || "user",
  }: {
    ids: string[];
    type: string;
  }): Promise<{
    result?: string;
    error?: Error;
  }> {
    let url = `${this.api_url}following?ids=${ids.join(",")}&type=${type}`;

    return await put_req(
      url,
      this.info.user_access_token,
      JSON.stringify(ids),
      this.info
    );
  }

  /**
   * Unfollow Artists or Users - https://developer.spotify.com/documentation/web-api/reference/unfollow-artists-users
   * Remove the current user as a follower of one or more artists or other Spotify users.
   * @param ids
   * A comma-separated list of the artist or the user Spotify IDs. A maximum of 50 IDs can be sent in one request.
   * Example value: "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6"
   * @param type
   * The ID type.
   * Example value: "artist"
   * Allowed values: "artist", "user"
   * @Scopes Authorization scopes
   * - user-follow-modify
   * @returns
   * Promise<{
   * result?: string;
   * error?: Error;
   * }>
   */
  public async unfollow_artists_or_users({
    ids,
    type = "artist" || "user",
  }: {
    ids: string[];
    type: string;
  }): Promise<{
    result?: string;
    error?: Error;
  }> {
    let url = `${this.api_url}following?ids=${ids.join(",")}&type=${type}`;

    return await delete_req(
      url,
      this.info.user_access_token,
      this.info,
      JSON.stringify(ids)
    );
  }

  /**
   * Check If User Follows Artists or Users - https://developer.spotify.com/documentation/web-api/reference/check-current-user-follows
   * Check to see if the current user is following one or more artists or other Spotify users.
   * @param ids
   * A comma-separated list of the artist or the user Spotify IDs. A maximum of 50 IDs can be sent in one request.
   * Example value: "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6"
   * @param type
   * The ID type.
   * Example value: "artist"
   * Allowed values: "artist", "user"
   * @Scopes Authorization scopes
   * - user-follow-read
   * @returns
   * Promise<{
   * result?: boolean[];
   * error?: Error;
   * }>
   */
  public async check_if_user_follows_artists_or_users({
    ids,
    type = "artist" || "user",
  }: {
    ids: string[];
    type: string;
  }): Promise<{
    result?: boolean[];
    error?: Error;
  }> {
    let url = `${this.api_url}following/contains?ids=${ids.join(
      ","
    )}&type=${type}`;

    return await get_req(
      url,
      this.info.user_access_token,
      z.array(z.boolean()),
      this.info
    );
  }

  /**
   * Check if Users Follow Playlist - https://developer.spotify.com/documentation/web-api/reference/check-if-user-follows-playlist
   * Check to see if one or more Spotify users are following a specified playlist.
   * @param ids
   * A comma-separated list of Spotify User IDs ; the ids of the users that you want to check to see if they follow the playlist. Maximum: 5 ids.
   * Example value: "jmperezperez,thelinmichael,wizzler"
   * @param playlist_id
   * The Spotify ID of the playlist.
   * Example value: "3cEYpjA9oz9GiPac4AsH4n"
   * @returns
   * Promise<{
   * result?: boolean[];
   * error?: Error;
   * }>
   */
  public async check_if_users_follow_playlist({
    playlist_id,
    ids,
  }: {
    playlist_id: string;
    ids: string[];
  }): Promise<{
    result?: boolean[];
    error?: Error;
  }> {
    let url = `${
      this.info.api_url
    }/playlists/${playlist_id}/followers/contains?ids=${ids.join(",")}`;

    return await get_req(
      url,
      this.info.user_access_token,
      z.array(z.boolean()),
      this.info
    );
  }
}

export { Users };
