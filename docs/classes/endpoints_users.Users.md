[spotify-wrapper-ts](../README.md) / [Exports](../modules.md) / [endpoints/users](../modules/endpoints_users.md) / Users

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
| `info` | [`InfoType`](../modules/models_client.md#infotype) |

#### Defined in

[src/endpoints/users.ts:16](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/users.ts#L16)

## Properties

### api\_url

• `Private` **api\_url**: `string`

#### Defined in

[src/endpoints/users.ts:14](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/users.ts#L14)

___

### info

• `Private` **info**: [`InfoType`](../modules/models_client.md#infotype)

#### Defined in

[src/endpoints/users.ts:13](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/users.ts#L13)

## Methods

### check\_if\_user\_follows\_artists\_or\_users

▸ **check_if_user_follows_artists_or_users**(`ids`, `type`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `boolean`[]  }\>

Check If User Follows Artists or Users - https://developer.spotify.com/documentation/web-api/reference/check-current-user-follows
Check to see if the current user is following one or more artists or other Spotify users.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | A comma-separated list of the artist or the user Spotify IDs. A maximum of 50 IDs can be sent in one request. Example value: "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6" |
| `type` | ``"user"`` \| ``"artist"`` | The ID type. Example value: "artist" Allowed values: "artist", "user" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `boolean`[]  }\>

Promise<{
result?: boolean[];
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- user-follow-read

#### Defined in

[src/endpoints/users.ts:310](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/users.ts#L310)

___

### check\_if\_users\_follow\_playlist

▸ **check_if_users_follow_playlist**(`playlist_id`, `user_ids`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `boolean`[]  }\>

Check if Users Follow Playlist - https://developer.spotify.com/documentation/web-api/reference/check-if-user-follows-playlist
Check to see if one or more Spotify users are following a specified playlist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playlist_id` | `string` | The Spotify ID of the playlist. Example value: "3cEYpjA9oz9GiPac4AsH4n" |
| `user_ids` | `string`[] | - |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `boolean`[]  }\>

Promise<{
result?: boolean[];
error?: CustomError;
}>

#### Defined in

[src/endpoints/users.ts:344](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/users.ts#L344)

___

### follow\_artists\_or\_users

▸ **follow_artists_or_users**(`ids`, `type`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Follow Artists or Users - https://developer.spotify.com/documentation/web-api/reference/follow-artists-users
Add the current user as a follower of one or more artists or other Spotify users.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | A comma-separated list of the artist or the user Spotify IDs. A maximum of 50 IDs can be sent in one request. Example value: "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6" |
| `type` | ``"user"`` \| ``"artist"`` | The ID type. Example value: "artist" Allowed values: "artist", "user" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Promise<{
result?: string;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- user-follow-modify

#### Defined in

[src/endpoints/users.ts:240](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/users.ts#L240)

___

### follow\_playlist

▸ **follow_playlist**(`playlist_id`, `public_playlist?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Follow Playlist - https://developer.spotify.com/documentation/web-api/reference/follow-playlist
Add the current user as a follower of a playlist.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `playlist_id` | `string` | `undefined` | The Spotify ID of the playlist. Example value: "3cEYpjA9oz9GiPac4AsH4n" |
| `public_playlist` | `boolean` | `true` | - |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Promise<{
result?: string;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- playlist-modify-public
- playlist-modify-private

#### Defined in

[src/endpoints/users.ts:135](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/users.ts#L135)

___

### get\_current\_users\_profile

▸ **get_current_users_profile**(): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `country?`: `string` ; `display_name`: `string` ; `email?`: `string` ; `explicit_content?`: { filter\_enabled: boolean; filter\_locked: boolean; } ; `external_urls`: { spotify: string; } = ExternalUrls; `followers`: { href: string \| null; total: number; } = Followers; `href`: `string` ; `id`: `string` ; `images`: { url: string \| null; height: number \| null; width: number \| null; }[] ; `product?`: `string` ; `type`: `string` ; `uri`: `string`  }  }\>

Get Current User's Profile - https://developer.spotify.com/documentation/web-api/reference/get-current-users-profile
Get detailed profile information about the current user (including the current user's username).

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `country?`: `string` ; `display_name`: `string` ; `email?`: `string` ; `explicit_content?`: { filter\_enabled: boolean; filter\_locked: boolean; } ; `external_urls`: { spotify: string; } = ExternalUrls; `followers`: { href: string \| null; total: number; } = Followers; `href`: `string` ; `id`: `string` ; `images`: { url: string \| null; height: number \| null; width: number \| null; }[] ; `product?`: `string` ; `type`: `string` ; `uri`: `string`  }  }\>

Promise<{
result?: UserType;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- user-read-private
- user-read-email

#### Defined in

[src/endpoints/users.ts:33](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/users.ts#L33)

___

### get\_followed\_artists

▸ **get_followed_artists**(`after?`, `limit?`, `type?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `artists`: { href: string; total: number; limit: number; next: string \| null; offset: number; previous: string \| null; items: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; ... 4 more ...; followers: { ...; }; }[]; } = FullArtists }  }\>

Get Followed Artists - https://developer.spotify.com/documentation/web-api/reference/get-followed
Get the current user's followed artists.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `after?` | `string` | `undefined` | The last artist ID retrieved from the previous request. Example value: "0I2XqVXqHScXjHhk6AYYRe" |
| `limit` | `number` | `20` | The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50. Example value: 10 Default value: 20 Range: 0 - 50 |
| `type` | `string` | `"artist"` | The ID type: currently only artist is supported. Example value: "artist" Allowed values: "artist" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `artists`: { href: string; total: number; limit: number; next: string \| null; offset: number; previous: string \| null; items: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; ... 4 more ...; followers: { ...; }; }[]; } = FullArtists }  }\>

Promise<{
result?: PagedArtistsType;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- user-follow-read

#### Defined in

[src/endpoints/users.ts:203](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/users.ts#L203)

___

### get\_users\_profile

▸ **get_users_profile**(`user_id`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `country?`: `string` ; `display_name`: `string` ; `email?`: `string` ; `explicit_content?`: { filter\_enabled: boolean; filter\_locked: boolean; } ; `external_urls`: { spotify: string; } = ExternalUrls; `followers`: { href: string \| null; total: number; } = Followers; `href`: `string` ; `id`: `string` ; `images`: { url: string \| null; height: number \| null; width: number \| null; }[] ; `product?`: `string` ; `type`: `string` ; `uri`: `string`  }  }\>

Get User's Profile - https://developer.spotify.com/documentation/web-api/reference/get-users-profile
Get public profile information about a Spotify user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user_id` | `string` | The user's Spotify user ID. Example value: "smedjan" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `country?`: `string` ; `display_name`: `string` ; `email?`: `string` ; `explicit_content?`: { filter\_enabled: boolean; filter\_locked: boolean; } ; `external_urls`: { spotify: string; } = ExternalUrls; `followers`: { href: string \| null; total: number; } = Followers; `href`: `string` ; `id`: `string` ; `images`: { url: string \| null; height: number \| null; width: number \| null; }[] ; `product?`: `string` ; `type`: `string` ; `uri`: `string`  }  }\>

Promise<{
result?: UserType;
error?: CustomError;
}>

#### Defined in

[src/endpoints/users.ts:105](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/users.ts#L105)

___

### get\_users\_top\_items

▸ **get_users_top_items**(`type`, `time_range`, `optional?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `href`: `string` ; `items`: ({ type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { url: string \| null; height: number \| null; width: number \| null; }[]; genres: string[]; popularity: number; followers: { ...; }; } \| { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; external\_ids: { isrc?: string \| undefined; ean?: string \| undefined; upc?: string \| undefined; }; ... 12 more ...; restrictions?: { ...; } \| undefined; })[] ; `limit`: `number` ; `next`: ``null`` \| `string` ; `offset`: `number` ; `previous`: ``null`` \| `string` ; `total`: `number`  }  }\>

Get User's Top Items - https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
Get the current user's top artists or tracks based on calculated affinity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The type of entity to return. Valid values: artists or tracks Allowed values: "artists", "tracks" |
| `time_range` | `string` | Over what time frame the affinities are computed. Valid values: long_term (calculated from several years of data and including all new data as it becomes available), medium_term (approximately last 6 months), short_term (approximately last 4 weeks). Default: medium_term Example value: "medium_term" Default value: "medium_term" |
| `optional?` | `Omit`<{ `limit?`: `number` ; `market?`: `string` ; `offset?`: `number`  }, ``"market"``\> | - |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `href`: `string` ; `items`: ({ type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { url: string \| null; height: number \| null; width: number \| null; }[]; genres: string[]; popularity: number; followers: { ...; }; } \| { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; external\_ids: { isrc?: string \| undefined; ean?: string \| undefined; upc?: string \| undefined; }; ... 12 more ...; restrictions?: { ...; } \| undefined; })[] ; `limit`: `number` ; `next`: ``null`` \| `string` ; `offset`: `number` ; `previous`: ``null`` \| `string` ; `total`: `number`  }  }\>

Promise<{
result?: PagesofArtistsOrTracksType;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- user-top-read

#### Defined in

[src/endpoints/users.ts:72](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/users.ts#L72)

___

### unfollow\_artists\_or\_users

▸ **unfollow_artists_or_users**(`ids`, `type?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Unfollow Artists or Users - https://developer.spotify.com/documentation/web-api/reference/unfollow-artists-users
Remove the current user as a follower of one or more artists or other Spotify users.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | A comma-separated list of the artist or the user Spotify IDs. A maximum of 50 IDs can be sent in one request. Example value: "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6" |
| `type` | `string` | The ID type. Example value: "artist" Allowed values: "artist", "user" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Promise<{
result?: string;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- user-follow-modify

#### Defined in

[src/endpoints/users.ts:275](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/users.ts#L275)

___

### unfollow\_playlist

▸ **unfollow_playlist**(`playlist_id`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Unfollow Playlist - https://developer.spotify.com/documentation/web-api/reference/unfollow-playlist
Remove the current user as a follower of a playlist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playlist_id` | `string` | The Spotify ID of the playlist. Example value: "3cEYpjA9oz9GiPac4AsH4n" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Promise<{
result?: string;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- playlist-modify-public
- playlist-modify-private

#### Defined in

[src/endpoints/users.ts:167](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/users.ts#L167)
