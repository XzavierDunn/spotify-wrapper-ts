[spotify_wrapper](../README.md) / [Exports](../modules.md) / [endpoints/albums](../modules/endpoints_albums.md) / Albums

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
| `info` | `Object` |
| `info.api_url` | `string` |
| `info.client_access_token` | `string` |
| `info.refresh_token_function` | (...`args`: `unknown`[]) => `unknown` |
| `info.refresh_user_token_function` | (...`args`: `unknown`[]) => `unknown` |
| `info.user_access_token` | `string` |

#### Defined in

[src/endpoints/albums.ts:21](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/albums.ts#L21)

## Properties

### api\_url

• `Private` **api\_url**: `string`

#### Defined in

[src/endpoints/albums.ts:19](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/albums.ts#L19)

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

[src/endpoints/albums.ts:18](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/albums.ts#L18)

## Methods

### check\_users\_saved\_albums

▸ **check_users_saved_albums**(`ids`): `Promise`<{ `error?`: `Error` ; `result?`: `boolean`[]  }\>

Check User's Saved Albums - https://developer.spotify.com/documentation/web-api/reference/check-users-saved-albums
Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `Object` | A comma-separated list of the Spotify IDs for the albums. Maximum: 20 IDs. Example value: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc" |
| `ids.ids` | `string`[] | - |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: `boolean`[]  }\>

Promise<{
result?: boolean[];
error?: Error;
}>

**`Scopes`**

Authorization scopes
- user-library-read

#### Defined in

[src/endpoints/albums.ts:272](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/albums.ts#L272)

___

### get\_album

▸ **get_album**(`«destructured»`): `Promise`<{ `error?`: `Error` ; `result?`: { `album_type`: `string` ; `artists`: { external\_urls?: { spotify: string; } \| undefined; followers?: { href: string \| null; total: number; } \| undefined; genres?: string[] \| undefined; href?: string \| undefined; id?: string \| undefined; ... 4 more ...; uri?: string \| undefined; }[] ; `available_markets?`: `string`[] ; `copyrights?`: { type: string; text: string; }[] ; `external_ids?`: { isrc?: string \| undefined; ean?: string \| undefined; upc?: string \| undefined; } ; `external_urls`: { spotify: string; } = ExternalUrls; `genres?`: `string`[] ; `href`: `string` ; `id`: `string` ; `images`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `label?`: `string` ; `name`: `string` ; `popularity?`: `number` ; `release_date`: `string` ; `release_date_precision`: `string` ; `restrictions?`: { reason: string; } ; `total_tracks`: `number` ; `tracks`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } = SimplifiedTracks; `type`: `string` ; `uri`: `string`  }  }\>

Get Album - https://developer.spotify.com/documentation/web-api/reference/get-an-album

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `id` | `string` |
| › `market?` | `string` |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `album_type`: `string` ; `artists`: { external\_urls?: { spotify: string; } \| undefined; followers?: { href: string \| null; total: number; } \| undefined; genres?: string[] \| undefined; href?: string \| undefined; id?: string \| undefined; ... 4 more ...; uri?: string \| undefined; }[] ; `available_markets?`: `string`[] ; `copyrights?`: { type: string; text: string; }[] ; `external_ids?`: { isrc?: string \| undefined; ean?: string \| undefined; upc?: string \| undefined; } ; `external_urls`: { spotify: string; } = ExternalUrls; `genres?`: `string`[] ; `href`: `string` ; `id`: `string` ; `images`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `label?`: `string` ; `name`: `string` ; `popularity?`: `number` ; `release_date`: `string` ; `release_date_precision`: `string` ; `restrictions?`: { reason: string; } ; `total_tracks`: `number` ; `tracks`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } = SimplifiedTracks; `type`: `string` ; `uri`: `string`  }  }\>

Promise<{
result?: AlbumType;
error?: Error;
}>

#### Defined in

[src/endpoints/albums.ts:43](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/albums.ts#L43)

___

### get\_album\_tracks

▸ **get_album_tracks**(`«destructured»`): `Promise`<{ `error?`: `Error` ; `result?`: { `href?`: `string` ; `items?`: { preview\_url: string \| null; artists?: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; }[] \| undefined; available\_markets?: string[] \| undefined; ... 13 more ...; is\_local?: boolean \| undefined; }[] ; `limit?`: `number` ; `next?`: ``null`` \| `string` ; `offset?`: `number` ; `previous?`: ``null`` \| `string` ; `total?`: `number`  }  }\>

Get Album Tracks - https://developer.spotify.com/documentation/web-api/reference/get-an-albums-tracks

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `id` | `string` |
| › `limit?` | `number` |
| › `market?` | `string` |
| › `offset?` | `number` |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `href?`: `string` ; `items?`: { preview\_url: string \| null; artists?: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; }[] \| undefined; available\_markets?: string[] \| undefined; ... 13 more ...; is\_local?: boolean \| undefined; }[] ; `limit?`: `number` ; `next?`: ``null`` \| `string` ; `offset?`: `number` ; `previous?`: ``null`` \| `string` ; `total?`: `number`  }  }\>

