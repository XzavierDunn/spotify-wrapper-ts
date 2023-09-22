[spotify-wrapper-ts](../README.md) / [Exports](../modules.md) / [endpoints/markets](../modules/endpoints_markets.md) / Markets

# Class: Markets

[endpoints/markets](../modules/endpoints_markets.md).Markets

## Table of contents

### Constructors

- [constructor](endpoints_markets.Markets.md#constructor)

### Properties

- [api\_url](endpoints_markets.Markets.md#api_url)
- [info](endpoints_markets.Markets.md#info)

### Methods

- [get\_available\_markets](endpoints_markets.Markets.md#get_available_markets)

## Constructors

### constructor

• **new Markets**(`info`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`InfoType`](../modules/models_client.md#infotype) |

#### Defined in

[src/endpoints/markets.ts:9](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/markets.ts#L9)

## Properties

### api\_url

• `Private` **api\_url**: `string`

#### Defined in

[src/endpoints/markets.ts:7](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/markets.ts#L7)

___

### info

• `Private` **info**: [`InfoType`](../modules/models_client.md#infotype)

#### Defined in

[src/endpoints/markets.ts:6](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/markets.ts#L6)

## Methods

### get\_available\_markets

▸ **get_available_markets**(): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `markets`: `string`[]  }  }\>

Get Available Markets - https://developer.spotify.com/documentation/web-api/reference/get-available-markets
Get the list of markets where Spotify is available.

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `markets`: `string`[]  }  }\>

Promise<{
result?: MarketsType;
error?: CustomError;
}>

#### Defined in

[src/endpoints/markets.ts:23](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/markets.ts#L23)
