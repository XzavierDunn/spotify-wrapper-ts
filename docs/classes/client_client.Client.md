[spotify_wrapper](../README.md) / [Exports](../modules.md) / [client/client](../modules/client_client.md) / Client

# Class: Client

[client/client](../modules/client_client.md).Client

## Table of contents

### Constructors

- [constructor](client_client.Client.md#constructor)

### Properties

- [ClientInfo](client_client.Client.md#clientinfo)
- [UserInfo](client_client.Client.md#userinfo)
- [albums](client_client.Client.md#albums)
- [artists](client_client.Client.md#artists)
- [audiobooks](client_client.Client.md#audiobooks)
- [categories](client_client.Client.md#categories)
- [chapters](client_client.Client.md#chapters)
- [credentials](client_client.Client.md#credentials)
- [episodes](client_client.Client.md#episodes)
- [genres](client_client.Client.md#genres)
- [info](client_client.Client.md#info)
- [market](client_client.Client.md#market)
- [player](client_client.Client.md#player)
- [playlists](client_client.Client.md#playlists)
- [search](client_client.Client.md#search)
- [shows](client_client.Client.md#shows)
- [tracks](client_client.Client.md#tracks)
- [users](client_client.Client.md#users)

### Methods

- [add\_user\_info](client_client.Client.md#add_user_info)
- [refresh\_token](client_client.Client.md#refresh_token)
- [refresh\_user\_token](client_client.Client.md#refresh_user_token)
- [create\_client](client_client.Client.md#create_client)

## Constructors

### constructor

• **new Client**(`clientInfo`, `credentials`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientInfo` | `Object` |
| `clientInfo.access_token?` | `string` |
| `clientInfo.expires_in?` | `number` |
| `clientInfo.refresh_token?` | `string` |
| `clientInfo.scope?` | `string` |
| `clientInfo.token_type?` | `string` |
| `credentials` | `Object` |
| `credentials.client_id` | `string` |
| `credentials.client_secret` | `string` |
| `credentials.redirect_uri` | `string` |

#### Defined in

[src/client/client.ts:77](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/client/client.ts#L77)

## Properties

### ClientInfo

• `Private` **ClientInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `access_token?` | `string` |
| `expires_in?` | `number` |
| `refresh_token?` | `string` |
| `scope?` | `string` |
| `token_type?` | `string` |

#### Defined in

[src/client/client.ts:51](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/client/client.ts#L51)

___

### UserInfo

• `Private` **UserInfo**: `Object` = `{}`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `access_token?` | `string` |
| `expires_in?` | `number` |
| `refresh_token?` | `string` |
| `scope?` | `string` |
| `token_type?` | `string` |

#### Defined in

[src/client/client.ts:52](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/client/client.ts#L52)

___

### albums

• **albums**: [`Albums`](endpoints_albums.Albums.md)

#### Defined in

[src/client/client.ts:65](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/client/client.ts#L65)

___

### artists

• **artists**: [`Artists`](endpoints_artists.Artists.md)

#### Defined in

[src/client/client.ts:70](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/client/client.ts#L70)

___

### audiobooks

• **audiobooks**: [`Audiobooks`](endpoints_audiobooks.Audiobooks.md)

#### Defined in

[src/client/client.ts:75](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/client/client.ts#L75)

___

### categories

• **categories**: [`Categories`](endpoints_categories.Categories.md)

#### Defined in

[src/client/client.ts:74](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/client/client.ts#L74)

___

### chapters

• **chapters**: [`Chapters`](endpoints_chapter.Chapters.md)

#### Defined in

[src/client/client.ts:71](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/client/client.ts#L71)

___

### credentials

• `Private` **credentials**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `client_id` | `string` |
| `client_secret` | `string` |
| `redirect_uri` | `string` |

#### Defined in

[src/client/client.ts:50](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/client/client.ts#L50)

___

### episodes

• **episodes**: [`Episodes`](endpoints_episodes.Episodes.md)

#### Defined in

[src/client/client.ts:72](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/client/client.ts#L72)

___

### genres

• **genres**: [`Genres`](endpoints_genres.Genres.md)

#### Defined in

[src/client/client.ts:66](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/client/client.ts#L66)

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

[src/client/client.ts:54](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/client/client.ts#L54)

___

### market

• **market**: [`Markets`](endpoints_markets.Markets.md)

#### Defined in

[src/client/client.ts:69](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/client/client.ts#L69)

___

### player

• **player**: [`Player`](endpoints_player.Player.md)

#### Defined in

[src/client/client.ts:68](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/client/client.ts#L68)

___

### playlists

• **playlists**: [`Playlists`](endpoints_playlists.Playlists.md)

#### Defined in

[src/client/client.ts:73](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/client/client.ts#L73)

___

### search

• **search**: [`Search`](endpoints_search.Search.md)

#### Defined in

[src/client/client.ts:67](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/client/client.ts#L67)

___

### shows

• **shows**: [`Shows`](endpoints_shows.Shows.md)

#### Defined in

[src/client/client.ts:63](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/client/client.ts#L63)

___

### tracks

• **tracks**: [`Tracks`](endpoints_tracks.Tracks.md)

#### Defined in

[src/client/client.ts:64](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/client/client.ts#L64)

___

### users

• **users**: [`Users`](endpoints_users.Users.md)

#### Defined in

[src/client/client.ts:62](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/client/client.ts#L62)

## Methods

### add\_user\_info

▸ **add_user_info**(`userInfo`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `userInfo` | `Object` |
| `userInfo.access_token?` | `string` |
| `userInfo.expires_in?` | `number` |
| `userInfo.refresh_token?` | `string` |
| `userInfo.scope?` | `string` |
| `userInfo.token_type?` | `string` |

#### Returns

`void`

#### Defined in

[src/client/client.ts:127](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/client/client.ts#L127)

___

### refresh\_token

▸ **refresh_token**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/client/client.ts:103](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/client/client.ts#L103)

___

### refresh\_user\_token

▸ **refresh_user_token**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/client/client.ts:110](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/client/client.ts#L110)

___

### create\_client

▸ `Static` **create_client**(`credentials`): `Promise`<[`Client`](client_client.Client.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentials` | `Object` |
| `credentials.client_id` | `string` |
| `credentials.client_secret` | `string` |
| `credentials.redirect_uri` | `string` |

#### Returns

`Promise`<[`Client`](client_client.Client.md)\>

#### Defined in

[src/client/client.ts:98](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/client/client.ts#L98)
