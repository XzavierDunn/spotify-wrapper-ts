import { z } from "zod";
import { InfoType } from "../client/client";
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

class Audiobooks {
  private info: InfoType;
  private api_url: string;

  constructor(info: InfoType) {
    this.info = info;
    this.api_url = this.info.api_url + "/audiobooks/";
  }

  // /**
  //  * Get an Audiobook - https://developer.spotify.com/documentation/web-api/reference/get-an-audiobook
  //  * Get Spotify catalog information for a single audiobook.
  //  * Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.
  //  * @param id
  //  * The Spotify ID for the audiobook.
  //  * Example value: "7iHfbu1YPACw6oZPAFJtqe"
  //  * @param market
  //  * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.
  //  * If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.
  //  * Note: If neither market or user country are provided, the content is considered unavailable for the client.
  //  * Users can view the country that is associated with their account in the account settings.
  //  * Example value: "ES"
  //  * @returns
  //  * Promise<{
  //  * result?: AudiobookType;
  //  * error?: Error;
  //  * }>
  //  */
  // public async get_an_audiobook({
  //   id,
  //   market,
  // }: {
  //   id: string;
  //   market?: string;
  // }): Promise<{ result?: AudiobookType; error?: Error }> {
  //   let url = `${this.api_url}${id}`;
  //   if (market) url += `?market=${market}`;

  //   return await get_req(
  //     url,
  //     this.info.client_access_token,
  //     Audiobook,
  //     this.info
  //   );
  // }

  // /**
  //  * Get Several Audiobooks - https://developer.spotify.com/documentation/web-api/reference/get-multiple-audiobooks
  //  * Get Spotify catalog information for several audiobooks identified by their Spotify IDs.
  //  * Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.
  //  * @param ids
  //  * A comma-separated list of the Spotify IDs. For example: ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ. Maximum: 50 IDs.
  //  * Example value: "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe"
  //  * @param market
  //  * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.
  //  * If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.
  //  * Note: If neither market or user country are provided, the content is considered unavailable for the client.
  //  * Users can view the country that is associated with their account in the account settings.
  //  * Example value: "ES"
  //  * @returns
  //  * Promise<{
  //  * result?: SeveralAudiobookType;
  //  * error?: Error;
  //  * }>
  //  */
  // public async get_several_audiobooks({
  //   ids,
  //   market,
  // }: {
  //   ids: string[];
  //   market?: string;
  // }): Promise<{ result?: SeveralAudiobookType; error?: Error }> {
  //   let url = `${this.api_url}?ids=${ids.join(",")}`;
  //   if (market) url += `&market=${market}`;

  //   return await get_req(
  //     url,
  //     this.info.client_access_token,
  //     SeveralAudiobooks,
  //     this.info
  //   );
  // }

  // /**
  //  * Get Audiobook Chapters - https://developer.spotify.com/documentation/web-api/reference/get-audiobook-chapters
  //  * Get Spotify catalog information about an audiobook's chapters.
  //  * Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.
  //  * @param ids
  //  * A comma-separated list of the Spotify IDs. For example: ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ. Maximum: 50 IDs.
  //  * Example value: "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe"
  //  * @param market
  //  * An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.
  //  * If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter.
  //  * Note: If neither market or user country are provided, the content is considered unavailable for the client.
  //  * Users can view the country that is associated with their account in the account settings.
  //  * Example value: "ES"
  //  * @param limit
  //  * The maximum number of items to return.
  //  * Example value: 10
  //  * Default value: 20
  //  * Range: 0 - 50
  //  * @param offset
  //  * The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.
  //  * Example value: 5
  //  * Default value: 0
  //  * @returns
  //  * Promise<{
  //  * result?: ChaptersType;
  //  * error?: Error;
  //  * }>
  //  */
  // public async get_audiobook_chapters({
  //   id,
  //   market,
  //   limit = 20,
  //   offset = 0,
  // }: {
  //   id: string;
  //   market?: string;
  //   limit?: number;
  //   offset?: number;
  // }): Promise<{ result?: ChaptersType; error?: Error }> {
  //   let url = `${this.api_url}${id}/chapters?limit=${limit}&offset=${offset}`;
  //   if (market) url += `&market=${market}`;

  //   return await get_req(
  //     url,
  //     this.info.client_access_token,
  //     chapters,
  //     this.info
  //   );
  // }

