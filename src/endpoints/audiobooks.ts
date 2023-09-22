import { z } from "zod";
import { CustomError, InfoType } from "../models/client";
import {
  Audiobook,
  AudiobookType,
  ChaptersType,
  SeveralAudiobookType,
  SeveralAudiobooks,
  chapters,
} from "../models/audiobooks";
import {
  SeveralSimplifiedAudiobooks,
  SeveralSimplifiedAudiobooksType,
} from "../models/audiobooks-simplified";
import { OptionalType, handle_optional } from "../utils/helpers";

class Audiobooks {
  private info: InfoType;
  private api_url: string;

  constructor(info: InfoType) {
    this.info = info;
    this.api_url = this.info.api_url + "/audiobooks/";
  }

  /**
   * Get an Audiobook - https://developer.spotify.com/documentation/web-api/reference/get-an-audiobook
   * Get Spotify catalog information for a single audiobook.
   * Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.
   * @param id
   * The Spotify ID for the audiobook.
   * Example value: "7iHfbu1YPACw6oZPAFJtqe"
   * @param market
   * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.
   * If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.
   * Note: If neither market or user country are provided, the content is considered unavailable for the client.
   * Users can view the country that is associated with their account in the account settings.
   * Example value: "ES"
   * @returns
   * Promise<{ result?: AudiobookType; error?: CustomError }>
   */
  public async get_an_audiobook(
    id: string,
    market?: string
  ): Promise<{ result?: AudiobookType; error?: CustomError }> {
    let url = `${this.api_url}${id}`;
    if (market) url += `?market=${market}`;

    return await this.info.submit_request<AudiobookType>({
      url,
      method: "GET",
      object: Audiobook,
    });
  }

  /**
   * Get Several Audiobooks - https://developer.spotify.com/documentation/web-api/reference/get-multiple-audiobooks
   * Get Spotify catalog information for several audiobooks identified by their Spotify IDs.
   * Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.
   * @param ids
   * A comma-separated list of the Spotify IDs. For example: ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ. Maximum: 50 IDs.
   * Example value: "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe"
   * @param market
   * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.
   * If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.
   * Note: If neither market or user country are provided, the content is considered unavailable for the client.
   * Users can view the country that is associated with their account in the account settings.
   * Example value: "ES"
   * @returns
   * Promise<{ result?: SeveralAudiobookType; error?: CustomError }
   */
  public async get_several_audiobooks(
    ids: string[],
    market?: string
  ): Promise<{ result?: SeveralAudiobookType; error?: CustomError }> {
    let url = `${this.api_url}?ids=${ids.join(",")}`;
    if (market) url += `&market=${market}`;

    return await this.info.submit_request<SeveralAudiobookType>({
      url,
      method: "GET",
      object: SeveralAudiobooks,
    });
  }

  /**
   * Get Audiobook Chapters - https://developer.spotify.com/documentation/web-api/reference/get-audiobook-chapters
   * Get Spotify catalog information about an audiobook's chapters.
   * Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.
   * @param ids
   * A comma-separated list of the Spotify IDs. For example: ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ. Maximum: 50 IDs.
   * Example value: "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe"
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
   * Promise<{ result?: ChaptersType; error?: CustomError }>
   */
  public async get_audiobook_chapters(
    id: string,
    optional?: OptionalType
  ): Promise<{ result?: ChaptersType; error?: CustomError }> {
    const { limit, offset, market } = handle_optional(optional);

    let url = `${this.api_url}${id}/chapters?limit=${limit}&offset=${offset}`;
    if (market) url += `&market=${market}`;

    return await this.info.submit_request<ChaptersType>({
      url,
      method: "GET",
      object: chapters,
    });
  }

  /**
   * Get User's Saved Audiobooks - https://developer.spotify.com/documentation/web-api/reference/get-users-saved-audiobooks
   * Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.
   * @param limit
   * The maximum number of items to return.
   * Example value: 10
   * Default value: 20
   * Range: 0 - 50
   * @param offset
   * The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.
   * Example value: 5
   * Default value: 0
   * @scopes Authorization scopes
   * - user-library-read
   * @returns
   * Promise<{
   * result?: SeveralSimplifiedAudiobooksType;
   * error?: CustomError;
   * }>
   */
  public async get_users_saved_audiobooks(
    optional?: Omit<OptionalType, "market">
  ): Promise<{
    result?: SeveralSimplifiedAudiobooksType;
    error?: CustomError;
  }> {
    const { limit, offset } = handle_optional(optional);
    const url = `${this.info.api_url}/me/audiobooks?limit=${limit}&offset=${offset}`;

    return await this.info.submit_user_scoped_request<SeveralSimplifiedAudiobooksType>(
      {
        url,
        method: "GET",
        object: SeveralSimplifiedAudiobooks,
        scopes: ["user-library-read"],
      }
    );
  }

  /**
   * Save Audiobooks for Current User - https://developer.spotify.com/documentation/web-api/reference/save-audiobooks-user
   * Save one or more audiobooks to the current Spotify user's library.
   * @param ids
   * A comma-separated list of the Spotify IDs. For example: ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ. Maximum: 50 IDs.
   * Example value: "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe"
   * @scopes Authorization scopes
   * - user-library-modify
   * @returns
   * Promise<{ result?: string; error?: CustomError }>
   */
  public async save_audiobooks_for_current_user(
    ids: string[]
  ): Promise<{ result?: string; error?: CustomError }> {
    const url = `${this.info.api_url}/me/audiobooks?ids=${ids.join(",")}`;

    return await this.info.submit_user_scoped_request({
      url,
      method: "PUT",
      scopes: ["user-library-modify"],
    });
  }

  /**
   * Remove User's Saved Audiobooks - https://developer.spotify.com/documentation/web-api/reference/remove-audiobooks-user
   * Remove one or more audiobooks from the Spotify user's library.
   * @param ids
   * A comma-separated list of the Spotify IDs. For example: ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ. Maximum: 50 IDs.
   * Example value: "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe"
   * @scopes Authorization scopes
   * - user-library-modify
   * @returns
   * Promise<{
   * result?: string;
   * error?: CustomError;
   * }>
   */
  public async remove_users_saved_audiobooks(
    ids: string[]
  ): Promise<{ result?: string; error?: CustomError }> {
    const url = `${this.info.api_url}/me/audiobooks?ids=${ids.join(",")}`;

    return await this.info.submit_user_scoped_request({
      url,
      method: "DELETE",
      scopes: ["user-library-modify"],
    });
  }

  /**
   * Check User's Saved Audiobooks - https://developer.spotify.com/documentation/web-api/reference/check-users-saved-audiobooks
   * Check if one or more audiobooks are already saved in the current Spotify user's library.
   * @param ids
   * A comma-separated list of the Spotify IDs. For example: ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ. Maximum: 50 IDs.
   * Example value: "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe"
   * @scopes Authorization scopes
   * - user-library-read
   * @returns
   * Promise<{
   * result?: boolean[];
   * error?: CustomError;
   * }>
   */
  public async check_users_saved_audiobooks(
    ids: string[]
  ): Promise<{ result?: boolean[]; error?: CustomError }> {
    const url = `${this.info.api_url}/me/audiobooks/contains?ids=${ids.join(
      ","
    )}`;

    return await this.info.submit_user_scoped_request({
      url,
      method: "GET",
      object: z.array(z.boolean()),
      scopes: ["user-library-read"],
    });
  }
}

export { Audiobooks };
