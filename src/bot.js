import { messageHandler } from './message-handler';
import { processClient } from './client-processor';
import { config } from './config';

const OakBot = class OakBot {
    constructor() {
        this.client = processClient(config.token);
        this.messageHandler = messageHandler;
    }
};

export { OakBot };