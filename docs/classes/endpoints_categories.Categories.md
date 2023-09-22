[spotify-wrapper-ts](../README.md) / [Exports](../modules.md) / [endpoints/categories](../modules/endpoints_categories.md) / Categories

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
| `info` | [`InfoType`](../modules/models_client.md#infotype) |

#### Defined in

[src/endpoints/categories.ts:15](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/categories.ts#L15)

## Properties

### api\_url

• `Private` **api\_url**: `string`

#### Defined in

[src/endpoints/categories.ts:13](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/categories.ts#L13)

___

### info

• `Private` **info**: [`InfoType`](../modules/models_client.md#infotype)

#### Defined in

[src/endpoints/categories.ts:12](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/categories.ts#L12)

## Methods

### get\_several\_browse\_categories

▸ **get_several_browse_categories**(`optional?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `categories`: { href: string; total: number; limit: number; offset: number; items: { href: string; name: string; id: string; icons: { url: string \| null; height: number \| null; width: number \| null; }[]; }[]; next?: string \| null \| undefined; previous?: string \| ... 1 more ... \| undefined; } = Categories }  }\>

Get Several Browse Categories - https://developer.spotify.com/documentation/web-api/reference/get-categories
Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).

#### Parameters

| Name | Type |
| :------ | :------ |
| `optional?` | { `limit?`: `number` ; `market?`: `string` ; `offset?`: `number`  } & { `locale?`: `string`  } |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `categories`: { href: string; total: number; limit: number; offset: number; items: { href: string; name: string; id: string; icons: { url: string \| null; height: number \| null; width: number \| null; }[]; }[]; next?: string \| null \| undefined; previous?: string \| ... 1 more ... \| undefined; } = Categories }  }\>

Promise<{
result?: SeveralCategoriesType;
error?: CustomError;
}>

#### Defined in

[src/endpoints/categories.ts:45](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/categories.ts#L45)

___

### get\_single\_browse\_category

▸ **get_single_browse_category**(`category_id`, `country?`, `locale?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `href`: `string` ; `icons`: { url: string \| null; height: number \| null; width: number \| null; }[] ; `id`: `string` ; `name`: `string`  }  }\>

Get a Single Browse Category - https://developer.spotify.com/documentation/web-api/reference/get-a-category
Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `category_id` | `string` | The Spotify category ID for the category. Example value: "dinner" |
| `country?` | `string` | A country: an ISO 3166-1 alpha-2 country code. Provide this parameter if you want to narrow the list of returned categories to those relevant to a particular country. If omitted, the returned items will be globally relevant. Example value: "SE" |
| `locale?` | `string` | The desired language, consisting of an ISO 639-1 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning "Spanish (Mexico)". Provide this parameter if you want the category metadata returned in a particular language. Note: if locale is not supplied, or if the specified language is not available, all strings will be returned in the Spotify default language (American English). The locale parameter, combined with the country parameter, may give odd results if not carefully matched. For example country=SE&locale=de_DE will return a list of categories relevant to Sweden but as German language strings. Example value: "sv_SE" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `href`: `string` ; `icons`: { url: string \| null; height: number \| null; width: number \| null; }[] ; `id`: `string` ; `name`: `string`  }  }\>

Promise<{
result?: CategoryItemType;
error?: CustomError;
}>

#### Defined in

[src/endpoints/categories.ts:83](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/categories.ts#L83)
