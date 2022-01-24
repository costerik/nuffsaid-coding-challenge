import {Message} from '../../Api';

export enum Received {
  ErrorMessage,
  WarnMessage,
  InfoMessage,
}

export type Action = {type: Received; payload: Message};
export type Dispatch = (action: Action) => void;
export type State = {errorMessages: Message[]; warnMessages: Message[]; infoMessages: Message[]};
export type MessagesContextType = {
  state: State;
  dispatch: Dispatch;
};
