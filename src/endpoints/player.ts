import { InfoType } from "../client/client";
import { PagedTracks, PagedTracksType } from "../models/paged-track";

import {
  PlaybackState,
  PlaybackStateType,
  SeveralDevices,
  SeveralDevicesType,
  offsetType,
} from "../models/player";
import { Queue, QueueType } from "../models/queue";
import { get_req, post_req, put_req } from "../utils/requests";

class Player {
  private info: InfoType;
  private api_url: string;

  constructor(info: InfoType) {
    this.info = info;
    this.api_url = this.info.api_url + "/me/player/";
  }

  /**
   * Get Playback State - https://developer.spotify.com/documentation/web-api/reference/get-information-about-the-users-current-playback
   * Get information about the user’s current playback state, including track or episode, progress, and active device.
   * @param market
   * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.
   * If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.
   * Note: If neither market or user country are provided, the content is considered unavailable for the client.
   * Users can view the country that is associated with their account in the account settings.
   * Example value: "ES"
   * @param additional_types
   * A comma-separated list of item types that your client supports besides the default track type. Valid types are: track and episode.
   * Note: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future.
   * In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the type field of each object.
   * @Scopes Authorization scopes
   * -user-read-playback-state
   * @returns
   * Promise<{
   * result?: PlaybackStateType;
   * error?: Error;
   * }>
   */
  public async get_playback_state(
    market?: string,
    additional_types?: string
  ): Promise<{ result?: PlaybackStateType | string; error?: Error }> {
    if (!this.info.user_access_token || !this.info.user_access_token.length)
      throw new Error("User access token is required");

    let url = this.api_url + "?";
    if (market) url += `&market=${market}`;
    if (additional_types) url += `&additional_types=${additional_types}`;

    let result = await get_req(
      url,
      this.info.user_access_token,
      PlaybackState,
      this.info
    );

    if (result.error && result.error.response === "No Content")
      return { error: new Error("Playback not available or active") };
    return result;
  }

  /**
   * Transfer Playback - https://developer.spotify.com/documentation/web-api/reference/transfer-a-users-playback
   * Transfer playback to a new device and determine if it should start playing.
   * @param device_ids
   * A JSON array containing the ID of the device on which playback should be started/transferred.
   * For example:{device_ids:["74ASZWbe4lXaubB36ztrGX"]}
   * Note: Although an array is accepted, only a single device_id is currently supported. Supplying more than one will return 400 Bad Request
   * @param play
   * true: ensure playback happens on the new device.
   * false or not provided: keep the current playback state.
   * @Scopes Authorization scopes
   * - user-modify-playback-state
   * @returns
   * Promise<{
   * result?: string;
   * error?: Error;
   * }>
   */
  public async transfer_playback(
    device_ids: string[],
    play?: boolean
  ): Promise<{ result?: string; error?: Error }> {
    if (!this.info.user_access_token || !this.info.user_access_token.length)
      throw new Error("User access token is required");

    let data = await put_req(
      this.api_url,
      this.info.user_access_token,
      JSON.stringify({ device_ids, play }),
      this.info
    );

    return data;
  }

  /**
   * Get Available Devices - https://developer.spotify.com/documentation/web-api/reference/get-a-users-available-devices
   * Get information about a user’s available devices.
   * @Scopes Authorization scopes
   * - user-read-playback-state
   * @returns
   * Promise<{
   * result?: SeveralDevicesType;
   * error?: Error;
   * }>
   */
  public async get_available_devices(): Promise<{
    result?: SeveralDevicesType;
    error?: Error;
  }> {
    if (!this.info.user_access_token || !this.info.user_access_token.length)
      throw new Error("User access token is required");

    return await get_req(
      this.api_url + "devices",
      this.info.user_access_token,
      SeveralDevices,
      this.info
    );
  }

