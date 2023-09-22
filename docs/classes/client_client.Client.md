[spotify-wrapper-ts](../README.md) / [Exports](../modules.md) / [client/client](../modules/client_client.md) / Client

# Class: Client

[client/client](../modules/client_client.md).Client

## Table of contents

### Constructors

- [constructor](client_client.Client.md#constructor)

### Properties

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
- [error\_handler](client_client.Client.md#error_handler)
- [refresh\_token](client_client.Client.md#refresh_token)
- [refresh\_user\_token](client_client.Client.md#refresh_user_token)
- [submit\_request](client_client.Client.md#submit_request)
- [submit\_user\_scoped\_request](client_client.Client.md#submit_user_scoped_request)
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

[src/client/client.ts:56](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/client/client.ts#L56)

## Properties

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

[src/client/client.ts:31](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/client/client.ts#L31)

___

### albums

• **albums**: [`Albums`](endpoints_albums.Albums.md)

#### Defined in

[src/client/client.ts:44](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/client/client.ts#L44)

___

### artists

• **artists**: [`Artists`](endpoints_artists.Artists.md)

#### Defined in

[src/client/client.ts:49](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/client/client.ts#L49)

___

### audiobooks

• **audiobooks**: [`Audiobooks`](endpoints_audiobooks.Audiobooks.md)

#### Defined in

[src/client/client.ts:54](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/client/client.ts#L54)

___

### categories

• **categories**: [`Categories`](endpoints_categories.Categories.md)

#### Defined in

[src/client/client.ts:53](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/client/client.ts#L53)

___

### chapters

• **chapters**: [`Chapters`](endpoints_chapter.Chapters.md)

#### Defined in

[src/client/client.ts:50](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/client/client.ts#L50)

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

[src/client/client.ts:30](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/client/client.ts#L30)

___

### episodes

• **episodes**: [`Episodes`](endpoints_episodes.Episodes.md)

#### Defined in

[src/client/client.ts:51](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/client/client.ts#L51)

___

### genres

• **genres**: [`Genres`](endpoints_genres.Genres.md)

#### Defined in

[src/client/client.ts:45](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/client/client.ts#L45)

___

### info

• `Private` **info**: [`InfoType`](../modules/models_client.md#infotype)

#### Defined in

[src/client/client.ts:33](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/client/client.ts#L33)

___

### market

• **market**: [`Markets`](endpoints_markets.Markets.md)

#### Defined in

[src/client/client.ts:48](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/client/client.ts#L48)

___

### player

• **player**: [`Player`](endpoints_player.Player.md)

#### Defined in

[src/client/client.ts:47](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/client/client.ts#L47)

___

### playlists

• **playlists**: [`Playlists`](endpoints_playlists.Playlists.md)

#### Defined in

[src/client/client.ts:52](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/client/client.ts#L52)

___

### search

• **search**: [`Search`](endpoints_search.Search.md)

#### Defined in

[src/client/client.ts:46](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/client/client.ts#L46)

___

### shows

• **shows**: [`Shows`](endpoints_shows.Shows.md)

#### Defined in

[src/client/client.ts:42](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/client/client.ts#L42)

___

### tracks

• **tracks**: [`Tracks`](endpoints_tracks.Tracks.md)

#### Defined in

[src/client/client.ts:43](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/client/client.ts#L43)

___

### users

• **users**: [`Users`](endpoints_users.Users.md)

#### Defined in

[src/client/client.ts:41](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/client/client.ts#L41)

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

[src/client/client.ts:185](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/client/client.ts#L185)

___

### error\_handler

▸ **error_handler**<`T`\>(`status_code`, `input`, `fetchData`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `T`  }\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `status_code` | `number` |
| `input` | `Object` |
| `input.error` | `any` |
| `fetchData` | `Object` |
| `fetchData.body?` | `string` |
| `fetchData.method` | ``"GET"`` \| ``"PUT"`` \| ``"POST"`` \| ``"DELETE"`` |
| `fetchData.object?` | `any` |
| `fetchData.scopes?` | `string`[] |
| `fetchData.token?` | `string` |
| `fetchData.url` | `string` |
| `fetchData.user?` | `boolean` |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `T`  }\>

#### Defined in

[src/client/client.ts:114](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/client/client.ts#L114)

___

### refresh\_token

▸ **refresh_token**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[src/client/client.ts:162](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/client/client.ts#L162)

___

### refresh\_user\_token

▸ **refresh_user_token**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[src/client/client.ts:169](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/client/client.ts#L169)

___

### submit\_request

▸ **submit_request**<`T`\>(`input`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `T`  }\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Object` |
| `input.body?` | `string` |
| `input.method` | ``"GET"`` \| ``"PUT"`` \| ``"POST"`` \| ``"DELETE"`` |
| `input.object?` | `any` |
| `input.scopes?` | `string`[] |
| `input.token?` | `string` |
| `input.url` | `string` |
| `input.user?` | `boolean` |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `T`  }\>

#### Defined in

[src/client/client.ts:81](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/client/client.ts#L81)

___

### submit\_user\_scoped\_request

▸ **submit_user_scoped_request**<`T`\>(`input`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror)  }\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Object` |
| `input.body?` | `string` |
| `input.method` | ``"GET"`` \| ``"PUT"`` \| ``"POST"`` \| ``"DELETE"`` |
| `input.object?` | `any` |
| `input.scopes?` | `string`[] |
| `input.token?` | `string` |
| `input.url` | `string` |
| `input.user?` | `boolean` |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror)  }\>

#### Defined in

[src/client/client.ts:98](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/client/client.ts#L98)

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

[src/client/client.ts:76](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/client/client.ts#L76)
