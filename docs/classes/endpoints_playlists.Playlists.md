[spotify_wrapper](../README.md) / [Exports](../modules.md) / [endpoints/playlists](../modules/endpoints_playlists.md) / Playlists

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
| `info` | `Object` |
| `info.api_url` | `string` |
| `info.client_access_token` | `string` |
| `info.refresh_token_function` | (...`args`: `unknown`[]) => `unknown` |
| `info.refresh_user_token_function` | (...`args`: `unknown`[]) => `unknown` |
| `info.user_access_token` | `string` |

#### Defined in

[src/endpoints/playlists.ts:23](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/playlists.ts#L23)

## Properties

### api\_url

• `Private` **api\_url**: `string`

#### Defined in

[src/endpoints/playlists.ts:21](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/playlists.ts#L21)

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

[src/endpoints/playlists.ts:20](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/playlists.ts#L20)

## Methods

### add\_custom\_playlist\_cover\_image

▸ **add_custom_playlist_cover_image**(`«destructured»`): `Promise`<{ `error?`: `Error` ; `result?`: `string`  }\>

Add Custom Playlist Cover Image - https://developer.spotify.com/documentation/web-api/reference/upload-custom-playlist-cover
Replace the image used to represent a specific playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `image` | `string` |
| › `playlist_id` | `string` |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: `string`  }\>

Promise<{
result?: string;
error?: Error;
}>

**`Scopes`**

Authorization scopes
- ugc-image-upload
- playlist-modify-public
- playlist-modify-private

#### Defined in

[src/endpoints/playlists.ts:690](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/playlists.ts#L690)

___

### add\_items\_to\_playlist

▸ **add_items_to_playlist**(`«destructured»`): `Promise`<{ `error?`: `Error` ; `result?`: { `snapshot_id`: `string`  }  }\>

Add Items to Playlist - https://developer.spotify.com/documentation/web-api/reference/add-tracks-to-playlist
Add one or more items to a user's playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `playlist_id` | `string` |
| › `position?` | `number` |
| › `uris` | `string`[] |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `snapshot_id`: `string`  }  }\>

Promise<{
result?: SnapshotType;
error?: Error;
}>

**`Scopes`**

Authorization scopes
- playlist-modify-public
- playlist-modify-private

#### Defined in

[src/endpoints/playlists.ts:298](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/playlists.ts#L298)

___

### change\_playlist\_details

▸ **change_playlist_details**(`«destructured»`): `Promise`<{ `error?`: `Error` ; `result?`: `string`  }\>

Change Playlist Details - https://developer.spotify.com/documentation/web-api/reference/change-playlist-details
Change a playlist's name and public/private state. (The user must, of course, own the playlist.)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `collaborative?` | `boolean` |
| › `description?` | `string` |
| › `name?` | `string` |
| › `playlist_id` | `string` |
| › `public_playlist?` | `boolean` |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: `string`  }\>

Promise<{
result?: string;
error?: Error;
}>

**`Scopes`**

Authorization scopes
- playlist-modify-public
- playlist-modify-private

#### Defined in

[src/endpoints/playlists.ts:104](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/playlists.ts#L104)

___

### create\_playlist

▸ **create_playlist**(`«destructured»`): `Promise`<{ `error?`: `Error` ; `result?`: { `collaborative`: `boolean` ; `description`: `string` ; `external_urls`: { spotify: string; } = ExternalUrls; `followers`: { href: string \| null; total: number; } = Followers; `href`: `string` ; `id`: `string` ; `images`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `name`: `string` ; `owner`: { type: string; href: string; external\_urls: { spotify: string; }; id: string; uri: string; display\_name: string; followers?: { href: string \| null; total: number; } \| undefined; } = Owner; `public`: `boolean` ; `snapshot_id`: `string` ; `tracks`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } = PlaylistTracks; `type`: `string` ; `uri`: `string`  }  }\>

Create Playlist - https://developer.spotify.com/documentation/web-api/reference/create-playlist
Create a playlist for a Spotify user. (The playlist will be empty until you add tracks.)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `collaborative?` | `boolean` |
| › `description?` | `string` |
| › `name` | `string` |
| › `public_playlist?` | `boolean` |
| › `user_id` | `string` |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `collaborative`: `boolean` ; `description`: `string` ; `external_urls`: { spotify: string; } = ExternalUrls; `followers`: { href: string \| null; total: number; } = Followers; `href`: `string` ; `id`: `string` ; `images`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `name`: `string` ; `owner`: { type: string; href: string; external\_urls: { spotify: string; }; id: string; uri: string; display\_name: string; followers?: { href: string \| null; total: number; } \| undefined; } = Owner; `public`: `boolean` ; `snapshot_id`: `string` ; `tracks`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } = PlaylistTracks; `type`: `string` ; `uri`: `string`  }  }\>

