[spotify-wrapper-ts](../README.md) / [Exports](../modules.md) / [endpoints/artists](../modules/endpoints_artists.md) / Artists

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
| `info` | [`InfoType`](../modules/models_client.md#infotype) |

#### Defined in

[src/endpoints/artists.ts:19](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/artists.ts#L19)

## Properties

### api\_url

• `Private` **api\_url**: `string`

#### Defined in

[src/endpoints/artists.ts:17](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/artists.ts#L17)

___

### info

• `Private` **info**: [`InfoType`](../modules/models_client.md#infotype)

#### Defined in

[src/endpoints/artists.ts:16](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/artists.ts#L16)

## Methods

### get\_artist

▸ **get_artist**(`id`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `external_urls`: { spotify: string; } = ExternalUrls; `followers`: { href: string \| null; total: number; } = Followers; `genres`: `string`[] ; `href`: `string` ; `id`: `string` ; `images`: { url: string \| null; height: number \| null; width: number \| null; }[] ; `name`: `string` ; `popularity`: `number` ; `type`: `string` ; `uri`: `string`  }  }\>

Get Artist - https://developer.spotify.com/documentation/web-api/reference/get-an-artist
Get Spotify catalog information for a single artist identified by their unique Spotify ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The Spotify ID of the artist Example value: "0TnOYISbd1XYRBk9myaseg" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `external_urls`: { spotify: string; } = ExternalUrls; `followers`: { href: string \| null; total: number; } = Followers; `genres`: `string`[] ; `href`: `string` ; `id`: `string` ; `images`: { url: string \| null; height: number \| null; width: number \| null; }[] ; `name`: `string` ; `popularity`: `number` ; `type`: `string` ; `uri`: `string`  }  }\>

Promise<{ result?: ArtistType; error?: CustomError }>

#### Defined in

[src/endpoints/artists.ts:33](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/artists.ts#L33)

___

### get\_artists\_albums

▸ **get_artists_albums**(`id`, `optional?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `href?`: `string` ; `items?`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; album\_type: string; total\_tracks: number; images: { url: string \| null; height: number \| null; width: number \| null; }[]; ... 10 more ...; album\_group?: string \| undefined; }[] ; `limit?`: `number` ; `next?`: ``null`` \| `string` ; `offset?`: `number` ; `previous?`: ``null`` \| `string` ; `total?`: `number`  }  }\>

Get Artist Albums - https://developer.spotify.com/documentation/web-api/reference/get-an-artists-albums
Get Spotify catalog information about an artist's albums.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The Spotify ID of the artist Example value: "0TnOYISbd1XYRBk9myaseg" |
| `optional?` | { `limit?`: `number` ; `market?`: `string` ; `offset?`: `number`  } & { `include_groups?`: `string`  } | - |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `href?`: `string` ; `items?`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; album\_type: string; total\_tracks: number; images: { url: string \| null; height: number \| null; width: number \| null; }[]; ... 10 more ...; album\_group?: string \| undefined; }[] ; `limit?`: `number` ; `next?`: ``null`` \| `string` ; `offset?`: `number` ; `previous?`: ``null`` \| `string` ; `total?`: `number`  }  }\>

Promise<{ result?: SeveralSimplifiedAlbumsType; error?: CustomError }>

#### Defined in

[src/endpoints/artists.ts:94](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/artists.ts#L94)

___

### get\_artists\_related\_artists

▸ **get_artists_related_artists**(`id`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `artists`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { url: string \| null; height: number \| null; width: number \| null; }[]; genres: string[]; popularity: number; followers: { ...; }; }[]  }  }\>

Get Artist's Related Artists - https://developer.spotify.com/documentation/web-api/reference/get-an-artists-related-artists
Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The Spotify ID of the artist Example value: "0TnOYISbd1XYRBk9myaseg" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `artists`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { url: string \| null; height: number \| null; width: number \| null; }[]; genres: string[]; popularity: number; followers: { ...; }; }[]  }  }\>

Promise<{ result?: SeveralArtistsType; error?: CustomError }>

#### Defined in

[src/endpoints/artists.ts:151](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/artists.ts#L151)

___

### get\_artists\_top\_tracks

▸ **get_artists_top_tracks**(`id`, `market`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `tracks`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; external\_ids: { isrc?: string \| undefined; ean?: string \| undefined; upc?: string \| undefined; }; ... 12 more ...; restrictions?: { ...; } \| undefined; }[]  }  }\>

Get Artist's Top Tracks - https://developer.spotify.com/documentation/web-api/reference/get-an-artists-top-tracks
Get Spotify catalog information about an artist's top tracks by country.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The Spotify ID of the artist Example value: "0TnOYISbd1XYRBk9myaseg" |
| `market` | `string` | An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. Note: If neither market or user country are provided, the content is considered unavailable for the client. Users can view the country that is associated with their account in the account settings. Example value: "ES" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `tracks`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; external\_ids: { isrc?: string \| undefined; ean?: string \| undefined; upc?: string \| undefined; }; ... 12 more ...; restrictions?: { ...; } \| undefined; }[]  }  }\>

Promise<{ result?: MultipleTracksType; error?: CustomError }>

#### Defined in

[src/endpoints/artists.ts:129](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/artists.ts#L129)

___

### get\_several\_artists

▸ **get_several_artists**(`ids`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `artists`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { url: string \| null; height: number \| null; width: number \| null; }[]; genres: string[]; popularity: number; followers: { ...; }; }[]  }  }\>

Get Several Artists - https://developer.spotify.com/documentation/web-api/reference/get-multiple-artists
Get Spotify catalog information for several artists based on their Spotify IDs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `string`[] |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `artists`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { url: string \| null; height: number \| null; width: number \| null; }[]; genres: string[]; popularity: number; followers: { ...; }; }[]  }  }\>

Promise<{ result?: SeveralArtistsType; error?: CustomError }>

#### Defined in

[src/endpoints/artists.ts:52](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/artists.ts#L52)
