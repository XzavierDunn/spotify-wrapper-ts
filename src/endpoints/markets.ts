import { InfoType } from "../client/client";
import { MarketsObject, MarketsType } from "../models/markets";
import { get } from "../utils/utils";

class Markets {
  private info: InfoType;
  private api_url: string;

  constructor(info: InfoType) {
    this.info = info;
    this.api_url = this.info.api_url + "/markets/";
  }

  /**
   * Get Available Markets - https://developer.spotify.com/documentation/web-api/reference/get-available-markets
   * Get the list of markets where Spotify is available.
   * @returns
   * Promise<{
   * result?: MarketsType;
   * error?: Error;
   * }>
   */
  async get_available_markets(): Promise<{
    result?: MarketsType;
    error?: Error;
  }> {
    return await get(this.api_url, MarketsObject, this.info);
  }
}

export { Markets };
