[spotify-wrapper-ts](../README.md) / [Exports](../modules.md) / models/users

# Module: models/users

## Table of contents

### Type Aliases

- [UserType](models_users.md#usertype)

### Variables

- [User](models_users.md#user)

## Type Aliases

### UserType

Ƭ **UserType**: `z.infer`<typeof [`User`](models_users.md#user)\>

#### Defined in

[src/models/users.ts:24](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/users.ts#L24)

## Variables

### User

• `Const` **User**: `ZodObject`<{ `country`: `ZodOptional`<`ZodString`\> ; `display_name`: `ZodString` ; `email`: `ZodOptional`<`ZodString`\> ; `explicit_content`: `ZodOptional`<`ZodObject`<{ `filter_enabled`: `ZodBoolean` ; `filter_locked`: `ZodBoolean`  }, ``"strip"``, `ZodTypeAny`, { `filter_enabled`: `boolean` ; `filter_locked`: `boolean`  }, { `filter_enabled`: `boolean` ; `filter_locked`: `boolean`  }\>\> ; `external_urls`: `ZodObject`<{ `spotify`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `spotify`: `string`  }, { `spotify`: `string`  }\> = ExternalUrls; `followers`: `ZodObject`<{ `href`: `ZodNullable`<`ZodString`\> ; `total`: `ZodNumber`  }, ``"strip"``, `ZodTypeAny`, { `href`: ``null`` \| `string` ; `total`: `number`  }, { `href`: ``null`` \| `string` ; `total`: `number`  }\> = Followers; `href`: `ZodString` ; `id`: `ZodString` ; `images`: `ZodArray`<`ZodObject`<{ `height`: `ZodNullable`<`ZodNumber`\> ; `url`: `ZodNullable`<`ZodString`\> ; `width`: `ZodNullable`<`ZodNumber`\>  }, ``"strip"``, `ZodTypeAny`, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }\>, ``"many"``\> ; `product`: `ZodOptional`<`ZodString`\> ; `type`: `ZodString` ; `uri`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `country?`: `string` ; `display_name`: `string` ; `email?`: `string` ; `explicit_content?`: { filter\_enabled: boolean; filter\_locked: boolean; } ; `external_urls`: { spotify: string; } = ExternalUrls; `followers`: { href: string \| null; total: number; } = Followers; `href`: `string` ; `id`: `string` ; `images`: { url: string \| null; height: number \| null; width: number \| null; }[] ; `product?`: `string` ; `type`: `string` ; `uri`: `string`  }, { `country?`: `string` ; `display_name`: `string` ; `email?`: `string` ; `explicit_content?`: { filter\_enabled: boolean; filter\_locked: boolean; } ; `external_urls`: { spotify: string; } = ExternalUrls; `followers`: { href: string \| null; total: number; } = Followers; `href`: `string` ; `id`: `string` ; `images`: { url: string \| null; height: number \| null; width: number \| null; }[] ; `product?`: `string` ; `type`: `string` ; `uri`: `string`  }\>

#### Defined in

[src/models/users.ts:9](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/users.ts#L9)
