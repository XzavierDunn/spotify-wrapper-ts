[spotify-wrapper-ts](../README.md) / [Exports](../modules.md) / [endpoints/audiobooks](../modules/endpoints_audiobooks.md) / Audiobooks

# Class: Audiobooks

[endpoints/audiobooks](../modules/endpoints_audiobooks.md).Audiobooks

## Table of contents

### Constructors

- [constructor](endpoints_audiobooks.Audiobooks.md#constructor)

### Properties

- [api\_url](endpoints_audiobooks.Audiobooks.md#api_url)
- [info](endpoints_audiobooks.Audiobooks.md#info)

### Methods

- [check\_users\_saved\_audiobooks](endpoints_audiobooks.Audiobooks.md#check_users_saved_audiobooks)
- [get\_an\_audiobook](endpoints_audiobooks.Audiobooks.md#get_an_audiobook)
- [get\_audiobook\_chapters](endpoints_audiobooks.Audiobooks.md#get_audiobook_chapters)
- [get\_several\_audiobooks](endpoints_audiobooks.Audiobooks.md#get_several_audiobooks)
- [get\_users\_saved\_audiobooks](endpoints_audiobooks.Audiobooks.md#get_users_saved_audiobooks)
- [remove\_users\_saved\_audiobooks](endpoints_audiobooks.Audiobooks.md#remove_users_saved_audiobooks)
- [save\_audiobooks\_for\_current\_user](endpoints_audiobooks.Audiobooks.md#save_audiobooks_for_current_user)

## Constructors

### constructor

• **new Audiobooks**(`info`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`InfoType`](../modules/models_client.md#infotype) |

#### Defined in

[src/endpoints/audiobooks.ts:21](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/audiobooks.ts#L21)

## Properties

### api\_url

• `Private` **api\_url**: `string`

#### Defined in

[src/endpoints/audiobooks.ts:19](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/audiobooks.ts#L19)

___

### info

• `Private` **info**: [`InfoType`](../modules/models_client.md#infotype)

#### Defined in

[src/endpoints/audiobooks.ts:18](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/audiobooks.ts#L18)

## Methods

### check\_users\_saved\_audiobooks

▸ **check_users_saved_audiobooks**(`ids`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `boolean`[]  }\>

Check User's Saved Audiobooks - https://developer.spotify.com/documentation/web-api/reference/check-users-saved-audiobooks
Check if one or more audiobooks are already saved in the current Spotify user's library.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | A comma-separated list of the Spotify IDs. For example: ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ. Maximum: 50 IDs. Example value: "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `boolean`[]  }\>

Promise<{
result?: boolean[];
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- user-library-read

#### Defined in

[src/endpoints/audiobooks.ts:229](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/audiobooks.ts#L229)

___

### get\_an\_audiobook

▸ **get_an_audiobook**(`id`, `market?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `authors`: { name: string; }[] = authors; `available_markets`: `string`[] ; `chapters`: { href: string; total: number; limit: number; offset: number; items: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; available\_markets: string[]; images: { ...; }[]; ... 11 more ...; restrictions?: { ...; } \| undefined; }[]; next?: string \| ... 1 more ... \| u... = chapters; `copyrights`: { type: string; text: string; }[] ; `description`: `string` ; `edition`: `string` ; `explicit`: `boolean` ; `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `html_description`: `string` ; `id`: `string` ; `images`: { url: string \| null; height: number \| null; width: number \| null; }[] ; `languages`: `string`[] ; `media_type`: `string` ; `name`: `string` ; `narrators`: { name: string; }[] = narrators; `publisher`: `string` ; `total_chapters`: `number` ; `type`: `string` ; `uri`: `string`  }  }\>

Get an Audiobook - https://developer.spotify.com/documentation/web-api/reference/get-an-audiobook
Get Spotify catalog information for a single audiobook.
Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The Spotify ID for the audiobook. Example value: "7iHfbu1YPACw6oZPAFJtqe" |
| `market?` | `string` | An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. Note: If neither market or user country are provided, the content is considered unavailable for the client. Users can view the country that is associated with their account in the account settings. Example value: "ES" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `authors`: { name: string; }[] = authors; `available_markets`: `string`[] ; `chapters`: { href: string; total: number; limit: number; offset: number; items: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; available\_markets: string[]; images: { ...; }[]; ... 11 more ...; restrictions?: { ...; } \| undefined; }[]; next?: string \| ... 1 more ... \| u... = chapters; `copyrights`: { type: string; text: string; }[] ; `description`: `string` ; `edition`: `string` ; `explicit`: `boolean` ; `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `html_description`: `string` ; `id`: `string` ; `images`: { url: string \| null; height: number \| null; width: number \| null; }[] ; `languages`: `string`[] ; `media_type`: `string` ; `name`: `string` ; `narrators`: { name: string; }[] = narrators; `publisher`: `string` ; `total_chapters`: `number` ; `type`: `string` ; `uri`: `string`  }  }\>

Promise<{ result?: AudiobookType; error?: CustomError }>

#### Defined in

[src/endpoints/audiobooks.ts:42](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/audiobooks.ts#L42)

___

### get\_audiobook\_chapters

▸ **get_audiobook_chapters**(`id`, `optional?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `href`: `string` ; `items`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; available\_markets: string[]; images: { url: string \| null; height: number \| null; width: number \| null; }[]; ... 11 more ...; restrictions?: { ...; } \| undefined; }[] = SimplifiedChapterObject; `limit`: `number` ; `next?`: ``null`` \| `string` ; `offset`: `number` ; `previous?`: ``null`` \| `string` ; `total`: `number`  }  }\>

Get Audiobook Chapters - https://developer.spotify.com/documentation/web-api/reference/get-audiobook-chapters
Get Spotify catalog information about an audiobook's chapters.
Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `optional?` | `Object` |
| `optional.limit?` | `number` |
| `optional.market?` | `string` |
| `optional.offset?` | `number` |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `href`: `string` ; `items`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; available\_markets: string[]; images: { url: string \| null; height: number \| null; width: number \| null; }[]; ... 11 more ...; restrictions?: { ...; } \| undefined; }[] = SimplifiedChapterObject; `limit`: `number` ; `next?`: ``null`` \| `string` ; `offset`: `number` ; `previous?`: ``null`` \| `string` ; `total`: `number`  }  }\>

Promise<{ result?: ChaptersType; error?: CustomError }>

#### Defined in

[src/endpoints/audiobooks.ts:111](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/audiobooks.ts#L111)

___

### get\_several\_audiobooks

▸ **get_several_audiobooks**(`ids`, `market?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `audiobooks`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; available\_markets: string[]; images: { url: string \| null; height: number \| null; width: number \| null; }[]; ... 11 more ...; chapters: { ...; }; }[]  }  }\>

Get Several Audiobooks - https://developer.spotify.com/documentation/web-api/reference/get-multiple-audiobooks
Get Spotify catalog information for several audiobooks identified by their Spotify IDs.
Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | A comma-separated list of the Spotify IDs. For example: ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ. Maximum: 50 IDs. Example value: "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe" |
| `market?` | `string` | An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. Note: If neither market or user country are provided, the content is considered unavailable for the client. Users can view the country that is associated with their account in the account settings. Example value: "ES" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `audiobooks`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; available\_markets: string[]; images: { url: string \| null; height: number \| null; width: number \| null; }[]; ... 11 more ...; chapters: { ...; }; }[]  }  }\>

Promise<{ result?: SeveralAudiobookType; error?: CustomError }

#### Defined in

[src/endpoints/audiobooks.ts:72](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/audiobooks.ts#L72)

___

### get\_users\_saved\_audiobooks

▸ **get_users_saved_audiobooks**(`optional?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `href`: `string` ; `items`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { url: string \| null; height: number \| null; width: number \| null; }[]; copyrights: { ...; }[]; ... 10 more ...; available\_markets?: string[] \| undefined; }[] ; `limit`: `number` ; `next?`: ``null`` \| `string` ; `offset`: `number` ; `previous?`: ``null`` \| `string` ; `total`: `number`  }  }\>

Get User's Saved Audiobooks - https://developer.spotify.com/documentation/web-api/reference/get-users-saved-audiobooks
Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.

#### Parameters

| Name | Type |
| :------ | :------ |
| `optional?` | `Omit`<{ `limit?`: `number` ; `market?`: `string` ; `offset?`: `number`  }, ``"market"``\> |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `href`: `string` ; `items`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { url: string \| null; height: number \| null; width: number \| null; }[]; copyrights: { ...; }[]; ... 10 more ...; available\_markets?: string[] \| undefined; }[] ; `limit`: `number` ; `next?`: ``null`` \| `string` ; `offset`: `number` ; `previous?`: ``null`` \| `string` ; `total`: `number`  }  }\>

Promise<{
result?: SeveralSimplifiedAudiobooksType;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- user-library-read

#### Defined in

[src/endpoints/audiobooks.ts:147](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/audiobooks.ts#L147)

___

### remove\_users\_saved\_audiobooks

▸ **remove_users_saved_audiobooks**(`ids`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Remove User's Saved Audiobooks - https://developer.spotify.com/documentation/web-api/reference/remove-audiobooks-user
Remove one or more audiobooks from the Spotify user's library.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | A comma-separated list of the Spotify IDs. For example: ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ. Maximum: 50 IDs. Example value: "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Promise<{
result?: string;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- user-library-modify

#### Defined in

[src/endpoints/audiobooks.ts:203](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/audiobooks.ts#L203)

___

### save\_audiobooks\_for\_current\_user

▸ **save_audiobooks_for_current_user**(`ids`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Save Audiobooks for Current User - https://developer.spotify.com/documentation/web-api/reference/save-audiobooks-user
Save one or more audiobooks to the current Spotify user's library.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | A comma-separated list of the Spotify IDs. For example: ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ. Maximum: 50 IDs. Example value: "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Promise<{ result?: string; error?: CustomError }>

**`Scopes`**

Authorization scopes
- user-library-modify

#### Defined in

[src/endpoints/audiobooks.ts:177](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/audiobooks.ts#L177)
