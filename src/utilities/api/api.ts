import random from 'lodash/random';
import faker from 'faker';
import {Observable} from 'rxjs';

import {Message, Priority} from '../api';

const observable = new Observable<Message>((subscriber) => {
  const generate = (): void => {
    const message = faker.lorem.sentence();
    const priority = random(0, 2) as Priority;
    const nextInMS = random(500, 3000);
    subscriber.next({message, priority});
    setTimeout(generate, nextInMS);
  };
  generate();
});

const subscribe = (callback: (message: Message) => void): (() => void) => {
  const subscription = observable.subscribe({
    next: callback,
  });
  return (): void => subscription.unsubscribe();
};

export default subscribe;
