import { InfoType } from "../client/client";
import { SearchObject, SearchObjectType } from "../models/search";
import { get } from "../utils/utils";

class Search {
  private info: InfoType;
  private api_url: string;

  constructor(info: InfoType) {
    this.info = info;
    this.api_url = this.info.api_url + "/search/";
  }

  /**
   * Search for Item - https://developer.spotify.com/documentation/web-api/reference/search
   * Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks that match a keyword string.
   * Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.
   * @param q
   * Your search query.
   * You can narrow down your search using field filters. The available filters are album, artist, track, year, upc, tag:hipster, tag:new, isrc, and genre. Each field filter only applies to certain result types.
   * The artist and year filters can be used while searching albums, artists and tracks. You can filter on a single year or a range (e.g. 1955-1960).
   * The album filter can be used while searching albums and tracks.
   * The genre filter can be used while searching artists and tracks.
   * The isrc and track filters can be used while searching tracks.
   * The upc, tag:new and tag:hipster filters can only be used while searching albums. The tag:new filter will return albums released in the past two weeks and tag:hipster can be used to return only albums with the lowest 10% popularity.
   * Example value: "remaster%20track:Doxy%20artist:Miles%20Davis"
   * @param type
   * A comma-separated list of item types to search across. Search results include hits from all the specified item types. For example: q=abacab&type=album,track returns both albums and tracks matching "abacab".
   * Allowed values: "album", "artist", "playlist", "track", "show", "episode", "audiobook"
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
   * @param include_external
   * If include_external=audio is specified it signals that the client can play externally hosted audio content, and marks the content as playable in the response. By default externally hosted audio content is marked as unplayable in the response.
   * Allowed values: "audio"
   * @returns
   * Promise<{
   * result?: SearchObjectType;
   * error?: Error;
   * }>
   */
  async search_for_item(
    q: string,
    type: string[],
    market?: string,
    include_external?: string,
    limit: number = 20,
    offset: number = 0
  ): Promise<{ result?: SearchObjectType; error?: Error }> {
    let url = `${this.api_url}?q=${q}&type=${type.join(
      ","
    )}&limit=${limit}&offset=${offset}`;
    if (market) url += `&market=${market}`;
    if (include_external) url += `&include_external=${include_external}`;

    return await get(url, SearchObject, this.info);
  }
}

export { Search };
