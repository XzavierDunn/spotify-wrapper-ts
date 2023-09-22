[spotify-wrapper-ts](../README.md) / [Exports](../modules.md) / [endpoints/search](../modules/endpoints_search.md) / Search

# Class: Search

[endpoints/search](../modules/endpoints_search.md).Search

## Table of contents

### Constructors

- [constructor](endpoints_search.Search.md#constructor)

### Properties

- [api\_url](endpoints_search.Search.md#api_url)
- [info](endpoints_search.Search.md#info)

### Methods

- [search\_for\_item](endpoints_search.Search.md#search_for_item)

## Constructors

### constructor

• **new Search**(`info`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`InfoType`](../modules/models_client.md#infotype) |

#### Defined in

[src/endpoints/search.ts:9](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/search.ts#L9)

## Properties

### api\_url

• `Private` **api\_url**: `string`

#### Defined in

[src/endpoints/search.ts:7](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/search.ts#L7)

___

### info

• `Private` **info**: [`InfoType`](../modules/models_client.md#infotype)

#### Defined in

[src/endpoints/search.ts:6](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/search.ts#L6)

## Methods

### search\_for\_item

▸ **search_for_item**(`q`, `type`, `optional?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `albums`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } = SeveralSimplifiedAlbums; `artists`: { href: string; total: number; limit: number; next: string \| null; offset: number; previous: string \| null; items: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; ... 4 more ...; followers: { ...; }; }[]; } = FullArtists; `audiobooks`: { href: string; total: number; limit: number; offset: number; items: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { url: string \| null; height: number \| null; width: number \| null; }[]; ... 11 more ...; available\_markets?: string[] \| undefined; }[]... = SeveralSimplifiedAudiobooks; `episodes`: { href: string; total: number; limit: number; next: string \| null; offset: number; previous: string \| null; items: { type: "episode"; href: string; external\_urls: { spotify: string; }; name: string; ... 15 more ...; restrictions?: { ...; } \| undefined; }[]; } = SeveralSimplifiedEpisode; `playlists`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } = SeveralSimplifiedPlaylists; `shows`: { href: string; total: number; limit: number; next: string \| null; offset: number; previous: string \| null; items?: { type: "show"; href: string; external\_urls: { spotify: string; }; name: string; ... 12 more ...; total\_episodes: number; }[] \| null \| undefined; } = SeveralSimplifiedShows; `tracks`: { href: string; total: number; limit: number; next: string \| null; offset: number; previous: string \| null; items: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; ... 14 more ...; restrictions?: { ...; } \| undefined; }[]; } = FullTracks }  }\>

Search for Item - https://developer.spotify.com/documentation/web-api/reference/search
Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks that match a keyword string.
Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | `string` | Your search query. You can narrow down your search using field filters. The available filters are album, artist, track, year, upc, tag:hipster, tag:new, isrc, and genre. Each field filter only applies to certain result types. The artist and year filters can be used while searching albums, artists and tracks. You can filter on a single year or a range (e.g. 1955-1960). The album filter can be used while searching albums and tracks. The genre filter can be used while searching artists and tracks. The isrc and track filters can be used while searching tracks. The upc, tag:new and tag:hipster filters can only be used while searching albums. The tag:new filter will return albums released in the past two weeks and tag:hipster can be used to return only albums with the lowest 10% popularity. Example value: "remaster%20track:Doxy%20artist:Miles%20Davis" |
| `type` | `string`[] | A comma-separated list of item types to search across. Search results include hits from all the specified item types. For example: q=abacab&type=album,track returns both albums and tracks matching "abacab". Allowed values: "album", "artist", "playlist", "track", "show", "episode", "audiobook" |
| `optional?` | { `limit?`: `number` ; `market?`: `string` ; `offset?`: `number`  } & { `include_external?`: `string`  } | - |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `albums`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } = SeveralSimplifiedAlbums; `artists`: { href: string; total: number; limit: number; next: string \| null; offset: number; previous: string \| null; items: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; ... 4 more ...; followers: { ...; }; }[]; } = FullArtists; `audiobooks`: { href: string; total: number; limit: number; offset: number; items: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { url: string \| null; height: number \| null; width: number \| null; }[]; ... 11 more ...; available\_markets?: string[] \| undefined; }[]... = SeveralSimplifiedAudiobooks; `episodes`: { href: string; total: number; limit: number; next: string \| null; offset: number; previous: string \| null; items: { type: "episode"; href: string; external\_urls: { spotify: string; }; name: string; ... 15 more ...; restrictions?: { ...; } \| undefined; }[]; } = SeveralSimplifiedEpisode; `playlists`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } = SeveralSimplifiedPlaylists; `shows`: { href: string; total: number; limit: number; next: string \| null; offset: number; previous: string \| null; items?: { type: "show"; href: string; external\_urls: { spotify: string; }; name: string; ... 12 more ...; total\_episodes: number; }[] \| null \| undefined; } = SeveralSimplifiedShows; `tracks`: { href: string; total: number; limit: number; next: string \| null; offset: number; previous: string \| null; items: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; ... 14 more ...; restrictions?: { ...; } \| undefined; }[]; } = FullTracks }  }\>

Promise<{
result?: SearchObjectType;
error?: CustomError;
}>

#### Defined in

[src/endpoints/search.ts:54](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/search.ts#L54)
