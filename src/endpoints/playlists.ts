import { z } from "zod";
import { InfoType } from "../client/client";
import {
  PagedPlaylists,
  PagedPlaylistsType,
  Playlist,
  PlaylistType,
  Snapshot,
  SnapshotType,
} from "../models/playlist";
import { PlaylistTracks, PlaylistTracksType } from "../models/playlist-track";
import {
  SeveralSimplifiedPlaylists,
  SeveralSimplifiedPlaylistsType,
} from "../models/playlists-simplified";
import { Images, SetOfImages, SetOfImagesType } from "../models/shared";

class Playlists {
  private info: InfoType;
  private api_url: string;

  constructor(info: InfoType) {
    this.info = info;
    this.api_url = this.info.api_url + "/playlists/";
  }

  // /**
  //  * Get Playlist - https://developer.spotify.com/documentation/web-api/reference/get-playlist
  //  * Get a playlist owned by a Spotify user.
  //  * @param playlist_id
  //  * The Spotify ID of the playlist.
  //  * Example value: "3cEYpjA9oz9GiPac4AsH4n"
  //  * @param market
  //  * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.
  //  * If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.
  //  * Note: If neither market or user country are provided, the content is considered unavailable for the client.
  //  * Users can view the country that is associated with their account in the account settings.
  //  * Example value: "ES"
  //  * @param fields
  //  * Filters for the query: a comma-separated list of the fields to return. If omitted, all fields are returned. For example, to get just the playlist''s description and URI: fields=description,uri. A dot separator can be used to specify non-reoccurring fields, while parentheses can be used to specify reoccurring fields within objects. For example, to get just the added date and user ID of the adder: fields=tracks.items(added_at,added_by.id). Use multiple parentheses to drill down into nested objects, for example: fields=tracks.items(track(name,href,album(name,href))). Fields can be excluded by prefixing them with an exclamation mark, for example: fields=tracks.items(track(name,href,album(!name,href)))
  //  * Example value: "items(added_by.id,track(name,href,album(name,href)))"
  //  * @param additional_types
  //  * A comma-separated list of item types that your client supports besides the default track type. Valid types are: track and episode.
  //  * Note: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future.
  //  * In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the type field of each object.
  //  * @returns
  //  * Promise<{
  //  * result?: PlaylistTracksType;
  //  * error?: Error;
  //  * }>
  //  */
  // public async get_playlist({
  //   playlist_id,
  //   market,
  //   fields,
  //   additional_types,
  // }: {
  //   playlist_id: string;
  //   market?: string;
  //   fields?: string;
  //   additional_types?: string;
  // }): Promise<{
  //   result?: PlaylistType;
  //   error?: Error;
  // }> {
  //   let url = `${this.api_url}${playlist_id}?`;
  //   if (market) url += `&market=${market}`;
  //   if (fields) url += `&fields=${fields}`;
  //   if (additional_types) url += `&additional_types=${additional_types}`;

  //   return await get_req(
  //     url,
  //     this.info.client_access_token,
  //     Playlist,
  //     this.info
  //   );
  // }

  // /**
  //  * Change Playlist Details - https://developer.spotify.com/documentation/web-api/reference/change-playlist-details
  //  * Change a playlist's name and public/private state. (The user must, of course, own the playlist.)
  //  * @param playlist_id
  //  * The Spotify ID of the playlist.
  //  * Example value: "3cEYpjA9oz9GiPac4AsH4n"
  //  * @param name
  //  * The new name for the playlist, for example "My New Playlist Title"
  //  * @param public
  //  * If true the playlist will be public, if false it will be private.
  //  * @param collaborative
  //  * If true, the playlist will become collaborative and other users will be able to modify the playlist in their Spotify client.
  //  * Note: You can only set collaborative to true on non-public playlists.
  //  * @param description
  //  * Value for playlist description as displayed in Spotify Clients and in the Web API.
  //  * @Scopes Authorization scopes
  //  * - playlist-modify-public
  //  * - playlist-modify-private
  //  * @returns
  //  * Promise<{
  //  * result?: string;
  //  * error?: Error;
  //  * }>
  //  */
  // public async change_playlist_details({
  //   playlist_id,
  //   name,
  //   public_playlist,
  //   collaborative,
  //   description,
  // }: {
  //   playlist_id: string;
  //   name?: string;
  //   public_playlist?: boolean;
  //   collaborative?: boolean;
  //   description?: string;
  // }): Promise<{
  //   result?: string;
  //   error?: Error;
  // }> {
  //   if (!this.info.user_access_token || !this.info.user_access_token.length)
  //     throw new Error("User access token is required");

