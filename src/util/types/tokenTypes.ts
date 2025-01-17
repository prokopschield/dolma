import * as rawTokens from '../../tokens';

export type MessageTokenType = keyof typeof rawTokens.default;

export interface MessageToken {
	t: MessageTokenType | string;
	v: string;
}

export interface Unitoken {
	mention?: string,
	link?: string,
	emote?: string,
	block?: string
	text?: string
}

export interface Token {
	name: string,
	regex?: RegExp,
	format: (value: string) => string;
	validate: (raw: string, value: string) => boolean;
}