Promise<{
result?: SimplifiedTracksType;
error?: Error;
}>

#### Defined in

[src/endpoints/albums.ts:123](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/albums.ts#L123)

___

### get\_new\_releases

▸ **get_new_releases**(`«destructured»`): `Promise`<{ `error?`: `Error` ; `result?`: { `albums`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } = SeveralSimplifiedAlbums }  }\>

Get New Releases - https://developer.spotify.com/documentation/web-api/reference/get-new-releases
Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `country?` | `string` |
| › `limit?` | `number` |
| › `offset?` | `number` |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `albums`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } = SeveralSimplifiedAlbums }  }\>

Promise<{
result?: SeveralSimplifiedAlbumsType;
error?: Error;
}>

#### Defined in

[src/endpoints/albums.ts:309](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/albums.ts#L309)

___

### get\_several\_albums

▸ **get_several_albums**(`«destructured»`): `Promise`<{ `error?`: `Error` ; `result?`: { `albums`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; album\_type: string; total\_tracks: number; images: { height: number \| null; width: number \| null; url: string \| null; }[]; ... 10 more ...; popularity?: number \| undefined; }[]  }  }\>

Get Several Albums - https://developer.spotify.com/documentation/web-api/reference/get-multiple-albums

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `ids` | `string`[] |
| › `market?` | `string` |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `albums`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; album\_type: string; total\_tracks: number; images: { height: number \| null; width: number \| null; url: string \| null; }[]; ... 10 more ...; popularity?: number \| undefined; }[]  }  }\>

Promise<{
result?: SeveralAlbumsType;
error?: Error;
}>

#### Defined in

[src/endpoints/albums.ts:76](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/albums.ts#L76)

___

### get\_users\_saved\_albums

▸ **get_users_saved_albums**(`«destructured»`): `Promise`<{ `error?`: `Error` ; `result?`: { `href?`: `string` ; `items?`: { album: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; album\_type: string; total\_tracks: number; images: { height: number \| null; width: number \| null; url: string \| null; }[]; ... 10 more ...; popularity?: number \| undefined; }; added\_at: string; }[] ; `limit?`: `number` ; `next?`: ``null`` \| `string` ; `offset?`: `number` ; `previous?`: ``null`` \| `string` ; `total?`: `number`  }  }\>

Get User's Saved Albums - https://developer.spotify.com/documentation/web-api/reference/get-users-saved-albums

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `market?` | `string` |
| › `offset?` | `number` |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `href?`: `string` ; `items?`: { album: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; album\_type: string; total\_tracks: number; images: { height: number \| null; width: number \| null; url: string \| null; }[]; ... 10 more ...; popularity?: number \| undefined; }; added\_at: string; }[] ; `limit?`: `number` ; `next?`: ``null`` \| `string` ; `offset?`: `number` ; `previous?`: ``null`` \| `string` ; `total?`: `number`  }  }\>

Promise<{
result?: UsersAlbumsType;
error?: Error;
}>

**`Scopes`**

Authorization scopes
- user-library-read

#### Defined in

[src/endpoints/albums.ts:173](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/albums.ts#L173)

___

### remove\_users\_saved\_albums

▸ **remove_users_saved_albums**(`ids`): `Promise`<{ `error?`: `Error` ; `result?`: `string`  }\>

Remove Users' Saved Albums - https://developer.spotify.com/documentation/web-api/reference/remove-albums-user
Remove one or more albums from the current user's 'Your Music' library.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `Object` | A comma-separated list of the Spotify IDs for the albums. Maximum: 20 IDs. Example value: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc" |
| `ids.ids` | `string`[] | - |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: `string`  }\>

Promise<{
result?: string;
error?: Error;
}>

**`Scopes`**

Authorization scopes
- user-library-modify

#### Defined in

[src/endpoints/albums.ts:247](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/albums.ts#L247)

___

### save\_albums\_for\_current\_user

▸ **save_albums_for_current_user**(`ids`): `Promise`<{ `error?`: `Error` ; `result?`: `string`  }\>

Save Albums for Current User - https://developer.spotify.com/documentation/web-api/reference/save-albums-user
Save one or more albums to the current user's 'Your Music' library.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `Object` | A comma-separated list of the Spotify IDs for the albums. Maximum: 20 IDs. Example value: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc" |
| `ids.ids` | `string`[] | - |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: `string`  }\>

Promise<{
result?: string;
error?: Error;
}>

**`Scopes`**

Authorization scopes
- user-library-modify

#### Defined in

[src/endpoints/albums.ts:213](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/albums.ts#L213)