  //   let url = `${this.api_url}${playlist_id}?`;
  //   let body = JSON.stringify({
  //     name,
  //     public: public_playlist,
  //     collaborative,
  //     description,
  //   });

  //   return await put_req(url, this.info.user_access_token, body, this.info);
  // }

  // /**
  //  * Get Playlist Items - https://developer.spotify.com/documentation/web-api/reference/get-playlists-tracks
  //  * Get full details of the items of a playlist owned by a Spotify user.
  //  * @param playlist_id
  //  * The Spotify ID of the playlist.
  //  * Example value: "3cEYpjA9oz9GiPac4AsH4n"
  //  * @param market
  //  * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.
  //  * If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.
  //  * Note: If neither market or user country are provided, the content is considered unavailable for the client.
  //  * Users can view the country that is associated with their account in the account settings.
  //  * Example value: "ES"
  //  * @param fields
  //  * Filters for the query: a comma-separated list of the fields to return. If omitted, all fields are returned. For example, to get just the playlist''s description and URI: fields=description,uri. A dot separator can be used to specify non-reoccurring fields, while parentheses can be used to specify reoccurring fields within objects. For example, to get just the added date and user ID of the adder: fields=tracks.items(added_at,added_by.id). Use multiple parentheses to drill down into nested objects, for example: fields=tracks.items(track(name,href,album(name,href))). Fields can be excluded by prefixing them with an exclamation mark, for example: fields=tracks.items(track(name,href,album(!name,href)))
  //  * Example value: "items(added_by.id,track(name,href,album(name,href)))"
  //  * @param limit
  //  * The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
  //  * Example value: 10
  //  * Default value: 20
  //  * Range: 0 - 50
  //   @param offset
  //  * Optional. Indicates from where in the context playback should start. Only available when context_uri corresponds to an album or playlist object "position" is zero based and can’t be negative.
  //  * Example: "offset": {"position": 5} "uri" is a string representing the uri of the item to start at. Example: "offset": {"uri": "spotify:track:1301WleyT98MSxVHPZCA6M"} supports free form additional properties
  //  * @param additional_types
  //  * A comma-separated list of item types that your client supports besides the default track type. Valid types are: track and episode.
  //  * Note: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future.
  //  * In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the type field of each object.
  //  * @Scopes Authorization scopes
  //  * - playlist-read-private
  //  * @returns
  //  * Promise<{
  //  * result?: PlaylistTracksType;
  //  * error?: Error;
  //  * }>
  //  */
  // public async get_playlist_items({
  //   playlist_id,
  //   market,
  //   fields,
  //   additional_types,
  //   limit = 20,
  //   offset = 0,
  // }: {
  //   playlist_id: string;
  //   market?: string;
  //   fields?: string;
  //   limit?: number;
  //   offset?: number;
  //   additional_types?: string;
  // }): Promise<{
  //   result?: PlaylistTracksType;
  //   error?: Error;
  // }> {
  //   if (!this.info.user_access_token || !this.info.user_access_token.length)
  //     throw new Error("User access token is required");

  //   let url = `${this.api_url}${playlist_id}/tracks?limit=${limit}&offset=${offset}`;
  //   if (market) url += `&market=${market}`;
  //   if (fields) url += `&fields=${fields}`;
  //   if (additional_types) url += `&additional_types=${additional_types}`;

  //   return await get_req(
  //     url,
  //     this.info.user_access_token,
  //     PlaylistTracks,
  //     this.info
  //   );
  // }

