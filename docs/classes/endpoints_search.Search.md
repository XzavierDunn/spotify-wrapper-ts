[spotify_wrapper](../README.md) / [Exports](../modules.md) / [endpoints/search](../modules/endpoints_search.md) / Search

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
| `info` | `Object` |
| `info.api_url` | `string` |
| `info.client_access_token` | `string` |
| `info.refresh_token_function` | (...`args`: `unknown`[]) => `unknown` |
| `info.refresh_user_token_function` | (...`args`: `unknown`[]) => `unknown` |
| `info.user_access_token` | `string` |

#### Defined in

[src/endpoints/search.ts:9](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/search.ts#L9)

## Properties

### api\_url

• `Private` **api\_url**: `string`

#### Defined in

[src/endpoints/search.ts:7](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/search.ts#L7)

___

### info

• `Private` **info**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `api_url` | `string` |
| `client_access_token` | `string` |
| `refresh_token_function` | (...`args`: `unknown`[]) => `unknown` |
| `refresh_user_token_function` | (...`args`: `unknown`[]) => `unknown` |
| `user_access_token` | `string` |

#### Defined in

[src/endpoints/search.ts:6](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/search.ts#L6)

## Methods

### search\_for\_item

▸ **search_for_item**(`q`, `type`, `market?`, `include_external?`, `limit?`, `offset?`): `Promise`<{ `error?`: `Error` ; `result?`: { `albums?`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } ; `artists?`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } ; `audiobooks?`: { href: string; total: number; limit: number; offset: number; items: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { height: number \| null; width: number \| null; url: string \| null; }[]; ... 11 more ...; available\_markets?: string[] \| undefined; }[]... ; `episodes?`: { href: string; total: number; limit: number; next: string \| null; offset: number; previous: string \| null; items: { type: "episode"; href: string; external\_urls: { spotify: string; }; name: string; ... 15 more ...; restrictions?: { ...; } \| undefined; }[]; } ; `playlists?`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } ; `shows?`: { href: string; total: number; limit: number; next: string \| null; offset: number; previous: string \| null; items?: { type: "show"; href: string; external\_urls: { spotify: string; }; name: string; ... 12 more ...; total\_episodes: number; }[] \| null \| undefined; } ; `tracks?`: { href: string; total: number; limit: number; next: string \| null; offset: number; previous: string \| null; items: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; ... 14 more ...; restrictions?: { ...; } \| undefined; }[]; }  }  }\>

Search for Item - https://developer.spotify.com/documentation/web-api/reference/search
Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks that match a keyword string.
Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `q` | `string` | `undefined` | Your search query. You can narrow down your search using field filters. The available filters are album, artist, track, year, upc, tag:hipster, tag:new, isrc, and genre. Each field filter only applies to certain result types. The artist and year filters can be used while searching albums, artists and tracks. You can filter on a single year or a range (e.g. 1955-1960). The album filter can be used while searching albums and tracks. The genre filter can be used while searching artists and tracks. The isrc and track filters can be used while searching tracks. The upc, tag:new and tag:hipster filters can only be used while searching albums. The tag:new filter will return albums released in the past two weeks and tag:hipster can be used to return only albums with the lowest 10% popularity. Example value: "remaster%20track:Doxy%20artist:Miles%20Davis" |
| `type` | `string`[] | `undefined` | A comma-separated list of item types to search across. Search results include hits from all the specified item types. For example: q=abacab&type=album,track returns both albums and tracks matching "abacab". Allowed values: "album", "artist", "playlist", "track", "show", "episode", "audiobook" |
| `market?` | `string` | `undefined` | An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. Note: If neither market or user country are provided, the content is considered unavailable for the client. Users can view the country that is associated with their account in the account settings. Example value: "ES" |
| `include_external?` | `string` | `undefined` | If include_external=audio is specified it signals that the client can play externally hosted audio content, and marks the content as playable in the response. By default externally hosted audio content is marked as unplayable in the response. Allowed values: "audio" |
| `limit` | `number` | `20` | The maximum number of items to return. Example value: 10 Default value: 20 Range: 0 - 50 |
| `offset` | `number` | `0` | The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items. Example value: 5 Default value: 0 |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `albums?`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } ; `artists?`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } ; `audiobooks?`: { href: string; total: number; limit: number; offset: number; items: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { height: number \| null; width: number \| null; url: string \| null; }[]; ... 11 more ...; available\_markets?: string[] \| undefined; }[]... ; `episodes?`: { href: string; total: number; limit: number; next: string \| null; offset: number; previous: string \| null; items: { type: "episode"; href: string; external\_urls: { spotify: string; }; name: string; ... 15 more ...; restrictions?: { ...; } \| undefined; }[]; } ; `playlists?`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } ; `shows?`: { href: string; total: number; limit: number; next: string \| null; offset: number; previous: string \| null; items?: { type: "show"; href: string; external\_urls: { spotify: string; }; name: string; ... 12 more ...; total\_episodes: number; }[] \| null \| undefined; } ; `tracks?`: { href: string; total: number; limit: number; next: string \| null; offset: number; previous: string \| null; items: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; ... 14 more ...; restrictions?: { ...; } \| undefined; }[]; }  }  }\>

Promise<{
result?: SearchObjectType;
error?: Error;
}>

#### Defined in

[src/endpoints/search.ts:54](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/search.ts#L54)