  /**
   * Get Currently Playing Track - https://developer.spotify.com/documentation/web-api/reference/get-the-users-currently-playing-track
   * Get the object currently being played on the user's Spotify account.
   * @param market
   * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.
   * If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.
   * Note: If neither market or user country are provided, the content is considered unavailable for the client.
   * Users can view the country that is associated with their account in the account settings.
   * Example value: "ES"
   * @param additional_types
   * A comma-separated list of item types that your client supports besides the default track type. Valid types are: track and episode.
   * Note: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future.
   * In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the type field of each object.
   * @Scopes Authorization scopes
   * - user-read-currently-playing
   * @returns
   * Promise<{
   * result?: PlaybackStateType;
   * error?: Error;
   * }>
   */
  public async get_currently_playing_track(
    market?: string,
    additional_types?: string
  ): Promise<{ result?: PlaybackStateType; error?: Error }> {
    if (!this.info.user_access_token || !this.info.user_access_token.length)
      throw new Error("User access token is required");

    let url = this.api_url + "currently-playing?";
    if (market) url += `&market=${market}`;
    if (additional_types) url += `&additional_types=${additional_types}`;

    return await get_req(
      url,
      this.info.user_access_token,
      PlaybackState,
      this.info
    );
  }

  /**
   * Start/Resume Playback - https://developer.spotify.com/documentation/web-api/reference/start-a-users-playback
   * Start a new context or resume current playback on the user's active device.
   * @param device_id
   * The id of the device this command is targeting. If not supplied, the user's currently active device is the target.
   * Example value: "0d1841b0976bae2a3a310dd74c0f3df354899bc8"
   * @param context_uri
   * Optional. Spotify URI of the context to play. Valid contexts are albums, artists & playlists.
   * {context_uri:"spotify:album:1Je1IMUlBXcx1Fz0WE7oPT"}
   * @param uris
   * Optional. A JSON array of the Spotify track URIs to play.
   * For example:{uris:["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M"]}
   * @param offset
   * Optional. Indicates from where in the context playback should start. Only available when context_uri corresponds to an album or playlist object "position" is zero based and can’t be negative.
   * Example: "offset": {"position": 5} "uri" is a string representing the uri of the item to start at. Example: "offset": {"uri": "spotify:track:1301WleyT98MSxVHPZCA6M"} supports free form additional properties
   * @param position_ms
   * Optional. Indicates from what position to start playback. Must be a positive number. Passing in a position that is greater than the length of the track will cause the player to start playing the next song.
   * @Scopes Authorization scopes
   * - user-modify-playback-state
   * @returns
   * Promise<{
   * result?: string;
   * error?: Error;
   * }>
   */
  public async start_or_resume_playback({
    device_id,
    context_uri,
    uris,
    offset,
    position_ms,
  }: {
    device_id?: string;
    context_uri?: string;
    uris?: string[];
    offset?: offsetType;
    position_ms?: number;
  }): Promise<{ result?: string; error?: Error }> {
    if (!this.info.user_access_token || !this.info.user_access_token.length)
      throw new Error("User access token is required");

    let url = `${this.api_url}play`;
    if (device_id) url += `?device_id=${device_id}`;

    let body = JSON.stringify({
      context_uri,
      uris,
      offset,
      position_ms,
    });
    return await put_req(url, this.info.user_access_token, body, this.info);
  }

  /**
   * Pause Playback - https://developer.spotify.com/documentation/web-api/reference/pause-a-users-playback
   * Pause playback on the user's account.
   * @param device_id
   * The id of the device this command is targeting. If not supplied, the user's currently active device is the target.
   * Example value: "0d1841b0976bae2a3a310dd74c0f3df354899bc8"
   * @Scopes Authorization scopes
   * - user-modify-playback-state
   * @returns
   * Promise<{
   * result?: string;
   * error?: Error;
   * }>
   */
  public async pause_playback(
    device_id?: string
  ): Promise<{ result?: string; error?: Error }> {
    if (!this.info.user_access_token || !this.info.user_access_token.length)
      throw new Error("User access token is required");

    let url = `${this.api_url}pause`;
    if (device_id) url += `?device_id=${device_id}`;

    return await put_req(url, this.info.user_access_token, null, this.info);
  }

  /**
   * Skip To Next - https://developer.spotify.com/documentation/web-api/reference/skip-users-playback-to-next-track
   * Skips to next track in the user’s queue.
   * @param device_id
   * The id of the device this command is targeting. If not supplied, the user's currently active device is the target.
   * Example value: "0d1841b0976bae2a3a310dd74c0f3df354899bc8"
   * @Scopes Authorization scopes
   * - user-modify-playback-state
   * @returns
   * Promise<{
   * result?: string;
   * error?: Error;
   * }>
   */
  public async skip_to_next(
    device_id?: string
  ): Promise<{ result?: string; error?: Error }> {
    if (!this.info.user_access_token || !this.info.user_access_token.length)
      throw new Error("User access token is required");

    let url = `${this.api_url}next`;
    if (device_id) url += `?device_id=${device_id}`;

    return await post_req(url, this.info.user_access_token, null, this.info);
  }

