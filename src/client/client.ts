import { z } from "zod";
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

const Credentials = z.object({
  client_id: z.string(),
  client_secret: z.string(),
  redirect_uri: z.string(),
});

let ClientInfo = z.object({
  access_token: z.string().optional(),
  token_type: z.string().optional(),
  expires_in: z.number().optional(),
  refresh_token: z.string().optional(),
  scope: z.string().optional(),
});

type InfoType = {
  api_url: string;
  client_access_token: string;
  user_access_token: string;
  error_handler: <T>(
    status_code: number,
    input: string,
    fetchData: FetchDataType
  ) => Promise<{ result?: T; error?: string }>;
  submit_request: <T>(
    input: FetchDataType
  ) => Promise<{ result?: T; error?: string }>;
};

type CredentialsType = z.infer<typeof Credentials>;
type ClientInfoType = z.infer<typeof ClientInfo>;

class Client {
  private credentials: CredentialsType;
  private UserInfo: ClientInfoType = {};

  private info: InfoType = {
    api_url: "https://api.spotify.com/v1",
    client_access_token: "",
    user_access_token: "",
    error_handler: this.error_handler.bind(this),
    submit_request: this.submit_request.bind(this),
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
  ): Promise<{ result?: T; error?: string }> {
    let { status_code, result } = await handle_request<T>(input);

    if (status_code.toString()[0] != "2") {
      return this.error_handler(status_code, result as string, input);
    }

    if (typeof result === "string") {
      return { error: result };
    } else {
      return { result };
    }
  }

  async error_handler<T>(
    status_code: number,
    input: string,
    fetchData: FetchDataType
  ): Promise<{ result?: T; error?: string }> {
    console.log("HIT ERROR_HANDLER");
    console.log(input);

    // handle refreshing client token
    if (status_code === 400) {
      await this.refresh_token();
      console.log(fetchData.token);
      fetchData.token = this.info.client_access_token;
      console.log(fetchData.token);
      return this.submit_request(fetchData);
    }
    // handle refreshing user token
    // return "SCOPE ISSUE if scope issue"

    throw new Error("NEW ERROR");
  }

  async refresh_token() {
    console.log("Attempting to refresh token");
    let data = await get_access_token(this.credentials, true);
    this.info.client_access_token = data.access_token!;
  }

  async refresh_user_token() {
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
  }

  add_user_info(userInfo: ClientInfoType) {
    this.UserInfo = userInfo;
    this.info.user_access_token = userInfo.access_token!;
  }
}

export { Client, ClientInfo, ClientInfoType, InfoType, CredentialsType };
