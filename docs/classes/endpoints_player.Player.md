[spotify-wrapper-ts](../README.md) / [Exports](../modules.md) / [endpoints/player](../modules/endpoints_player.md) / Player

# Class: Player

[endpoints/player](../modules/endpoints_player.md).Player

## Table of contents

### Constructors

- [constructor](endpoints_player.Player.md#constructor)

### Properties

- [api\_url](endpoints_player.Player.md#api_url)
- [info](endpoints_player.Player.md#info)

### Methods

- [add\_item\_to\_playback\_queue](endpoints_player.Player.md#add_item_to_playback_queue)
- [get\_available\_devices](endpoints_player.Player.md#get_available_devices)
- [get\_currently\_playing\_track](endpoints_player.Player.md#get_currently_playing_track)
- [get\_playback\_state](endpoints_player.Player.md#get_playback_state)
- [get\_recently\_played\_tracks](endpoints_player.Player.md#get_recently_played_tracks)
- [get\_users\_queue](endpoints_player.Player.md#get_users_queue)
- [pause\_playback](endpoints_player.Player.md#pause_playback)
- [seek\_to\_position](endpoints_player.Player.md#seek_to_position)
- [set\_playback\_volume](endpoints_player.Player.md#set_playback_volume)
- [set\_repeat\_mode](endpoints_player.Player.md#set_repeat_mode)
- [skip\_to\_next](endpoints_player.Player.md#skip_to_next)
- [skip\_to\_previous](endpoints_player.Player.md#skip_to_previous)
- [start\_or\_resume\_playback](endpoints_player.Player.md#start_or_resume_playback)
- [toggle\_playback\_shuffle](endpoints_player.Player.md#toggle_playback_shuffle)
- [transfer\_playback](endpoints_player.Player.md#transfer_playback)

## Constructors

### constructor

• **new Player**(`info`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`InfoType`](../modules/models_client.md#infotype) |

#### Defined in

[src/endpoints/player.ts:17](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/player.ts#L17)

## Properties

### api\_url

• `Private` **api\_url**: `string`

#### Defined in

[src/endpoints/player.ts:15](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/player.ts#L15)

___

### info

• `Private` **info**: [`InfoType`](../modules/models_client.md#infotype)

#### Defined in

[src/endpoints/player.ts:14](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/player.ts#L14)

## Methods

### add\_item\_to\_playback\_queue

▸ **add_item_to_playback_queue**(`uri`, `device_id?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Add Item to Playback Queue - https://developer.spotify.com/documentation/web-api/reference/add-to-queue
Add an item to the end of the user's current playback queue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uri` | `string` | The uri of the item to add to the queue. Must be a track or an episode uri. Example value: "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" |
| `device_id?` | `string` | The id of the device this command is targeting. If not supplied, the user's currently active device is the target. Example value: "0d1841b0976bae2a3a310dd74c0f3df354899bc8" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Promise<{
result?: string;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- user-modify-playback-state

#### Defined in

[src/endpoints/player.ts:497](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/player.ts#L497)

___

### get\_available\_devices

▸ **get_available_devices**(): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `devices`: { type: string; name: string; id: string; is\_active: boolean; is\_private\_session: boolean; is\_restricted: boolean; volume\_percent: number; }[]  }  }\>

Get Available Devices - https://developer.spotify.com/documentation/web-api/reference/get-a-users-available-devices
Get information about a user’s available devices.

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `devices`: { type: string; name: string; id: string; is\_active: boolean; is\_private\_session: boolean; is\_restricted: boolean; volume\_percent: number; }[]  }  }\>

Promise<{
result?: SeveralDevicesType;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- user-read-playback-state

#### Defined in

[src/endpoints/player.ts:105](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/player.ts#L105)

___

### get\_currently\_playing\_track

▸ **get_currently_playing_track**(`market?`, `additional_types?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `actions`: { disallows: { interrupting\_playback?: boolean \| undefined; pausing?: boolean \| undefined; resuming?: boolean \| undefined; seeking?: boolean \| undefined; skipping\_next?: boolean \| undefined; ... 4 more ...; transferring\_playback?: boolean \| undefined; }; ... 9 more ...; transferring\_playback?: boolean \| undefined; } = Actions; `context`: ``null`` \| { type: string; href: string; external\_urls: { spotify: string; }; uri: string; } ; `currently_playing_type`: `string` ; `device?`: { type: string; name: string; id: string; is\_active: boolean; is\_private\_session: boolean; is\_restricted: boolean; volume\_percent: number; } ; `is_playing`: `boolean` ; `item?`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; external\_ids: { isrc?: string \| undefined; ean?: string \| undefined; upc?: string \| undefined; }; ... 12 more ...; restrictions?: { ...; } \| undefined; } ; `progress_ms`: `number` ; `repeat_state?`: `string` ; `shuffle_state?`: `boolean` ; `timestamp`: `number`  }  }\>

Get Currently Playing Track - https://developer.spotify.com/documentation/web-api/reference/get-the-users-currently-playing-track
Get the object currently being played on the user's Spotify account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market?` | `string` | An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. Note: If neither market or user country are provided, the content is considered unavailable for the client. Users can view the country that is associated with their account in the account settings. Example value: "ES" |
| `additional_types?` | `string` | A comma-separated list of item types that your client supports besides the default track type. Valid types are: track and episode. Note: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future. In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the type field of each object. |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `actions`: { disallows: { interrupting\_playback?: boolean \| undefined; pausing?: boolean \| undefined; resuming?: boolean \| undefined; seeking?: boolean \| undefined; skipping\_next?: boolean \| undefined; ... 4 more ...; transferring\_playback?: boolean \| undefined; }; ... 9 more ...; transferring\_playback?: boolean \| undefined; } = Actions; `context`: ``null`` \| { type: string; href: string; external\_urls: { spotify: string; }; uri: string; } ; `currently_playing_type`: `string` ; `device?`: { type: string; name: string; id: string; is\_active: boolean; is\_private\_session: boolean; is\_restricted: boolean; volume\_percent: number; } ; `is_playing`: `boolean` ; `item?`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; external\_ids: { isrc?: string \| undefined; ean?: string \| undefined; upc?: string \| undefined; }; ... 12 more ...; restrictions?: { ...; } \| undefined; } ; `progress_ms`: `number` ; `repeat_state?`: `string` ; `shuffle_state?`: `boolean` ; `timestamp`: `number`  }  }\>

Promise<{
result?: PlaybackStateType;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- user-read-currently-playing

#### Defined in

[src/endpoints/player.ts:138](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/player.ts#L138)

___

### get\_playback\_state

▸ **get_playback_state**(`market?`, `additional_types?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `actions`: { disallows: { interrupting\_playback?: boolean \| undefined; pausing?: boolean \| undefined; resuming?: boolean \| undefined; seeking?: boolean \| undefined; skipping\_next?: boolean \| undefined; ... 4 more ...; transferring\_playback?: boolean \| undefined; }; ... 9 more ...; transferring\_playback?: boolean \| undefined; } = Actions; `context`: ``null`` \| { type: string; href: string; external\_urls: { spotify: string; }; uri: string; } ; `currently_playing_type`: `string` ; `device?`: { type: string; name: string; id: string; is\_active: boolean; is\_private\_session: boolean; is\_restricted: boolean; volume\_percent: number; } ; `is_playing`: `boolean` ; `item?`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; external\_ids: { isrc?: string \| undefined; ean?: string \| undefined; upc?: string \| undefined; }; ... 12 more ...; restrictions?: { ...; } \| undefined; } ; `progress_ms`: `number` ; `repeat_state?`: `string` ; `shuffle_state?`: `boolean` ; `timestamp`: `number`  }  }\>

Get Playback State - https://developer.spotify.com/documentation/web-api/reference/get-information-about-the-users-current-playback
Get information about the user’s current playback state, including track or episode, progress, and active device.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market?` | `string` | An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. Note: If neither market or user country are provided, the content is considered unavailable for the client. Users can view the country that is associated with their account in the account settings. Example value: "ES" |
| `additional_types?` | `string` | A comma-separated list of item types that your client supports besides the default track type. Valid types are: track and episode. Note: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future. In addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the type field of each object. |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `actions`: { disallows: { interrupting\_playback?: boolean \| undefined; pausing?: boolean \| undefined; resuming?: boolean \| undefined; seeking?: boolean \| undefined; skipping\_next?: boolean \| undefined; ... 4 more ...; transferring\_playback?: boolean \| undefined; }; ... 9 more ...; transferring\_playback?: boolean \| undefined; } = Actions; `context`: ``null`` \| { type: string; href: string; external\_urls: { spotify: string; }; uri: string; } ; `currently_playing_type`: `string` ; `device?`: { type: string; name: string; id: string; is\_active: boolean; is\_private\_session: boolean; is\_restricted: boolean; volume\_percent: number; } ; `is_playing`: `boolean` ; `item?`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; external\_ids: { isrc?: string \| undefined; ean?: string \| undefined; upc?: string \| undefined; }; ... 12 more ...; restrictions?: { ...; } \| undefined; } ; `progress_ms`: `number` ; `repeat_state?`: `string` ; `shuffle_state?`: `boolean` ; `timestamp`: `number`  }  }\>

Promise<{
result?: PlaybackStateType;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
-user-read-playback-state

#### Defined in

[src/endpoints/player.ts:43](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/player.ts#L43)

___

### get\_recently\_played\_tracks

▸ **get_recently_played_tracks**(`«destructured»`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `cursors`: { after: string; before: string; } = cursors; `href`: `string` ; `items`: { track: { preview\_url: string \| null; artists?: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; }[] \| undefined; available\_markets?: string[] \| undefined; ... 13 more ...; is\_local?: boolean \| undefined; }; played\_at: string; context: { ...; } \| null; }[] ; `limit`: `number` ; `next`: `string` ; `total?`: `number`  }  }\>

Get Recently Played Tracks - https://developer.spotify.com/documentation/web-api/reference/get-recently-played
Get tracks from the current user's recently played tracks. Note: Currently doesn't support podcast episodes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `after?` | `number` |
| › `before?` | `number` |
| › `limit?` | `number` |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `cursors`: { after: string; before: string; } = cursors; `href`: `string` ; `items`: { track: { preview\_url: string \| null; artists?: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; }[] \| undefined; available\_markets?: string[] \| undefined; ... 13 more ...; is\_local?: boolean \| undefined; }; played\_at: string; context: { ...; } \| null; }[] ; `limit`: `number` ; `next`: `string` ; `total?`: `number`  }  }\>

Promise<{
result?: PagedTracksType;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- user-read-recently-played

#### Defined in

[src/endpoints/player.ts:433](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/player.ts#L433)

___

### get\_users\_queue

▸ **get_users_queue**(): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `currently_playing`: { album?: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; album\_type: string; total\_tracks: number; images: { url: string \| null; height: number \| null; width: number \| null; }[]; ... 10 more ...; album\_group?: string \| undefined; } \| undefined; ... 29 more .... = TrackOrEpisodeObject; `queue`: { album?: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; album\_type: string; total\_tracks: number; images: { url: string \| null; height: number \| null; width: number \| null; }[]; ... 10 more ...; album\_group?: string \| undefined; } \| undefined; ... 29 more ....[]  }  }\>

Get the User's Queue - https://developer.spotify.com/documentation/web-api/reference/get-queue
Get the list of objects that make up the user's queue.

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `currently_playing`: { album?: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; album\_type: string; total\_tracks: number; images: { url: string \| null; height: number \| null; width: number \| null; }[]; ... 10 more ...; album\_group?: string \| undefined; } \| undefined; ... 29 more .... = TrackOrEpisodeObject; `queue`: { album?: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; album\_type: string; total\_tracks: number; images: { url: string \| null; height: number \| null; width: number \| null; }[]; ... 10 more ...; album\_group?: string \| undefined; } \| undefined; ... 29 more ....[]  }  }\>

Promise<{
result?: QueueType;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- user-read-playback-state

#### Defined in

[src/endpoints/player.ts:468](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/player.ts#L468)

___

### pause\_playback

▸ **pause_playback**(`device_id?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Pause Playback - https://developer.spotify.com/documentation/web-api/reference/pause-a-users-playback
Pause playback on the user's account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `device_id?` | `string` | The id of the device this command is targeting. If not supplied, the user's currently active device is the target. Example value: "0d1841b0976bae2a3a310dd74c0f3df354899bc8" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Promise<{
result?: string;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- user-modify-playback-state

#### Defined in

[src/endpoints/player.ts:217](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/player.ts#L217)

___

### seek\_to\_position

▸ **seek_to_position**(`position_ms`, `device_id?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Seek To Position - https://developer.spotify.com/documentation/web-api/reference/seek-to-position-in-currently-playing-track
Seeks to the given position in the user’s currently playing track.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position_ms` | `number` | The position in milliseconds to seek to. Must be a positive number. Passing in a position that is greater than the length of the track will cause the player to start playing the next song. Example value: 25000 |
| `device_id?` | `string` | The id of the device this command is targeting. If not supplied, the user's currently active device is the target. Example value: "0d1841b0976bae2a3a310dd74c0f3df354899bc8" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Promise<{
result?: string;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- user-modify-playback-state

#### Defined in

[src/endpoints/player.ts:301](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/player.ts#L301)

___

### set\_playback\_volume

▸ **set_playback_volume**(`volume_percent`, `device_id?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Set Playback Volume - https://developer.spotify.com/documentation/web-api/reference/set-volume-for-users-playback
Set the volume for the user’s current playback device.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `volume_percent` | `number` | The volume to set. Must be a value from 0 to 100 inclusive. Example value: 50 |
| `device_id?` | `string` | The id of the device this command is targeting. If not supplied, the user's currently active device is the target. Example value: "0d1841b0976bae2a3a310dd74c0f3df354899bc8" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Promise<{
result?: string;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- user-modify-playback-state

#### Defined in

[src/endpoints/player.ts:366](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/player.ts#L366)

___

### set\_repeat\_mode

▸ **set_repeat_mode**(`state`, `device_id?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Set Repeat Mode - https://developer.spotify.com/documentation/web-api/reference/set-repeat-mode-on-users-playback
Set the repeat mode for the user's playback. Options are repeat-track, repeat-context, and off.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | ``"track"`` \| ``"context"`` \| ``"off"`` | track, context or off. track will repeat the current track. context will repeat the current context. off will turn repeat off. Example value: "context" |
| `device_id?` | `string` | The id of the device this command is targeting. If not supplied, the user's currently active device is the target. Example value: "0d1841b0976bae2a3a310dd74c0f3df354899bc8" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Promise<{
result?: string;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- user-modify-playback-state

#### Defined in

[src/endpoints/player.ts:335](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/player.ts#L335)

___

### skip\_to\_next

▸ **skip_to_next**(`device_id?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Skip To Next - https://developer.spotify.com/documentation/web-api/reference/skip-users-playback-to-next-track
Skips to next track in the user’s queue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `device_id?` | `string` | The id of the device this command is targeting. If not supplied, the user's currently active device is the target. Example value: "0d1841b0976bae2a3a310dd74c0f3df354899bc8" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Promise<{
result?: string;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- user-modify-playback-state

#### Defined in

[src/endpoints/player.ts:244](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/player.ts#L244)

___

### skip\_to\_previous

▸ **skip_to_previous**(`device_id?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Skip To Previous - https://developer.spotify.com/documentation/web-api/reference/skip-users-playback-to-previous-track
Skips to previous track in the user’s queue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `device_id?` | `string` | The id of the device this command is targeting. If not supplied, the user's currently active device is the target. Example value: "0d1841b0976bae2a3a310dd74c0f3df354899bc8" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Promise<{
result?: string;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- user-modify-playback-state

#### Defined in

[src/endpoints/player.ts:271](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/player.ts#L271)

___

### start\_or\_resume\_playback

▸ **start_or_resume_playback**(`optional?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Start/Resume Playback - https://developer.spotify.com/documentation/web-api/reference/start-a-users-playback
Start a new context or resume current playback on the user's active device.

#### Parameters

| Name | Type |
| :------ | :------ |
| `optional?` | `Object` |
| `optional.context_uri?` | `string` |
| `optional.device_id?` | `string` |
| `optional.offset?` | `Object` |
| `optional.offset.position?` | `number` |
| `optional.offset.uri?` | `string` |
| `optional.position_ms?` | `number` |
| `optional.uris?` | `string`[] |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Promise<{
result?: string;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- user-modify-playback-state

#### Defined in

[src/endpoints/player.ts:179](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/player.ts#L179)

___

### toggle\_playback\_shuffle

▸ **toggle_playback_shuffle**(`state`, `device_id?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Toggle Playback Shuffle - https://developer.spotify.com/documentation/web-api/reference/toggle-shuffle-for-users-playback
Toggle shuffle on or off for user’s playback.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `boolean` | true : Shuffle user's playback. false : Do not shuffle user's playback. Example value: true |
| `device_id?` | `string` | The id of the device this command is targeting. If not supplied, the user's currently active device is the target. Example value: "0d1841b0976bae2a3a310dd74c0f3df354899bc8" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Promise<{
result?: string;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- user-modify-playback-state

#### Defined in

[src/endpoints/player.ts:398](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/player.ts#L398)

___

### transfer\_playback

▸ **transfer_playback**(`device_ids`, `play?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Transfer Playback - https://developer.spotify.com/documentation/web-api/reference/transfer-a-users-playback
Transfer playback to a new device and determine if it should start playing.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `device_ids` | `string`[] | A JSON array containing the ID of the device on which playback should be started/transferred. For example:{device_ids:["74ASZWbe4lXaubB36ztrGX"]} Note: Although an array is accepted, only a single device_id is currently supported. Supplying more than one will return 400 Bad Request |
| `play?` | `boolean` | true: ensure playback happens on the new device. false or not provided: keep the current playback state. |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Promise<{
result?: string;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- user-modify-playback-state

#### Defined in

[src/endpoints/player.ts:82](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/player.ts#L82)