  // /**
  //  * Update Playlist Items - https://developer.spotify.com/documentation/web-api/reference/reorder-or-replace-playlists-tracks
  //  * Either reorder or replace items in a playlist depending on the request's parameters. To reorder items, include range_start, insert_before, range_length and snapshot_id in the request's body. To replace items, include uris as either a query parameter or in the request's body. Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist.
  //  * Note: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters. These operations can't be applied together in a single request.
  //  * @param playlist_id
  //  * The Spotify ID of the playlist.
  //  * Example value: "3cEYpjA9oz9GiPac4AsH4n"
  //  * @param uris
  //  * A comma-separated list of Spotify URIs to set, can be track or episode URIs. For example: uris=spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M,spotify:episode:512ojhOuo1ktJprKbVcKyQ
  //  * A maximum of 100 items can be set in one request.
  //  * @param range_start
  //  * The position of the first item to be reordered.
  //  * @param insert_before
  //  * The position where the items should be inserted.
  //  * To reorder the items to the end of the playlist, simply set insert_before to the position after the last item.
  //  * Examples:
  //  * To reorder the first item to the last position in a playlist with 10 items, set range_start to 0, and insert_before to 10.
  //  * To reorder the last item in a playlist with 10 items to the start of the playlist, set range_start to 9, and insert_before to 0.
  //  * @param range_length
  //  * The amount of items to be reordered. Defaults to 1 if not set.
  //  * The range of items to be reordered begins from the range_start position, and includes the range_length subsequent items.
  //  * Example:
  //  * To move the items at index 9-10 to the start of the playlist, range_start is set to 9, and range_length is set to 2.
  //  * @param snapshot_id
  //  * The playlist's snapshot ID against which you want to make the changes.
  //  * @Scopes Authorization scopes
  //  * - playlist-modify-public
  //  * - playlist-modify-private
  //  * @returns
  //  * Promise<{
  //  * result?: SnapshotType;
  //  * error?: Error;
  //  * }>
  //  */
  // public async update_playlist_items({
  //   playlist_id,
  //   uris,
  //   range_start,
  //   insert_before,
  //   range_length,
  //   snapshot_id,
  // }: {
  //   playlist_id: string;
  //   uris?: string[];
  //   range_start?: number;
  //   insert_before?: number;
  //   range_length?: number;
  //   snapshot_id?: string;
  // }): Promise<{
  //   result?: SnapshotType;
  //   error?: Error;
  // }> {
  //   if (!this.info.user_access_token || !this.info.user_access_token.length)
  //     throw new Error("User access token is required");

  //   let url = `${this.api_url}${playlist_id}/tracks`;

  //   let body = JSON.stringify({
  //     uris,
  //     range_start,
  //     insert_before,
  //     range_length,
  //     snapshot_id,
  //   });

  //   return await put_req(
  //     url,
  //     this.info.user_access_token,
  //     body,
  //     this.info,
  //     Snapshot
  //   );
  // }

  // /**
  //  * Add Items to Playlist - https://developer.spotify.com/documentation/web-api/reference/add-tracks-to-playlist
  //  * Add one or more items to a user's playlist.
  //  * @param playlist_id
  //  * The Spotify ID of the playlist.
  //  * Example value: "3cEYpjA9oz9GiPac4AsH4n"
  //  * @param uris
  //  * A comma-separated list of Spotify URIs to set, can be track or episode URIs. For example: uris=spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M,spotify:episode:512ojhOuo1ktJprKbVcKyQ
  //  * A maximum of 100 items can be set in one request.
  //  * @param position
  //  * The position to insert the items, a zero-based index. For example, to insert the items in the first position: position=0; to insert the items in the third position: position=2. If omitted, the items will be appended to the playlist. Items are added in the order they are listed in the query string or request body.
  //  * Example value: 0
  //  * @Scopes Authorization scopes
  //  * - playlist-modify-public
  //  * - playlist-modify-private
  //  * @returns
  //  * Promise<{
  //  * result?: SnapshotType;
  //  * error?: Error;
  //  * }>
  //  */
  // public async add_items_to_playlist({
  //   playlist_id,
  //   uris,
  //   position,
  // }: {
  //   playlist_id: string;
  //   uris: string[];
  //   position?: number;
  // }): Promise<{
  //   result?: SnapshotType;
  //   error?: Error;
  // }> {
  //   if (!this.info.user_access_token || !this.info.user_access_token.length)
  //     throw new Error("User access token is required");

  //   let url = `${this.api_url}${playlist_id}/tracks`;

  //   let body = JSON.stringify({
  //     uris,
  //     position,
  //   });

  //   return await post_req(
  //     url,
  //     this.info.user_access_token,
  //     body,
  //     this.info,
  //     Snapshot
  //   );
  // }

