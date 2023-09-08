import { z } from "zod";
import { InfoType } from "../client/client";
import {
  MultipleTracks,
  MultipleTracksType,
  PagesofTracks,
  PagesofTracksType,
  Track,
  TrackType,
} from "../models/tracks";
import { delete_req, get_req, put_req } from "../utils/requests";
import {
  AudioFeatures,
  AudioFeaturesType,
  SetofAudioFeatures,
  SetofAudioFeaturesType,
} from "../models/audio-features";
import { AudioAnalysis, AudioAnalysisType } from "../models/audio-analysis";
import {
  RecommendationsInputType,
  SetofRecommendations,
  SetofRecommendationsType,
} from "../models/recommendations";

class Tracks {
  private info: InfoType;
  private api_url: string;

  constructor(info: InfoType) {
    this.info = info;
    this.api_url = this.info.api_url + "/tracks/";
  }

  /**
   * Get Track - https://developer.spotify.com/documentation/web-api/reference/get-track
   * Get Spotify catalog information for a single track identified by its unique Spotify ID.
   * @param id
   * The Spotify ID for the show.
   * Example value: "38bS44xjbVVZ3No3ByF1dJ"
   * @param market
   * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.
   * If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.
   * Note: If neither market or user country are provided, the content is considered unavailable for the client.
   * Users can view the country that is associated with their account in the account settings.
   * Example value: "ES"
   * @returns
   * Promise<{
   * result?: TrackType;
   * error?: Error;
   * }>
   */
  public async get_track(
    id: string,
    market?: string
  ): Promise<{ result?: TrackType; error?: Error }> {
    let url = `${this.api_url}${id}`;
    if (market) url += `?market=${market}`;

    return await get_req(url, this.info.client_access_token, Track, this.info);
  }

  /**
   * Get Several Tracks - https://developer.spotify.com/documentation/web-api/reference/get-several-tracks
   * Get Spotify catalog information for multiple tracks based on their Spotify IDs.
   * @param ids
   * A comma-separated list of the Spotify IDs. For example: ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M. Maximum: 50 IDs.
   * Example value: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B"
   * @param market
   * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.
   * If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.
   * Note: If neither market or user country are provided, the content is considered unavailable for the client.
   * Users can view the country that is associated with their account in the account settings.
   * Example value: "ES"
   * @returns
   * Promise<{
   * result?: MultipleTracksType;
   * error?: Error;
   * }>
   */
  public async get_several_tracks(
    ids: string[],
    market?: string
  ): Promise<{ result?: MultipleTracksType; error?: Error }> {
    let url = `${this.api_url}?ids=${ids.join(",")}`;
    if (market) url += `&market=${market}`;

    return await get_req(
      url,
      this.info.client_access_token,
      MultipleTracks,
      this.info
    );
  }

  /**
   * Get User's Saved Tracks - https://developer.spotify.com/documentation/web-api/reference/get-users-saved-tracks
   * Get a list of the songs saved in the current Spotify user's 'Your Music' library.
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
   * @Scopes Authorization scopes
   * - user-library-read
   * @returns
   * Promise<{
   * result?: PagesofTracksType;
   * error?: Error;
   * }>
   */
  public async get_users_saved_tracks({
    market,
    limit = 20,
    offset = 0,
  }: {
    market?: string;
    limit?: number;
    offset?: number;
  }): Promise<{ result?: PagesofTracksType; error?: Error }> {
    let url = `${this.info.api_url}/me/tracks?limit=${limit}&offset=${offset}`;
    if (market) url += `&market=${market}`;

    return await get_req(
      url,
      this.info.user_access_token,
      PagesofTracks,
      this.info
    );
  }

  /**
   * Save Tracks for Current User - https://developer.spotify.com/documentation/web-api/reference/save-tracks-user
   * Save one or more tracks to the current user's 'Your Music' library.
   * @param ids
   * A comma-separated list of the Spotify IDs. For example: ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M. Maximum: 50 IDs.
   * Example value: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B"
   * @Scopes Authorization scopes
   * - user-library-modify
   * @returns
   * Promise<{
   * result?: string;
   * error?: Error;
   * }>
   */
  public async save_tracks_for_current_user(
    ids: string[]
  ): Promise<{ result?: string; error?: Error }> {
    let url = `${this.info.api_url}/me/tracks?ids=${ids.join(",")}`;

    return await put_req(url, this.info.user_access_token, null, this.info);
  }

  /**
   * Remove User's Saved Tracks - https://developer.spotify.com/documentation/web-api/reference/remove-tracks-user
   * Remove one or more tracks from the current user's 'Your Music' library.
   * @param ids
   * A comma-separated list of the Spotify IDs. For example: ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M. Maximum: 50 IDs.
   * Example value: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B"
   * @Scopes Authorization scopes
   * - user-library-modify
   * @returns
   * Promise<{
   * result?: string;
   * error?: Error;
   * }>
   */
  public async remove_users_saved_tracks(
    ids: string[]
  ): Promise<{ result?: string; error?: Error }> {
    let url = `${this.info.api_url}/me/tracks?ids=${ids.join(",")}`;

    return await delete_req(url, this.info.user_access_token, this.info);
  }

