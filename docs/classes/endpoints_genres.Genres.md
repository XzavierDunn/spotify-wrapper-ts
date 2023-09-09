[spotify_wrapper](../README.md) / [Exports](../modules.md) / [endpoints/genres](../modules/endpoints_genres.md) / Genres

# Class: Genres

[endpoints/genres](../modules/endpoints_genres.md).Genres

## Table of contents

### Constructors

- [constructor](endpoints_genres.Genres.md#constructor)

### Properties

- [api\_url](endpoints_genres.Genres.md#api_url)
- [info](endpoints_genres.Genres.md#info)

### Methods

- [get\_available\_genre\_seeds](endpoints_genres.Genres.md#get_available_genre_seeds)

## Constructors

### constructor

• **new Genres**(`info`)

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

[src/endpoints/genres.ts:9](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/genres.ts#L9)

## Properties

### api\_url

• `Private` **api\_url**: `string`

#### Defined in

[src/endpoints/genres.ts:7](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/genres.ts#L7)

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

[src/endpoints/genres.ts:6](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/genres.ts#L6)

## Methods

### get\_available\_genre\_seeds

▸ **get_available_genre_seeds**(): `Promise`<{ `error?`: `Error` ; `result?`: { `genres`: `string`[]  }  }\>

Get Available Genre Seeds - https://developer.spotify.com/documentation/web-api/reference/get-recommendation-genres
Retrieve a list of available genres seed parameter values for recommendations.

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `genres`: `string`[]  }  }\>

Promise<{
result?: GenresType;
error?: Error;
}>

#### Defined in

[src/endpoints/genres.ts:23](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/genres.ts#L23)