  // /**
  //  * Remove Playlist Items - https://developer.spotify.com/documentation/web-api/reference/remove-tracks-playlist
  //  * Remove one or more items from a user's playlist.
  //  * @param playlist_id
  //  * The Spotify ID of the playlist.
  //  * Example value: "3cEYpjA9oz9GiPac4AsH4n"
  //  * @param tracks
  //  * An array of objects containing Spotify URIs of the tracks or episodes to remove. For example: { "tracks": [{ "uri": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" },{ "uri": "spotify:track:1301WleyT98MSxVHPZCA6M" }] }. A maximum of 100 objects can be sent at once.
  //  * @param snapshot
  //  * The playlist's snapshot ID against which you want to make the changes. The API will validate that the specified items exist and in the specified positions and make the changes, even if more recent changes have been made to the playlist.
  //  * @Scopes Authorization scopes
  //  * - playlist-modify-public
  //  * - playlist-modify-private
  //  * @returns
  //  * Promise<{
  //  * result?: SnapshotType;
  //  * error?: Error;
  //  * }>
  //  */
  // public async remove_playlist_items({
  //   playlist_id,
  //   tracks,
  //   snapshot,
  // }: {
  //   playlist_id: string;
  //   tracks: { uri: string }[];
  //   snapshot?: string;
  // }): Promise<{
  //   result?: SnapshotType;
  //   error?: Error;
  // }> {
  //   if (!this.info.user_access_token || !this.info.user_access_token.length)
  //     throw new Error("User access token is required");

  //   let url = `${this.api_url}${playlist_id}/tracks`;

  //   let body = JSON.stringify({
  //     tracks,
  //     snapshot,
  //   });

  //   return await delete_req(
  //     url,
  //     this.info.user_access_token,
  //     this.info,
  //     body,
  //     Snapshot
  //   );
  // }

  // /**
  //  * Get Current User's Playlists - https://developer.spotify.com/documentation/web-api/reference/get-a-list-of-current-users-playlists
  //  * Get a list of the playlists owned or followed by the current Spotify user.
  //  * @param limit
  //  * The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
  //  * Example value: 10
  //  * Default value: 20
  //  * Range: 0 - 50
  //  * @param offset
  //  * 'The index of the first playlist to return. Default: 0 (the first object). Maximum offset: 100.000. Use with limit to get the next set of playlists.'
  //  * Example value: 5
  //  * Default value: 0
  //  * @Scopes Authorization scopes
  //  * - playlist-read-private
  //  * @returns
  //  * Promise<{
  //  * result?: SeveralSimplifiedPlaylistsType;
  //  * error?: Error;
  //  * }>
  //  */
  // public async get_current_users_playlists({
  //   limit,
  //   offset,
  // }: {
  //   limit?: number;
  //   offset?: number;
  // }): Promise<{
  //   result?: SeveralSimplifiedPlaylistsType;
  //   error?: Error;
  // }> {
  //   if (!this.info.user_access_token || !this.info.user_access_token.length)
  //     throw new Error("User access token is required");

  //   let url = `${this.info.api_url}/me/playlists?`;
  //   if (limit) url += `&limit=${limit}`;
  //   if (offset) url += `&offset=${offset}`;

  //   return await get_req(
  //     url,
  //     this.info.user_access_token,
  //     SeveralSimplifiedPlaylists,
  //     this.info
  //   );
  // }

  // /**
  //  * Get User's Playlists - https://developer.spotify.com/documentation/web-api/reference/get-list-users-playlists
  //  * Get a list of the playlists owned or followed by a Spotify user.
  //  * @param user_id
  //  * The user's Spotify user ID.
  //  * Example value: "smedjan"
  //  * @param limit
  //  * The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
  //  * Example value: 10
  //  * Default value: 20
  //  * Range: 0 - 50
  //  * @param offset
  //  * 'The index of the first playlist to return. Default: 0 (the first object). Maximum offset: 100.000. Use with limit to get the next set of playlists.'
  //  * Example value: 5
  //  * Default value: 0
  //  * @Scopes Authorization scopes
  //  * - playlist-read-private
  //  * - playlist-read-collaborative
  //  * @returns
  //  * Promise<{
  //  * result?: SeveralSimplifiedPlaylistsType;
  //  * error?: Error;
  //  * }>
  //  */
  // public async get_users_playlists({
  //   user_id,
  //   limit,
  //   offset,
  // }: {
  //   user_id: string;
  //   limit?: number;
  //   offset?: number;
  // }): Promise<{
  //   result?: SeveralSimplifiedPlaylistsType;
  //   error?: Error;
  // }> {
  //   if (!this.info.user_access_token || !this.info.user_access_token.length)
  //     throw new Error("User access token is required");

  //   let url = `${this.info.api_url}/users/${user_id}/playlists?`;
  //   if (limit) url += `&limit=${limit}`;
  //   if (offset) url += `&offset=${offset}`;

