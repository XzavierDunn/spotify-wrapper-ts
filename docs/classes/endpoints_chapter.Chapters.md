[spotify-wrapper-ts](../README.md) / [Exports](../modules.md) / [endpoints/chapter](../modules/endpoints_chapter.md) / Chapters

# Class: Chapters

[endpoints/chapter](../modules/endpoints_chapter.md).Chapters

## Table of contents

### Constructors

- [constructor](endpoints_chapter.Chapters.md#constructor)

### Properties

- [api\_url](endpoints_chapter.Chapters.md#api_url)
- [info](endpoints_chapter.Chapters.md#info)

### Methods

- [get\_a\_chapter](endpoints_chapter.Chapters.md#get_a_chapter)
- [get\_several\_chapters](endpoints_chapter.Chapters.md#get_several_chapters)

## Constructors

### constructor

• **new Chapters**(`info`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`InfoType`](../modules/models_client.md#infotype) |

#### Defined in

[src/endpoints/chapter.ts:14](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/chapter.ts#L14)

## Properties

### api\_url

• `Private` **api\_url**: `string`

#### Defined in

[src/endpoints/chapter.ts:12](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/chapter.ts#L12)

___

### info

• `Private` **info**: [`InfoType`](../modules/models_client.md#infotype)

#### Defined in

[src/endpoints/chapter.ts:11](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/chapter.ts#L11)

## Methods

### get\_a\_chapter

▸ **get_a_chapter**(`id`, `market`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `audio_preview_url`: ``null`` \| `string` ; `audiobook`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { url: string \| null; height: number \| null; width: number \| null; }[]; copyrights: { ...; }[]; ... 10 more ...; available\_markets?: string[] \| undefined; } = SimplifiedAudiobook; `available_markets?`: `string`[] ; `chapter_number`: `number` ; `description`: `string` ; `duration_ms`: `number` ; `explicit`: `boolean` ; `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `html_description`: `string` ; `id`: `string` ; `images`: { url: string \| null; height: number \| null; width: number \| null; }[] ; `is_playable`: `boolean` ; `languages`: `string`[] ; `name`: `string` ; `release_date`: `string` ; `release_date_precision`: `string` ; `restrictions`: { reason: string; } = Restrictions; `resume_point`: { fully\_played: boolean; resume\_position\_ms: number; } = Resume\_Point; `type`: `string` ; `uri`: `string`  }  }\>

Get a Chapter - https://developer.spotify.com/documentation/web-api/reference/get-a-chapter
Get Spotify catalog information for a single chapter.
Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The Spotify ID for the chapter. Example value: "0D5wENdkdwbqlrHoaJ9g29" |
| `market` | `string` | An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. Note: If neither market or user country are provided, the content is considered unavailable for the client. Users can view the country that is associated with their account in the account settings. Example value: "ES" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `audio_preview_url`: ``null`` \| `string` ; `audiobook`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { url: string \| null; height: number \| null; width: number \| null; }[]; copyrights: { ...; }[]; ... 10 more ...; available\_markets?: string[] \| undefined; } = SimplifiedAudiobook; `available_markets?`: `string`[] ; `chapter_number`: `number` ; `description`: `string` ; `duration_ms`: `number` ; `explicit`: `boolean` ; `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `html_description`: `string` ; `id`: `string` ; `images`: { url: string \| null; height: number \| null; width: number \| null; }[] ; `is_playable`: `boolean` ; `languages`: `string`[] ; `name`: `string` ; `release_date`: `string` ; `release_date_precision`: `string` ; `restrictions`: { reason: string; } = Restrictions; `resume_point`: { fully\_played: boolean; resume\_position\_ms: number; } = Resume\_Point; `type`: `string` ; `uri`: `string`  }  }\>

Promise<{
result?: ChapterType;
error?: CustomError;
}>

#### Defined in

[src/endpoints/chapter.ts:38](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/chapter.ts#L38)

___

### get\_several\_chapters

▸ **get_several_chapters**(`ids`, `market`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `chapters`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { url: string \| null; height: number \| null; width: number \| null; }[]; release\_date: string; ... 12 more ...; available\_markets?: string[] \| undefined; }[]  }  }\>

Get Several Chapters - https://developer.spotify.com/documentation/web-api/reference/get-several-chapters
Get Spotify catalog information for several chapters identified by their Spotify IDs.
Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | A comma-separated list of the Spotify IDs. For example: ids=0IsXVP0JmcB2adSE338GkK,3ZXb8FKZGU0EHALYX6uCzU. Maximum: 50 IDs. Example value: "0IsXVP0JmcB2adSE338GkK,3ZXb8FKZGU0EHALYX6uCzU,0D5wENdkdwbqlrHoaJ9g29" |
| `market` | `string` | An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. Note: If neither market or user country are provided, the content is considered unavailable for the client. Users can view the country that is associated with their account in the account settings. Example value: "ES" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `chapters`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { url: string \| null; height: number \| null; width: number \| null; }[]; release\_date: string; ... 12 more ...; available\_markets?: string[] \| undefined; }[]  }  }\>

Promise<{
result?: SeveralChaptersType;
error?: CustomError;
}>

#### Defined in

[src/endpoints/chapter.ts:71](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/chapter.ts#L71)
