import { InfoType } from "../client/client";
import {
  PlaybackState,
  PlaybackStateType,
  SeveralDevices,
  SeveralDevicesType,
} from "../models/player";
import { get, put } from "../utils/utils";

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
  ): Promise<{ result?: PlaybackStateType; error?: Error }> {
    if (
      !this.info.userInfo.access_token ||
      !this.info.userInfo.access_token.length
    )
      throw new Error("User access token is required");

    let url = this.api_url + "?";
    if (market) url += `&market=${market}`;
    if (additional_types) url += `&additional_types=${additional_types}`;

    let result = await get(url, PlaybackState, this.info, true);
    if (result.error && result.error.response === "No Content")
      return { error: new Error("Playback not available or active") };
    return result;
  }

  /**
   * Transfer Playback - https://developer.spotify.com/documentation/web-api/reference/player/transfer-a-users-playback/
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
    if (
      !this.info.userInfo.access_token ||
      !this.info.userInfo.access_token.length
    )
      throw new Error("User access token is required");

    let data = await put(
      this.api_url,
      JSON.stringify({ device_ids, play }),
      this.info
    );

    if (data.result === "No Content") return { result: "Success" };
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
    if (
      !this.info.userInfo.access_token ||
      !this.info.userInfo.access_token.length
    )
      throw new Error("User access token is required");

    return await get(this.api_url + "devices", SeveralDevices, this.info, true);
  }
}

export { Player };
