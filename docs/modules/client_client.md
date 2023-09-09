[spotify_wrapper](../README.md) / [Exports](../modules.md) / client/client

# Module: client/client

## Table of contents

### Classes

- [Client](../classes/client_client.Client.md)

### Type Aliases

- [ClientInfoType](client_client.md#clientinfotype)
- [CredentialsType](client_client.md#credentialstype)
- [InfoType](client_client.md#infotype)

### Variables

- [ClientInfo](client_client.md#clientinfo)

## Type Aliases

### ClientInfoType

Ƭ **ClientInfoType**: `z.infer`<typeof [`ClientInfo`](client_client.md#clientinfo)\>

#### Defined in

[src/client/client.ts:46](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/client/client.ts#L46)

___

### CredentialsType

Ƭ **CredentialsType**: `z.infer`<typeof `Credentials`\>

#### Defined in

[src/client/client.ts:45](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/client/client.ts#L45)

___

### InfoType

Ƭ **InfoType**: `z.infer`<typeof `Info`\>

#### Defined in

[src/client/client.ts:47](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/client/client.ts#L47)

## Variables

### ClientInfo

• **ClientInfo**: `ZodObject`<{ `access_token`: `ZodOptional`<`ZodString`\> ; `expires_in`: `ZodOptional`<`ZodNumber`\> ; `refresh_token`: `ZodOptional`<`ZodString`\> ; `scope`: `ZodOptional`<`ZodString`\> ; `token_type`: `ZodOptional`<`ZodString`\>  }, ``"strip"``, `ZodTypeAny`, { `access_token?`: `string` ; `expires_in?`: `number` ; `refresh_token?`: `string` ; `scope?`: `string` ; `token_type?`: `string`  }, { `access_token?`: `string` ; `expires_in?`: `number` ; `refresh_token?`: `string` ; `scope?`: `string` ; `token_type?`: `string`  }\>

#### Defined in

[src/client/client.ts:29](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/client/client.ts#L29)