  /**
   * Check User's Saved Tracks - https://developer.spotify.com/documentation/web-api/reference/check-users-saved-tracks
   * Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.
   * @param ids
   * A comma-separated list of the Spotify IDs. For example: ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M. Maximum: 50 IDs.
   * Example value: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B"
   * @Scopes Authorization scopes
   * - user-library-read
   * @returns
   * Promise<{
   * result?: string;
   * error?: Error;
   * }>
   */
  public async check_users_saved_tracks(
    ids: string[]
  ): Promise<{ result?: string; error?: Error }> {
    let url = `${this.info.api_url}/me/tracks/contains?ids=${ids.join(",")}`;

    return await get_req(
      url,
      this.info.user_access_token,
      z.array(z.boolean()),
      this.info
    );
  }

  /**
   * Get Tracks' Audio Features - https://developer.spotify.com/documentation/web-api/reference/get-several-audio-features
   * Get audio features for multiple tracks based on their Spotify IDs.
   * @param ids
   * A comma-separated list of the Spotify IDs. For example: ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M. Maximum: 50 IDs.
   * Example value: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B"
   * @returns
   * Promise<{
   * result?: SetofAudioFeaturesType;
   * error?: Error;
   * }>
   */
  public async get_tracks_audio_features(
    ids: string[]
  ): Promise<{ result?: SetofAudioFeaturesType; error?: Error }> {
    let url = `${this.info.api_url}/audio-features?ids=${ids.join(",")}`;

    return await get_req(
      url,
      this.info.client_access_token,
      SetofAudioFeatures,
      this.info
    );
  }

  /**
   * Get Track's Audio Features - https://developer.spotify.com/documentation/web-api/reference/get-audio-features
   * Get audio feature information for a single track identified by its unique Spotify ID.
   * @param id
   * The Spotify ID for the track.
   * Example value: "11dFghVXANMlKmJXsNCbNl"
   * @returns
   * Promise<{
   * result?: AudioFeaturesType;
   * error?: Error;
   * }>
   */
  public async get_a_tracks_audio_features(
    id: string
  ): Promise<{ result?: AudioFeaturesType; error?: Error }> {
    let url = `${this.info.api_url}/audio-features/${id}`;

    return await get_req(
      url,
      this.info.client_access_token,
      AudioFeatures,
      this.info
    );
  }

  /**
   * Get Track's Audio Analysis - https://developer.spotify.com/documentation/web-api/reference/get-audio-analysis
   * Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre.
   * @param id
   * The Spotify ID for the track.
   * Example value: "11dFghVXANMlKmJXsNCbNl"
   * @returns
   * Promise<{
   * result?: AudioAnalysisType;
   * error?: Error;
   * }>
   */
  public async get_a_tracks_audio_analysis(
    id: string
  ): Promise<{ result?: AudioAnalysisType; error?: Error }> {
    let url = `${this.info.api_url}/audio-analysis/${id}`;

    return await get_req(
      url,
      this.info.user_access_token,
      AudioAnalysis,
      this.info
    );
  }