Promise<{
result?: PlaylistType;
error?: Error;
}>

**`Scopes`**

Authorization scopes
- playlist-modify-public
- playlist-modify-private

#### Defined in

[src/endpoints/playlists.ts:498](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/playlists.ts#L498)

___

### get\_categorys\_playlists

▸ **get_categorys_playlists**(`«destructured»`): `Promise`<{ `error?`: `Error` ; `result?`: { `message?`: ``null`` \| `string` ; `playlists`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } = SeveralSimplifiedPlaylists }  }\>

Get Category's Playlists - https://developer.spotify.com/documentation/web-api/reference/get-a-categories-playlists
Get a list of Spotify playlists tagged with a particular category.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `category_id` | `string` |
| › `country?` | `string` |
| › `limit?` | `number` |
| › `offset?` | `number` |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `message?`: ``null`` \| `string` ; `playlists`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } = SeveralSimplifiedPlaylists }  }\>

Promise<{
result?: PagedPlaylistsType;
error?: Error;
}>

#### Defined in

[src/endpoints/playlists.ts:616](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/playlists.ts#L616)

___

### get\_current\_users\_playlists

▸ **get_current_users_playlists**(`«destructured»`): `Promise`<{ `error?`: `Error` ; `result?`: { `href?`: `string` ; `items?`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { height: number \| null; width: number \| null; url: string \| null; }[]; tracks: { href: string; total: number; }; ... 4 more ...; snapshot\_id: string; }[] ; `limit?`: `number` ; `next?`: ``null`` \| `string` ; `offset?`: `number` ; `previous?`: ``null`` \| `string` ; `total?`: `number`  }  }\>

Get Current User's Playlists - https://developer.spotify.com/documentation/web-api/reference/get-a-list-of-current-users-playlists
Get a list of the playlists owned or followed by the current Spotify user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `offset?` | `number` |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `href?`: `string` ; `items?`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { height: number \| null; width: number \| null; url: string \| null; }[]; tracks: { href: string; total: number; }; ... 4 more ...; snapshot\_id: string; }[] ; `limit?`: `number` ; `next?`: ``null`` \| `string` ; `offset?`: `number` ; `previous?`: ``null`` \| `string` ; `total?`: `number`  }  }\>

Promise<{
result?: SeveralSimplifiedPlaylistsType;
error?: Error;
}>

**`Scopes`**

Authorization scopes
- playlist-read-private

#### Defined in

[src/endpoints/playlists.ts:399](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/playlists.ts#L399)

___

### get\_featured\_playlists

▸ **get_featured_playlists**(`«destructured»`): `Promise`<{ `error?`: `Error` ; `result?`: { `message?`: ``null`` \| `string` ; `playlists`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } = SeveralSimplifiedPlaylists }  }\>

Get Featured Playlists - https://developer.spotify.com/documentation/web-api/reference/get-featured-playlists
Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `country?` | `string` |
| › `limit?` | `number` |
| › `locale?` | `string` |
| › `offset?` | `number` |
| › `timestamp?` | `string` |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `message?`: ``null`` \| `string` ; `playlists`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } = SeveralSimplifiedPlaylists }  }\>

