[spotify_wrapper](../README.md) / [Exports](../modules.md) / models/shows-simplified

# Module: models/shows-simplified

## Table of contents

### Type Aliases

- [SetofSimplifiedShowsType](models_shows_simplified.md#setofsimplifiedshowstype)

### Variables

- [SetofSimplifiedShows](models_shows_simplified.md#setofsimplifiedshows)
- [SeveralSimplifiedShows](models_shows_simplified.md#severalsimplifiedshows)
- [SimplifiedShow](models_shows_simplified.md#simplifiedshow)

## Type Aliases

### SetofSimplifiedShowsType

Ƭ **SetofSimplifiedShowsType**: `z.infer`<typeof [`SetofSimplifiedShows`](models_shows_simplified.md#setofsimplifiedshows)\>

#### Defined in

[src/models/shows-simplified.ts:38](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/models/shows-simplified.ts#L38)

## Variables

### SetofSimplifiedShows

• `Const` **SetofSimplifiedShows**: `ZodObject`<{ `shows`: `ZodArray`<`ZodNullable`<`ZodObject`<{ `available_markets`: `ZodArray`<`ZodString`, ``"many"``\> ; `copyrights`: `ZodArray`<`ZodObject`<{ `text`: `ZodString` ; `type`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `text`: `string` ; `type`: `string`  }, { `text`: `string` ; `type`: `string`  }\>, ``"many"``\> ; `description`: `ZodString` ; `explicit`: `ZodBoolean` ; `external_urls`: `ZodObject`<{ `spotify`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `spotify`: `string`  }, { `spotify`: `string`  }\> = ExternalUrls; `href`: `ZodString` ; `html_description`: `ZodString` ; `id`: `ZodString` ; `images`: `ZodArray`<`ZodObject`<{ `height`: `ZodNullable`<`ZodNumber`\> ; `url`: `ZodNullable`<`ZodString`\> ; `width`: `ZodNullable`<`ZodNumber`\>  }, ``"strip"``, `ZodTypeAny`, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }\>, ``"many"``\> ; `is_externally_hosted`: `ZodBoolean` ; `languages`: `ZodArray`<`ZodString`, ``"many"``\> ; `media_type`: `ZodString` ; `name`: `ZodString` ; `publisher`: `ZodString` ; `total_episodes`: `ZodNumber` ; `type`: `ZodLiteral`<``"show"``\> ; `uri`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `available_markets`: `string`[] ; `copyrights`: { type: string; text: string; }[] ; `description`: `string` ; `explicit`: `boolean` ; `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `html_description`: `string` ; `id`: `string` ; `images`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `is_externally_hosted`: `boolean` ; `languages`: `string`[] ; `media_type`: `string` ; `name`: `string` ; `publisher`: `string` ; `total_episodes`: `number` ; `type`: ``"show"`` ; `uri`: `string`  }, { `available_markets`: `string`[] ; `copyrights`: { type: string; text: string; }[] ; `description`: `string` ; `explicit`: `boolean` ; `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `html_description`: `string` ; `id`: `string` ; `images`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `is_externally_hosted`: `boolean` ; `languages`: `string`[] ; `media_type`: `string` ; `name`: `string` ; `publisher`: `string` ; `total_episodes`: `number` ; `type`: ``"show"`` ; `uri`: `string`  }\>\>, ``"many"``\>  }, ``"strip"``, `ZodTypeAny`, { `shows`: (``null`` \| { type: "show"; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; available\_markets: string[]; images: { height: number \| null; width: number \| null; url: string \| null; }[]; ... 8 more ...; total\_episodes: number; })[]  }, { `shows`: (``null`` \| { type: "show"; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; available\_markets: string[]; images: { height: number \| null; width: number \| null; url: string \| null; }[]; ... 8 more ...; total\_episodes: number; })[]  }\>

#### Defined in

[src/models/shows-simplified.ts:34](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/models/shows-simplified.ts#L34)

___

### SeveralSimplifiedShows

• `Const` **SeveralSimplifiedShows**: `ZodObject`<{ `href`: `ZodString` ; `items`: `ZodOptional`<`ZodNullable`<`ZodArray`<`ZodObject`<{ `available_markets`: `ZodArray`<`ZodString`, ``"many"``\> ; `copyrights`: `ZodArray`<`ZodObject`<{ `text`: `ZodString` ; `type`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `text`: `string` ; `type`: `string`  }, { `text`: `string` ; `type`: `string`  }\>, ``"many"``\> ; `description`: `ZodString` ; `explicit`: `ZodBoolean` ; `external_urls`: `ZodObject`<{ `spotify`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `spotify`: `string`  }, { `spotify`: `string`  }\> = ExternalUrls; `href`: `ZodString` ; `html_description`: `ZodString` ; `id`: `ZodString` ; `images`: `ZodArray`<`ZodObject`<{ `height`: `ZodNullable`<`ZodNumber`\> ; `url`: `ZodNullable`<`ZodString`\> ; `width`: `ZodNullable`<`ZodNumber`\>  }, ``"strip"``, `ZodTypeAny`, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }\>, ``"many"``\> ; `is_externally_hosted`: `ZodBoolean` ; `languages`: `ZodArray`<`ZodString`, ``"many"``\> ; `media_type`: `ZodString` ; `name`: `ZodString` ; `publisher`: `ZodString` ; `total_episodes`: `ZodNumber` ; `type`: `ZodLiteral`<``"show"``\> ; `uri`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `available_markets`: `string`[] ; `copyrights`: { type: string; text: string; }[] ; `description`: `string` ; `explicit`: `boolean` ; `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `html_description`: `string` ; `id`: `string` ; `images`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `is_externally_hosted`: `boolean` ; `languages`: `string`[] ; `media_type`: `string` ; `name`: `string` ; `publisher`: `string` ; `total_episodes`: `number` ; `type`: ``"show"`` ; `uri`: `string`  }, { `available_markets`: `string`[] ; `copyrights`: { type: string; text: string; }[] ; `description`: `string` ; `explicit`: `boolean` ; `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `html_description`: `string` ; `id`: `string` ; `images`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `is_externally_hosted`: `boolean` ; `languages`: `string`[] ; `media_type`: `string` ; `name`: `string` ; `publisher`: `string` ; `total_episodes`: `number` ; `type`: ``"show"`` ; `uri`: `string`  }\>, ``"many"``\>\>\> ; `limit`: `ZodNumber` ; `next`: `ZodNullable`<`ZodString`\> ; `offset`: `ZodNumber` ; `previous`: `ZodNullable`<`ZodString`\> ; `total`: `ZodNumber`  }, ``"strip"``, `ZodTypeAny`, { `href`: `string` ; `items?`: ``null`` \| { type: "show"; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; available\_markets: string[]; images: { height: number \| null; width: number \| null; url: string \| null; }[]; ... 8 more ...; total\_episodes: number; }[] ; `limit`: `number` ; `next`: ``null`` \| `string` ; `offset`: `number` ; `previous`: ``null`` \| `string` ; `total`: `number`  }, { `href`: `string` ; `items?`: ``null`` \| { type: "show"; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; available\_markets: string[]; images: { height: number \| null; width: number \| null; url: string \| null; }[]; ... 8 more ...; total\_episodes: number; }[] ; `limit`: `number` ; `next`: ``null`` \| `string` ; `offset`: `number` ; `previous`: ``null`` \| `string` ; `total`: `number`  }\>

#### Defined in

[src/models/shows-simplified.ts:24](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/models/shows-simplified.ts#L24)

___

### SimplifiedShow

• `Const` **SimplifiedShow**: `ZodObject`<{ `available_markets`: `ZodArray`<`ZodString`, ``"many"``\> ; `copyrights`: `ZodArray`<`ZodObject`<{ `text`: `ZodString` ; `type`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `text`: `string` ; `type`: `string`  }, { `text`: `string` ; `type`: `string`  }\>, ``"many"``\> ; `description`: `ZodString` ; `explicit`: `ZodBoolean` ; `external_urls`: `ZodObject`<{ `spotify`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `spotify`: `string`  }, { `spotify`: `string`  }\> = ExternalUrls; `href`: `ZodString` ; `html_description`: `ZodString` ; `id`: `ZodString` ; `images`: `ZodArray`<`ZodObject`<{ `height`: `ZodNullable`<`ZodNumber`\> ; `url`: `ZodNullable`<`ZodString`\> ; `width`: `ZodNullable`<`ZodNumber`\>  }, ``"strip"``, `ZodTypeAny`, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }\>, ``"many"``\> ; `is_externally_hosted`: `ZodBoolean` ; `languages`: `ZodArray`<`ZodString`, ``"many"``\> ; `media_type`: `ZodString` ; `name`: `ZodString` ; `publisher`: `ZodString` ; `total_episodes`: `ZodNumber` ; `type`: `ZodLiteral`<``"show"``\> ; `uri`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `available_markets`: `string`[] ; `copyrights`: { type: string; text: string; }[] ; `description`: `string` ; `explicit`: `boolean` ; `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `html_description`: `string` ; `id`: `string` ; `images`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `is_externally_hosted`: `boolean` ; `languages`: `string`[] ; `media_type`: `string` ; `name`: `string` ; `publisher`: `string` ; `total_episodes`: `number` ; `type`: ``"show"`` ; `uri`: `string`  }, { `available_markets`: `string`[] ; `copyrights`: { type: string; text: string; }[] ; `description`: `string` ; `explicit`: `boolean` ; `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `html_description`: `string` ; `id`: `string` ; `images`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `is_externally_hosted`: `boolean` ; `languages`: `string`[] ; `media_type`: `string` ; `name`: `string` ; `publisher`: `string` ; `total_episodes`: `number` ; `type`: ``"show"`` ; `uri`: `string`  }\>

#### Defined in

[src/models/shows-simplified.ts:4](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/models/shows-simplified.ts#L4)
