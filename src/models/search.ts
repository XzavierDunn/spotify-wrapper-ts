import { z } from "zod";
import { FullTracks } from "./tracks";
import { FullArtists } from "./artists";
import { SeveralSimplifiedAlbums } from "./albums-simplified";
import { SeveralSimplifiedPlaylists } from "./playlists-simplified";
import { SeveralSimplifiedShows } from "./shows-simplified";
import { SeveralSimplifiedEpisode } from "./episodes-simplified";
import { SeveralSimplifiedAudiobooks } from "./audiobooks-simplified";

const SearchObject = z.object({
  tracks: FullTracks,
  artists: FullArtists,
  albums: SeveralSimplifiedAlbums,
  playlists: SeveralSimplifiedPlaylists,
  shows: SeveralSimplifiedShows, // TODO: API is returning an array of nulls
  episodes: SeveralSimplifiedEpisode,
  audiobooks: SeveralSimplifiedAudiobooks,
});

type SearchObjectType = z.infer<typeof SearchObject>;

export { SearchObject, SearchObjectType };
