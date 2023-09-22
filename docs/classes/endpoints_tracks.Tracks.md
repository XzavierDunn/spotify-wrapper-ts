[spotify-wrapper-ts](../README.md) / [Exports](../modules.md) / [endpoints/tracks](../modules/endpoints_tracks.md) / Tracks

# Class: Tracks

[endpoints/tracks](../modules/endpoints_tracks.md).Tracks

## Table of contents

### Constructors

- [constructor](endpoints_tracks.Tracks.md#constructor)

### Properties

- [api\_url](endpoints_tracks.Tracks.md#api_url)
- [info](endpoints_tracks.Tracks.md#info)

### Methods

- [check\_users\_saved\_tracks](endpoints_tracks.Tracks.md#check_users_saved_tracks)
- [get\_a\_tracks\_audio\_analysis](endpoints_tracks.Tracks.md#get_a_tracks_audio_analysis)
- [get\_a\_tracks\_audio\_features](endpoints_tracks.Tracks.md#get_a_tracks_audio_features)
- [get\_recommendations](endpoints_tracks.Tracks.md#get_recommendations)
- [get\_several\_tracks](endpoints_tracks.Tracks.md#get_several_tracks)
- [get\_track](endpoints_tracks.Tracks.md#get_track)
- [get\_tracks\_audio\_features](endpoints_tracks.Tracks.md#get_tracks_audio_features)
- [get\_users\_saved\_tracks](endpoints_tracks.Tracks.md#get_users_saved_tracks)
- [remove\_users\_saved\_tracks](endpoints_tracks.Tracks.md#remove_users_saved_tracks)
- [save\_tracks\_for\_current\_user](endpoints_tracks.Tracks.md#save_tracks_for_current_user)

## Constructors

### constructor

• **new Tracks**(`info`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`InfoType`](../modules/models_client.md#infotype) |

#### Defined in

[src/endpoints/tracks.ts:29](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/tracks.ts#L29)

## Properties

### api\_url

• `Private` **api\_url**: `string`

#### Defined in

[src/endpoints/tracks.ts:27](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/tracks.ts#L27)

___

### info

• `Private` **info**: [`InfoType`](../modules/models_client.md#infotype)

#### Defined in

[src/endpoints/tracks.ts:26](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/tracks.ts#L26)

## Methods

### check\_users\_saved\_tracks

▸ **check_users_saved_tracks**(`ids`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Check User's Saved Tracks - https://developer.spotify.com/documentation/web-api/reference/check-users-saved-tracks
Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | A comma-separated list of the Spotify IDs. For example: ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M. Maximum: 50 IDs. Example value: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Promise<{
result?: string;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- user-library-read

#### Defined in

[src/endpoints/tracks.ts:206](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/tracks.ts#L206)

___

### get\_a\_tracks\_audio\_analysis

▸ **get_a_tracks_audio_analysis**(`id`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `bars`: { duration: number; start: number; confidence: number; }[] ; `beats`: { duration: number; start: number; confidence: number; }[] ; `meta`: { status\_code: number; timestamp: number; analyzer\_version: string; platform: string; detailed\_status: string; analysis\_time: number; input\_process: string; } = Meta; `sections`: { key: number; loudness: number; mode: number; tempo: number; time\_signature: number; duration: number; tempo\_confidence: number; time\_signature\_confidence: number; key\_confidence: number; mode\_confidence: number; start: number; confidence: number; }[] ; `segments`: { duration: number; start: number; confidence: number; loudness\_start: number; loudness\_max: number; loudness\_max\_time: number; loudness\_end: number; pitches: number[]; timbre: number[]; }[] ; `tatums`: { duration: number; start: number; confidence: number; }[] ; `track`: { key: number; loudness: number; mode: number; tempo: number; time\_signature: number; num\_samples: number; duration: number; sample\_md5: string; offset\_seconds: number; window\_seconds: number; ... 15 more ...; rhythm\_version: number; } = Track }  }\>

Get Track's Audio Analysis - https://developer.spotify.com/documentation/web-api/reference/get-audio-analysis
Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The Spotify ID for the track. Example value: "11dFghVXANMlKmJXsNCbNl" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `bars`: { duration: number; start: number; confidence: number; }[] ; `beats`: { duration: number; start: number; confidence: number; }[] ; `meta`: { status\_code: number; timestamp: number; analyzer\_version: string; platform: string; detailed\_status: string; analysis\_time: number; input\_process: string; } = Meta; `sections`: { key: number; loudness: number; mode: number; tempo: number; time\_signature: number; duration: number; tempo\_confidence: number; time\_signature\_confidence: number; key\_confidence: number; mode\_confidence: number; start: number; confidence: number; }[] ; `segments`: { duration: number; start: number; confidence: number; loudness\_start: number; loudness\_max: number; loudness\_max\_time: number; loudness\_end: number; pitches: number[]; timbre: number[]; }[] ; `tatums`: { duration: number; start: number; confidence: number; }[] ; `track`: { key: number; loudness: number; mode: number; tempo: number; time\_signature: number; num\_samples: number; duration: number; sample\_md5: string; offset\_seconds: number; window\_seconds: number; ... 15 more ...; rhythm\_version: number; } = Track }  }\>

Promise<{
result?: AudioAnalysisType;
error?: CustomError;
}>

#### Defined in

[src/endpoints/tracks.ts:279](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/tracks.ts#L279)

___

### get\_a\_tracks\_audio\_features

▸ **get_a_tracks_audio_features**(`id`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `acousticness`: `number` ; `analysis_url`: `string` ; `danceability`: `number` ; `duration_ms`: `number` ; `energy`: `number` ; `id`: `string` ; `instrumentalness`: `number` ; `key`: `number` ; `liveness`: `number` ; `loudness`: `number` ; `mode`: `number` ; `speechiness`: `number` ; `tempo`: `number` ; `time_signature`: `number` ; `track_href`: `string` ; `type`: ``"audio_features"`` ; `uri`: `string` ; `valence`: `number`  }  }\>

Get Track's Audio Features - https://developer.spotify.com/documentation/web-api/reference/get-audio-features
Get audio feature information for a single track identified by its unique Spotify ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The Spotify ID for the track. Example value: "11dFghVXANMlKmJXsNCbNl" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `acousticness`: `number` ; `analysis_url`: `string` ; `danceability`: `number` ; `duration_ms`: `number` ; `energy`: `number` ; `id`: `string` ; `instrumentalness`: `number` ; `key`: `number` ; `liveness`: `number` ; `loudness`: `number` ; `mode`: `number` ; `speechiness`: `number` ; `tempo`: `number` ; `time_signature`: `number` ; `track_href`: `string` ; `type`: ``"audio_features"`` ; `uri`: `string` ; `valence`: `number`  }  }\>

Promise<{
result?: AudioFeaturesType;
error?: CustomError;
}>

#### Defined in

[src/endpoints/tracks.ts:255](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/tracks.ts#L255)

___

### get\_recommendations

▸ **get_recommendations**(`input`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `seeds`: { type: string; href: string; id: string; afterFilteringSize: number; afterRelinkingSize: number; initialPoolSize: number; }[] ; `tracks`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; external\_ids: { isrc?: string \| undefined; ean?: string \| undefined; upc?: string \| undefined; }; ... 12 more ...; restrictions?: { ...; } \| undefined; }[]  }  }\>

Get Recommendations - https://developer.spotify.com/documentation/web-api/reference/get-recommendations
Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.
For artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks.

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Object` |
| `input.limit?` | `number` |
| `input.market?` | `string` |
| `input.max_acousticness?` | `number` |
| `input.max_danceability?` | `number` |
| `input.max_duration_ms?` | `number` |
| `input.max_energy?` | `number` |
| `input.max_instrumentalness?` | `number` |
| `input.max_key?` | `number` |
| `input.max_liveness?` | `number` |
| `input.max_loudness?` | `number` |
| `input.max_mode?` | `number` |
| `input.max_popularity?` | `number` |
| `input.max_speechiness?` | `number` |
| `input.max_tempo?` | `number` |
| `input.max_time_signature?` | `number` |
| `input.max_valence?` | `number` |
| `input.min_acousticness?` | `number` |
| `input.min_danceability?` | `number` |
| `input.min_duration_ms?` | `number` |
| `input.min_energy?` | `number` |
| `input.min_instrumentalness?` | `number` |
| `input.min_key?` | `number` |
| `input.min_liveness?` | `number` |
| `input.min_loudness?` | `number` |
| `input.min_mode?` | `number` |
| `input.min_popularity?` | `number` |
| `input.min_speechiness?` | `number` |
| `input.min_tempo?` | `number` |
| `input.min_time_signature?` | `number` |
| `input.min_valence?` | `number` |
| `input.seed_artists?` | `string` |
| `input.seed_genres?` | `string` |
| `input.seed_tracks?` | `string` |
| `input.target_acousticness?` | `number` |
| `input.target_danceability?` | `number` |
| `input.target_duration_ms?` | `number` |
| `input.target_energy?` | `number` |
| `input.target_instrumentalness?` | `number` |
| `input.target_key?` | `number` |
| `input.target_liveness?` | `number` |
| `input.target_loudness?` | `number` |
| `input.target_mode?` | `number` |
| `input.target_popularity?` | `number` |
| `input.target_speechiness?` | `number` |
| `input.target_tempo?` | `number` |
| `input.target_time_signature?` | `number` |
| `input.target_valence?` | `number` |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `seeds`: { type: string; href: string; id: string; afterFilteringSize: number; afterRelinkingSize: number; initialPoolSize: number; }[] ; `tracks`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; external\_ids: { isrc?: string \| undefined; ean?: string \| undefined; upc?: string \| undefined; }; ... 12 more ...; restrictions?: { ...; } \| undefined; }[]  }  }\>

Promise<{
result?: SetofRecommendationsType;
error?: CustomError;
}>

#### Defined in

[src/endpoints/tracks.ts:483](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/tracks.ts#L483)

___

### get\_several\_tracks

▸ **get_several_tracks**(`ids`, `market?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `tracks`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; external\_ids: { isrc?: string \| undefined; ean?: string \| undefined; upc?: string \| undefined; }; ... 12 more ...; restrictions?: { ...; } \| undefined; }[]  }  }\>

Get Several Tracks - https://developer.spotify.com/documentation/web-api/reference/get-several-tracks
Get Spotify catalog information for multiple tracks based on their Spotify IDs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | A comma-separated list of the Spotify IDs. For example: ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M. Maximum: 50 IDs. Example value: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B" |
| `market?` | `string` | An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. Note: If neither market or user country are provided, the content is considered unavailable for the client. Users can view the country that is associated with their account in the account settings. Example value: "ES" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `tracks`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; external\_ids: { isrc?: string \| undefined; ean?: string \| undefined; upc?: string \| undefined; }; ... 12 more ...; restrictions?: { ...; } \| undefined; }[]  }  }\>

Promise<{
result?: MultipleTracksType;
error?: CustomError;
}>

#### Defined in

[src/endpoints/tracks.ts:84](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/tracks.ts#L84)

___

### get\_track

▸ **get_track**(`id`, `market?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `album`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; album\_type: string; total\_tracks: number; images: { url: string \| null; height: number \| null; width: number \| null; }[]; ... 10 more ...; album\_group?: string \| undefined; } = SimplifiedAlbum; `artists`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { url: string \| null; height: number \| null; width: number \| null; }[]; genres: string[]; popularity: number; followers: { ...; }; }[] ; `available_markets?`: `string`[] ; `disc_number`: `number` ; `duration_ms`: `number` ; `explicit`: `boolean` ; `external_ids`: { isrc?: string \| undefined; ean?: string \| undefined; upc?: string \| undefined; } = ExternalIds; `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `id`: `string` ; `is_local`: `boolean` ; `is_playable?`: `boolean` ; `linked_from?`: { external\_urls: { spotify: string; }; } ; `name`: `string` ; `popularity`: `number` ; `preview_url`: ``null`` \| `string` ; `restrictions?`: { reason: string; } ; `track_number`: `number` ; `type`: `string` ; `uri`: `string`  }  }\>

Get Track - https://developer.spotify.com/documentation/web-api/reference/get-track
Get Spotify catalog information for a single track identified by its unique Spotify ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The Spotify ID for the show. Example value: "38bS44xjbVVZ3No3ByF1dJ" |
| `market?` | `string` | An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned. If a valid user access token is specified in the request header, the country associated with the user account will take priority over this parameter. Note: If neither market or user country are provided, the content is considered unavailable for the client. Users can view the country that is associated with their account in the account settings. Example value: "ES" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `album`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; album\_type: string; total\_tracks: number; images: { url: string \| null; height: number \| null; width: number \| null; }[]; ... 10 more ...; album\_group?: string \| undefined; } = SimplifiedAlbum; `artists`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { url: string \| null; height: number \| null; width: number \| null; }[]; genres: string[]; popularity: number; followers: { ...; }; }[] ; `available_markets?`: `string`[] ; `disc_number`: `number` ; `duration_ms`: `number` ; `explicit`: `boolean` ; `external_ids`: { isrc?: string \| undefined; ean?: string \| undefined; upc?: string \| undefined; } = ExternalIds; `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `id`: `string` ; `is_local`: `boolean` ; `is_playable?`: `boolean` ; `linked_from?`: { external\_urls: { spotify: string; }; } ; `name`: `string` ; `popularity`: `number` ; `preview_url`: ``null`` \| `string` ; `restrictions?`: { reason: string; } ; `track_number`: `number` ; `type`: `string` ; `uri`: `string`  }  }\>

Promise<{
result?: TrackType;
error?: CustomError;
}>

#### Defined in

[src/endpoints/tracks.ts:52](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/tracks.ts#L52)

___

### get\_tracks\_audio\_features

▸ **get_tracks_audio_features**(`ids`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `audio_features`: { type: "audio\_features"; id: string; uri: string; duration\_ms: number; acousticness: number; analysis\_url: string; danceability: number; energy: number; instrumentalness: number; key: number; ... 7 more ...; valence: number; }[]  }  }\>

Get Tracks' Audio Features - https://developer.spotify.com/documentation/web-api/reference/get-several-audio-features
Get audio features for multiple tracks based on their Spotify IDs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | A comma-separated list of the Spotify IDs. For example: ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M. Maximum: 50 IDs. Example value: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B" |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `audio_features`: { type: "audio\_features"; id: string; uri: string; duration\_ms: number; acousticness: number; analysis\_url: string; danceability: number; energy: number; instrumentalness: number; key: number; ... 7 more ...; valence: number; }[]  }  }\>

Promise<{
result?: SetofAudioFeaturesType;
error?: CustomError;
}>

#### Defined in

[src/endpoints/tracks.ts:231](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/tracks.ts#L231)

___

### get\_users\_saved\_tracks

▸ **get_users_saved_tracks**(`optional?`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `href`: `string` ; `items`: { added\_at: string; track: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; external\_ids: { isrc?: string \| undefined; ean?: string \| undefined; upc?: string \| undefined; }; ... 12 more ...; restrictions?: { ...; } \| undefined; }; }[] ; `limit`: `number` ; `next`: ``null`` \| `string` ; `offset`: `number` ; `previous`: ``null`` \| `string` ; `total`: `number`  }  }\>

Get User's Saved Tracks - https://developer.spotify.com/documentation/web-api/reference/get-users-saved-tracks
Get a list of the songs saved in the current Spotify user's 'Your Music' library.

#### Parameters

| Name | Type |
| :------ | :------ |
| `optional?` | `Object` |
| `optional.limit?` | `number` |
| `optional.market?` | `string` |
| `optional.offset?` | `number` |

#### Returns

`Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: { `href`: `string` ; `items`: { added\_at: string; track: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; external\_ids: { isrc?: string \| undefined; ean?: string \| undefined; upc?: string \| undefined; }; ... 12 more ...; restrictions?: { ...; } \| undefined; }; }[] ; `limit`: `number` ; `next`: ``null`` \| `string` ; `offset`: `number` ; `previous`: ``null`` \| `string` ; `total`: `number`  }  }\>

Promise<{
result?: PagesofTracksType;
error?: CustomError;
}>

**`Scopes`**

Authorization scopes
- user-library-read

#### Defined in

[src/endpoints/tracks.ts:124](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/tracks.ts#L124)

___

### remove\_users\_saved\_tracks

▸ **remove_users_saved_tracks**(`ids`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Remove User's Saved Tracks - https://developer.spotify.com/documentation/web-api/reference/remove-tracks-user
Remove one or more tracks from the current user's 'Your Music' library.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | A comma-separated list of the Spotify IDs. For example: ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M. Maximum: 50 IDs. Example value: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B" |

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

[src/endpoints/tracks.ts:180](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/tracks.ts#L180)

___

### save\_tracks\_for\_current\_user

▸ **save_tracks_for_current_user**(`ids`): `Promise`<{ `error?`: [`CustomError`](../modules/models_client.md#customerror) ; `result?`: `string`  }\>

Save Tracks for Current User - https://developer.spotify.com/documentation/web-api/reference/save-tracks-user
Save one or more tracks to the current user's 'Your Music' library.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | A comma-separated list of the Spotify IDs. For example: ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M. Maximum: 50 IDs. Example value: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B" |

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

[src/endpoints/tracks.ts:154](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/endpoints/tracks.ts#L154)