  // /**
  //  * Get User's Saved Audiobooks - https://developer.spotify.com/documentation/web-api/reference/get-users-saved-audiobooks
  //  * Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.
  //  * @param limit
  //  * The maximum number of items to return.
  //  * Example value: 10
  //  * Default value: 20
  //  * Range: 0 - 50
  //  * @param offset
  //  * The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.
  //  * Example value: 5
  //  * Default value: 0
  //  * @scopes Authorization scopes
  //  * - user-library-read
  //  * @returns
  //  * Promise<{
  //  * result?: SeveralSimplifiedAudiobooksType;
  //  * error?: Error;
  //  * }>
  //  */
  // public async get_users_saved_audiobooks({
  //   limit = 20,
  //   offset = 0,
  // }: {
  //   limit?: number;
  //   offset?: number;
  // }): Promise<{ result?: SeveralSimplifiedAudiobooksType; error?: Error }> {
  //   if (!this.info.user_access_token || this.info.user_access_token === "")
  //     throw new Error("This endpoint requires a user access token");

  //   let url = `${this.info.api_url}/me/audiobooks?limit=${limit}&offset=${offset}`;
  //   return await get_req(
  //     url,
  //     this.info.user_access_token,
  //     SeveralSimplifiedAudiobooks,
  //     this.info
  //   );
  // }

  // /**
  //  * Save Audiobooks for Current User - https://developer.spotify.com/documentation/web-api/reference/save-audiobooks-user
  //  * Save one or more audiobooks to the current Spotify user's library.
  //  * @param ids
  //  * A comma-separated list of the Spotify IDs. For example: ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ. Maximum: 50 IDs.
  //  * Example value: "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe"
  //  * @scopes Authorization scopes
  //  * - user-library-modify
  //  * @returns
  //  * Promise<{
  //  * result?: string;
  //  * error?: Error;
  //  * }>
  //  */
  // public async save_audiobooks_for_current_user(
  //   ids: string[]
  // ): Promise<{ result?: string; error?: Error }> {
  //   if (!this.info.user_access_token || this.info.user_access_token === "")
  //     throw new Error("This endpoint requires a user access token");

  //   let url = `${this.info.api_url}/me/audiobooks?ids=${ids.join(",")}`;
  //   return await put_req(url, this.info.user_access_token, null, this.info);
  // }

  // /**
  //  * Remove User's Saved Audiobooks - https://developer.spotify.com/documentation/web-api/reference/remove-audiobooks-user
  //  * Remove one or more audiobooks from the Spotify user's library.
  //  * @param ids
  //  * A comma-separated list of the Spotify IDs. For example: ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ. Maximum: 50 IDs.
  //  * Example value: "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe"
  //  * @scopes Authorization scopes
  //  * - user-library-modify
  //  * @returns
  //  * Promise<{
  //  * result?: string;
  //  * error?: Error;
  //  * }>
  //  */
  // public async remove_users_saved_audiobooks(
  //   ids: string[]
  // ): Promise<{ result?: string; error?: Error }> {
  //   if (!this.info.user_access_token || this.info.user_access_token === "")
  //     throw new Error("This endpoint requires a user access token");

  //   let url = `${this.info.api_url}/me/audiobooks?ids=${ids.join(",")}`;
  //   return await delete_req(url, this.info.user_access_token, this.info);
  // }

  // /**
  //  * Check User's Saved Audiobooks - https://developer.spotify.com/documentation/web-api/reference/check-users-saved-audiobooks
  //  * Check if one or more audiobooks are already saved in the current Spotify user's library.
  //  * @param ids
  //  * A comma-separated list of the Spotify IDs. For example: ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ. Maximum: 50 IDs.
  //  * Example value: "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe"
  //  * @scopes Authorization scopes
  //  * - user-library-read
  //  * @returns
  //  * Promise<{
  //  * result?: boolean[];
  //  * error?: Error;
  //  * }>
  //  */
  // public async check_users_saved_audiobooks(
  //   ids: string[]
  // ): Promise<{ result?: boolean[]; error?: Error }> {
  //   if (!this.info.user_access_token || this.info.user_access_token === "")
  //     throw new Error("This endpoint requires a user access token");

  //   let url = `${this.info.api_url}/me/audiobooks/contains?ids=${ids.join(
  //     ","
  //   )}`;
  //   return await get_req(
  //     url,
  //     this.info.user_access_token,
  //     z.array(z.boolean()),
  //     this.info
  //   );
  // }
}

export { Audiobooks };
