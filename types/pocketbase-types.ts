// This file was @generated using pocketbase-typegen

export type IsoDateString = string

export type RecordIdString = string

export type UserIdString = string

export type BaseRecord = {
    id: RecordIdString
    created: IsoDateString
    updated: IsoDateString
    "@collectionId": string
    "@collectionName": string
}

export enum Collections {
	Messages = "messages",
	Profiles = "profiles",
}

export type MessagesRecord = {
	subject?: string
	message?: string
}

export type ProfilesRecord = {
	userId: UserIdString
	name?: string
	avatar?: string
}

export type CollectionRecords = {
	messages: MessagesRecord
	profiles: ProfilesRecord
}