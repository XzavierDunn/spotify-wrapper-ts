import { InfoType } from "../models/client";
import { CustomError } from "../models/client";
import { MarketsObject, MarketsType } from "../models/markets";

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
   * error?: CustomError;
   * }>
   */
  public async get_available_markets(): Promise<{
    result?: MarketsType;
    error?: CustomError;
  }> {
    return await this.info.submit_request<MarketsType>({
      url: this.api_url,
      method: "GET",
      object: MarketsObject,
    });
  }
}

export { Markets };
