[spotify_wrapper](../README.md) / [Exports](../modules.md) / [endpoints/users](../modules/endpoints_users.md) / Users

# Class: Users

[endpoints/users](../modules/endpoints_users.md).Users

## Table of contents

### Constructors

- [constructor](endpoints_users.Users.md#constructor)

### Properties

- [api\_url](endpoints_users.Users.md#api_url)
- [info](endpoints_users.Users.md#info)

### Methods

- [check\_if\_user\_follows\_artists\_or\_users](endpoints_users.Users.md#check_if_user_follows_artists_or_users)
- [check\_if\_users\_follow\_playlist](endpoints_users.Users.md#check_if_users_follow_playlist)
- [follow\_artists\_or\_users](endpoints_users.Users.md#follow_artists_or_users)
- [follow\_playlist](endpoints_users.Users.md#follow_playlist)
- [get\_current\_users\_profile](endpoints_users.Users.md#get_current_users_profile)
- [get\_followed\_artists](endpoints_users.Users.md#get_followed_artists)
- [get\_users\_profile](endpoints_users.Users.md#get_users_profile)
- [get\_users\_top\_items](endpoints_users.Users.md#get_users_top_items)
- [unfollow\_artists\_or\_users](endpoints_users.Users.md#unfollow_artists_or_users)
- [unfollow\_playlist](endpoints_users.Users.md#unfollow_playlist)

## Constructors

### constructor

• **new Users**(`info`)

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

[src/endpoints/users.ts:15](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/users.ts#L15)

## Properties

### api\_url

• `Private` **api\_url**: `string`

#### Defined in

[src/endpoints/users.ts:13](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/users.ts#L13)

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

[src/endpoints/users.ts:12](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/users.ts#L12)

## Methods

### check\_if\_user\_follows\_artists\_or\_users

▸ **check_if_user_follows_artists_or_users**(`«destructured»`): `Promise`<{ `error?`: `Error` ; `result?`: `boolean`[]  }\>

Check If User Follows Artists or Users - https://developer.spotify.com/documentation/web-api/reference/check-current-user-follows
Check to see if the current user is following one or more artists or other Spotify users.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `ids` | `string`[] |
| › `type` | `string` |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: `boolean`[]  }\>

Promise<{
result?: boolean[];
error?: Error;
}>

**`Scopes`**

Authorization scopes
- user-follow-read

#### Defined in

[src/endpoints/users.ts:314](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/users.ts#L314)

___

### check\_if\_users\_follow\_playlist

▸ **check_if_users_follow_playlist**(`«destructured»`): `Promise`<{ `error?`: `Error` ; `result?`: `boolean`[]  }\>

Check if Users Follow Playlist - https://developer.spotify.com/documentation/web-api/reference/check-if-user-follows-playlist
Check to see if one or more Spotify users are following a specified playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `ids` | `string`[] |
| › `playlist_id` | `string` |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: `boolean`[]  }\>

Promise<{
result?: boolean[];
error?: Error;
}>

#### Defined in

[src/endpoints/users.ts:351](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/users.ts#L351)

___

### follow\_artists\_or\_users

▸ **follow_artists_or_users**(`«destructured»`): `Promise`<{ `error?`: `Error` ; `result?`: `string`  }\>

Follow Artists or Users - https://developer.spotify.com/documentation/web-api/reference/follow-artists-users
Add the current user as a follower of one or more artists or other Spotify users.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `ids` | `string`[] |
| › `type` | `string` |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: `string`  }\>

Promise<{
result?: string;
error?: Error;
}>

**`Scopes`**

Authorization scopes
- user-follow-modify

#### Defined in

[src/endpoints/users.ts:238](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/users.ts#L238)

___

### follow\_playlist

▸ **follow_playlist**(`playlist_id`, `public_playlist?`): `Promise`<{ `error?`: `Error` ; `result?`: `string`  }\>

Follow Playlist - https://developer.spotify.com/documentation/web-api/reference/follow-playlist
Add the current user as a follower of a playlist.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `playlist_id` | `string` | `undefined` | The Spotify ID of the playlist. Example value: "3cEYpjA9oz9GiPac4AsH4n" |
| `public_playlist` | `boolean` | `true` | - |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: `string`  }\>

Promise<{
result?: string;
error?: Error;
}>

**`Scopes`**

Authorization scopes
- playlist-modify-public
- playlist-modify-private

#### Defined in

[src/endpoints/users.ts:133](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/users.ts#L133)

___

### get\_current\_users\_profile

▸ **get_current_users_profile**(): `Promise`<{ `error?`: `Error` ; `result?`: { `country?`: `string` ; `display_name`: `string` ; `email?`: `string` ; `explicit_content?`: { filter\_enabled: boolean; filter\_locked: boolean; } ; `external_urls`: { spotify: string; } = ExternalUrls; `followers`: { href: string \| null; total: number; } = Followers; `href`: `string` ; `id`: `string` ; `images`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `product?`: `string` ; `type`: `string` ; `uri`: `string`  }  }\>

Get Current User's Profile - https://developer.spotify.com/documentation/web-api/reference/get-current-users-profile
Get detailed profile information about the current user (including the current user's username).

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `country?`: `string` ; `display_name`: `string` ; `email?`: `string` ; `explicit_content?`: { filter\_enabled: boolean; filter\_locked: boolean; } ; `external_urls`: { spotify: string; } = ExternalUrls; `followers`: { href: string \| null; total: number; } = Followers; `href`: `string` ; `id`: `string` ; `images`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `product?`: `string` ; `type`: `string` ; `uri`: `string`  }  }\>

Promise<{
result?: UserType;
error?: Error;
}>

**`Scopes`**

Authorization scopes
- user-read-private
- user-read-email

#### Defined in

[src/endpoints/users.ts:32](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/users.ts#L32)

___

### get\_followed\_artists

▸ **get_followed_artists**(`«destructured»`): `Promise`<{ `error?`: `Error` ; `result?`: { `artists`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } = FullArtists }  }\>

Get Followed Artists - https://developer.spotify.com/documentation/web-api/reference/get-followed
Get the current user's followed artists.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `after?` | `string` |
| › `limit?` | `number` |
| › `type?` | `string` |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `artists`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } = FullArtists }  }\>

Promise<{
result?: PagedArtistsType;
error?: Error;
}>

**`Scopes`**

Authorization scopes
- user-follow-read

#### Defined in

[src/endpoints/users.ts:197](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/users.ts#L197)

___

### get\_users\_profile

▸ **get_users_profile**(`user_id`): `Promise`<{ `error?`: `Error` ; `result?`: { `country?`: `string` ; `display_name`: `string` ; `email?`: `string` ; `explicit_content?`: { filter\_enabled: boolean; filter\_locked: boolean; } ; `external_urls`: { spotify: string; } = ExternalUrls; `followers`: { href: string \| null; total: number; } = Followers; `href`: `string` ; `id`: `string` ; `images`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `product?`: `string` ; `type`: `string` ; `uri`: `string`  }  }\>

Get User's Profile - https://developer.spotify.com/documentation/web-api/reference/get-users-profile
Get public profile information about a Spotify user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user_id` | `string` | The user's Spotify user ID. Example value: "smedjan" |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `country?`: `string` ; `display_name`: `string` ; `email?`: `string` ; `explicit_content?`: { filter\_enabled: boolean; filter\_locked: boolean; } ; `external_urls`: { spotify: string; } = ExternalUrls; `followers`: { href: string \| null; total: number; } = Followers; `href`: `string` ; `id`: `string` ; `images`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `product?`: `string` ; `type`: `string` ; `uri`: `string`  }  }\>

Promise<{
result?: UserType;
error?: Error;
}>

#### Defined in

[src/endpoints/users.ts:107](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/users.ts#L107)

___

### get\_users\_top\_items

▸ **get_users_top_items**(`«destructured»`): `Promise`<{ `error?`: `Error` ; `result?`: { `href`: `string` ; `items`: ({ external\_urls?: { spotify: string; } \| undefined; followers?: { href: string \| null; total: number; } \| undefined; genres?: string[] \| undefined; href?: string \| undefined; id?: string \| undefined; ... 4 more ...; uri?: string \| undefined; } \| { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; external\_ids: { isrc?: string \| undefined; ean?: string \| undefined; upc?: string \| undefined; }; ... 12 more ...; restrictions?: { ...; } \| undefined; })[] ; `limit`: `number` ; `next`: ``null`` \| `string` ; `offset`: `number` ; `previous`: ``null`` \| `string` ; `total`: `number`  }  }\>

Get User's Top Items - https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
Get the current user's top artists or tracks based on calculated affinity.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `offset?` | `number` |
| › `time_range?` | `string` |
| › `type` | `string` |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `href`: `string` ; `items`: ({ external\_urls?: { spotify: string; } \| undefined; followers?: { href: string \| null; total: number; } \| undefined; genres?: string[] \| undefined; href?: string \| undefined; id?: string \| undefined; ... 4 more ...; uri?: string \| undefined; } \| { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; external\_ids: { isrc?: string \| undefined; ean?: string \| undefined; upc?: string \| undefined; }; ... 12 more ...; restrictions?: { ...; } \| undefined; })[] ; `limit`: `number` ; `next`: ``null`` \| `string` ; `offset`: `number` ; `previous`: ``null`` \| `string` ; `total`: `number`  }  }\>

Promise<{
result?: PagesofArtistsOrTracksType;
error?: Error;
}>

**`Scopes`**

Authorization scopes
- user-top-read

#### Defined in

[src/endpoints/users.ts:71](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/users.ts#L71)

___

### unfollow\_artists\_or\_users

▸ **unfollow_artists_or_users**(`«destructured»`): `Promise`<{ `error?`: `Error` ; `result?`: `string`  }\>

Unfollow Artists or Users - https://developer.spotify.com/documentation/web-api/reference/unfollow-artists-users
Remove the current user as a follower of one or more artists or other Spotify users.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `ids` | `string`[] |
| › `type` | `string` |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: `string`  }\>

Promise<{
result?: string;
error?: Error;
}>

**`Scopes`**

Authorization scopes
- user-follow-modify

#### Defined in

[src/endpoints/users.ts:276](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/users.ts#L276)

___

### unfollow\_playlist

▸ **unfollow_playlist**(`playlist_id`): `Promise`<{ `error?`: `Error` ; `result?`: `string`  }\>

Unfollow Playlist - https://developer.spotify.com/documentation/web-api/reference/unfollow-playlist
Remove the current user as a follower of a playlist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playlist_id` | `string` | The Spotify ID of the playlist. Example value: "3cEYpjA9oz9GiPac4AsH4n" |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: `string`  }\>

Promise<{
result?: string;
error?: Error;
}>

**`Scopes`**

Authorization scopes
- playlist-modify-public
- playlist-modify-private

#### Defined in

[src/endpoints/users.ts:165](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/users.ts#L165)
