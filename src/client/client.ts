import { z } from "zod";
import config from "../../config.json";
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

let Info = z.object({
  api_url: z.string(),
  client_access_token: z.string(),
  user_access_token: z.string(),
  refresh_token_function: z.function(),
  refresh_user_token_function: z.function(),
});

type CredentialsType = z.infer<typeof Credentials>;
type ClientInfoType = z.infer<typeof ClientInfo>;
type InfoType = z.infer<typeof Info>;

class Client {
  private credentials: CredentialsType;
  private ClientInfo: ClientInfoType;
  private UserInfo: ClientInfoType = {};

  private info: InfoType = {
    api_url: "https://api.spotify.com/v1",
    client_access_token: "",
    user_access_token: "",
    refresh_token_function: this.refresh_token.bind(this),
    refresh_user_token_function: this.refresh_user_token.bind(this),
  };

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
    this.ClientInfo = clientInfo;
    this.info.client_access_token = clientInfo.access_token!;

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

  async refresh_token() {
    console.log("Attempting to refresh token");
    let data = await get_access_token(this.credentials, true);
    this.ClientInfo = data;
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