  /**
   * Skip To Previous - https://developer.spotify.com/documentation/web-api/reference/skip-users-playback-to-previous-track
   * Skips to previous track in the user’s queue.
   * @param device_id
   * The id of the device this command is targeting. If not supplied, the user's currently active device is the target.
   * Example value: "0d1841b0976bae2a3a310dd74c0f3df354899bc8"
   * @Scopes Authorization scopes
   * - user-modify-playback-state
   * @returns
   * Promise<{
   * result?: string;
   * error?: Error;
   * }>
   */
  public async skip_to_previous(
    device_id?: string
  ): Promise<{ result?: string; error?: Error }> {
    if (!this.info.user_access_token || !this.info.user_access_token.length)
      throw new Error("User access token is required");

    let url = `${this.api_url}previous`;
    if (device_id) url += `?device_id=${device_id}`;

    return await post_req(url, this.info.user_access_token, null, this.info);
  }

  /**
   * Seek To Position - https://developer.spotify.com/documentation/web-api/reference/seek-to-position-in-currently-playing-track
   * Seeks to the given position in the user’s currently playing track.
   * @param device_id
   * The id of the device this command is targeting. If not supplied, the user's currently active device is the target.
   * Example value: "0d1841b0976bae2a3a310dd74c0f3df354899bc8"
   * @param position_ms
   * The position in milliseconds to seek to. Must be a positive number. Passing in a position that is greater than the length of the track will cause the player to start playing the next song.
   * Example value: 25000
   * @Scopes Authorization scopes
   * - user-modify-playback-state
   * @returns
   * Promise<{
   * result?: string;
   * error?: Error;
   * }>
   */
  public async seek_to_position(
    position_ms: number,
    device_id?: string
  ): Promise<{ result?: string; error?: Error }> {
    if (!this.info.user_access_token || !this.info.user_access_token.length)
      throw new Error("User access token is required");

    let url = `${this.api_url}seek?position_ms=${position_ms}`;
    if (device_id) url += `&device_id=${device_id}`;

    return await put_req(url, this.info.user_access_token, null, this.info);
  }

  /**
   * Set Repeat Mode - https://developer.spotify.com/documentation/web-api/reference/set-repeat-mode-on-users-playback
   * Set the repeat mode for the user's playback. Options are repeat-track, repeat-context, and off.
   * @param device_id
   * The id of the device this command is targeting. If not supplied, the user's currently active device is the target.
   * Example value: "0d1841b0976bae2a3a310dd74c0f3df354899bc8"
   * @param state
   * track, context or off.
   * track will repeat the current track.
   * context will repeat the current context.
   * off will turn repeat off.
   * Example value: "context"
   * @Scopes Authorization scopes
   * - user-modify-playback-state
   * @returns
   * Promise<{
   * result?: string;
   * error?: Error;
   * }>
   */
  public async set_repeat_mode(
    state: string,
    device_id?: string
  ): Promise<{ result?: string; error?: Error }> {
    if (!this.info.user_access_token || !this.info.user_access_token.length)
      throw new Error("User access token is required");

    let url = `${this.api_url}repeat?state=${state}`;
    if (device_id) url += `&device_id=${device_id}`;

    return await put_req(url, this.info.user_access_token, null, this.info);
  }

  /**
   * Set Playback Volume - https://developer.spotify.com/documentation/web-api/reference/set-volume-for-users-playback
   * Set the volume for the user’s current playback device.
   * @param device_id
   * The id of the device this command is targeting. If not supplied, the user's currently active device is the target.
   * Example value: "0d1841b0976bae2a3a310dd74c0f3df354899bc8"
   * @param volume_percent
   * The volume to set. Must be a value from 0 to 100 inclusive.
   * Example value: 50
   * @Scopes Authorization scopes
   * - user-modify-playback-state
   * @returns
   * Promise<{
   * result?: string;
   * error?: Error;
   * }>
   */
  public async set_playback_volume(
    volume_percent: number,
    device_id?: string
  ): Promise<{ result?: string; error?: Error }> {
    if (!this.info.user_access_token || !this.info.user_access_token.length)
      throw new Error("User access token is required");

    let url = `${this.api_url}volume?volume_percent=${volume_percent}`;
    if (device_id) url += `&device_id=${device_id}`;

    return await put_req(url, this.info.user_access_token, null, this.info);
  }

