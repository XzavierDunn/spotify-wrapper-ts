[spotify_wrapper](../README.md) / [Exports](../modules.md) / [endpoints/shows](../modules/endpoints_shows.md) / Shows

# Class: Shows

[endpoints/shows](../modules/endpoints_shows.md).Shows

## Table of contents

### Constructors

- [constructor](endpoints_shows.Shows.md#constructor)

### Properties

- [api\_url](endpoints_shows.Shows.md#api_url)
- [info](endpoints_shows.Shows.md#info)

### Methods

- [check\_users\_saved\_shows](endpoints_shows.Shows.md#check_users_saved_shows)
- [get\_several\_shows](endpoints_shows.Shows.md#get_several_shows)
- [get\_show](endpoints_shows.Shows.md#get_show)
- [get\_show\_episodes](endpoints_shows.Shows.md#get_show_episodes)
- [get\_users\_saved\_shows](endpoints_shows.Shows.md#get_users_saved_shows)
- [remove\_users\_saved\_shows](endpoints_shows.Shows.md#remove_users_saved_shows)
- [save\_shows\_for\_current\_user](endpoints_shows.Shows.md#save_shows_for_current_user)

## Constructors

### constructor

• **new Shows**(`info`)

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

[src/endpoints/shows.ts:16](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/shows.ts#L16)

## Properties

### api\_url

• `Private` **api\_url**: `string`

#### Defined in

[src/endpoints/shows.ts:14](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/shows.ts#L14)

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

[src/endpoints/shows.ts:13](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/shows.ts#L13)

## Methods

### check\_users\_saved\_shows

▸ **check_users_saved_shows**(`ids`): `Promise`<{ `error?`: `Error` ; `result?`: `boolean`[]  }\>

Check User's Saved Shows - https://developer.spotify.com/documentation/web-api/reference/check-users-saved-shows
Check if one or more shows is already saved in the current Spotify user's library.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | A comma-separated list of the Spotify IDs for the shows. Maximum: 50 IDs. Example value: "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ" |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: `boolean`[]  }\>

Promise<{
result?: boo;
error?: Error;
}>

**`Scopes`**

Authorization scopes
- user-library-read

#### Defined in

[src/endpoints/shows.ts:229](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/shows.ts#L229)

___

### get\_several\_shows

▸ **get_several_shows**(`ids`, `market`): `Promise`<{ `error?`: `Error` ; `result?`: { `shows`: (``null`` \| { type: "show"; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; available\_markets: string[]; images: { height: number \| null; width: number \| null; url: string \| null; }[]; ... 8 more ...; total\_episodes: number; })[]  }  }\>

Get Several Shows - https://developer.spotify.com/documentation/web-api/reference/get-multiple-shows
Get Spotify catalog information for several shows based on their Spotify IDs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | A comma-separated list of the Spotify IDs for the shows. Maximum: 50 IDs. Example value: "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ" |
| `market` | `string` | An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. Note: If neither market or user country are provided, the content is considered unavailable for the client. Users can view the country that is associated with their account in the account settings. Example value: "ES" |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `shows`: (``null`` \| { type: "show"; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; available\_markets: string[]; images: { height: number \| null; width: number \| null; url: string \| null; }[]; ... 8 more ...; total\_episodes: number; })[]  }  }\>

Promise<{
result?: SetofSimplifiedShowsType;
error?: Error;
}>

#### Defined in

[src/endpoints/shows.ts:69](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/shows.ts#L69)

___

### get\_show

▸ **get_show**(`id`, `market?`): `Promise`<{ `error?`: `Error` ; `result?`: { `available_markets`: `string`[] ; `copyrights`: { type: string; text: string; }[] ; `description`: `string` ; `episodes`: { href: string; total: number; limit: number; next: string \| null; offset: number; previous: string \| null; items: { type: "episode"; href: string; external\_urls: { spotify: string; }; name: string; ... 15 more ...; restrictions?: { ...; } \| undefined; }[]; } = SeveralSimplifiedEpisode; `explicit`: `boolean` ; `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `html_description`: `string` ; `id`: `string` ; `images`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `is_externally_hosted`: `boolean` ; `languages`: `string`[] ; `media_type`: `string` ; `name`: `string` ; `publisher`: `string` ; `total_episodes`: `number` ; `type`: ``"show"`` ; `uri`: `string`  }  }\>

Get Show - https://developer.spotify.com/documentation/web-api/reference/get-a-show
Get Spotify catalog information for a single show identified by its unique Spotify ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The Spotify ID for the show. Example value: "38bS44xjbVVZ3No3ByF1dJ" |
| `market?` | `string` | An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. Note: If neither market or user country are provided, the content is considered unavailable for the client. Users can view the country that is associated with their account in the account settings. Example value: "ES" |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `available_markets`: `string`[] ; `copyrights`: { type: string; text: string; }[] ; `description`: `string` ; `episodes`: { href: string; total: number; limit: number; next: string \| null; offset: number; previous: string \| null; items: { type: "episode"; href: string; external\_urls: { spotify: string; }; name: string; ... 15 more ...; restrictions?: { ...; } \| undefined; }[]; } = SeveralSimplifiedEpisode; `explicit`: `boolean` ; `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `html_description`: `string` ; `id`: `string` ; `images`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `is_externally_hosted`: `boolean` ; `languages`: `string`[] ; `media_type`: `string` ; `name`: `string` ; `publisher`: `string` ; `total_episodes`: `number` ; `type`: ``"show"`` ; `uri`: `string`  }  }\>

Promise<{
result?: ShowType;
error?: Error;
}>

**`Scopes`**

Authorization scopes
- user-read-playback-position

#### Defined in

[src/endpoints/shows.ts:41](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/shows.ts#L41)

___

### get\_show\_episodes

▸ **get_show_episodes**(`id`, `market?`, `limit?`, `offset?`): `Promise`<{ `error?`: `Error` ; `result?`: { `href`: `string` ; `items`: { type: "episode"; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { height: number \| null; width: number \| null; url: string \| null; }[]; release\_date: string; ... 11 more ...; restrictions?: { ...; } \| undefined; }[] ; `limit`: `number` ; `next?`: ``null`` \| `string` ; `offset`: `number` ; `previous?`: ``null`` \| `string` ; `total`: `number`  }  }\>

Get Show Episodes - https://developer.spotify.com/documentation/web-api/reference/get-a-shows-episodes
Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `string` | `undefined` | The Spotify ID for the show. Example value: "38bS44xjbVVZ3No3ByF1dJ" |
| `market?` | `string` | `undefined` | An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. Note: If neither market or user country are provided, the content is considered unavailable for the client. Users can view the country that is associated with their account in the account settings. Example value: "ES" |
| `limit` | `number` | `20` | The maximum number of items to return. Example value: 10 Default value: 20 Range: 0 - 50 |
| `offset` | `number` | `0` | The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items. Example value: 5 Default value: 0 |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `href`: `string` ; `items`: { type: "episode"; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { height: number \| null; width: number \| null; url: string \| null; }[]; release\_date: string; ... 11 more ...; restrictions?: { ...; } \| undefined; }[] ; `limit`: `number` ; `next?`: ``null`` \| `string` ; `offset`: `number` ; `previous?`: ``null`` \| `string` ; `total`: `number`  }  }\>

Promise<{
result?: PagesofEpisodesType;
error?: Error;
}>

**`Scopes`**

Authorization scopes
- user-read-playback-position

#### Defined in

[src/endpoints/shows.ts:112](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/shows.ts#L112)

___

### get\_users\_saved\_shows

▸ **get_users_saved_shows**(`limit?`, `offset?`): `Promise`<{ `error?`: `Error` ; `result?`: { `href`: `string` ; `items?`: ``null`` \| { added\_at: string; show: { type: "show"; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; available\_markets: string[]; images: { height: number \| null; width: number \| null; url: string \| null; }[]; ... 8 more ...; total\_episodes: number; }; }[] ; `limit`: `number` ; `next`: ``null`` \| `string` ; `offset`: `number` ; `previous`: ``null`` \| `string` ; `total`: `number`  }  }\>

Get User's Saved Shows - https://developer.spotify.com/documentation/web-api/reference/get-users-saved-shows
Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `limit` | `number` | `20` | The maximum number of items to return. Example value: 10 Default value: 20 Range: 0 - 50 |
| `offset` | `number` | `0` | The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items. Example value: 5 Default value: 0 |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `href`: `string` ; `items?`: ``null`` \| { added\_at: string; show: { type: "show"; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; available\_markets: string[]; images: { height: number \| null; width: number \| null; url: string \| null; }[]; ... 8 more ...; total\_episodes: number; }; }[] ; `limit`: `number` ; `next`: ``null`` \| `string` ; `offset`: `number` ; `previous`: ``null`` \| `string` ; `total`: `number`  }  }\>

Promise<{
result?: PagesofShowsType;
error?: Error;
}>

**`Scopes`**

Authorization scopes
- user-library-read

#### Defined in

[src/endpoints/shows.ts:149](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/shows.ts#L149)

___

### remove\_users\_saved\_shows

▸ **remove_users_saved_shows**(`ids`, `market?`): `Promise`<{ `error?`: `Error` ; `result?`: `string`  }\>

Remove User's Saved Shows - https://developer.spotify.com/documentation/web-api/reference/remove-shows-user
Delete one or more shows from current Spotify user's library.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | A comma-separated list of the Spotify IDs for the shows. Maximum: 50 IDs. Example value: "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ" |
| `market?` | `string` | An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. Note: If neither market or user country are provided, the content is considered unavailable for the client. Users can view the country that is associated with their account in the account settings. Example value: "ES" |

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

[src/endpoints/shows.ts:205](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/shows.ts#L205)

___

### save\_shows\_for\_current\_user

▸ **save_shows_for_current_user**(`ids`): `Promise`<{ `error?`: `Error` ; `result?`: `string`  }\>

Save Shows for Current User - https://developer.spotify.com/documentation/web-api/reference/save-shows-user
Save one or more shows to current Spotify user's library.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | A comma-separated list of the Spotify IDs for the shows. Maximum: 50 IDs. Example value: "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ" |

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

[src/endpoints/shows.ts:177](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/shows.ts#L177)
