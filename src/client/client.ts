import { z } from "zod";
import { Artists } from "../endpoints/artists";
import { Albums } from "../endpoints/albums";
import { get_access_token } from "../utils/utils";
import { Audiobooks } from "../endpoints/audiobooks";
import { Categories } from "../endpoints/categories";
import { Chapters } from "../endpoints/chapter";
import { Episodes } from "../endpoints/episodes";
import { Genres } from "../endpoints/genres";
import { Markets } from "../endpoints/markets";
import { Search } from "../endpoints/search";
import { Player } from "../endpoints/player";

const Credentials = z.object({
  client_id: z.string(),
  client_secret: z.string(),
  redirect_uri: z.string(),
});

let ClientInfo = z.object({
  access_token: z.string(),
  token_type: z.string(),
  expires_in: z.number(),
});

let Info = z.object({
  api_url: z.string(),
  clientInfo: ClientInfo,
  refresh_token: z.function(),
  user_access_token: z.string().optional(),
});

type CredentialsType = z.infer<typeof Credentials>;
type ClientInfoType = z.infer<typeof ClientInfo>;
type InfoType = z.infer<typeof Info>;

class Client {
  private credentials: CredentialsType;
  private info: InfoType = {
    api_url: "https://api.spotify.com/v1",
    clientInfo: { access_token: "", token_type: "", expires_in: 0 },
    refresh_token: async () => {
      let data = await get_access_token(this.credentials, true);
      this.info.clientInfo = data;
    },
  };

  public albums: Albums;
  public genres: Genres;
  public search: Search;
  public player: Player;
  public market: Markets;
  public artists: Artists;
  public chapters: Chapters;
  public episodes: Episodes;
  public categories: Categories;
  public audiobooks: Audiobooks;

  constructor(clientInfo: ClientInfoType, credentials: CredentialsType) {
    this.credentials = credentials;
    this.info.clientInfo = clientInfo;

    this.albums = new Albums(this.info);
    this.genres = new Genres(this.info);
    this.search = new Search(this.info);
    this.player = new Player(this.info);
    this.market = new Markets(this.info);
    this.artists = new Artists(this.info);
    this.chapters = new Chapters(this.info);
    this.episodes = new Episodes(this.info);
    this.categories = new Categories(this.info);
    this.audiobooks = new Audiobooks(this.info);
  }

  static async create_client(credentials: CredentialsType) {
    let clientInfo = await get_access_token(credentials);
    return new Client(clientInfo, credentials);
  }

  add_user_access_token(token: string) {
    // TODO: this needs to change?
    this.info.user_access_token = token;
  }
}

export { Client, ClientInfo, ClientInfoType, InfoType, CredentialsType };
