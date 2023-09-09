[spotify_wrapper](../README.md) / [Exports](../modules.md) / [endpoints/categories](../modules/endpoints_categories.md) / Categories

# Class: Categories

[endpoints/categories](../modules/endpoints_categories.md).Categories

## Table of contents

### Constructors

- [constructor](endpoints_categories.Categories.md#constructor)

### Properties

- [api\_url](endpoints_categories.Categories.md#api_url)
- [info](endpoints_categories.Categories.md#info)

### Methods

- [get\_several\_browse\_categories](endpoints_categories.Categories.md#get_several_browse_categories)
- [get\_single\_browse\_category](endpoints_categories.Categories.md#get_single_browse_category)

## Constructors

### constructor

• **new Categories**(`info`)

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

[src/endpoints/categories.ts:14](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/categories.ts#L14)

## Properties

### api\_url

• `Private` **api\_url**: `string`

#### Defined in

[src/endpoints/categories.ts:12](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/categories.ts#L12)

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

[src/endpoints/categories.ts:11](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/categories.ts#L11)

## Methods

### get\_several\_browse\_categories

▸ **get_several_browse_categories**(`«destructured»`): `Promise`<{ `error?`: `Error` ; `result?`: { `categories`: { href: string; total: number; limit: number; offset: number; items: { href: string; name: string; id: string; icons: { height: number \| null; width: number \| null; url: string \| null; }[]; }[]; next?: string \| null \| undefined; previous?: string \| ... 1 more ... \| undefined; } = Categories }  }\>

Get Several Browse Categories - https://developer.spotify.com/documentation/web-api/reference/get-categories
Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `country?` | `string` |
| › `limit?` | `number` |
| › `locale?` | `string` |
| › `offset?` | `number` |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `categories`: { href: string; total: number; limit: number; offset: number; items: { href: string; name: string; id: string; icons: { height: number \| null; width: number \| null; url: string \| null; }[]; }[]; next?: string \| null \| undefined; previous?: string \| ... 1 more ... \| undefined; } = Categories }  }\>

Promise<{
result?: SeveralCategoriesType;
error?: Error;
}>

#### Defined in

[src/endpoints/categories.ts:44](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/categories.ts#L44)

___

### get\_single\_browse\_category

▸ **get_single_browse_category**(`«destructured»`): `Promise`<{ `error?`: `Error` ; `result?`: { `href`: `string` ; `icons`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `id`: `string` ; `name`: `string`  }  }\>

Get a Single Browse Category - https://developer.spotify.com/documentation/web-api/reference/get-a-category
Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `category_id` | `string` |
| › `country?` | `string` |
| › `locale?` | `string` |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `href`: `string` ; `icons`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `id`: `string` ; `name`: `string`  }  }\>

Promise<{
result?: CategoryItemType;
error?: Error;
}>

#### Defined in

[src/endpoints/categories.ts:86](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/categories.ts#L86)
