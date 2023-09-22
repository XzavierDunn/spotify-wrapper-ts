[spotify-wrapper-ts](../README.md) / [Exports](../modules.md) / utils/requests

# Module: utils/requests

## Table of contents

### Type Aliases

- [FetchDataType](utils_requests.md#fetchdatatype)

### Variables

- [FetchData](utils_requests.md#fetchdata)

### Functions

- [handle\_request](utils_requests.md#handle_request)

## Type Aliases

### FetchDataType

Ƭ **FetchDataType**: `z.infer`<typeof [`FetchData`](utils_requests.md#fetchdata)\>

#### Defined in

[src/utils/requests.ts:13](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/utils/requests.ts#L13)

## Variables

### FetchData

• `Const` **FetchData**: `ZodObject`<{ `body`: `ZodOptional`<`ZodString`\> ; `method`: `ZodEnum`<[``"GET"``, ``"PUT"``, ``"POST"``, ``"DELETE"``]\> ; `object`: `ZodOptional`<`ZodAny`\> ; `scopes`: `ZodOptional`<`ZodArray`<`ZodString`, ``"many"``\>\> ; `token`: `ZodOptional`<`ZodString`\> ; `url`: `ZodString` ; `user`: `ZodOptional`<`ZodBoolean`\>  }, ``"strip"``, `ZodTypeAny`, { `body?`: `string` ; `method`: ``"GET"`` \| ``"PUT"`` \| ``"POST"`` \| ``"DELETE"`` ; `object?`: `any` ; `scopes?`: `string`[] ; `token?`: `string` ; `url`: `string` ; `user?`: `boolean`  }, { `body?`: `string` ; `method`: ``"GET"`` \| ``"PUT"`` \| ``"POST"`` \| ``"DELETE"`` ; `object?`: `any` ; `scopes?`: `string`[] ; `token?`: `string` ; `url`: `string` ; `user?`: `boolean`  }\>

#### Defined in

[src/utils/requests.ts:3](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/utils/requests.ts#L3)

## Functions

### handle\_request

▸ **handle_request**<`T`\>(`input`): `Promise`<{ `result`: `string` \| `T` ; `status_code`: `number`  }\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Object` |
| `input.body?` | `string` |
| `input.method` | ``"GET"`` \| ``"PUT"`` \| ``"POST"`` \| ``"DELETE"`` |
| `input.object?` | `any` |
| `input.scopes?` | `string`[] |
| `input.token?` | `string` |
| `input.url` | `string` |
| `input.user?` | `boolean` |

#### Returns

`Promise`<{ `result`: `string` \| `T` ; `status_code`: `number`  }\>

#### Defined in

[src/utils/requests.ts:37](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/utils/requests.ts#L37)
