[spotify-wrapper-ts](../README.md) / [Exports](../modules.md) / models/audio-features

# Module: models/audio-features

## Table of contents

### Type Aliases

- [AudioFeaturesType](models_audio_features.md#audiofeaturestype)
- [SetofAudioFeaturesType](models_audio_features.md#setofaudiofeaturestype)

### Variables

- [AudioFeatures](models_audio_features.md#audiofeatures)
- [SetofAudioFeatures](models_audio_features.md#setofaudiofeatures)

## Type Aliases

### AudioFeaturesType

Ƭ **AudioFeaturesType**: `z.infer`<typeof [`AudioFeatures`](models_audio_features.md#audiofeatures)\>

#### Defined in

[src/models/audio-features.ts:28](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/audio-features.ts#L28)

___

### SetofAudioFeaturesType

Ƭ **SetofAudioFeaturesType**: `z.infer`<typeof [`SetofAudioFeatures`](models_audio_features.md#setofaudiofeatures)\>

#### Defined in

[src/models/audio-features.ts:29](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/audio-features.ts#L29)

## Variables

### AudioFeatures

• `Const` **AudioFeatures**: `ZodObject`<{ `acousticness`: `ZodNumber` ; `analysis_url`: `ZodString` ; `danceability`: `ZodNumber` ; `duration_ms`: `ZodNumber` ; `energy`: `ZodNumber` ; `id`: `ZodString` ; `instrumentalness`: `ZodNumber` ; `key`: `ZodNumber` ; `liveness`: `ZodNumber` ; `loudness`: `ZodNumber` ; `mode`: `ZodNumber` ; `speechiness`: `ZodNumber` ; `tempo`: `ZodNumber` ; `time_signature`: `ZodNumber` ; `track_href`: `ZodString` ; `type`: `ZodLiteral`<``"audio_features"``\> ; `uri`: `ZodString` ; `valence`: `ZodNumber`  }, ``"strip"``, `ZodTypeAny`, { `acousticness`: `number` ; `analysis_url`: `string` ; `danceability`: `number` ; `duration_ms`: `number` ; `energy`: `number` ; `id`: `string` ; `instrumentalness`: `number` ; `key`: `number` ; `liveness`: `number` ; `loudness`: `number` ; `mode`: `number` ; `speechiness`: `number` ; `tempo`: `number` ; `time_signature`: `number` ; `track_href`: `string` ; `type`: ``"audio_features"`` ; `uri`: `string` ; `valence`: `number`  }, { `acousticness`: `number` ; `analysis_url`: `string` ; `danceability`: `number` ; `duration_ms`: `number` ; `energy`: `number` ; `id`: `string` ; `instrumentalness`: `number` ; `key`: `number` ; `liveness`: `number` ; `loudness`: `number` ; `mode`: `number` ; `speechiness`: `number` ; `tempo`: `number` ; `time_signature`: `number` ; `track_href`: `string` ; `type`: ``"audio_features"`` ; `uri`: `string` ; `valence`: `number`  }\>

#### Defined in

[src/models/audio-features.ts:3](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/audio-features.ts#L3)

___

### SetofAudioFeatures

• `Const` **SetofAudioFeatures**: `ZodObject`<{ `audio_features`: `ZodArray`<`ZodObject`<{ `acousticness`: `ZodNumber` ; `analysis_url`: `ZodString` ; `danceability`: `ZodNumber` ; `duration_ms`: `ZodNumber` ; `energy`: `ZodNumber` ; `id`: `ZodString` ; `instrumentalness`: `ZodNumber` ; `key`: `ZodNumber` ; `liveness`: `ZodNumber` ; `loudness`: `ZodNumber` ; `mode`: `ZodNumber` ; `speechiness`: `ZodNumber` ; `tempo`: `ZodNumber` ; `time_signature`: `ZodNumber` ; `track_href`: `ZodString` ; `type`: `ZodLiteral`<``"audio_features"``\> ; `uri`: `ZodString` ; `valence`: `ZodNumber`  }, ``"strip"``, `ZodTypeAny`, { `acousticness`: `number` ; `analysis_url`: `string` ; `danceability`: `number` ; `duration_ms`: `number` ; `energy`: `number` ; `id`: `string` ; `instrumentalness`: `number` ; `key`: `number` ; `liveness`: `number` ; `loudness`: `number` ; `mode`: `number` ; `speechiness`: `number` ; `tempo`: `number` ; `time_signature`: `number` ; `track_href`: `string` ; `type`: ``"audio_features"`` ; `uri`: `string` ; `valence`: `number`  }, { `acousticness`: `number` ; `analysis_url`: `string` ; `danceability`: `number` ; `duration_ms`: `number` ; `energy`: `number` ; `id`: `string` ; `instrumentalness`: `number` ; `key`: `number` ; `liveness`: `number` ; `loudness`: `number` ; `mode`: `number` ; `speechiness`: `number` ; `tempo`: `number` ; `time_signature`: `number` ; `track_href`: `string` ; `type`: ``"audio_features"`` ; `uri`: `string` ; `valence`: `number`  }\>, ``"many"``\>  }, ``"strip"``, `ZodTypeAny`, { `audio_features`: { type: "audio\_features"; id: string; uri: string; duration\_ms: number; acousticness: number; analysis\_url: string; danceability: number; energy: number; instrumentalness: number; key: number; ... 7 more ...; valence: number; }[]  }, { `audio_features`: { type: "audio\_features"; id: string; uri: string; duration\_ms: number; acousticness: number; analysis\_url: string; danceability: number; energy: number; instrumentalness: number; key: number; ... 7 more ...; valence: number; }[]  }\>

#### Defined in

[src/models/audio-features.ts:24](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/audio-features.ts#L24)
