import { InfoType } from "../client/client";
import {
  PlaybackState,
  PlaybackStateType,
  SeveralDevices,
  SeveralDevicesType,
  offsetType,
} from "../models/player";
import { get_req, put_req } from "../utils/requests";

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
  async get_playback_state(
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
  async transfer_playback(
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
  async get_available_devices(): Promise<{
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
  async get_currently_playing_track(
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
  async start_or_resume_playback({
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

    let url = `${this.api_url}play?device_id=${device_id}`;

    let body = JSON.stringify({
      context_uri,
      uris,
      offset,
      position_ms,
    });
    return await put_req(url, this.info.user_access_token, body, this.info);
  }
}

export { Player };
