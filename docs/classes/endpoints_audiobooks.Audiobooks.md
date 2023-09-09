[spotify_wrapper](../README.md) / [Exports](../modules.md) / [endpoints/audiobooks](../modules/endpoints_audiobooks.md) / Audiobooks

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
| `info` | `Object` |
| `info.api_url` | `string` |
| `info.client_access_token` | `string` |
| `info.refresh_token_function` | (...`args`: `unknown`[]) => `unknown` |
| `info.refresh_user_token_function` | (...`args`: `unknown`[]) => `unknown` |
| `info.user_access_token` | `string` |

#### Defined in

[src/endpoints/audiobooks.ts:21](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/audiobooks.ts#L21)

## Properties

### api\_url

• `Private` **api\_url**: `string`

#### Defined in

[src/endpoints/audiobooks.ts:19](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/audiobooks.ts#L19)

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

[src/endpoints/audiobooks.ts:18](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/audiobooks.ts#L18)

## Methods

### check\_users\_saved\_audiobooks

▸ **check_users_saved_audiobooks**(`ids`): `Promise`<{ `error?`: `Error` ; `result?`: `boolean`[]  }\>

Check User's Saved Audiobooks - https://developer.spotify.com/documentation/web-api/reference/check-users-saved-audiobooks
Check if one or more audiobooks are already saved in the current Spotify user's library.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | A comma-separated list of the Spotify IDs. For example: ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ. Maximum: 50 IDs. Example value: "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe" |

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

[src/endpoints/audiobooks.ts:251](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/audiobooks.ts#L251)

___

### get\_an\_audiobook

▸ **get_an_audiobook**(`«destructured»`): `Promise`<{ `error?`: `Error` ; `result?`: { `authors`: { name: string; }[] = authors; `available_markets`: `string`[] ; `chapters`: { href: string; total: number; limit: number; offset: number; items: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; available\_markets: string[]; images: { ...; }[]; ... 11 more ...; restrictions?: { ...; } \| undefined; }[]; next?: string \| ... 1 more ... \| u... = chapters; `copyrights`: { type: string; text: string; }[] ; `description`: `string` ; `edition`: `string` ; `explicit`: `boolean` ; `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `html_description`: `string` ; `id`: `string` ; `images`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `languages`: `string`[] ; `media_type`: `string` ; `name`: `string` ; `narrators`: { name: string; }[] = narrators; `publisher`: `string` ; `total_chapters`: `number` ; `type`: `string` ; `uri`: `string`  }  }\>

Get an Audiobook - https://developer.spotify.com/documentation/web-api/reference/get-an-audiobook
Get Spotify catalog information for a single audiobook.
Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `id` | `string` |
| › `market?` | `string` |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `authors`: { name: string; }[] = authors; `available_markets`: `string`[] ; `chapters`: { href: string; total: number; limit: number; offset: number; items: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; available\_markets: string[]; images: { ...; }[]; ... 11 more ...; restrictions?: { ...; } \| undefined; }[]; next?: string \| ... 1 more ... \| u... = chapters; `copyrights`: { type: string; text: string; }[] ; `description`: `string` ; `edition`: `string` ; `explicit`: `boolean` ; `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `html_description`: `string` ; `id`: `string` ; `images`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `languages`: `string`[] ; `media_type`: `string` ; `name`: `string` ; `narrators`: { name: string; }[] = narrators; `publisher`: `string` ; `total_chapters`: `number` ; `type`: `string` ; `uri`: `string`  }  }\>

Promise<{
result?: AudiobookType;
error?: Error;
}>

#### Defined in

[src/endpoints/audiobooks.ts:45](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/audiobooks.ts#L45)

___

### get\_audiobook\_chapters

▸ **get_audiobook_chapters**(`«destructured»`): `Promise`<{ `error?`: `Error` ; `result?`: { `href`: `string` ; `items`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; available\_markets: string[]; images: { height: number \| null; width: number \| null; url: string \| null; }[]; ... 11 more ...; restrictions?: { ...; } \| undefined; }[] = SimplifiedChapterObject; `limit`: `number` ; `next?`: ``null`` \| `string` ; `offset`: `number` ; `previous?`: ``null`` \| `string` ; `total`: `number`  }  }\>

Get Audiobook Chapters - https://developer.spotify.com/documentation/web-api/reference/get-audiobook-chapters
Get Spotify catalog information about an audiobook's chapters.
Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `id` | `string` |
| › `limit?` | `number` |
| › `market?` | `string` |
| › `offset?` | `number` |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `href`: `string` ; `items`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; available\_markets: string[]; images: { height: number \| null; width: number \| null; url: string \| null; }[]; ... 11 more ...; restrictions?: { ...; } \| undefined; }[] = SimplifiedChapterObject; `limit`: `number` ; `next?`: ``null`` \| `string` ; `offset`: `number` ; `previous?`: ``null`` \| `string` ; `total`: `number`  }  }\>

Promise<{
result?: ChaptersType;
error?: Error;
}>

#### Defined in

[src/endpoints/audiobooks.ts:128](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/audiobooks.ts#L128)

___

### get\_several\_audiobooks

▸ **get_several_audiobooks**(`«destructured»`): `Promise`<{ `error?`: `Error` ; `result?`: { `audiobooks`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; available\_markets: string[]; images: { height: number \| null; width: number \| null; url: string \| null; }[]; ... 11 more ...; chapters: { ...; }; }[]  }  }\>

Get Several Audiobooks - https://developer.spotify.com/documentation/web-api/reference/get-multiple-audiobooks
Get Spotify catalog information for several audiobooks identified by their Spotify IDs.
Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `ids` | `string`[] |
| › `market?` | `string` |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `audiobooks`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; available\_markets: string[]; images: { height: number \| null; width: number \| null; url: string \| null; }[]; ... 11 more ...; chapters: { ...; }; }[]  }  }\>

