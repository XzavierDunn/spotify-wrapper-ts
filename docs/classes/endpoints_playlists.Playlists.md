[spotify-wrapper-ts](../README.md) / [Exports](../modules.md) / [endpoints/playlists](../modules/endpoints_playlists.md) / Playlists

# Class: Playlists

[endpoints/playlists](../modules/endpoints_playlists.md).Playlists

## Table of contents

### Constructors

- [constructor](endpoints_playlists.Playlists.md#constructor)

### Properties

- [api\_url](endpoints_playlists.Playlists.md#api_url)
- [info](endpoints_playlists.Playlists.md#info)

### Methods

- [add\_custom\_playlist\_cover\_image](endpoints_playlists.Playlists.md#add_custom_playlist_cover_image)
- [add\_items\_to\_playlist](endpoints_playlists.Playlists.md#add_items_to_playlist)
- [change\_playlist\_details](endpoints_playlists.Playlists.md#change_playlist_details)
- [create\_playlist](endpoints_playlists.Playlists.md#create_playlist)
- [get\_categorys\_playlists](endpoints_playlists.Playlists.md#get_categorys_playlists)
- [get\_current\_users\_playlists](endpoints_playlists.Playlists.md#get_current_users_playlists)
- [get\_featured\_playlists](endpoints_playlists.Playlists.md#get_featured_playlists)
- [get\_playlist](endpoints_playlists.Playlists.md#get_playlist)
- [get\_playlist\_cover\_image](endpoints_playlists.Playlists.md#get_playlist_cover_image)
- [get\_playlist\_items](endpoints_playlists.Playlists.md#get_playlist_items)
- [get\_users\_playlists](endpoints_playlists.Playlists.md#get_users_playlists)
- [remove\_playlist\_items](endpoints_playlists.Playlists.md#remove_playlist_items)
- [update\_playlist\_items](endpoints_playlists.Playlists.md#update_playlist_items)

## Constructors

### constructor

• **new Playlists**(`info`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`InfoType`](../modules/models_client.md#infotype) |

#### Defined in

[src/endpoints/playlists.ts:22](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/playlists.ts#L22)

## Properties

### api\_url

• `Private` **api\_url**: `string`

#### Defined in

[src/endpoints/playlists.ts:20](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/playlists.ts#L20)

___

### info

• `Private` **info**: [`InfoType`](../modules/models_client.md#infotype)

#### Defined in

[src/endpoints/playlists.ts:19](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/playlists.ts#L19)

## Methods

### add\_custom\_playlist\_cover\_image

▸ **add_custom_playlist_cover_image**(`playlist_id`, `image`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Add Custom Playlist Cover Image - https://developer.spotify.com/documentation/web-api/reference/upload-custom-playlist-cover
Replace the image used to represent a specific playlist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playlist_id` | `string` | The Spotify ID of the playlist. Example value: "3cEYpjA9oz9GiPac4AsH4n" |
| `image` | `string` | Base64 encoded JPEG image data, maximum payload size is 256 KB. Example value: "/9j/2wCEABoZGSccJz4lJT5CLy8vQkc9Ozs9R0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0cBHCcnMyYzPSYmPUc9Mj1HR0dEREdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR//dAAQAAf/uAA5BZG9iZQBkwAAAAAH/wAARCAABAAEDACIAAREBAhEB/8QASwABAQAAAAAAAAAAAAAAAAAAAAYBAQAAAAAAAAAAAAAAAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAARAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwAAARECEQA/AJgAH//Z" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Promise<{
result?: string;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- ugc-image-upload
- playlist-modify-public
- playlist-modify-private

#### Defined in

[src/endpoints/playlists.ts:630](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/playlists.ts#L630)

___

### add\_items\_to\_playlist

▸ **add_items_to_playlist**(`playlist_id`, `uris`, `position?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `snapshot_id`: `string`  }  }\>

Add Items to Playlist - https://developer.spotify.com/documentation/web-api/reference/add-tracks-to-playlist
Add one or more items to a user's playlist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playlist_id` | `string` | The Spotify ID of the playlist. Example value: "3cEYpjA9oz9GiPac4AsH4n" |
| `uris` | `string`[] | A comma-separated list of Spotify URIs to set, can be track or episode URIs. For example: uris=spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M,spotify:episode:512ojhOuo1ktJprKbVcKyQ A maximum of 100 items can be set in one request. |
| `position?` | `number` | The position to insert the items, a zero-based index. For example, to insert the items in the first position: position=0; to insert the items in the third position: position=2. If omitted, the items will be appended to the playlist. Items are added in the order they are listed in the query string or request body. Example value: 0 |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `snapshot_id`: `string`  }  }\>

Promise<{
result?: SnapshotType;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- playlist-modify-public
- playlist-modify-private

#### Defined in

[src/endpoints/playlists.ts:283](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/playlists.ts#L283)

___

### change\_playlist\_details

▸ **change_playlist_details**(`playlist_id`, `optional?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Change Playlist Details - https://developer.spotify.com/documentation/web-api/reference/change-playlist-details
Change a playlist's name and public/private state. (The user must, of course, own the playlist.)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playlist_id` | `string` | The Spotify ID of the playlist. Example value: "3cEYpjA9oz9GiPac4AsH4n" |
| `optional?` | `Object` | - |
| `optional.collaborative?` | `boolean` | - |
| `optional.description?` | `string` | - |
| `optional.name?` | `string` | - |
| `optional.public_playlist?` | `boolean` | - |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Promise<{
result?: string;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- playlist-modify-public
- playlist-modify-private

#### Defined in

[src/endpoints/playlists.ts:100](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/playlists.ts#L100)

___

### create\_playlist

▸ **create_playlist**(`user_id`, `name`, `optional?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `collaborative`: `boolean` ; `description`: `string` ; `external_urls`: { spotify: string; } = ExternalUrls; `followers`: { href: string \| null; total: number; } = Followers; `href`: `string` ; `id`: `string` ; `images`: { url: string \| null; height: number \| null; width: number \| null; }[] ; `name`: `string` ; `owner`: { type: string; href: string; external\_urls: { spotify: string; }; id: string; uri: string; display\_name: string; followers?: { href: string \| null; total: number; } \| undefined; } = Owner; `public`: `boolean` ; `snapshot_id`: `string` ; `tracks`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } = PlaylistTracks; `type`: `string` ; `uri`: `string`  }  }\>

Create Playlist - https://developer.spotify.com/documentation/web-api/reference/create-playlist
Create a playlist for a Spotify user. (The playlist will be empty until you add tracks.)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user_id` | `string` | The user's Spotify user ID. Example value: "smedjan" |
| `name` | `string` | The name for the new playlist, for example "Your Coolest Playlist". This name does not need to be unique; a user may have several playlists with the same name. |
| `optional?` | `Object` | - |
| `optional.collaborative?` | `boolean` | - |
| `optional.description?` | `string` | - |
| `optional.public_playlist?` | `boolean` | - |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `collaborative`: `boolean` ; `description`: `string` ; `external_urls`: { spotify: string; } = ExternalUrls; `followers`: { href: string \| null; total: number; } = Followers; `href`: `string` ; `id`: `string` ; `images`: { url: string \| null; height: number \| null; width: number \| null; }[] ; `name`: `string` ; `owner`: { type: string; href: string; external\_urls: { spotify: string; }; id: string; uri: string; display\_name: string; followers?: { href: string \| null; total: number; } \| undefined; } = Owner; `public`: `boolean` ; `snapshot_id`: `string` ; `tracks`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } = PlaylistTracks; `type`: `string` ; `uri`: `string`  }  }\>

Promise<{
result?: PlaylistType;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- playlist-modify-public
- playlist-modify-private

#### Defined in

[src/endpoints/playlists.ts:462](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/playlists.ts#L462)

___

### get\_categorys\_playlists

▸ **get_categorys_playlists**(`category_id`, `optional?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `message?`: ``null`` \| `string` ; `playlists`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } = SeveralSimplifiedPlaylists }  }\>

Get Category's Playlists - https://developer.spotify.com/documentation/web-api/reference/get-a-categories-playlists
Get a list of Spotify playlists tagged with a particular category.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `category_id` | `string` | The Spotify category ID for the category. Example value: "dinner" |
| `optional?` | `Object` | - |
| `optional.limit?` | `number` | - |
| `optional.market?` | `string` | - |
| `optional.offset?` | `number` | - |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `message?`: ``null`` \| `string` ; `playlists`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } = SeveralSimplifiedPlaylists }  }\>

Promise<{
result?: PagedPlaylistsType;
error?: CustomError;
}>

#### Defined in

[src/endpoints/playlists.ts:568](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/playlists.ts#L568)

___

### get\_current\_users\_playlists

▸ **get_current_users_playlists**(`optional?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `href?`: `string` ; `items?`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { url: string \| null; height: number \| null; width: number \| null; }[]; tracks: { href: string; total: number; }; ... 4 more ...; snapshot\_id: string; }[] ; `limit?`: `number` ; `next?`: ``null`` \| `string` ; `offset?`: `number` ; `previous?`: ``null`` \| `string` ; `total?`: `number`  }  }\>

Get Current User's Playlists - https://developer.spotify.com/documentation/web-api/reference/get-a-list-of-current-users-playlists
Get a list of the playlists owned or followed by the current Spotify user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `optional?` | `Omit`<{ `limit?`: `number` ; `market?`: `string` ; `offset?`: `number`  }, ``"market"``\> |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `href?`: `string` ; `items?`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { url: string \| null; height: number \| null; width: number \| null; }[]; tracks: { href: string; total: number; }; ... 4 more ...; snapshot\_id: string; }[] ; `limit?`: `number` ; `next?`: ``null`` \| `string` ; `offset?`: `number` ; `previous?`: ``null`` \| `string` ; `total?`: `number`  }  }\>

Promise<{
result?: SeveralSimplifiedPlaylistsType;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- playlist-read-private

#### Defined in

[src/endpoints/playlists.ts:370](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/playlists.ts#L370)

___

### get\_featured\_playlists

▸ **get_featured_playlists**(`optional?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `message?`: ``null`` \| `string` ; `playlists`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } = SeveralSimplifiedPlaylists }  }\>

Get Featured Playlists - https://developer.spotify.com/documentation/web-api/reference/get-featured-playlists
Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).

#### Parameters

| Name | Type |
| :------ | :------ |
| `optional?` | { `limit?`: `number` ; `market?`: `string` ; `offset?`: `number`  } & { `country?`: `string` ; `timestamp?`: `string`  } |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `message?`: ``null`` \| `string` ; `playlists`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } = SeveralSimplifiedPlaylists }  }\>

Promise<{
result?: PagedPlaylistsType;
error?: CustomError;
}>

#### Defined in

[src/endpoints/playlists.ts:521](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/playlists.ts#L521)

___

### get\_playlist

▸ **get_playlist**(`playlist_id`, `optional?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `collaborative`: `boolean` ; `description`: `string` ; `external_urls`: { spotify: string; } = ExternalUrls; `followers`: { href: string \| null; total: number; } = Followers; `href`: `string` ; `id`: `string` ; `images`: { url: string \| null; height: number \| null; width: number \| null; }[] ; `name`: `string` ; `owner`: { type: string; href: string; external\_urls: { spotify: string; }; id: string; uri: string; display\_name: string; followers?: { href: string \| null; total: number; } \| undefined; } = Owner; `public`: `boolean` ; `snapshot_id`: `string` ; `tracks`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } = PlaylistTracks; `type`: `string` ; `uri`: `string`  }  }\>

Get Playlist - https://developer.spotify.com/documentation/web-api/reference/get-playlist
Get a playlist owned by a Spotify user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playlist_id` | `string` | The Spotify ID of the playlist. Example value: "3cEYpjA9oz9GiPac4AsH4n" |
| `optional?` | `Object` | - |
| `optional.additional_types?` | `string` | - |
| `optional.fields?` | `string` | - |
| `optional.market?` | `string` | - |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `collaborative`: `boolean` ; `description`: `string` ; `external_urls`: { spotify: string; } = ExternalUrls; `followers`: { href: string \| null; total: number; } = Followers; `href`: `string` ; `id`: `string` ; `images`: { url: string \| null; height: number \| null; width: number \| null; }[] ; `name`: `string` ; `owner`: { type: string; href: string; external\_urls: { spotify: string; }; id: string; uri: string; display\_name: string; followers?: { href: string \| null; total: number; } \| undefined; } = Owner; `public`: `boolean` ; `snapshot_id`: `string` ; `tracks`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } = PlaylistTracks; `type`: `string` ; `uri`: `string`  }  }\>

Promise<{
result?: PlaylistTracksType;
error?: CustomError;
}>

#### Defined in

[src/endpoints/playlists.ts:52](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/playlists.ts#L52)

___

### get\_playlist\_cover\_image

▸ **get_playlist_cover_image**(`playlist_id`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }[]  }\>

Get Playlist Cover Image - https://developer.spotify.com/documentation/web-api/reference/get-playlist-cover
Get the current image associated with a specific playlist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playlist_id` | `string` | The Spotify ID of the playlist. Example value: "3cEYpjA9oz9GiPac4AsH4n" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }[]  }\>

Promise<{
result?: SetOfImagesType;
error?: CustomError;
}>

#### Defined in

[src/endpoints/playlists.ts:598](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/playlists.ts#L598)

___

### get\_playlist\_items

▸ **get_playlist_items**(`playlist_id`, `optional?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `href?`: `string` ; `items?`: { track: { album?: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; album\_type: string; total\_tracks: number; images: { url: string \| null; height: number \| null; width: number \| null; }[]; ... 10 more ...; album\_group?: string \| undefined; } \| undefined; ... ...[] ; `limit?`: `number` ; `next?`: ``null`` \| `string` ; `offset?`: `number` ; `previous?`: ``null`` \| `string` ; `total?`: `number`  }  }\>

Get Playlist Items - https://developer.spotify.com/documentation/web-api/reference/get-playlists-tracks
Get full details of the items of a playlist owned by a Spotify user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playlist_id` | `string` | The Spotify ID of the playlist. Example value: "3cEYpjA9oz9GiPac4AsH4n" |
| `optional?` | { `limit?`: `number` ; `market?`: `string` ; `offset?`: `number`  } & { `additional_types?`: `string` ; `fields?`: `string`  } | - |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `href?`: `string` ; `items?`: { track: { album?: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; album\_type: string; total\_tracks: number; images: { url: string \| null; height: number \| null; width: number \| null; }[]; ... 10 more ...; album\_group?: string \| undefined; } \| undefined; ... ...[] ; `limit?`: `number` ; `next?`: ``null`` \| `string` ; `offset?`: `number` ; `previous?`: ``null`` \| `string` ; `total?`: `number`  }  }\>

Promise<{
result?: PlaylistTracksType;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- playlist-read-private

#### Defined in

[src/endpoints/playlists.ts:166](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/playlists.ts#L166)

___

### get\_users\_playlists

▸ **get_users_playlists**(`user_id`, `optional?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `href?`: `string` ; `items?`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { url: string \| null; height: number \| null; width: number \| null; }[]; tracks: { href: string; total: number; }; ... 4 more ...; snapshot\_id: string; }[] ; `limit?`: `number` ; `next?`: ``null`` \| `string` ; `offset?`: `number` ; `previous?`: ``null`` \| `string` ; `total?`: `number`  }  }\>

Get User's Playlists - https://developer.spotify.com/documentation/web-api/reference/get-list-users-playlists
Get a list of the playlists owned or followed by a Spotify user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user_id` | `string` | The user's Spotify user ID. Example value: "smedjan" |
| `optional?` | `Omit`<{ `limit?`: `number` ; `market?`: `string` ; `offset?`: `number`  }, ``"market"``\> | - |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `href?`: `string` ; `items?`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { url: string \| null; height: number \| null; width: number \| null; }[]; tracks: { href: string; total: number; }; ... 4 more ...; snapshot\_id: string; }[] ; `limit?`: `number` ; `next?`: ``null`` \| `string` ; `offset?`: `number` ; `previous?`: ``null`` \| `string` ; `total?`: `number`  }  }\>

Promise<{
result?: SeveralSimplifiedPlaylistsType;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- playlist-read-private
- playlist-read-collaborative

#### Defined in

[src/endpoints/playlists.ts:416](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/playlists.ts#L416)

___

### remove\_playlist\_items

▸ **remove_playlist_items**(`playlist_id`, `tracks`, `snapshot?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `snapshot_id`: `string`  }  }\>

Remove Playlist Items - https://developer.spotify.com/documentation/web-api/reference/remove-tracks-playlist
Remove one or more items from a user's playlist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playlist_id` | `string` | The Spotify ID of the playlist. Example value: "3cEYpjA9oz9GiPac4AsH4n" |
| `tracks` | { `uri`: `string`  }[] | An array of objects containing Spotify URIs of the tracks or episodes to remove. For example: { "tracks": [{ "uri": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" },{ "uri": "spotify:track:1301WleyT98MSxVHPZCA6M" }] }. A maximum of 100 objects can be sent at once. |
| `snapshot?` | `string` | The playlist's snapshot ID against which you want to make the changes. The API will validate that the specified items exist and in the specified positions and make the changes, even if more recent changes have been made to the playlist. |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `snapshot_id`: `string`  }  }\>

Promise<{
result?: SnapshotType;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- playlist-modify-public
- playlist-modify-private

#### Defined in

[src/endpoints/playlists.ts:326](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/playlists.ts#L326)

___

### update\_playlist\_items

▸ **update_playlist_items**(`playlist_id`, `optional?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `snapshot_id`: `string`  }  }\>

Update Playlist Items - https://developer.spotify.com/documentation/web-api/reference/reorder-or-replace-playlists-tracks
Either reorder or replace items in a playlist depending on the request's parameters. To reorder items, include range_start, insert_before, range_length and snapshot_id in the request's body. To replace items, include uris as either a query parameter or in the request's body. Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist.
Note: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters. These operations can't be applied together in a single request.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playlist_id` | `string` | The Spotify ID of the playlist. Example value: "3cEYpjA9oz9GiPac4AsH4n" |
| `optional?` | `Object` | - |
| `optional.insert_before?` | `number` | - |
| `optional.range_length?` | `number` | - |
| `optional.range_start?` | `number` | - |
| `optional.snapshot_id?` | `string` | - |
| `optional.uris?` | `string`[] | - |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `snapshot_id`: `string`  }  }\>

Promise<{
result?: SnapshotType;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- playlist-modify-public
- playlist-modify-private

#### Defined in

[src/endpoints/playlists.ts:227](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/playlists.ts#L227)