  /**
   * Get Recommendations - https://developer.spotify.com/documentation/web-api/reference/get-recommendations
   * Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.
   * For artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks.
   * @param limit
   * Type: Integer
   * Description: The target size of the list of recommended tracks. For seeds with unusually small pools or when highly restrictive filtering is applied, it may be impossible to generate the requested number of recommended tracks. Debugging information for such cases is available in the response.
   * Default: 20
   * Minimum: 1
   * Maximum: 100
   * Example value: 10
   * @param market
   * Type: String
   * Description: An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. Note: If neither market or user country are provided, the content is considered unavailable for the client. Users can view the country that is associated with their account in the account settings.
   * Example value: "ES"
   * @param seed_artists
   * Type: String
   * Description: A comma-separated list of Spotify IDs for seed artists. Up to 5 seed values may be provided in any combination of seed_artists, seed_tracks, and seed_genres. Note: only required if seed_genres and seed_tracks are not set.
   * Example value: "4NHQUGzhtTLFvgF5SZesLK"
   * @param seed_genres
   * Type: String
   * Description: A comma-separated list of any genres in the set of available genre seeds. Up to 5 seed values may be provided in any combination of seed_artists, seed_tracks, and seed_genres. Note: only required if seed_artists and seed_tracks are not set.
   * Example value: "classical,country"
   * @param seed_tracks
   * Type: String
   * Description: A comma-separated list of Spotify IDs for a seed track. Up to 5 seed values may be provided in any combination of seed_artists, seed_tracks, and seed_genres. Note: only required if seed_artists and seed_genres are not set.
   * Example value: "0c6xIDDpzE81m2q797ordA"
   * @param min_acousticness
   * Type: Number
   * Description: For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options.
   * Range: 0 - 1
   * @param max_acousticness
   * Type: Number
   * Description: For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options.
   * Range: 0 - 1
   * @param target_acousticness
   * Type: Number
   * Description: For each of the tunable track attributes, a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. All target values will be weighed equally in ranking results.
   * Range: 0 - 1
   * @param min_danceability
   * Type: Number
   * Description: For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options.
   * Range: 0 - 1
   * @param max_danceability
   * Type: Number
   * Description: For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options.
   * Range: 0 - 1
   * @param target_danceability
   * Type: Number
   * Description: For each of the tunable track attributes, a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. All target values will be weighed equally in ranking results.
   * Range: 0 - 1
   * @param min_duration_ms
   * Type: Integer
   * Description: For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options.
   * @param max_duration_ms
   * Type: Integer
   * Description: For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options.
   * @param target_duration_ms
   * Type: Integer
   * Description: Target duration of the track (ms)
   * @param min_energy
   * Type: Number
   * Description: For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options.
   * Range: 0 - 1
   * @param max_energy
   * Type: Number
   * Description: For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options.
   * Range: 0 - 1
   * @param target_energy
   * Type: Number
   * Description: For each of the tunable track attributes, a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. All target values will be weighed equally in ranking results.
   * Range: 0 - 1
   * @param min_instrumentalness
   * Type: Number
   * Description: For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options.
   * Range: 0 - 1
   * @param max_instrumentalness
   * Type: Number
   * Description: For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options.
   * Range: 0 - 1
   * @param target_instrumentalness
   * Type: Number
   * Description: For each of the tunable track attributes, a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. All target values will be weighed equally in ranking results.
   * Range: 0 - 1
   * @param min_key
   * Type: Integer
   * Description: For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options.
   * Range: 0 - 11
   * @param max_key
   * Type: Integer
   * Description: For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options.
   * Range: 0 - 11
   * @param target_key
   * Type: Integer
   * Description: For each of the tunable track attributes, a target
   * @param min_liveness
   * Type: Number
   * Description: For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options.
   * Range: 0 - 1
   * @param max_liveness
   * Type: Number
   * Description: For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options.
   * Range: 0 - 1
   * @param target_liveness
   * Type: Number
   * Description: For each of the tunable track attributes (below), a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. All target values will be weighed equally in ranking results.
   * Range: 0 - 1
   * @param min_loudness
   * Type: Number
   * Description: For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options.
   * @param max_loudness
   * Type: Number
   * Description: For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options.
   * @param target_loudness
   * Type: Number
   * Description: For each of the tunable track attributes (below), a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. All target values will be weighed equally in ranking results.
   * @param min_mode
   * Type: Integer
   * Description: For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options.
   * Range: 0 - 1
   * @param max_mode
   * Type: Integer
   * Description: For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options.
   * Range: 0 - 1
   * @param target_mode
   * Type: Integer
   * Description: For each of the tunable track attributes (below), a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. All target values will be weighed equally in ranking results.
   * Range: 0 - 1
   * @param min_popularity
   * Type: Integer
   * Description: For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options.
   * Range: 0 - 100
   * @param max_popularity
   * Type: Integer
   * Description: For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options.
   * Range: 0 - 100
   * @param target_popularity
   * Type: Integer
   * Description: For each of the tunable track attributes (below), a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. All target values will be weighed equally in ranking results.
   * Range: 0 - 100
   * @param min_speechiness
   * Type: Number
   * Description: For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options.
   * Range: 0 - 1
   * @param max_speechiness
   * Type: Number
   * Description: For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options.
   * Range: 0 - 1
   * @param target_speechiness
   * Type: Number
   * Description: For each of the tunable track attributes (below), a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. All target values will be weighed equally in ranking results.
   * Range: 0 - 1
   * @param min_tempo
   * Type: Number
   * Description: For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options.
   * Range: 0 - 1
   * @param max_tempo
   * Type: Number
   * Description: For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options.
   * Range: 0 - 1
   * @param target_tempo
   * Type: Number
   * Description: Target tempo (BPM)
   * @param min_time_signature
   * Type: Integer
   * Description: For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available
   * @param max_time_signature
   * Type: Integer
   * Description: For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options.
   * Range: 0 - 11
   * @param target_time_signature
   * Type: Integer
   * Description: For each of the tunable track attributes (below), a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. All target values will be weighed equally in ranking results.
   * Range: 0 - 11
   * @param min_valence
   * Type: Number
   * Description: For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options.
   * Range: 0 - 1
   * @param max_valence
   * Type: Number
   * Description: For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options.
   * Range: 0 - 1
   * @param target_valence
   * Type: Number
   * Description: For each of the tunable track attributes (below), a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request target_energy=0.6 and target_danceability=0.8. All target values will be weighed equally in ranking results.
   * Range: 0 - 1
   * @returns
   * Promise<{
   * result?:;
   * error?: Error;
   * }>
   */
  public async get_recommendations(
    input: RecommendationsInputType
  ): Promise<{ result?: SetofRecommendationsType; error?: Error }> {
    let url = `${this.info.api_url}/recommendations?`;

    for (const [key, value] of Object.entries(input)) {
      if (value) {
        url += `&${key}=${value}`;
      }
    }

    return await get_req(
      url,
      this.info.client_access_token,
      SetofRecommendations,
      this.info
    );
  }
}

export { Tracks };