  //   return await get_req(
  //     url,
  //     this.info.user_access_token,
  //     SeveralSimplifiedPlaylists,
  //     this.info
  //   );
  // }

  // /**
  //  * Create Playlist - https://developer.spotify.com/documentation/web-api/reference/create-playlist
  //  * Create a playlist for a Spotify user. (The playlist will be empty until you add tracks.)
  //  * @param user_id
  //  * The user's Spotify user ID.
  //  * Example value: "smedjan"
  //  * @param name
  //  * The name for the new playlist, for example "Your Coolest Playlist". This name does not need to be unique; a user may have several playlists with the same name.
  //  * @param public
  //  * Defaults to true. If true the playlist will be public, if false it will be private. To be able to create private playlists, the user must have granted the playlist-modify-private scope
  //  * @param collaborative
  //  * Defaults to false. If true the playlist will be collaborative. Note: to create a collaborative playlist you must also set public to false. To create collaborative playlists you must have granted playlist-modify-private and playlist-modify-public scopes.
  //  * @param description
  //  * value for playlist description as displayed in Spotify Clients and in the Web API.
  //  * @Scopes Authorization scopes
  //  * - playlist-modify-public
  //  * - playlist-modify-private
  //  * @returns
  //  * Promise<{
  //  * result?: PlaylistType;
  //  * error?: Error;
  //  * }>
  //  */
  // public async create_playlist({
  //   user_id,
  //   name,
  //   public_playlist,
  //   collaborative,
  //   description,
  // }: {
  //   user_id: string;
  //   name: string;
  //   public_playlist?: boolean;
  //   collaborative?: boolean;
  //   description?: string;
  // }): Promise<{
  //   result?: PlaylistType;
  //   error?: Error;
  // }> {
  //   if (!this.info.user_access_token || !this.info.user_access_token.length)
  //     throw new Error("User access token is required");

  //   let url = `${this.info.api_url}/users/${user_id}/playlists?`;

  //   let body = JSON.stringify({
  //     name,
  //     public: public_playlist,
  //     collaborative,
  //     description,
  //   });

  //   return await post_req(
  //     url,
  //     this.info.user_access_token,
  //     body,
  //     this.info,
  //     Playlist
  //   );
  // }

  // /**
  //  * Get Featured Playlists - https://developer.spotify.com/documentation/web-api/reference/get-featured-playlists
  //  * Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).
  //  * @param country
  //  * A country: an ISO 3166-1 alpha-2 country code. Provide this parameter if you want the list of returned items to be relevant to a particular country. If omitted, the returned items will be relevant to all countries.
  //  * Example value: "SE"
  //  * @param locale
  //  * The desired language, consisting of a lowercase ISO 639-1 language code and an uppercase ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)". Provide this parameter if you want the results returned in a particular language (where available).
  //  * Note: if locale is not supplied, or if the specified language is not available, all strings will be returned in the Spotify default language (American English). The locale parameter, combined with the country parameter, may give odd results if not carefully matched. For example country=SE&locale=de_DE will return a list of categories relevant to Sweden but as German language strings.
  //  * Example value: "sv_SE"
  //  * @param timestamp
  //  * A timestamp in ISO 8601 format: yyyy-MM-ddTHH:mm:ss. Use this parameter to specify the user's local time to get results tailored for that specific date and time in the day. If not provided, the response defaults to the current UTC time. Example: "2014-10-23T09:00:00" for a user whose local time is 9AM. If there were no featured playlists (or there is no data) at the specified time, the response will revert to the current UTC time.
  //  * Example value: "2014-10-23T09:00:00"
  //  * @param limit
  //  * The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
  //  * Example value: 10
  //  * Default value: 20
  //  * Range: 0 - 50
  //  * @param offset
  //  * The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.
  //  * Example value: 5
  //  * Default value: 0
  //  * @returns
  //  * Promise<{
  //  * result?: PagedPlaylistsType;
  //  * error?: Error;
  //  * }>
  //  */
  // public async get_featured_playlists({
  //   country,
  //   locale,
  //   timestamp,
  //   limit = 20,
  //   offset = 0,
  // }: {
  //   country?: string;
  //   locale?: string;
  //   timestamp?: string;
  //   limit?: number;
  //   offset?: number;
  // }): Promise<{
  //   result?: PagedPlaylistsType;
  //   error?: Error;
  // }> {
  //   let url = `${this.info.api_url}/browse/featured-playlists?limit=${limit}&offset=${offset}`;
  //   if (country) url += `&country=${country}`;
  //   if (locale) url += `&locale=${locale}`;
  //   if (timestamp) url += `&timestamp=${timestamp}`;

