[spotify-wrapper-ts](../README.md) / [Exports](../modules.md) / models/client

# Module: models/client

## Table of contents

### Type Aliases

- [ClientInfoType](models_client.md#clientinfotype)
- [CredentialsType](models_client.md#credentialstype)
- [CustomError](models_client.md#customerror)
- [InfoType](models_client.md#infotype)

### Variables

- [ClientInfo](models_client.md#clientinfo)
- [Credentials](models_client.md#credentials)

## Type Aliases

### ClientInfoType

Ƭ **ClientInfoType**: `z.infer`<typeof [`ClientInfo`](models_client.md#clientinfo)\>

#### Defined in

[src/models/client.ts:32](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/client.ts#L32)

___

### CredentialsType

Ƭ **CredentialsType**: `z.infer`<typeof [`Credentials`](models_client.md#credentials)\>

#### Defined in

[src/models/client.ts:31](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/client.ts#L31)

___

### CustomError

Ƭ **CustomError**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `scopes?` | `string`[] |
| `status_code?` | `number` |

#### Defined in

[src/models/client.ts:34](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/client.ts#L34)

___

### InfoType

Ƭ **InfoType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `api_url` | `string` |
| `client_access_token` | `string` |
| `submit_request` | <T\>(`input`: [`FetchDataType`](utils_requests.md#fetchdatatype)) => `Promise`<{ `error?`: [`CustomError`](models_client.md#customerror) ; `result?`: `T`  }\> |
| `submit_user_scoped_request` | <T\>(`input`: [`FetchDataType`](utils_requests.md#fetchdatatype)) => `Promise`<{ `error?`: [`CustomError`](models_client.md#customerror) ; `result?`: `T`  }\> |
| `user_access_token` | `string` |

#### Defined in

[src/models/client.ts:18](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/client.ts#L18)

## Variables

### ClientInfo

• **ClientInfo**: `ZodObject`<{ `access_token`: `ZodOptional`<`ZodString`\> ; `expires_in`: `ZodOptional`<`ZodNumber`\> ; `refresh_token`: `ZodOptional`<`ZodString`\> ; `scope`: `ZodOptional`<`ZodString`\> ; `token_type`: `ZodOptional`<`ZodString`\>  }, ``"strip"``, `ZodTypeAny`, { `access_token?`: `string` ; `expires_in?`: `number` ; `refresh_token?`: `string` ; `scope?`: `string` ; `token_type?`: `string`  }, { `access_token?`: `string` ; `expires_in?`: `number` ; `refresh_token?`: `string` ; `scope?`: `string` ; `token_type?`: `string`  }\>

#### Defined in

[src/models/client.ts:10](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/client.ts#L10)

___

### Credentials

• `Const` **Credentials**: `ZodObject`<{ `client_id`: `ZodString` ; `client_secret`: `ZodString` ; `redirect_uri`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `client_id`: `string` ; `client_secret`: `string` ; `redirect_uri`: `string`  }, { `client_id`: `string` ; `client_secret`: `string` ; `redirect_uri`: `string`  }\>

#### Defined in

[src/models/client.ts:4](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/client.ts#L4)
