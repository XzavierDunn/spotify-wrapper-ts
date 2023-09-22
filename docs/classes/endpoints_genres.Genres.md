[spotify-wrapper-ts](../README.md) / [Exports](../modules.md) / [endpoints/genres](../modules/endpoints_genres.md) / Genres

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
| `info` | [`InfoType`](../modules/models_client.md#infotype) |

#### Defined in

[src/endpoints/genres.ts:8](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/genres.ts#L8)

## Properties

### api\_url

• `Private` **api\_url**: `string`

#### Defined in

[src/endpoints/genres.ts:6](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/genres.ts#L6)

___

### info

• `Private` **info**: [`InfoType`](../modules/models_client.md#infotype)

#### Defined in

[src/endpoints/genres.ts:5](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/genres.ts#L5)

## Methods

### get\_available\_genre\_seeds

▸ **get_available_genre_seeds**(): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `genres`: `string`[]  }  }\>

Get Available Genre Seeds - https://developer.spotify.com/documentation/web-api/reference/get-recommendation-genres
Retrieve a list of available genres seed parameter values for recommendations.

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `genres`: `string`[]  }  }\>

Promise<{
result?: GenresType;
error?: CustomError;
}>

#### Defined in

[src/endpoints/genres.ts:22](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/genres.ts#L22)
