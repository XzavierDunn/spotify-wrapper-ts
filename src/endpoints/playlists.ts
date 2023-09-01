import { z } from "zod";
import { InfoType } from "../client/client";
import {
  Playlist,
  PlaylistType,
  Snapshot,
  SnapshotType,
} from "../models/playlist";
import { PlaylistTracks, PlaylistTracksType } from "../models/playlist-track";
import { get_req, put_req } from "../utils/requests";

class Playlists {
  private info: InfoType;
  private api_url: string;

  constructor(info: InfoType) {
    this.info = info;
    this.api_url = this.info.api_url + "/playlists/";
  }

  /**
   * Get Playlist - https://developer.spotify.com/documentation/web-api/reference/get-playlist
   * Get a playlist owned by a Spotify user.
   * @param playlist_id
   * The Spotify ID of the playlist.
   * Example value: "3cEYpjA9oz9GiPac4AsH4n"
   * @param market
   * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.
   * If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.
   * Note: If neither market or user country are provided, the content is considered unavailable for the client.
   * Users can view the country that is associated with their account in the account settings.
   * Example value: "ES"
   * @param fields
   * Filters for the query: a comma-separated list of the fields to return. If omitted, all fields are returned. For example, to get just the playlist''s description and URI: fields=description,uri. A dot separator can be used to specify non-reoccurring fields, while parentheses can be used to specify reoccurring fields within objects. For example, to get just the added date and user ID of the adder: fields=tracks.items(added_at,added_by.id). Use multiple parentheses to drill down into nested objects, for example: fields=tracks.items(track(name,href,album(name,href))). Fields can be excluded by prefixing them with an exclamation mark, for example: fields=tracks.items(track(name,href,album(!name,href)))
   * Example value: "items(added_by.id,track(name,href,album(name,href)))"
   * @param additional_types
   * A comma-separated list of item types that your client supports besides the default track type. Valid types are: track and episode.
   * Note: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future.
   * In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the type field of each object.
   * @returns
   * Promise<{
   * result?: PlaylistTracksType;
   * error?: Error;
   * }>
   */
  public async get_playlist({
    playlist_id,
    market,
    fields,
    additional_types,
  }: {
    playlist_id: string;
    market?: string;
    fields?: string;
    additional_types?: string;
  }): Promise<{
    result?: PlaylistType;
    error?: Error;
  }> {
    let url = `${this.api_url}${playlist_id}?`;
    if (market) url += `&market=${market}`;
    if (fields) url += `&fields=${fields}`;
    if (additional_types) url += `&additional_types=${additional_types}`;

    return await get_req(
      url,
      this.info.client_access_token,
      Playlist,
      this.info
    );
  }

  /**
   * Change Playlist Details - https://developer.spotify.com/documentation/web-api/reference/change-playlist-details
   * Change a playlist's name and public/private state. (The user must, of course, own the playlist.)
   * @param playlist_id
   * The Spotify ID of the playlist.
   * Example value: "3cEYpjA9oz9GiPac4AsH4n"
   * @param name
   * The new name for the playlist, for example "My New Playlist Title"
   * @param public
   * If true the playlist will be public, if false it will be private.
   * @param collaborative
   * If true, the playlist will become collaborative and other users will be able to modify the playlist in their Spotify client.
   * Note: You can only set collaborative to true on non-public playlists.
   * @param description
   * Value for playlist description as displayed in Spotify Clients and in the Web API.
   * @Scopes Authorization scopes
   * - playlist-modify-public
   * - playlist-modify-private
   * @returns
   * Promise<{
   * result?: string;
   * error?: Error;
   * }>
   */
  public async change_playlist_details({
    playlist_id,
    name,
    public_playlist,
    collaborative,
    description,
  }: {
    playlist_id: string;
    name?: string;
    public_playlist?: boolean;
    collaborative?: boolean;
    description?: string;
  }): Promise<{
    result?: string;
    error?: Error;
  }> {
    if (!this.info.user_access_token || !this.info.user_access_token.length)
      throw new Error("User access token is required");

    let url = `${this.api_url}${playlist_id}?`;
    let body = JSON.stringify({
      name,
      public: public_playlist,
      collaborative,
      description,
    });

    return await put_req(url, this.info.user_access_token, body, this.info);
  }