  /**
   * Toggle Playback Shuffle - https://developer.spotify.com/documentation/web-api/reference/toggle-shuffle-for-users-playback
   * Toggle shuffle on or off for user’s playback.
   * @param device_id
   * The id of the device this command is targeting. If not supplied, the user's currently active device is the target.
   * Example value: "0d1841b0976bae2a3a310dd74c0f3df354899bc8"
   * @param state
   * true : Shuffle user's playback.
   * false : Do not shuffle user's playback.
   * Example value: true
   * @Scopes Authorization scopes
   * - user-modify-playback-state
   * @returns
   * Promise<{
   * result?: string;
   * error?: Error;
   * }>
   */
  public async toggle_playback_shuffle(
    state: boolean,
    device_id?: string
  ): Promise<{ result?: string; error?: Error }> {
    if (!this.info.user_access_token || !this.info.user_access_token.length)
      throw new Error("User access token is required");

    let url = `${this.api_url}shuffle?state=${state}`;
    if (device_id) url += `&device_id=${device_id}`;

    return await put_req(url, this.info.user_access_token, null, this.info);
  }

  /**
   * Get Recently Played Tracks - https://developer.spotify.com/documentation/web-api/reference/get-recently-played
   * Get tracks from the current user's recently played tracks. Note: Currently doesn't support podcast episodes.
   * @param limit
   * The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
   * Example value: 10
   * Default value: 20
   * Range: 0 - 50
   * @param after
   * A Unix timestamp in milliseconds. Returns all items after (but not including) this cursor position. If after is specified, before must not be specified.
   * Example value: 1484811043508
   * @param before
   * A Unix timestamp in milliseconds. Returns all items before (but not including) this cursor position. If before is specified, after must not be specified.
   * @Scopes Authorization scopes
   * - user-read-recently-played
   * @returns
   * Promise<{
   * result?: PagedTracksType;
   * error?: Error;
   * }>
   */
  public async get_recently_played_tracks({
    after,
    before,
    limit = 20,
  }: {
    after?: number;
    before?: number;
    limit?: number;
  }): Promise<{ result?: PagedTracksType; error?: Error }> {
    if (!this.info.user_access_token || !this.info.user_access_token.length)
      throw new Error("User access token is required");
    if (after && before)
      throw new Error("Before and after can't be used together");

    let url = `${this.api_url}recently-played?limit=${limit}`;
    if (after) url += `&after=${after}`;
    if (before) url += `&before=${before}`;

    return await get_req(
      url,
      this.info.user_access_token,
      PagedTracks,
      this.info
    );
  }

  /**
   * Get the User's Queue - https://developer.spotify.com/documentation/web-api/reference/get-queue
   * Get the list of objects that make up the user's queue.
   * @Scopes Authorization scopes
   * - user-read-playback-state
   * @returns
   * Promise<{
   * result?: QueueType;
   * error?: Error;
   * }>
   */
  public async get_users_queue(): Promise<{
    result?: QueueType;
    error?: Error;
  }> {
    if (!this.info.user_access_token || !this.info.user_access_token.length)
      throw new Error("User access token is required");

    let url = `${this.api_url}queue`;

    return await get_req(url, this.info.user_access_token, Queue, this.info);
  }

  /**
   * Add Item to Playback Queue - https://developer.spotify.com/documentation/web-api/reference/add-to-queue
   * Add an item to the end of the user's current playback queue.
   * @param device_id
   * The id of the device this command is targeting. If not supplied, the user's currently active device is the target.
   * Example value: "0d1841b0976bae2a3a310dd74c0f3df354899bc8"
   * @param uri
   * The uri of the item to add to the queue. Must be a track or an episode uri.
   * Example value: "spotify:track:4iV5W9uYEdYUVa79Axb7Rh"
   * @Scopes Authorization scopes
   * - user-modify-playback-state
   * @returns
   * Promise<{
   * result?: string;
   * error?: Error;
   * }>
   */
  public async add_item_to_playback_queue(
    uri: string,
    device_id?: string
  ): Promise<{
    result?: string;
    error?: Error;
  }> {
    if (!this.info.user_access_token || !this.info.user_access_token.length)
      throw new Error("User access token is required");

    let url = `${this.api_url}queue?uri=${uri}`;
    if (device_id) url += `&device_id=${device_id}`;

    return await post_req(url, this.info.user_access_token, null, this.info);
  }
}

export { Player };