Promise<{
result?: PagedPlaylistsType;
error?: Error;
}>

#### Defined in

[src/endpoints/playlists.ts:563](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/playlists.ts#L563)

___

### get\_playlist

▸ **get_playlist**(`«destructured»`): `Promise`<{ `error?`: `Error` ; `result?`: { `collaborative`: `boolean` ; `description`: `string` ; `external_urls`: { spotify: string; } = ExternalUrls; `followers`: { href: string \| null; total: number; } = Followers; `href`: `string` ; `id`: `string` ; `images`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `name`: `string` ; `owner`: { type: string; href: string; external\_urls: { spotify: string; }; id: string; uri: string; display\_name: string; followers?: { href: string \| null; total: number; } \| undefined; } = Owner; `public`: `boolean` ; `snapshot_id`: `string` ; `tracks`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } = PlaylistTracks; `type`: `string` ; `uri`: `string`  }  }\>

Get Playlist - https://developer.spotify.com/documentation/web-api/reference/get-playlist
Get a playlist owned by a Spotify user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `additional_types?` | `string` |
| › `fields?` | `string` |
| › `market?` | `string` |
| › `playlist_id` | `string` |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `collaborative`: `boolean` ; `description`: `string` ; `external_urls`: { spotify: string; } = ExternalUrls; `followers`: { href: string \| null; total: number; } = Followers; `href`: `string` ; `id`: `string` ; `images`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `name`: `string` ; `owner`: { type: string; href: string; external\_urls: { spotify: string; }; id: string; uri: string; display\_name: string; followers?: { href: string \| null; total: number; } \| undefined; } = Owner; `public`: `boolean` ; `snapshot_id`: `string` ; `tracks`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } = PlaylistTracks; `type`: `string` ; `uri`: `string`  }  }\>

Promise<{
result?: PlaylistTracksType;
error?: Error;
}>

#### Defined in

