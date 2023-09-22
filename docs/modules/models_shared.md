[spotify-wrapper-ts](../README.md) / [Exports](../modules.md) / models/shared

# Module: models/shared

## Table of contents

### Type Aliases

- [SetOfImagesType](models_shared.md#setofimagestype)

### Variables

- [Copyrights](models_shared.md#copyrights)
- [ExternalIds](models_shared.md#externalids)
- [ExternalUrls](models_shared.md#externalurls)
- [Followers](models_shared.md#followers)
- [Images](models_shared.md#images)
- [LinkedFrom](models_shared.md#linkedfrom)
- [Restrictions](models_shared.md#restrictions)
- [Resume\_Point](models_shared.md#resume_point)
- [SetOfImages](models_shared.md#setofimages)
- [authors](models_shared.md#authors)
- [cursors](models_shared.md#cursors)
- [narrators](models_shared.md#narrators)

## Type Aliases

### SetOfImagesType

Ƭ **SetOfImagesType**: `z.infer`<typeof [`SetOfImages`](models_shared.md#setofimages)\>

#### Defined in

[src/models/shared.ts:25](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/shared.ts#L25)

## Variables

### Copyrights

• `Const` **Copyrights**: `ZodObject`<{ `text`: `ZodString` ; `type`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `text`: `string` ; `type`: `string`  }, { `text`: `string` ; `type`: `string`  }\>

#### Defined in

[src/models/shared.ts:31](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/shared.ts#L31)

___

### ExternalIds

• `Const` **ExternalIds**: `ZodObject`<{ `ean`: `ZodOptional`<`ZodString`\> ; `isrc`: `ZodOptional`<`ZodString`\> ; `upc`: `ZodOptional`<`ZodString`\>  }, ``"strip"``, `ZodTypeAny`, { `ean?`: `string` ; `isrc?`: `string` ; `upc?`: `string`  }, { `ean?`: `string` ; `isrc?`: `string` ; `upc?`: `string`  }\>

#### Defined in

[src/models/shared.ts:7](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/shared.ts#L7)

___

### ExternalUrls

• `Const` **ExternalUrls**: `ZodObject`<{ `spotify`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `spotify`: `string`  }, { `spotify`: `string`  }\>

#### Defined in

[src/models/shared.ts:3](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/shared.ts#L3)

___

### Followers

• `Const` **Followers**: `ZodObject`<{ `href`: `ZodNullable`<`ZodString`\> ; `total`: `ZodNumber`  }, ``"strip"``, `ZodTypeAny`, { `href`: ``null`` \| `string` ; `total`: `number`  }, { `href`: ``null`` \| `string` ; `total`: `number`  }\>

#### Defined in

[src/models/shared.ts:13](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/shared.ts#L13)

___

### Images

• `Const` **Images**: `ZodObject`<{ `height`: `ZodNullable`<`ZodNumber`\> ; `url`: `ZodNullable`<`ZodString`\> ; `width`: `ZodNullable`<`ZodNumber`\>  }, ``"strip"``, `ZodTypeAny`, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }\>

#### Defined in

[src/models/shared.ts:18](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/shared.ts#L18)

___

### LinkedFrom

• `Const` **LinkedFrom**: `ZodObject`<{ `external_urls`: `ZodObject`<{ `spotify`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `spotify`: `string`  }, { `spotify`: `string`  }\> = ExternalUrls }, ``"strip"``, `ZodTypeAny`, { `external_urls`: { spotify: string; } = ExternalUrls }, { `external_urls`: { spotify: string; } = ExternalUrls }\>

#### Defined in

[src/models/shared.ts:36](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/shared.ts#L36)

___

### Restrictions

• `Const` **Restrictions**: `ZodObject`<{ `reason`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `reason`: `string`  }, { `reason`: `string`  }\>

#### Defined in

[src/models/shared.ts:27](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/shared.ts#L27)

___

### Resume\_Point

• `Const` **Resume\_Point**: `ZodObject`<{ `fully_played`: `ZodBoolean` ; `resume_position_ms`: `ZodNumber`  }, ``"strip"``, `ZodTypeAny`, { `fully_played`: `boolean` ; `resume_position_ms`: `number`  }, { `fully_played`: `boolean` ; `resume_position_ms`: `number`  }\>

#### Defined in

[src/models/shared.ts:48](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/shared.ts#L48)

___

### SetOfImages

• `Const` **SetOfImages**: `ZodArray`<`ZodObject`<{ `height`: `ZodNullable`<`ZodNumber`\> ; `url`: `ZodNullable`<`ZodString`\> ; `width`: `ZodNullable`<`ZodNumber`\>  }, ``"strip"``, `ZodTypeAny`, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }\>, ``"many"``\>

#### Defined in

[src/models/shared.ts:24](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/shared.ts#L24)

___

### authors

• `Const` **authors**: `ZodArray`<`ZodObject`<{ `name`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `name`: `string`  }, { `name`: `string`  }\>, ``"many"``\>

#### Defined in

[src/models/shared.ts:40](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/shared.ts#L40)

___

### cursors

• `Const` **cursors**: `ZodObject`<{ `after`: `ZodString` ; `before`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `after`: `string` ; `before`: `string`  }, { `after`: `string` ; `before`: `string`  }\>

#### Defined in

[src/models/shared.ts:53](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/shared.ts#L53)

___

### narrators

• `Const` **narrators**: `ZodArray`<`ZodObject`<{ `name`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `name`: `string`  }, { `name`: `string`  }\>, ``"many"``\>

#### Defined in

[src/models/shared.ts:46](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/shared.ts#L46)
