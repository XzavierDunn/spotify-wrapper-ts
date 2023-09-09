[spotify_wrapper](../README.md) / [Exports](../modules.md) / [endpoints/artists](../modules/endpoints_artists.md) / Artists

# Class: Artists

[endpoints/artists](../modules/endpoints_artists.md).Artists

## Table of contents

### Constructors

- [constructor](endpoints_artists.Artists.md#constructor)

### Properties

- [api\_url](endpoints_artists.Artists.md#api_url)
- [info](endpoints_artists.Artists.md#info)

### Methods

- [get\_artist](endpoints_artists.Artists.md#get_artist)
- [get\_artists\_albums](endpoints_artists.Artists.md#get_artists_albums)
- [get\_artists\_related\_artists](endpoints_artists.Artists.md#get_artists_related_artists)
- [get\_artists\_top\_tracks](endpoints_artists.Artists.md#get_artists_top_tracks)
- [get\_several\_artists](endpoints_artists.Artists.md#get_several_artists)

## Constructors

### constructor

• **new Artists**(`info`)

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

[src/endpoints/artists.ts:19](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/artists.ts#L19)

## Properties

### api\_url

• `Private` **api\_url**: `string`

#### Defined in

[src/endpoints/artists.ts:17](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/artists.ts#L17)

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

[src/endpoints/artists.ts:16](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/artists.ts#L16)

## Methods

### get\_artist

▸ **get_artist**(`id`): `Promise`<{ `error?`: `Error` ; `result?`: { `external_urls?`: { spotify: string; } ; `followers?`: { href: string \| null; total: number; } ; `genres?`: `string`[] ; `href?`: `string` ; `id?`: `string` ; `images?`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `name?`: `string` ; `popularity?`: `number` ; `type?`: `string` ; `uri?`: `string`  }  }\>

Get Artist - https://developer.spotify.com/documentation/web-api/reference/get-an-artist
Get Spotify catalog information for a single artist identified by their unique Spotify ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The Spotify ID of the artist Example value: "0TnOYISbd1XYRBk9myaseg" |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `external_urls?`: { spotify: string; } ; `followers?`: { href: string \| null; total: number; } ; `genres?`: `string`[] ; `href?`: `string` ; `id?`: `string` ; `images?`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `name?`: `string` ; `popularity?`: `number` ; `type?`: `string` ; `uri?`: `string`  }  }\>

Promise<{
result?: ArtistType;
error?: Error;
}>

#### Defined in

[src/endpoints/artists.ts:36](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/artists.ts#L36)

___

### get\_artists\_albums

▸ **get_artists_albums**(`«destructured»`): `Promise`<{ `error?`: `Error` ; `result?`: { `href?`: `string` ; `items?`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; album\_type: string; total\_tracks: number; images: { height: number \| null; width: number \| null; url: string \| null; }[]; ... 10 more ...; album\_group?: string \| undefined; }[] ; `limit?`: `number` ; `next?`: ``null`` \| `string` ; `offset?`: `number` ; `previous?`: ``null`` \| `string` ; `total?`: `number`  }  }\>

Get Artist Albums - https://developer.spotify.com/documentation/web-api/reference/get-an-artists-albums
Get Spotify catalog information about an artist's albums.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `id` | `string` |
| › `include_groups?` | `string` |
| › `limit?` | `number` |
| › `market?` | `string` |
| › `offset?` | `number` |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `href?`: `string` ; `items?`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; album\_type: string; total\_tracks: number; images: { height: number \| null; width: number \| null; url: string \| null; }[]; ... 10 more ...; album\_group?: string \| undefined; }[] ; `limit?`: `number` ; `next?`: ``null`` \| `string` ; `offset?`: `number` ; `previous?`: ``null`` \| `string` ; `total?`: `number`  }  }\>

Promise<{
result?: AlbumsType;
error?: Error;
}>

#### Defined in

[src/endpoints/artists.ts:107](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/artists.ts#L107)

___

### get\_artists\_related\_artists

▸ **get_artists_related_artists**(`id`): `Promise`<{ `error?`: `Error` ; `result?`: { `artists`: { external\_urls?: { spotify: string; } \| undefined; followers?: { href: string \| null; total: number; } \| undefined; genres?: string[] \| undefined; href?: string \| undefined; id?: string \| undefined; ... 4 more ...; uri?: string \| undefined; }[]  }  }\>

Get Artist's Related Artists - https://developer.spotify.com/documentation/web-api/reference/get-an-artists-related-artists
Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The Spotify ID of the artist Example value: "0TnOYISbd1XYRBk9myaseg" |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `artists`: { external\_urls?: { spotify: string; } \| undefined; followers?: { href: string \| null; total: number; } \| undefined; genres?: string[] \| undefined; href?: string \| undefined; id?: string \| undefined; ... 4 more ...; uri?: string \| undefined; }[]  }  }\>

Promise<{
result?: SeveralArtistsType;
error?: Error;
}>

#### Defined in

[src/endpoints/artists.ts:186](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/artists.ts#L186)

___

### get\_artists\_top\_tracks

▸ **get_artists_top_tracks**(`«destructured»`): `Promise`<{ `error?`: `Error` ; `result?`: { `tracks`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; external\_ids: { isrc?: string \| undefined; ean?: string \| undefined; upc?: string \| undefined; }; ... 12 more ...; restrictions?: { ...; } \| undefined; }[]  }  }\>

Get Artist's Top Tracks - https://developer.spotify.com/documentation/web-api/reference/get-an-artists-top-tracks
Get Spotify catalog information about an artist's top tracks by country.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `id` | `string` |
| › `market` | `string` |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `tracks`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; external\_ids: { isrc?: string \| undefined; ean?: string \| undefined; upc?: string \| undefined; }; ... 12 more ...; restrictions?: { ...; } \| undefined; }[]  }  }\>

Promise<{
result?:  TracksType;
error?: Error;
}>

#### Defined in

[src/endpoints/artists.ts:153](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/artists.ts#L153)

___

### get\_several\_artists

▸ **get_several_artists**(`ids`): `Promise`<{ `error?`: `Error` ; `result?`: { `artists`: { external\_urls?: { spotify: string; } \| undefined; followers?: { href: string \| null; total: number; } \| undefined; genres?: string[] \| undefined; href?: string \| undefined; id?: string \| undefined; ... 4 more ...; uri?: string \| undefined; }[]  }  }\>

Get Several Artists - https://developer.spotify.com/documentation/web-api/reference/get-multiple-artists
Get Spotify catalog information for several artists based on their Spotify IDs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `string`[] |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `artists`: { external\_urls?: { spotify: string; } \| undefined; followers?: { href: string \| null; total: number; } \| undefined; genres?: string[] \| undefined; href?: string \| undefined; id?: string \| undefined; ... 4 more ...; uri?: string \| undefined; }[]  }  }\>

Promise<{
result?: SeveralArtistsType;
error?: Error;
}>

#### Defined in

[src/endpoints/artists.ts:60](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/artists.ts#L60)