[src/endpoints/playlists.ts:53](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/playlists.ts#L53)

___

### get\_playlist\_cover\_image

▸ **get_playlist_cover_image**(`playlist_id`): `Promise`<{ `error?`: `Error` ; `result?`: { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }[]  }\>

Get Playlist Cover Image - https://developer.spotify.com/documentation/web-api/reference/get-playlist-cover
Get the current image associated with a specific playlist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playlist_id` | `Object` | The Spotify ID of the playlist. Example value: "3cEYpjA9oz9GiPac4AsH4n" |
| `playlist_id.playlist_id` | `string` | - |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }[]  }\>

Promise<{
result?: SetOfImagesType;
error?: Error;
}>

#### Defined in

[src/endpoints/playlists.ts:653](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/playlists.ts#L653)

___

### get\_playlist\_items

▸ **get_playlist_items**(`«destructured»`): `Promise`<{ `error?`: `Error` ; `result?`: { `href?`: `string` ; `items?`: { track: { album?: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; album\_type: string; total\_tracks: number; images: { height: number \| null; width: number \| null; url: string \| null; }[]; ... 10 more ...; album\_group?: string \| undefined; } \| undefined; ... ...[] ; `limit?`: `number` ; `next?`: ``null`` \| `string` ; `offset?`: `number` ; `previous?`: ``null`` \| `string` ; `total?`: `number`  }  }\>

Get Playlist Items - https://developer.spotify.com/documentation/web-api/reference/get-playlists-tracks
Get full details of the items of a playlist owned by a Spotify user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `additional_types?` | `string` |
| › `fields?` | `string` |
| › `limit?` | `number` |
| › `market?` | `string` |
| › `offset?` | `number` |
| › `playlist_id` | `string` |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `href?`: `string` ; `items?`: { track: { album?: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; album\_type: string; total\_tracks: number; images: { height: number \| null; width: number \| null; url: string \| null; }[]; ... 10 more ...; album\_group?: string \| undefined; } \| undefined; ... ...[] ; `limit?`: `number` ; `next?`: ``null`` \| `string` ; `offset?`: `number` ; `previous?`: ``null`` \| `string` ; `total?`: `number`  }  }\>

Promise<{
result?: PlaylistTracksType;
error?: Error;
}>

**`Scopes`**

Authorization scopes
- playlist-read-private

#### Defined in

[src/endpoints/playlists.ts:169](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/playlists.ts#L169)

___

### get\_users\_playlists

▸ **get_users_playlists**(`«destructured»`): `Promise`<{ `error?`: `Error` ; `result?`: { `href?`: `string` ; `items?`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { height: number \| null; width: number \| null; url: string \| null; }[]; tracks: { href: string; total: number; }; ... 4 more ...; snapshot\_id: string; }[] ; `limit?`: `number` ; `next?`: ``null`` \| `string` ; `offset?`: `number` ; `previous?`: ``null`` \| `string` ; `total?`: `number`  }  }\>

Get User's Playlists - https://developer.spotify.com/documentation/web-api/reference/get-list-users-playlists
Get a list of the playlists owned or followed by a Spotify user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `offset?` | `number` |
| › `user_id` | `string` |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `href?`: `string` ; `items?`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { height: number \| null; width: number \| null; url: string \| null; }[]; tracks: { href: string; total: number; }; ... 4 more ...; snapshot\_id: string; }[] ; `limit?`: `number` ; `next?`: ``null`` \| `string` ; `offset?`: `number` ; `previous?`: ``null`` \| `string` ; `total?`: `number`  }  }\>

Promise<{
result?: SeveralSimplifiedPlaylistsType;
error?: Error;
}>

**`Scopes`**

Authorization scopes
- playlist-read-private
- playlist-read-collaborative

#### Defined in

[src/endpoints/playlists.ts:448](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/playlists.ts#L448)

___

### remove\_playlist\_items

▸ **remove_playlist_items**(`«destructured»`): `Promise`<{ `error?`: `Error` ; `result?`: { `snapshot_id`: `string`  }  }\>

Remove Playlist Items - https://developer.spotify.com/documentation/web-api/reference/remove-tracks-playlist
Remove one or more items from a user's playlist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `playlist_id` | `string` |
| › `snapshot?` | `string` |
| › `tracks` | { `uri`: `string`  }[] |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `snapshot_id`: `string`  }  }\>

Promise<{
result?: SnapshotType;
error?: Error;
}>

**`Scopes`**

Authorization scopes
- playlist-modify-public
- playlist-modify-private

#### Defined in

[src/endpoints/playlists.ts:348](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/playlists.ts#L348)

___

### update\_playlist\_items

▸ **update_playlist_items**(`«destructured»`): `Promise`<{ `error?`: `Error` ; `result?`: { `snapshot_id`: `string`  }  }\>

Update Playlist Items - https://developer.spotify.com/documentation/web-api/reference/reorder-or-replace-playlists-tracks
Either reorder or replace items in a playlist depending on the request's parameters. To reorder items, include range_start, insert_before, range_length and snapshot_id in the request's body. To replace items, include uris as either a query parameter or in the request's body. Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist.
Note: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters. These operations can't be applied together in a single request.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `insert_before?` | `number` |
| › `playlist_id` | `string` |
| › `range_length?` | `number` |
| › `range_start?` | `number` |
| › `snapshot_id?` | `string` |
| › `uris?` | `string`[] |

#### Returns

`Promise`<{ `error?`: `Error` ; `result?`: { `snapshot_id`: `string`  }  }\>

Promise<{
result?: SnapshotType;
error?: Error;
}>

**`Scopes`**

Authorization scopes
- playlist-modify-public
- playlist-modify-private

#### Defined in

[src/endpoints/playlists.ts:237](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/endpoints/playlists.ts#L237)
