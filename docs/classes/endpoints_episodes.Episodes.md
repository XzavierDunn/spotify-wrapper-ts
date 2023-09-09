[spotify_wrapper](../README.md) / [Exports](../modules.md) / [endpoints/episodes](../modules/endpoints_episodes.md) / Episodes

# Class: Episodes

[endpoints/episodes](../modules/endpoints_episodes.md).Episodes

## Table of contents

### Constructors

- [constructor](endpoints_episodes.Episodes.md#constructor)

### Properties

- [api\_url](endpoints_episodes.Episodes.md#api_url)
- [info](endpoints_episodes.Episodes.md#info)

### Methods

- [check\_users\_saved\_episodes](endpoints_episodes.Episodes.md#check_users_saved_episodes)
- [get\_episode](endpoints_episodes.Episodes.md#get_episode)
- [get\_several\_episodes](endpoints_episodes.Episodes.md#get_several_episodes)
- [get\_users\_saved\_episodes](endpoints_episodes.Episodes.md#get_users_saved_episodes)
- [remove\_users\_saved\_episodes](endpoints_episodes.Episodes.md#remove_users_saved_episodes)
- [save\_episodes\_for\_current\_user](endpoints_episodes.Episodes.md#save_episodes_for_current_user)

## Constructors

### constructor

• **new Episodes**(`info`)

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

[src/endpoints/episodes.ts:17](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/episodes.ts#L17)

## Properties

### api\_url

• `Private` **api\_url**: `string`

#### Defined in

[src/endpoints/episodes.ts:15](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/episodes.ts#L15)

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

[src/endpoints/episodes.ts:14](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/episodes.ts#L14)

## Methods

### check\_users\_saved\_episodes

▸ **check_users_saved_episodes**(`ids`): `Promise`<{ `error?`: `Error` ; `result?`: `boolean`[]  }\>

Check User's Saved Episodes - https://developer.spotify.com/documentation/web-api/reference/check-users-saved-episodes
Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.
This API endpoint is in beta and could change without warning. Please share any feedback that you have, or issues that you discover, in our developer community forum.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | A comma-separated list of the Spotify IDs. Maximum: 50 IDs. Example value: "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf" |

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

[src/endpoints/episodes.ts:212](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/episodes.ts#L212)

___

### get\_episode

▸ **get_episode**(`id`, `market?`): `Promise`<{ `error?`: `Error` ; `result?`: { `audio_preview_url`: `string` ; `description`: `string` ; `duration_ms`: `number` ; `explicit`: `boolean` ; `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `html_description`: `string` ; `id`: `string` ; `images`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `is_externally_hosted`: `boolean` ; `is_playable`: `boolean` ; `language`: `string` ; `languages`: `string`[] ; `name`: `string` ; `release_date`: `string` ; `release_date_precision`: `string` ; `restrictions?`: { reason: string; } ; `resume_point`: { fully\_played: boolean; resume\_position\_ms: number; } = Resume\_Point; `show`: { type: "show"; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; available\_markets: string[]; images: { height: number \| null; width: number \| null; url: string \| null; }[]; ... 8 more ...; total\_episodes: number; } = SimplifiedShow; `type`: `string` ; `uri`: `string`  }  }\>

Get Episode - https://developer.spotify.com/documentation/web-api/reference/get-an-episode
Get Spotify catalog information for a single episode identified by its unique Spotify ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The Spotify ID for the episode. Example value: "512ojhOuo1ktJprKbVcKyQ" |
| `market?` | `string` | An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. Note: If neither market or user country are provided, the content is considered unavailable for the client. Users can view the country that is associated with their account in the account settings. Example value: "ES" |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `audio_preview_url`: `string` ; `description`: `string` ; `duration_ms`: `number` ; `explicit`: `boolean` ; `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `html_description`: `string` ; `id`: `string` ; `images`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `is_externally_hosted`: `boolean` ; `is_playable`: `boolean` ; `language`: `string` ; `languages`: `string`[] ; `name`: `string` ; `release_date`: `string` ; `release_date_precision`: `string` ; `restrictions?`: { reason: string; } ; `resume_point`: { fully\_played: boolean; resume\_position\_ms: number; } = Resume\_Point; `show`: { type: "show"; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; available\_markets: string[]; images: { height: number \| null; width: number \| null; url: string \| null; }[]; ... 8 more ...; total\_episodes: number; } = SimplifiedShow; `type`: `string` ; `uri`: `string`  }  }\>

Promise<{
result?: EpisodeType;
error?: Error;
}>

**`Scopes`**

Authorization scopes
- user-read-playback-position

#### Defined in

[src/endpoints/episodes.ts:42](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/episodes.ts#L42)

___

### get\_several\_episodes

▸ **get_several_episodes**(`ids`, `market?`): `Promise`<{ `error?`: `Error` ; `result?`: { `episodes`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { height: number \| null; width: number \| null; url: string \| null; }[]; release\_date: string; ... 12 more ...; restrictions?: { ...; } \| undefined; }[]  }  }\>

Get Several Episodes - https://developer.spotify.com/documentation/web-api/reference/get-multiple-episodes
Get Spotify catalog information for several episodes based on their Spotify IDs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | A comma-separated list of the Spotify IDs for the episodes. Maximum: 50 IDs. Example value: "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf" |
| `market?` | `string` | An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. Note: If neither market or user country are provided, the content is considered unavailable for the client. Users can view the country that is associated with their account in the account settings. Example value: "ES" |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `episodes`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { height: number \| null; width: number \| null; url: string \| null; }[]; release\_date: string; ... 12 more ...; restrictions?: { ...; } \| undefined; }[]  }  }\>

Promise<{
result?: SeveralEpisodesType;
error?: Error;
}>

**`Scopes`**

Authorization scopes
- user-read-playback-position

#### Defined in

[src/endpoints/episodes.ts:75](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/episodes.ts#L75)

___

### get\_users\_saved\_episodes

▸ **get_users_saved_episodes**(`markets?`, `limit?`, `offset?`): `Promise`<{ `error?`: `Error` ; `result?`: { `href`: `string` ; `items`: { added\_at: string; episode: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { height: number \| null; width: number \| null; url: string \| null; }[]; ... 13 more ...; restrictions?: { ...; } \| undefined; }; }[] ; `limit`: `number` ; `next?`: ``null`` \| `string` ; `offset`: `number` ; `previous?`: ``null`` \| `string` ; `total`: `number`  }  }\>

Get User's Saved Episodes - https://developer.spotify.com/documentation/web-api/reference/get-users-saved-episodes
Get a list of the episodes saved in the current Spotify user's library.
This API endpoint is in beta and could change without warning. Please share any feedback that you have, or issues that you discover, in our developer community forum.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `markets?` | `string` | `undefined` | - |
| `limit` | `number` | `20` | The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50. Example value: 10 Default value: 20 Range: 0 - 50 |
| `offset` | `number` | `0` | The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items. Example value: 5 Default value: 0 |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `href`: `string` ; `items`: { added\_at: string; episode: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { height: number \| null; width: number \| null; url: string \| null; }[]; ... 13 more ...; restrictions?: { ...; } \| undefined; }; }[] ; `limit`: `number` ; `next?`: ``null`` \| `string` ; `offset`: `number` ; `previous?`: ``null`` \| `string` ; `total`: `number`  }  }\>

Promise<{
result?: EpisodesType;
error?: Error;
}>

**`Scopes`**

Authorization scopes
- user-library-read
- user-read-playback-position

#### Defined in

[src/endpoints/episodes.ts:121](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/episodes.ts#L121)

___

### remove\_users\_saved\_episodes

▸ **remove_users_saved_episodes**(`ids`): `Promise`<{ `error?`: `Error` ; `result?`: `string`  }\>

Remove User's Saved Episodes - https://developer.spotify.com/documentation/web-api/reference/remove-episodes-user
Remove one or more episodes from the current user's library.
This API endpoint is in beta and could change without warning. Please share any feedback that you have, or issues that you discover, in our developer community forum.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | A comma-separated list of the Spotify IDs. Maximum: 50 IDs. Example value: "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf" |

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

[src/endpoints/episodes.ts:186](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/episodes.ts#L186)

___

### save\_episodes\_for\_current\_user

▸ **save_episodes_for_current_user**(`ids`): `Promise`<{ `error?`: `Error` ; `result?`: `string`  }\>

Save Episodes for Current User - https://developer.spotify.com/documentation/web-api/reference/save-episodes-user
Save one or more episodes to the current user's library.
This API endpoint is in beta and could change without warning. Please share any feedback that you have, or issues that you discover, in our developer community forum.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | A comma-separated list of the Spotify IDs. Maximum: 50 IDs. Example value: "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf" |

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

[src/endpoints/episodes.ts:155](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/episodes.ts#L155)