  //   return await get_req(
  //     url,
  //     this.info.client_access_token,
  //     PagedPlaylists,
  //     this.info
  //   );
  // }

  // /**
  //  * Get Category's Playlists - https://developer.spotify.com/documentation/web-api/reference/get-a-categories-playlists
  //  * Get a list of Spotify playlists tagged with a particular category.
  //  * @param category_id
  //  * The Spotify category ID for the category.
  //  * Example value: "dinner"
  //  * @param country
  //  * A country: an ISO 3166-1 alpha-2 country code. Provide this parameter if you want the list of returned items to be relevant to a particular country. If omitted, the returned items will be relevant to all countries.
  //  * Example value: "SE"
  //  * @param limit
  //  * The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
  //  * Example value: 10
  //  * Default value: 20
  //  * Range: 0 - 50
  //  * @param offset
  //  * The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.
  //  * Example value: 5
  //  * Default value: 0
  //  * @returns
  //  * Promise<{
  //  * result?: PagedPlaylistsType;
  //  * error?: Error;
  //  * }>
  //  */
  // public async get_categorys_playlists({
  //   category_id,
  //   country,
  //   limit = 20,
  //   offset = 0,
  // }: {
  //   category_id: string;
  //   country?: string;
  //   limit?: number;
  //   offset?: number;
  // }): Promise<{
  //   result?: PagedPlaylistsType;
  //   error?: Error;
  // }> {
  //   let url = `${this.info.api_url}/browse/categories/${category_id}/playlists?limit=${limit}&offset=${offset}`;
  //   if (country) url += `&country=${country}`;

  //   return await get_req(
  //     url,
  //     this.info.client_access_token,
  //     PagedPlaylists,
  //     this.info
  //   );
  // }

  // /**
  //  * Get Playlist Cover Image - https://developer.spotify.com/documentation/web-api/reference/get-playlist-cover
  //  * Get the current image associated with a specific playlist.
  //  * @param playlist_id
  //  * The Spotify ID of the playlist.
  //  * Example value: "3cEYpjA9oz9GiPac4AsH4n"
  //  * @returns
  //  * Promise<{
  //  * result?: SetOfImagesType;
  //  * error?: Error;
  //  * }>
  //  */
  // public async get_playlist_cover_image({
  //   playlist_id,
  // }: {
  //   playlist_id: string;
  // }): Promise<{
  //   result?: SetOfImagesType;
  //   error?: Error;
  // }> {
  //   let url = `${this.api_url}${playlist_id}/images`;

  //   return await get_req(
  //     url,
  //     this.info.client_access_token,
  //     SetOfImages,
  //     this.info
  //   );
  // }

  // /**
  //  * Add Custom Playlist Cover Image - https://developer.spotify.com/documentation/web-api/reference/upload-custom-playlist-cover
  //  * Replace the image used to represent a specific playlist.
  //  * @param playlist_id
  //  * The Spotify ID of the playlist.
  //  * Example value: "3cEYpjA9oz9GiPac4AsH4n"
  //  * @param image
  //  * Base64 encoded JPEG image data, maximum payload size is 256 KB.
  //  * Example value: "/9j/2wCEABoZGSccJz4lJT5CLy8vQkc9Ozs9R0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0cBHCcnMyYzPSYmPUc9Mj1HR0dEREdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR//dAAQAAf/uAA5BZG9iZQBkwAAAAAH/wAARCAABAAEDACIAAREBAhEB/8QASwABAQAAAAAAAAAAAAAAAAAAAAYBAQAAAAAAAAAAAAAAAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAARAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwAAARECEQA/AJgAH//Z"
  //  * @Scopes Authorization scopes
  //  * - ugc-image-upload
  //  * - playlist-modify-public
  //  * - playlist-modify-private
  //  * @returns
  //  * Promise<{
  //  * result?: string;
  //  * error?: Error;
  //  * }>
  //  */
  // public async add_custom_playlist_cover_image({
  //   playlist_id,
  //   image,
  // }: {
  //   playlist_id: string;
  //   image: string;
  // }): Promise<{
  //   result?: string;
  //   error?: Error;
  // }> {
  //   let url = `${this.api_url}${playlist_id}/images`;

  //   return await put_req(url, this.info.user_access_token, image, this.info);
  // }
}

export { Playlists };