Promise<{
result?: SeveralAudiobookType;
error?: Error;
}>

#### Defined in

[src/endpoints/audiobooks.ts:82](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/audiobooks.ts#L82)

___

### get\_users\_saved\_audiobooks

▸ **get_users_saved_audiobooks**(`«destructured»`): `Promise`<{ `error?`: `Error` ; `result?`: { `href`: `string` ; `items`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { height: number \| null; width: number \| null; url: string \| null; }[]; copyrights: { ...; }[]; ... 10 more ...; available\_markets?: string[] \| undefined; }[] ; `limit`: `number` ; `next?`: ``null`` \| `string` ; `offset`: `number` ; `previous?`: ``null`` \| `string` ; `total`: `number`  }  }\>

Get User's Saved Audiobooks - https://developer.spotify.com/documentation/web-api/reference/get-users-saved-audiobooks
Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `offset?` | `number` |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `href`: `string` ; `items`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { height: number \| null; width: number \| null; url: string \| null; }[]; copyrights: { ...; }[]; ... 10 more ...; available\_markets?: string[] \| undefined; }[] ; `limit`: `number` ; `next?`: ``null`` \| `string` ; `offset`: `number` ; `previous?`: ``null`` \| `string` ; `total`: `number`  }  }\>

Promise<{
result?: SeveralSimplifiedAudiobooksType;
error?: Error;
}>

**`Scopes`**

Authorization scopes
- user-library-read

#### Defined in

[src/endpoints/audiobooks.ts:170](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/audiobooks.ts#L170)

___

### remove\_users\_saved\_audiobooks

▸ **remove_users_saved_audiobooks**(`ids`): `Promise`<{ `error?`: `Error` ; `result?`: `string`  }\>

Remove User's Saved Audiobooks - https://developer.spotify.com/documentation/web-api/reference/remove-audiobooks-user
Remove one or more audiobooks from the Spotify user's library.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | A comma-separated list of the Spotify IDs. For example: ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ. Maximum: 50 IDs. Example value: "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe" |

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

[src/endpoints/audiobooks.ts:227](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/audiobooks.ts#L227)

___

### save\_audiobooks\_for\_current\_user

▸ **save_audiobooks_for_current_user**(`ids`): `Promise`<{ `error?`: `Error` ; `result?`: `string`  }\>

Save Audiobooks for Current User - https://developer.spotify.com/documentation/web-api/reference/save-audiobooks-user
Save one or more audiobooks to the current Spotify user's library.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | A comma-separated list of the Spotify IDs. For example: ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ. Maximum: 50 IDs. Example value: "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe" |

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

[src/endpoints/audiobooks.ts:203](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/audiobooks.ts#L203)
