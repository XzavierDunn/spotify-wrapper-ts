[spotify-wrapper-ts](../README.md) / [Exports](../modules.md) / models/tracks-simplified

# Module: models/tracks-simplified

## Table of contents

### Type Aliases

- [SimplifiedTracksType](models_tracks_simplified.md#simplifiedtrackstype)

### Variables

- [SimplifiedTrack](models_tracks_simplified.md#simplifiedtrack)
- [SimplifiedTracks](models_tracks_simplified.md#simplifiedtracks)

## Type Aliases

### SimplifiedTracksType

Ƭ **SimplifiedTracksType**: `z.infer`<typeof [`SimplifiedTracks`](models_tracks_simplified.md#simplifiedtracks)\>

#### Defined in

[src/models/tracks-simplified.ts:35](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/tracks-simplified.ts#L35)

## Variables

### SimplifiedTrack

• `Const` **SimplifiedTrack**: `ZodObject`<{ `artists`: `ZodOptional`<`ZodArray`<`ZodObject`<{ `external_urls`: `ZodObject`<{ `spotify`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `spotify`: `string`  }, { `spotify`: `string`  }\> = ExternalUrls; `href`: `ZodString` ; `id`: `ZodString` ; `name`: `ZodString` ; `type`: `ZodString` ; `uri`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `id`: `string` ; `name`: `string` ; `type`: `string` ; `uri`: `string`  }, { `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `id`: `string` ; `name`: `string` ; `type`: `string` ; `uri`: `string`  }\>, ``"many"``\>\> ; `available_markets`: `ZodOptional`<`ZodArray`<`ZodString`, ``"many"``\>\> ; `disc_number`: `ZodOptional`<`ZodNumber`\> ; `duration_ms`: `ZodOptional`<`ZodNumber`\> ; `explicit`: `ZodOptional`<`ZodBoolean`\> ; `external_urls`: `ZodOptional`<`ZodObject`<{ `spotify`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `spotify`: `string`  }, { `spotify`: `string`  }\>\> ; `href`: `ZodOptional`<`ZodString`\> ; `id`: `ZodOptional`<`ZodString`\> ; `is_local`: `ZodOptional`<`ZodBoolean`\> ; `is_playable`: `ZodOptional`<`ZodBoolean`\> ; `linked_from`: `ZodOptional`<`ZodObject`<{ `external_urls`: `ZodObject`<{ `spotify`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `spotify`: `string`  }, { `spotify`: `string`  }\> = ExternalUrls }, ``"strip"``, `ZodTypeAny`, { `external_urls`: { spotify: string; } = ExternalUrls }, { `external_urls`: { spotify: string; } = ExternalUrls }\>\> ; `name`: `ZodOptional`<`ZodString`\> ; `preview_url`: `ZodNullable`<`ZodString`\> ; `restrictions`: `ZodOptional`<`ZodObject`<{ `reason`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `reason`: `string`  }, { `reason`: `string`  }\>\> ; `track_number`: `ZodOptional`<`ZodNumber`\> ; `type`: `ZodOptional`<`ZodString`\> ; `uri`: `ZodOptional`<`ZodString`\>  }, ``"strip"``, `ZodTypeAny`, { `artists?`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; }[] ; `available_markets?`: `string`[] ; `disc_number?`: `number` ; `duration_ms?`: `number` ; `explicit?`: `boolean` ; `external_urls?`: { spotify: string; } ; `href?`: `string` ; `id?`: `string` ; `is_local?`: `boolean` ; `is_playable?`: `boolean` ; `linked_from?`: { external\_urls: { spotify: string; }; } ; `name?`: `string` ; `preview_url`: ``null`` \| `string` ; `restrictions?`: { reason: string; } ; `track_number?`: `number` ; `type?`: `string` ; `uri?`: `string`  }, { `artists?`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; }[] ; `available_markets?`: `string`[] ; `disc_number?`: `number` ; `duration_ms?`: `number` ; `explicit?`: `boolean` ; `external_urls?`: { spotify: string; } ; `href?`: `string` ; `id?`: `string` ; `is_local?`: `boolean` ; `is_playable?`: `boolean` ; `linked_from?`: { external\_urls: { spotify: string; }; } ; `name?`: `string` ; `preview_url`: ``null`` \| `string` ; `restrictions?`: { reason: string; } ; `track_number?`: `number` ; `type?`: `string` ; `uri?`: `string`  }\>

#### Defined in

[src/models/tracks-simplified.ts:5](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/tracks-simplified.ts#L5)

___

### SimplifiedTracks

• `Const` **SimplifiedTracks**: `ZodObject`<{ `href`: `ZodString` ; `items`: `ZodArray`<`ZodObject`<{ `artists`: `ZodOptional`<`ZodArray`<`ZodObject`<{ `external_urls`: `ZodObject`<{ `spotify`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `spotify`: `string`  }, { `spotify`: `string`  }\> = ExternalUrls; `href`: `ZodString` ; `id`: `ZodString` ; `name`: `ZodString` ; `type`: `ZodString` ; `uri`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `id`: `string` ; `name`: `string` ; `type`: `string` ; `uri`: `string`  }, { `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `id`: `string` ; `name`: `string` ; `type`: `string` ; `uri`: `string`  }\>, ``"many"``\>\> ; `available_markets`: `ZodOptional`<`ZodArray`<`ZodString`, ``"many"``\>\> ; `disc_number`: `ZodOptional`<`ZodNumber`\> ; `duration_ms`: `ZodOptional`<`ZodNumber`\> ; `explicit`: `ZodOptional`<`ZodBoolean`\> ; `external_urls`: `ZodOptional`<`ZodObject`<{ `spotify`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `spotify`: `string`  }, { `spotify`: `string`  }\>\> ; `href`: `ZodOptional`<`ZodString`\> ; `id`: `ZodOptional`<`ZodString`\> ; `is_local`: `ZodOptional`<`ZodBoolean`\> ; `is_playable`: `ZodOptional`<`ZodBoolean`\> ; `linked_from`: `ZodOptional`<`ZodObject`<{ `external_urls`: `ZodObject`<{ `spotify`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `spotify`: `string`  }, { `spotify`: `string`  }\> = ExternalUrls }, ``"strip"``, `ZodTypeAny`, { `external_urls`: { spotify: string; } = ExternalUrls }, { `external_urls`: { spotify: string; } = ExternalUrls }\>\> ; `name`: `ZodOptional`<`ZodString`\> ; `preview_url`: `ZodNullable`<`ZodString`\> ; `restrictions`: `ZodOptional`<`ZodObject`<{ `reason`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `reason`: `string`  }, { `reason`: `string`  }\>\> ; `track_number`: `ZodOptional`<`ZodNumber`\> ; `type`: `ZodOptional`<`ZodString`\> ; `uri`: `ZodOptional`<`ZodString`\>  }, ``"strip"``, `ZodTypeAny`, { `artists?`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; }[] ; `available_markets?`: `string`[] ; `disc_number?`: `number` ; `duration_ms?`: `number` ; `explicit?`: `boolean` ; `external_urls?`: { spotify: string; } ; `href?`: `string` ; `id?`: `string` ; `is_local?`: `boolean` ; `is_playable?`: `boolean` ; `linked_from?`: { external\_urls: { spotify: string; }; } ; `name?`: `string` ; `preview_url`: ``null`` \| `string` ; `restrictions?`: { reason: string; } ; `track_number?`: `number` ; `type?`: `string` ; `uri?`: `string`  }, { `artists?`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; }[] ; `available_markets?`: `string`[] ; `disc_number?`: `number` ; `duration_ms?`: `number` ; `explicit?`: `boolean` ; `external_urls?`: { spotify: string; } ; `href?`: `string` ; `id?`: `string` ; `is_local?`: `boolean` ; `is_playable?`: `boolean` ; `linked_from?`: { external\_urls: { spotify: string; }; } ; `name?`: `string` ; `preview_url`: ``null`` \| `string` ; `restrictions?`: { reason: string; } ; `track_number?`: `number` ; `type?`: `string` ; `uri?`: `string`  }\>, ``"many"``\> ; `limit`: `ZodNumber` ; `next`: `ZodNullable`<`ZodString`\> ; `offset`: `ZodNumber` ; `previous`: `ZodNullable`<`ZodString`\> ; `total`: `ZodNumber`  }, ``"strip"``, `ZodTypeAny`, { `href`: `string` ; `items`: { preview\_url: string \| null; artists?: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; }[] \| undefined; available\_markets?: string[] \| undefined; ... 13 more ...; is\_local?: boolean \| undefined; }[] ; `limit`: `number` ; `next`: ``null`` \| `string` ; `offset`: `number` ; `previous`: ``null`` \| `string` ; `total`: `number`  }, { `href`: `string` ; `items`: { preview\_url: string \| null; artists?: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; }[] \| undefined; available\_markets?: string[] \| undefined; ... 13 more ...; is\_local?: boolean \| undefined; }[] ; `limit`: `number` ; `next`: ``null`` \| `string` ; `offset`: `number` ; `previous`: ``null`` \| `string` ; `total`: `number`  }\>

#### Defined in

[src/models/tracks-simplified.ts:25](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/tracks-simplified.ts#L25)