  /**
   * Get Playlist Items - https://developer.spotify.com/documentation/web-api/reference/get-playlists-tracks
   * Get full details of the items of a playlist owned by a Spotify user.
   * @param playlist_id
   * The Spotify ID of the playlist.
   * Example value: "3cEYpjA9oz9GiPac4AsH4n"
   * @param market
   * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.
   * If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.
   * Note: If neither market or user country are provided, the content is considered unavailable for the client.
   * Users can view the country that is associated with their account in the account settings.
   * Example value: "ES"
   * @param fields
   * Filters for the query: a comma-separated list of the fields to return. If omitted, all fields are returned. For example, to get just the playlist''s description and URI: fields=description,uri. A dot separator can be used to specify non-reoccurring fields, while parentheses can be used to specify reoccurring fields within objects. For example, to get just the added date and user ID of the adder: fields=tracks.items(added_at,added_by.id). Use multiple parentheses to drill down into nested objects, for example: fields=tracks.items(track(name,href,album(name,href))). Fields can be excluded by prefixing them with an exclamation mark, for example: fields=tracks.items(track(name,href,album(!name,href)))
   * Example value: "items(added_by.id,track(name,href,album(name,href)))"
   * @param limit
   * The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
   * Example value: 10
   * Default value: 20
   * Range: 0 - 50
    @param offset
   * Optional. Indicates from where in the context playback should start. Only available when context_uri corresponds to an album or playlist object "position" is zero based and can’t be negative.
   * Example: "offset": {"position": 5} "uri" is a string representing the uri of the item to start at. Example: "offset": {"uri": "spotify:track:1301WleyT98MSxVHPZCA6M"} supports free form additional properties
   * @param additional_types
   * A comma-separated list of item types that your client supports besides the default track type. Valid types are: track and episode.
   * Note: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future.
   * In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the type field of each object.
   * @Scopes Authorization scopes
   * - playlist-read-private
   * @returns
   * Promise<{
   * result?: PlaylistTracksType;
   * error?: Error;
   * }>
   */
  public async get_playlist_items({
    playlist_id,
    market,
    fields,
    additional_types,
    limit = 20,
    offset = 0,
  }: {
    playlist_id: string;
    market?: string;
    fields?: string;
    limit?: number;
    offset?: number;
    additional_types?: string;
  }): Promise<{
    result?: PlaylistTracksType;
    error?: Error;
  }> {
    if (!this.info.user_access_token || !this.info.user_access_token.length)
      throw new Error("User access token is required");

    let url = `${this.api_url}${playlist_id}/tracks?limit=${limit}&offset=${offset}`;
    if (market) url += `&market=${market}`;
    if (fields) url += `&fields=${fields}`;
    if (additional_types) url += `&additional_types=${additional_types}`;

    return await get_req(
      url,
      this.info.user_access_token,
      PlaylistTracks,
      this.info
    );
  }

  /**
   * Update Playlist Items - https://developer.spotify.com/documentation/web-api/reference/reorder-or-replace-playlists-tracks
   * Either reorder or replace items in a playlist depending on the request's parameters. To reorder items, include range_start, insert_before, range_length and snapshot_id in the request's body. To replace items, include uris as either a query parameter or in the request's body. Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist.
   * Note: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters. These operations can't be applied together in a single request.
   * @param playlist_id
   * The Spotify ID of the playlist.
   * Example value: "3cEYpjA9oz9GiPac4AsH4n"
   * @param uris
   * A comma-separated list of Spotify URIs to set, can be track or episode URIs. For example: uris=spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M,spotify:episode:512ojhOuo1ktJprKbVcKyQ
   * A maximum of 100 items can be set in one request.
   * @param range_start
   * The position of the first item to be reordered.
   * @param insert_before
   * The position where the items should be inserted.
   * To reorder the items to the end of the playlist, simply set insert_before to the position after the last item.
   * Examples:
   * To reorder the first item to the last position in a playlist with 10 items, set range_start to 0, and insert_before to 10.
   * To reorder the last item in a playlist with 10 items to the start of the playlist, set range_start to 9, and insert_before to 0.
   * @param range_length
   * The amount of items to be reordered. Defaults to 1 if not set.
   * The range of items to be reordered begins from the range_start position, and includes the range_length subsequent items.
   * Example:
   * To move the items at index 9-10 to the start of the playlist, range_start is set to 9, and range_length is set to 2.
   * @param snapshot_id
   * The playlist's snapshot ID against which you want to make the changes.
   * @Scopes Authorization scopes
   * - playlist-modify-public
   * - playlist-modify-private
   * @returns
   * Promise<{
   * result?:;
   * error?: Error;
   * }>
   */
  public async update_playlist_items({
    playlist_id,
    uris,
    range_start,
    insert_before,
    range_length,
    snapshot_id,
  }: {
    playlist_id: string;
    uris?: string[];
    range_start?: number;
    insert_before?: number;
    range_length?: number;
    snapshot_id?: string;
  }): Promise<{
    result?: SnapshotType;
    error?: Error;
  }> {
    if (!this.info.user_access_token || !this.info.user_access_token.length)
      throw new Error("User access token is required");

    let url = `${this.api_url}${playlist_id}/tracks`;

    let body = JSON.stringify({
      uris,
      range_start,
      insert_before,
      range_length,
      snapshot_id,
    });

    return await put_req(
      url,
      this.info.user_access_token,
      body,
      this.info,
      Snapshot
    );
  }
}

export { Playlists };
