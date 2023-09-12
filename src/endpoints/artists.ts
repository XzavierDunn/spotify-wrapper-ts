import { CustomError, InfoType } from "../models/client";
import {
  SeveralSimplifiedAlbums,
  SeveralSimplifiedAlbumsType,
} from "../models/albums-simplified";
import {
  Artist,
  ArtistType,
  SeveralArtists,
  SeveralArtistsType,
} from "../models/artists";
import { MultipleTracks, MultipleTracksType } from "../models/tracks";
import { OptionalType, handle_optional } from "../utils/helpers";

class Artists {
  private info: InfoType;
  private api_url: string;

  constructor(info: InfoType) {
    this.info = info;
    this.api_url = this.info.api_url + "/artists/";
  }

  /**
   * Get Artist - https://developer.spotify.com/documentation/web-api/reference/get-an-artist
   * Get Spotify catalog information for a single artist identified by their unique Spotify ID.
   * @param id
   * The Spotify ID of the artist
   * Example value: "0TnOYISbd1XYRBk9myaseg"
   * @returns
   * Promise<{ result?: ArtistType; error?: CustomError }>
   */
  public async get_artist(
    id: string
  ): Promise<{ result?: ArtistType; error?: CustomError }> {
    return await this.info.submit_request<ArtistType>({
      url: `${this.api_url}${id}`,
      method: "GET",
      object: Artist,
    });
  }

  /**
   * Get Several Artists - https://developer.spotify.com/documentation/web-api/reference/get-multiple-artists
   * Get Spotify catalog information for several artists based on their Spotify IDs.
   * @param id
   * A comma-separated list of the Spotify IDs for the artists. Maximum: 50 IDs.
   * Example value: "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6"
   * @returns
   * Promise<{ result?: SeveralArtistsType; error?: CustomError }>
   */
  public async get_several_artists(
    ids: string[]
  ): Promise<{ result?: SeveralArtistsType; error?: CustomError }> {
    return await this.info.submit_request<SeveralArtistsType>({
      url: `${this.api_url}?ids=${ids.toString()}`,
      method: "GET",
      object: SeveralArtists,
    });
  }

  /**
   * Get Artist Albums - https://developer.spotify.com/documentation/web-api/reference/get-an-artists-albums
   * Get Spotify catalog information about an artist's albums.
   * @param id
   * The Spotify ID of the artist
   * Example value: "0TnOYISbd1XYRBk9myaseg"
   * @param include_groups
   * A comma-separated list of keywords that will be used to filter the response. If not supplied, all album types will be returned.
   * Valid values are:
   * - album
   * - single
   * - appears_on
   * - compilation
   * Example value: "single,appears_on"
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
   * Promise<{ result?: SeveralSimplifiedAlbumsType; error?: CustomError }>
   */
  public async get_artists_albums(
    id: string,
    optional?: OptionalType & {
      include_groups?: string;
    }
  ): Promise<{ result?: SeveralSimplifiedAlbumsType; error?: CustomError }> {
    const include_groups = optional?.include_groups;
    const { limit, offset, market } = handle_optional(optional);

    let url: string = `${this.api_url}${id}/albums?limit=${limit}&offset=${offset}`;
    if (include_groups) url += `&include_groups=${include_groups}`;
    if (market) url += `&market=${market}`;

    return await this.info.submit_request<SeveralSimplifiedAlbumsType>({
      url,
      method: "GET",
      object: SeveralSimplifiedAlbums,
    });
  }

  /**
   * Get Artist's Top Tracks - https://developer.spotify.com/documentation/web-api/reference/get-an-artists-top-tracks
   * Get Spotify catalog information about an artist's top tracks by country.
   * @param id
   * The Spotify ID of the artist
   * Example value: "0TnOYISbd1XYRBk9myaseg"
   * @param market
   * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.
   * If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.
   * Note: If neither market or user country are provided, the content is considered unavailable for the client.
   * Users can view the country that is associated with their account in the account settings.
   * Example value: "ES"
   * @returns
   * Promise<{ result?: MultipleTracksType; error?: CustomError }>
   */
  public async get_artists_top_tracks(
    id: string,
    market: string
  ): Promise<{ result?: MultipleTracksType; error?: CustomError }> {
    let url: string = `${this.api_url}${id}/top-tracks?market=${market}`;

    return await this.info.submit_request<MultipleTracksType>({
      url,
      method: "GET",
      object: MultipleTracks,
    });
  }

  /**
   * Get Artist's Related Artists - https://developer.spotify.com/documentation/web-api/reference/get-an-artists-related-artists
   * Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history.
   * @param id
   * The Spotify ID of the artist
   * Example value: "0TnOYISbd1XYRBk9myaseg"
   * @returns
   * Promise<{ result?: SeveralArtistsType; error?: CustomError }>
   */
  public async get_artists_related_artists(
    id: string
  ): Promise<{ result?: SeveralArtistsType; error?: CustomError }> {
    let url: string = `${this.api_url}${id}/related-artists`;

    return await this.info.submit_request<SeveralArtistsType>({
      url,
      method: "GET",
      object: SeveralArtists,
    });
  }
}

export { Artists };
