[spotify_wrapper](../README.md) / [Exports](../modules.md) / models/categories

# Module: models/categories

## Table of contents

### Type Aliases

- [CategoriesType](models_categories.md#categoriestype)
- [CategoryItemType](models_categories.md#categoryitemtype)
- [SeveralCategoriesType](models_categories.md#severalcategoriestype)

### Variables

- [Categories](models_categories.md#categories)
- [CategoryItem](models_categories.md#categoryitem)
- [SeveralCategories](models_categories.md#severalcategories)

## Type Aliases

### CategoriesType

Ƭ **CategoriesType**: `z.infer`<typeof [`Categories`](models_categories.md#categories)\>

#### Defined in

[src/models/categories.ts:25](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/models/categories.ts#L25)

___

### CategoryItemType

Ƭ **CategoryItemType**: `z.infer`<typeof [`CategoryItem`](models_categories.md#categoryitem)\>

#### Defined in

[src/models/categories.ts:26](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/models/categories.ts#L26)

___

### SeveralCategoriesType

Ƭ **SeveralCategoriesType**: `z.infer`<typeof [`SeveralCategories`](models_categories.md#severalcategories)\>

#### Defined in

[src/models/categories.ts:27](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/models/categories.ts#L27)

## Variables

### Categories

• `Const` **Categories**: `ZodObject`<{ `href`: `ZodString` ; `items`: `ZodArray`<`ZodObject`<{ `href`: `ZodString` ; `icons`: `ZodArray`<`ZodObject`<{ `height`: `ZodNullable`<`ZodNumber`\> ; `url`: `ZodNullable`<`ZodString`\> ; `width`: `ZodNullable`<`ZodNumber`\>  }, ``"strip"``, `ZodTypeAny`, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }\>, ``"many"``\> ; `id`: `ZodString` ; `name`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `href`: `string` ; `icons`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `id`: `string` ; `name`: `string`  }, { `href`: `string` ; `icons`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `id`: `string` ; `name`: `string`  }\>, ``"many"``\> ; `limit`: `ZodNumber` ; `next`: `ZodNullable`<`ZodOptional`<`ZodString`\>\> ; `offset`: `ZodNumber` ; `previous`: `ZodNullable`<`ZodOptional`<`ZodString`\>\> ; `total`: `ZodNumber`  }, ``"strip"``, `ZodTypeAny`, { `href`: `string` ; `items`: { href: string; name: string; id: string; icons: { height: number \| null; width: number \| null; url: string \| null; }[]; }[] ; `limit`: `number` ; `next?`: ``null`` \| `string` ; `offset`: `number` ; `previous?`: ``null`` \| `string` ; `total`: `number`  }, { `href`: `string` ; `items`: { href: string; name: string; id: string; icons: { height: number \| null; width: number \| null; url: string \| null; }[]; }[] ; `limit`: `number` ; `next?`: ``null`` \| `string` ; `offset`: `number` ; `previous?`: ``null`` \| `string` ; `total`: `number`  }\>

#### Defined in

[src/models/categories.ts:11](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/models/categories.ts#L11)

___

### CategoryItem

• `Const` **CategoryItem**: `ZodObject`<{ `href`: `ZodString` ; `icons`: `ZodArray`<`ZodObject`<{ `height`: `ZodNullable`<`ZodNumber`\> ; `url`: `ZodNullable`<`ZodString`\> ; `width`: `ZodNullable`<`ZodNumber`\>  }, ``"strip"``, `ZodTypeAny`, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }\>, ``"many"``\> ; `id`: `ZodString` ; `name`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `href`: `string` ; `icons`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `id`: `string` ; `name`: `string`  }, { `href`: `string` ; `icons`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `id`: `string` ; `name`: `string`  }\>

#### Defined in

[src/models/categories.ts:4](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/models/categories.ts#L4)

___

### SeveralCategories

• `Const` **SeveralCategories**: `ZodObject`<{ `categories`: `ZodObject`<{ `href`: `ZodString` ; `items`: `ZodArray`<`ZodObject`<{ `href`: `ZodString` ; `icons`: `ZodArray`<`ZodObject`<{ `height`: `ZodNullable`<`ZodNumber`\> ; `url`: `ZodNullable`<`ZodString`\> ; `width`: `ZodNullable`<`ZodNumber`\>  }, ``"strip"``, `ZodTypeAny`, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }\>, ``"many"``\> ; `id`: `ZodString` ; `name`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `href`: `string` ; `icons`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `id`: `string` ; `name`: `string`  }, { `href`: `string` ; `icons`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `id`: `string` ; `name`: `string`  }\>, ``"many"``\> ; `limit`: `ZodNumber` ; `next`: `ZodNullable`<`ZodOptional`<`ZodString`\>\> ; `offset`: `ZodNumber` ; `previous`: `ZodNullable`<`ZodOptional`<`ZodString`\>\> ; `total`: `ZodNumber`  }, ``"strip"``, `ZodTypeAny`, { `href`: `string` ; `items`: { href: string; name: string; id: string; icons: { height: number \| null; width: number \| null; url: string \| null; }[]; }[] ; `limit`: `number` ; `next?`: ``null`` \| `string` ; `offset`: `number` ; `previous?`: ``null`` \| `string` ; `total`: `number`  }, { `href`: `string` ; `items`: { href: string; name: string; id: string; icons: { height: number \| null; width: number \| null; url: string \| null; }[]; }[] ; `limit`: `number` ; `next?`: ``null`` \| `string` ; `offset`: `number` ; `previous?`: ``null`` \| `string` ; `total`: `number`  }\> = Categories }, ``"strip"``, `ZodTypeAny`, { `categories`: { href: string; total: number; limit: number; offset: number; items: { href: string; name: string; id: string; icons: { height: number \| null; width: number \| null; url: string \| null; }[]; }[]; next?: string \| null \| undefined; previous?: string \| ... 1 more ... \| undefined; } = Categories }, { `categories`: { href: string; total: number; limit: number; offset: number; items: { href: string; name: string; id: string; icons: { height: number \| null; width: number \| null; url: string \| null; }[]; }[]; next?: string \| null \| undefined; previous?: string \| ... 1 more ... \| undefined; } = Categories }\>

#### Defined in

[src/models/categories.ts:21](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/models/categories.ts#L21)
