import { InfoType } from "../models/client";
import {
  CategoryItem,
  CategoryItemType,
  SeveralCategories,
  SeveralCategoriesType,
} from "../models/categories";
import { CustomError } from "../models/client";
import { OptionalType, handle_optional } from "../utils/helpers";

class Categories {
  private info: InfoType;
  private api_url: string;

  constructor(info: InfoType) {
    this.info = info;
    this.api_url = this.info.api_url + "/browse/categories/";
  }

  /**
   * Get Several Browse Categories - https://developer.spotify.com/documentation/web-api/reference/get-categories
   * Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
   * @param market
   * A country: an ISO 3166-1 alpha-2 country code. Provide this parameter if you want to narrow the list of returned categories to those relevant to a particular country. If omitted, the returned items will be globally relevant.
   * Example value: "SE"
   * @param locale
   * The desired language, consisting of an ISO 639-1 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)". Provide this parameter if you want the category metadata returned in a particular language.
   * Note: if locale is not supplied, or if the specified language is not available, all strings will be returned in the Spotify default language (American English). The locale parameter, combined with the country parameter, may give odd results if not carefully matched. For example country=SE&locale=de_DE will return a list of categories relevant to Sweden but as German language strings.
   * Example value: "sv_SE"
   * @param limit
   * The maximum number of categories to return. Default: 20. Minimum: 1. Maximum: 50.
   * Example value: "10"
   * Default value: 20
   * Range: 0 - 50
   * @param offset
   * The index of the first item to return. Default: 0 (the first object). Use with limit to get the next set of categories.
   * Example value: "5"
   * Default value: 0
   * @returns
   * Promise<{
   * result?: SeveralCategoriesType;
   * error?: CustomError;
   * }>
   */
  public async get_several_browse_categories(
    optional?: OptionalType & {
      locale?: string;
    }
  ): Promise<{ result?: SeveralCategoriesType; error?: CustomError }> {
    const locale = optional?.locale;
    const { limit, offset, market } = handle_optional(optional);

    let url = `${this.api_url}?limit=${limit}&offset=${offset}`;
    if (market) url += `&country=${market}`;
    if (locale) url += `&locale=${locale}`;

    return await this.info.submit_request<SeveralCategoriesType>({
      url,
      method: "GET",
      object: SeveralCategories,
    });
  }

  /**
   * Get a Single Browse Category - https://developer.spotify.com/documentation/web-api/reference/get-a-category
   * Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
   * @param category_id
   * The Spotify category ID for the category.
   * Example value: "dinner"
   * @param country
   * A country: an ISO 3166-1 alpha-2 country code. Provide this parameter if you want to narrow the list of returned categories to those relevant to a particular country. If omitted, the returned items will be globally relevant.
   * Example value: "SE"
   * @param locale
   * The desired language, consisting of an ISO 639-1 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)". Provide this parameter if you want the category metadata returned in a particular language.
   * Note: if locale is not supplied, or if the specified language is not available, all strings will be returned in the Spotify default language (American English). The locale parameter, combined with the country parameter, may give odd results if not carefully matched. For example country=SE&locale=de_DE will return a list of categories relevant to Sweden but as German language strings.
   * Example value: "sv_SE"
   * @returns
   * Promise<{
   * result?: CategoryItemType;
   * error?: CustomError;
   * }>
   */
  public async get_single_browse_category(
    category_id: string,
    country?: string,
    locale?: string
  ): Promise<{ result?: CategoryItemType; error?: CustomError }> {
    let url = `${this.api_url}${category_id}?`;
    if (country) url += `&country=${country}`;
    if (locale) url += `&locale=${locale}`;

    return await this.info.submit_request<CategoryItemType>({
      url,
      method: "GET",
      object: CategoryItem,
    });
  }
}

export { Categories };
