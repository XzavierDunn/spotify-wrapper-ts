[spotify-wrapper-ts](../README.md) / [Exports](../modules.md) / [endpoints/albums](../modules/endpoints_albums.md) / Albums

# Class: Albums

[endpoints/albums](../modules/endpoints_albums.md).Albums

## Table of contents

### Constructors

- [constructor](endpoints_albums.Albums.md#constructor)

### Properties

- [api\_url](endpoints_albums.Albums.md#api_url)
- [info](endpoints_albums.Albums.md#info)

### Methods

- [check\_users\_saved\_albums](endpoints_albums.Albums.md#check_users_saved_albums)
- [get\_album](endpoints_albums.Albums.md#get_album)
- [get\_album\_tracks](endpoints_albums.Albums.md#get_album_tracks)
- [get\_new\_releases](endpoints_albums.Albums.md#get_new_releases)
- [get\_several\_albums](endpoints_albums.Albums.md#get_several_albums)
- [get\_users\_saved\_albums](endpoints_albums.Albums.md#get_users_saved_albums)
- [remove\_users\_saved\_albums](endpoints_albums.Albums.md#remove_users_saved_albums)
- [save\_albums\_for\_current\_user](endpoints_albums.Albums.md#save_albums_for_current_user)

## Constructors

### constructor

• **new Albums**(`info`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`InfoType`](../modules/models_client.md#infotype) |

#### Defined in

[src/endpoints/albums.ts:21](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/albums.ts#L21)

## Properties

### api\_url

• `Private` **api\_url**: `string`

#### Defined in

[src/endpoints/albums.ts:19](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/albums.ts#L19)

___

### info

• `Private` **info**: [`InfoType`](../modules/models_client.md#infotype)

#### Defined in

[src/endpoints/albums.ts:18](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/albums.ts#L18)

## Methods

### check\_users\_saved\_albums

▸ **check_users_saved_albums**(`ids`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `boolean`[]  }\>

Check User's Saved Albums - https:developer.spotify.com/documentation/web-api/reference/check-users-saved-albums
Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | A comma-separated list of the Spotify IDs for the albums. Maximum: 20 IDs. Example value: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `boolean`[]  }\>

Promise<{ result?: boolean[]; error?: CustomError }>

**`Scopes`**

Authorization scopes
- user-library-read

#### Defined in

[src/endpoints/albums.ts:222](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/albums.ts#L222)

___

### get\_album

▸ **get_album**(`id`, `market?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `album_type`: `string` ; `artists`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { url: string \| null; height: number \| null; width: number \| null; }[]; genres: string[]; popularity: number; followers: { ...; }; }[] ; `available_markets?`: `string`[] ; `copyrights?`: { type: string; text: string; }[] ; `external_ids?`: { isrc?: string \| undefined; ean?: string \| undefined; upc?: string \| undefined; } ; `external_urls`: { spotify: string; } = ExternalUrls; `genres?`: `string`[] ; `href`: `string` ; `id`: `string` ; `images`: { url: string \| null; height: number \| null; width: number \| null; }[] ; `label?`: `string` ; `name`: `string` ; `popularity?`: `number` ; `release_date`: `string` ; `release_date_precision`: `string` ; `restrictions?`: { reason: string; } ; `total_tracks`: `number` ; `tracks`: { href: string; total: number; limit: number; next: string \| null; offset: number; previous: string \| null; items: { preview\_url: string \| null; artists?: { type: string; href: string; external\_urls: { ...; }; name: string; id: string; uri: string; }[] \| undefined; ... 14 more ...; is\_local?: boolean \| undefined; }[... = SimplifiedTracks; `type`: `string` ; `uri`: `string`  }  }\>

Get Album - https:developer.spotify.com/documentation/web-api/reference/get-an-album

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The Spotify ID of the album Example value: "4aawyAB9vmqN3uQ7FjRGTy" |
| `market?` | `string` | An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. Note: If neither market or user country are provided, the content is considered unavailable for the client. Users can view the country that is associated with their account in the account settings. Example value: "ES" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `album_type`: `string` ; `artists`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { url: string \| null; height: number \| null; width: number \| null; }[]; genres: string[]; popularity: number; followers: { ...; }; }[] ; `available_markets?`: `string`[] ; `copyrights?`: { type: string; text: string; }[] ; `external_ids?`: { isrc?: string \| undefined; ean?: string \| undefined; upc?: string \| undefined; } ; `external_urls`: { spotify: string; } = ExternalUrls; `genres?`: `string`[] ; `href`: `string` ; `id`: `string` ; `images`: { url: string \| null; height: number \| null; width: number \| null; }[] ; `label?`: `string` ; `name`: `string` ; `popularity?`: `number` ; `release_date`: `string` ; `release_date_precision`: `string` ; `restrictions?`: { reason: string; } ; `total_tracks`: `number` ; `tracks`: { href: string; total: number; limit: number; next: string \| null; offset: number; previous: string \| null; items: { preview\_url: string \| null; artists?: { type: string; href: string; external\_urls: { ...; }; name: string; id: string; uri: string; }[] \| undefined; ... 14 more ...; is\_local?: boolean \| undefined; }[... = SimplifiedTracks; `type`: `string` ; `uri`: `string`  }  }\>

Promise<{ result?: AlbumType; error?: CustomError }>

#### Defined in

[src/endpoints/albums.ts:40](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/albums.ts#L40)

___

### get\_album\_tracks

▸ **get_album_tracks**(`id`, `optional?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `href`: `string` ; `items`: { preview\_url: string \| null; artists?: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; }[] \| undefined; available\_markets?: string[] \| undefined; ... 13 more ...; is\_local?: boolean \| undefined; }[] ; `limit`: `number` ; `next`: ``null`` \| `string` ; `offset`: `number` ; `previous`: ``null`` \| `string` ; `total`: `number`  }  }\>

Get Album Tracks - https:developer.spotify.com/documentation/web-api/reference/get-an-albums-tracks

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The Spotify ID of the album Example value: "4aawyAB9vmqN3uQ7FjRGTy" |
| `optional?` | `Object` | - |
| `optional.limit?` | `number` | - |
| `optional.market?` | `string` | - |
| `optional.offset?` | `number` | - |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `href`: `string` ; `items`: { preview\_url: string \| null; artists?: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; }[] \| undefined; available\_markets?: string[] \| undefined; ... 13 more ...; is\_local?: boolean \| undefined; }[] ; `limit`: `number` ; `next`: ``null`` \| `string` ; `offset`: `number` ; `previous`: ``null`` \| `string` ; `total`: `number`  }  }\>

Promise<{ result?: SimplifiedTracksType; error?: CustomError }>

#### Defined in

[src/endpoints/albums.ts:105](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/albums.ts#L105)

___

### get\_new\_releases

▸ **get_new_releases**(`optional?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `albums`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } = SeveralSimplifiedAlbums }  }\>

Get New Releases - https:developer.spotify.com/documentation/web-api/reference/get-new-releases
Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).

#### Parameters

| Name | Type |
| :------ | :------ |
| `optional?` | `Object` |
| `optional.limit?` | `number` |
| `optional.market?` | `string` |
| `optional.offset?` | `number` |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `albums`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } = SeveralSimplifiedAlbums }  }\>

Promise<{ result?: NewReleasesType; error?: CustomError }>

#### Defined in

[src/endpoints/albums.ts:253](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/albums.ts#L253)

___

### get\_several\_albums

▸ **get_several_albums**(`ids`, `market?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `albums`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; album\_type: string; total\_tracks: number; images: { url: string \| null; height: number \| null; width: number \| null; }[]; ... 10 more ...; popularity?: number \| undefined; }[]  }  }\>

Get Several Albums - https:developer.spotify.com/documentation/web-api/reference/get-multiple-albums

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | A comma-separated list of the Spotify IDs for the albums. Maximum: 20 IDs. Example value: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc" |
| `market?` | `string` | An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. Note: If neither market or user country are provided, the content is considered unavailable for the client. Users can view the country that is associated with their account in the account settings. Example value: "ES" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `albums`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; album\_type: string; total\_tracks: number; images: { url: string \| null; height: number \| null; width: number \| null; }[]; ... 10 more ...; popularity?: number \| undefined; }[]  }  }\>

Promise<{ result?: SeveralAlbumsType; error?: CustomError }>

#### Defined in

[src/endpoints/albums.ts:68](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/albums.ts#L68)

___

### get\_users\_saved\_albums

▸ **get_users_saved_albums**(`optional?`): `Promise`<{ `error?`: { `message`: `string` ; `scopes?`: `string`[]  } ; `result?`: { `href`: `string` ; `items`: { album: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; album\_type: string; total\_tracks: number; images: { url: string \| null; height: number \| null; width: number \| null; }[]; ... 10 more ...; popularity?: number \| undefined; }; added\_at: string; }[] ; `limit`: `number` ; `next?`: ``null`` \| `string` ; `offset`: `number` ; `previous?`: ``null`` \| `string` ; `total`: `number`  }  }\>

Get User's Saved Albums - https:developer.spotify.com/documentation/web-api/reference/get-users-saved-albums

#### Parameters

| Name | Type |
| :------ | :------ |
| `optional?` | `Object` |
| `optional.limit?` | `number` |
| `optional.market?` | `string` |
| `optional.offset?` | `number` |

#### Returns

`Promise`<{ `error?`: { `message`: `string` ; `scopes?`: `string`[]  } ; `result?`: { `href`: `string` ; `items`: { album: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; album\_type: string; total\_tracks: number; images: { url: string \| null; height: number \| null; width: number \| null; }[]; ... 10 more ...; popularity?: number \| undefined; }; added\_at: string; }[] ; `limit`: `number` ; `next?`: ``null`` \| `string` ; `offset`: `number` ; `previous?`: ``null`` \| `string` ; `total`: `number`  }  }\>

Promise<{
result?: UsersAlbumsType;
error?: { message: string; scopes?: string[] };
}>

**`Scopes`**

Authorization scopes
- user-library-read

#### Defined in

[src/endpoints/albums.ts:146](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/albums.ts#L146)

___

### remove\_users\_saved\_albums

▸ **remove_users_saved_albums**(`ids`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Remove Users' Saved Albums - https:developer.spotify.com/documentation/web-api/reference/remove-albums-user
Remove one or more albums from the current user's 'Your Music' library.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | A comma-separated list of the Spotify IDs for the albums. Maximum: 20 IDs. Example value: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Promise<{ result?: string; error?: CustomError }>

**`Scopes`**

Authorization scopes
- user-library-modify

#### Defined in

[src/endpoints/albums.ts:198](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/albums.ts#L198)

___

### save\_albums\_for\_current\_user

▸ **save_albums_for_current_user**(`ids`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Save Albums for Current User - https:developer.spotify.com/documentation/web-api/reference/save-albums-user
Save one or more albums to the current user's 'Your Music' library.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | A comma-separated list of the Spotify IDs for the albums. Maximum: 20 IDs. Example value: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Promise<{ result?: string; error?: CustomError }>

**`Scopes`**

Authorization scopes
- user-library-modify

#### Defined in

[src/endpoints/albums.ts:174](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/albums.ts#L174)
