import { InfoType } from "../client/client";
import {
  Chapter,
  ChapterType,
  SeveralChapters,
  SeveralChaptersType,
} from "../models/chapters";
import { get_req } from "../utils/requests";

class Chapters {
  private info: InfoType;
  private api_url: string;

  constructor(info: InfoType) {
    this.info = info;
    this.api_url = this.info.api_url + "/chapters/";
  }

  /**
   * Get a Chapter - https://developer.spotify.com/documentation/web-api/reference/get-a-chapter
   * Get Spotify catalog information for a single chapter.
   * Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.
   * @param id
   * The Spotify ID for the chapter.
   * Example value: "0D5wENdkdwbqlrHoaJ9g29"
   * @param market
   * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.
   * If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.
   * Note: If neither market or user country are provided, the content is considered unavailable for the client.
   * Users can view the country that is associated with their account in the account settings.
   * Example value: "ES"
   * @returns
   * Promise<{
   * result?: ChapterType;
   * error?: Error;
   * }>
   */
  async get_a_chapter(
    id: string,
    market: string
  ): Promise<{ result?: ChapterType; error?: Error }> {
    let url = `${this.api_url}${id}?market=${market}`;
    return await get_req(
      url,
      this.info.client_access_token,
      Chapter,
      this.info
    );
  }

  /**
   * Get Several Chapters - https://developer.spotify.com/documentation/web-api/reference/get-several-chapters
   * Get Spotify catalog information for several chapters identified by their Spotify IDs.
   * Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.
   * @param ids
   * A comma-separated list of the Spotify IDs. For example: ids=0IsXVP0JmcB2adSE338GkK,3ZXb8FKZGU0EHALYX6uCzU. Maximum: 50 IDs.
   * Example value: "0IsXVP0JmcB2adSE338GkK,3ZXb8FKZGU0EHALYX6uCzU,0D5wENdkdwbqlrHoaJ9g29"
   * @param market
   * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.
   * If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.
   * Note: If neither market or user country are provided, the content is considered unavailable for the client.
   * Users can view the country that is associated with their account in the account settings.
   * Example value: "ES"
   * @returns
   * Promise<{
   * result?: SeveralChaptersType;
   * error?: Error;
   * }>
   */
  async get_several_chapters(
    ids: string[],
    market: string
  ): Promise<{ result?: SeveralChaptersType; error?: Error }> {
    let url = `${this.api_url}?ids=${ids.join(",")}&market=${market}`;

    return await get_req(
      url,
      this.info.client_access_token,
      SeveralChapters,
      this.info
    );
  }
}

export { Chapters };
