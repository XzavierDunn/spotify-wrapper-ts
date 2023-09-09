[spotify_wrapper](../README.md) / [Exports](../modules.md) / models/audiobooks-simplified

# Module: models/audiobooks-simplified

## Table of contents

### Type Aliases

- [SeveralSimplifiedAudiobooksType](models_audiobooks_simplified.md#severalsimplifiedaudiobookstype)
- [SimplifiedAudiobookType](models_audiobooks_simplified.md#simplifiedaudiobooktype)

### Variables

- [SeveralSimplifiedAudiobooks](models_audiobooks_simplified.md#severalsimplifiedaudiobooks)
- [SimplifiedAudiobook](models_audiobooks_simplified.md#simplifiedaudiobook)
- [SimplifiedChapterObject](models_audiobooks_simplified.md#simplifiedchapterobject)

## Type Aliases

### SeveralSimplifiedAudiobooksType

Ƭ **SeveralSimplifiedAudiobooksType**: `z.infer`<typeof [`SeveralSimplifiedAudiobooks`](models_audiobooks_simplified.md#severalsimplifiedaudiobooks)\>

#### Defined in

[src/models/audiobooks-simplified.ts:74](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/models/audiobooks-simplified.ts#L74)

___

### SimplifiedAudiobookType

Ƭ **SimplifiedAudiobookType**: `z.infer`<typeof [`SimplifiedAudiobook`](models_audiobooks_simplified.md#simplifiedaudiobook)\>

#### Defined in

[src/models/audiobooks-simplified.ts:73](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/models/audiobooks-simplified.ts#L73)

## Variables

### SeveralSimplifiedAudiobooks

• `Const` **SeveralSimplifiedAudiobooks**: `ZodObject`<{ `href`: `ZodString` ; `items`: `ZodArray`<`ZodObject`<{ `authors`: `ZodArray`<`ZodObject`<{ `name`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `name`: `string`  }, { `name`: `string`  }\>, ``"many"``\> = authors; `available_markets`: `ZodOptional`<`ZodArray`<`ZodString`, ``"many"``\>\> ; `copyrights`: `ZodArray`<`ZodObject`<{ `text`: `ZodString` ; `type`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `text`: `string` ; `type`: `string`  }, { `text`: `string` ; `type`: `string`  }\>, ``"many"``\> ; `description`: `ZodString` ; `edition`: `ZodNullable`<`ZodString`\> ; `explicit`: `ZodBoolean` ; `external_urls`: `ZodObject`<{ `spotify`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `spotify`: `string`  }, { `spotify`: `string`  }\> = ExternalUrls; `href`: `ZodString` ; `html_description`: `ZodString` ; `id`: `ZodString` ; `images`: `ZodArray`<`ZodObject`<{ `height`: `ZodNullable`<`ZodNumber`\> ; `url`: `ZodNullable`<`ZodString`\> ; `width`: `ZodNullable`<`ZodNumber`\>  }, ``"strip"``, `ZodTypeAny`, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }\>, ``"many"``\> ; `languages`: `ZodArray`<`ZodString`, ``"many"``\> ; `media_type`: `ZodString` ; `name`: `ZodString` ; `narrators`: `ZodArray`<`ZodObject`<{ `name`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `name`: `string`  }, { `name`: `string`  }\>, ``"many"``\> = narrators; `publisher`: `ZodString` ; `total_chapters`: `ZodNullable`<`ZodNumber`\> ; `type`: `ZodString` ; `uri`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `authors`: { name: string; }[] = authors; `available_markets?`: `string`[] ; `copyrights`: { type: string; text: string; }[] ; `description`: `string` ; `edition`: ``null`` \| `string` ; `explicit`: `boolean` ; `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `html_description`: `string` ; `id`: `string` ; `images`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `languages`: `string`[] ; `media_type`: `string` ; `name`: `string` ; `narrators`: { name: string; }[] = narrators; `publisher`: `string` ; `total_chapters`: ``null`` \| `number` ; `type`: `string` ; `uri`: `string`  }, { `authors`: { name: string; }[] = authors; `available_markets?`: `string`[] ; `copyrights`: { type: string; text: string; }[] ; `description`: `string` ; `edition`: ``null`` \| `string` ; `explicit`: `boolean` ; `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `html_description`: `string` ; `id`: `string` ; `images`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `languages`: `string`[] ; `media_type`: `string` ; `name`: `string` ; `narrators`: { name: string; }[] = narrators; `publisher`: `string` ; `total_chapters`: ``null`` \| `number` ; `type`: `string` ; `uri`: `string`  }\>, ``"many"``\> ; `limit`: `ZodNumber` ; `next`: `ZodNullable`<`ZodOptional`<`ZodString`\>\> ; `offset`: `ZodNumber` ; `previous`: `ZodNullable`<`ZodOptional`<`ZodString`\>\> ; `total`: `ZodNumber`  }, ``"strip"``, `ZodTypeAny`, { `href`: `string` ; `items`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { height: number \| null; width: number \| null; url: string \| null; }[]; copyrights: { ...; }[]; ... 10 more ...; available\_markets?: string[] \| undefined; }[] ; `limit`: `number` ; `next?`: ``null`` \| `string` ; `offset`: `number` ; `previous?`: ``null`` \| `string` ; `total`: `number`  }, { `href`: `string` ; `items`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { height: number \| null; width: number \| null; url: string \| null; }[]; copyrights: { ...; }[]; ... 10 more ...; available\_markets?: string[] \| undefined; }[] ; `limit`: `number` ; `next?`: ``null`` \| `string` ; `offset`: `number` ; `previous?`: ``null`` \| `string` ; `total`: `number`  }\>

#### Defined in

[src/models/audiobooks-simplified.ts:63](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/models/audiobooks-simplified.ts#L63)

___

### SimplifiedAudiobook

• `Const` **SimplifiedAudiobook**: `ZodObject`<{ `authors`: `ZodArray`<`ZodObject`<{ `name`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `name`: `string`  }, { `name`: `string`  }\>, ``"many"``\> = authors; `available_markets`: `ZodOptional`<`ZodArray`<`ZodString`, ``"many"``\>\> ; `copyrights`: `ZodArray`<`ZodObject`<{ `text`: `ZodString` ; `type`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `text`: `string` ; `type`: `string`  }, { `text`: `string` ; `type`: `string`  }\>, ``"many"``\> ; `description`: `ZodString` ; `edition`: `ZodNullable`<`ZodString`\> ; `explicit`: `ZodBoolean` ; `external_urls`: `ZodObject`<{ `spotify`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `spotify`: `string`  }, { `spotify`: `string`  }\> = ExternalUrls; `href`: `ZodString` ; `html_description`: `ZodString` ; `id`: `ZodString` ; `images`: `ZodArray`<`ZodObject`<{ `height`: `ZodNullable`<`ZodNumber`\> ; `url`: `ZodNullable`<`ZodString`\> ; `width`: `ZodNullable`<`ZodNumber`\>  }, ``"strip"``, `ZodTypeAny`, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }\>, ``"many"``\> ; `languages`: `ZodArray`<`ZodString`, ``"many"``\> ; `media_type`: `ZodString` ; `name`: `ZodString` ; `narrators`: `ZodArray`<`ZodObject`<{ `name`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `name`: `string`  }, { `name`: `string`  }\>, ``"many"``\> = narrators; `publisher`: `ZodString` ; `total_chapters`: `ZodNullable`<`ZodNumber`\> ; `type`: `ZodString` ; `uri`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `authors`: { name: string; }[] = authors; `available_markets?`: `string`[] ; `copyrights`: { type: string; text: string; }[] ; `description`: `string` ; `edition`: ``null`` \| `string` ; `explicit`: `boolean` ; `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `html_description`: `string` ; `id`: `string` ; `images`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `languages`: `string`[] ; `media_type`: `string` ; `name`: `string` ; `narrators`: { name: string; }[] = narrators; `publisher`: `string` ; `total_chapters`: ``null`` \| `number` ; `type`: `string` ; `uri`: `string`  }, { `authors`: { name: string; }[] = authors; `available_markets?`: `string`[] ; `copyrights`: { type: string; text: string; }[] ; `description`: `string` ; `edition`: ``null`` \| `string` ; `explicit`: `boolean` ; `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `html_description`: `string` ; `id`: `string` ; `images`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `languages`: `string`[] ; `media_type`: `string` ; `name`: `string` ; `narrators`: { name: string; }[] = narrators; `publisher`: `string` ; `total_chapters`: ``null`` \| `number` ; `type`: `string` ; `uri`: `string`  }\>

#### Defined in

[src/models/audiobooks-simplified.ts:41](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/models/audiobooks-simplified.ts#L41)

___

### SimplifiedChapterObject

• `Const` **SimplifiedChapterObject**: `ZodArray`<`ZodObject`<{ `audio_preview_url`: `ZodNullable`<`ZodString`\> ; `available_markets`: `ZodArray`<`ZodString`, ``"many"``\> ; `chapter_number`: `ZodNumber` ; `description`: `ZodString` ; `duration_ms`: `ZodNumber` ; `explicit`: `ZodBoolean` ; `external_urls`: `ZodObject`<{ `spotify`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `spotify`: `string`  }, { `spotify`: `string`  }\> = ExternalUrls; `href`: `ZodString` ; `html_description`: `ZodString` ; `id`: `ZodString` ; `images`: `ZodArray`<`ZodObject`<{ `height`: `ZodNullable`<`ZodNumber`\> ; `url`: `ZodNullable`<`ZodString`\> ; `width`: `ZodNullable`<`ZodNumber`\>  }, ``"strip"``, `ZodTypeAny`, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }\>, ``"many"``\> ; `is_playable`: `ZodOptional`<`ZodBoolean`\> ; `languages`: `ZodArray`<`ZodString`, ``"many"``\> ; `name`: `ZodString` ; `release_date`: `ZodString` ; `release_date_precision`: `ZodString` ; `restrictions`: `ZodOptional`<`ZodObject`<{ `reason`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `reason`: `string`  }, { `reason`: `string`  }\>\> ; `resume_point`: `ZodObject`<{ `fully_played`: `ZodBoolean` ; `resume_position_ms`: `ZodNumber`  }, ``"strip"``, `ZodTypeAny`, { `fully_played`: `boolean` ; `resume_position_ms`: `number`  }, { `fully_played`: `boolean` ; `resume_position_ms`: `number`  }\> = resume\_point; `type`: `ZodString` ; `uri`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `audio_preview_url`: ``null`` \| `string` ; `available_markets`: `string`[] ; `chapter_number`: `number` ; `description`: `string` ; `duration_ms`: `number` ; `explicit`: `boolean` ; `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `html_description`: `string` ; `id`: `string` ; `images`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `is_playable?`: `boolean` ; `languages`: `string`[] ; `name`: `string` ; `release_date`: `string` ; `release_date_precision`: `string` ; `restrictions?`: { reason: string; } ; `resume_point`: { fully\_played: boolean; resume\_position\_ms: number; } = resume\_point; `type`: `string` ; `uri`: `string`  }, { `audio_preview_url`: ``null`` \| `string` ; `available_markets`: `string`[] ; `chapter_number`: `number` ; `description`: `string` ; `duration_ms`: `number` ; `explicit`: `boolean` ; `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `html_description`: `string` ; `id`: `string` ; `images`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `is_playable?`: `boolean` ; `languages`: `string`[] ; `name`: `string` ; `release_date`: `string` ; `release_date_precision`: `string` ; `restrictions?`: { reason: string; } ; `resume_point`: { fully\_played: boolean; resume\_position\_ms: number; } = resume\_point; `type`: `string` ; `uri`: `string`  }\>, ``"many"``\>

#### Defined in

[src/models/audiobooks-simplified.ts:16](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/models/audiobooks-simplified.ts#L16)
