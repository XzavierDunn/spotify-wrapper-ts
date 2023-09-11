import { Artists } from "../endpoints/artists";
import { Albums } from "../endpoints/albums";
import { Audiobooks } from "../endpoints/audiobooks";
import { Categories } from "../endpoints/categories";
import { Chapters } from "../endpoints/chapter";
import { Episodes } from "../endpoints/episodes";
import { Genres } from "../endpoints/genres";
import { Markets } from "../endpoints/markets";
import { Search } from "../endpoints/search";
import { Player } from "../endpoints/player";
import {
  get_access_token,
  refresh_user_access_token,
} from "../utils/authentication";
import { writeFileSync } from "fs";
import { Playlists } from "../endpoints/playlists";
import { Shows } from "../endpoints/shows";
import { Tracks } from "../endpoints/tracks";
import { Users } from "../endpoints/users";
import { FetchDataType, handle_request } from "../utils/requests";
import {
  ClientInfoType,
  CredentialsType,
  CustomError,
  InfoType,
} from "../models/client";
import { check_user_token, scope_check } from "../utils/helpers";

class Client {
  private credentials: CredentialsType;
  private UserInfo: ClientInfoType = {};

  private info: InfoType = {
    api_url: "https://api.spotify.com/v1",
    client_access_token: "",
    user_access_token: "",
    submit_request: this.submit_request.bind(this),
    submit_user_scoped_request: this.submit_user_scoped_request.bind(this),
  };

  public users: Users;
  public shows: Shows;
  public tracks: Tracks;
  public albums: Albums;
  public genres: Genres;
  public search: Search;
  public player: Player;
  public market: Markets;
  public artists: Artists;
  public chapters: Chapters;
  public episodes: Episodes;
  public playlists: Playlists;
  public categories: Categories;
  public audiobooks: Audiobooks;

  constructor(clientInfo: ClientInfoType, credentials: CredentialsType) {
    this.credentials = credentials;
    this.info.client_access_token = clientInfo.access_token!;

    this.users = new Users(this.info);
    this.shows = new Shows(this.info);
    this.tracks = new Tracks(this.info);
    this.albums = new Albums(this.info);
    this.genres = new Genres(this.info);
    this.search = new Search(this.info);
    this.player = new Player(this.info);
    this.market = new Markets(this.info);
    this.artists = new Artists(this.info);
    this.chapters = new Chapters(this.info);
    this.episodes = new Episodes(this.info);
    this.playlists = new Playlists(this.info);
    this.categories = new Categories(this.info);
    this.audiobooks = new Audiobooks(this.info);
  }

  static async create_client(credentials: CredentialsType) {
    let clientInfo = await get_access_token(credentials);
    return new Client(clientInfo, credentials);
  }

  async submit_request<T>(
    input: FetchDataType
  ): Promise<{ result?: T; error?: CustomError }> {
    let { status_code, result } = await handle_request<T>(input);

    if (status_code.toString()[0] != "2") {
      return this.error_handler(status_code, result as { error: any }, input);
    }

    if (typeof result === "string") {
      return { error: { status_code, message: result } };
    } else {
      return { result };
    }
  }

  async submit_user_scoped_request<T>(input: FetchDataType) {
    const check_token = check_user_token(this.info.user_access_token);
    if (check_token.error) return check_token;

    input.user = true;
    input.token = this.info.user_access_token;

    let result = await this.info.submit_request<T>(input);

    if (scope_check(result.error)) {
      result.error!.scopes = input.scopes;
    }

    return result;
  }

  async error_handler<T>(
    status_code: number,
    input: { error: any }, // TODO: confirm if all returned errors match {error: {status: number, message: string}}
    fetchData: FetchDataType
  ): Promise<{ result?: T; error?: CustomError }> {
    console.log("HIT ERROR_HANDLER");
    console.log(input);

    let refresh = false;
    let scope_issue = false;

    switch (status_code) {
      case 400:
        if (input.error.message === "invalid id") return input;
      case 401:
        refresh = true;
        break;
      case 403:
        scope_issue = true;
        break;
    }

    if (refresh) {
      if (fetchData.user) {
        fetchData.token = await this.refresh_user_token();
        return this.submit_request(fetchData);
      } else {
        fetchData.token = await this.refresh_token();
        return this.submit_request(fetchData);
      }
    }

    if (scope_issue) {
      return { error: { status_code, message: input.error.message } };
    }

    throw new Error("NEW ERROR");
  }

  async refresh_token(): Promise<string> {
    console.log("Attempting to refresh token");
    let data = await get_access_token(this.credentials, true);
    this.info.client_access_token = data.access_token!;
    return data.access_token!;
  }

  async refresh_user_token(): Promise<string> {
    console.log("Attempting to refresh the user token");
    if (!this.UserInfo.refresh_token)
      throw new Error("Missing user refresh token");

    let data = await refresh_user_access_token(
      this.UserInfo.refresh_token,
      this.credentials.client_id,
      this.credentials.client_secret
    );

    this.UserInfo = data;
    this.info.user_access_token = data.access_token!;

    writeFileSync("./user-credentials.json", JSON.stringify(data));

    return data.access_token!;
  }

  add_user_info(userInfo: ClientInfoType) {
    this.UserInfo = userInfo;
    this.info.user_access_token = userInfo.access_token!;
  }
}

export { Client };
