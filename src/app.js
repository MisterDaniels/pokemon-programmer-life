// Setup required modules
import { OakBot } from './bot';

// Instantiate the client and process controller files to be user later
const oak = new OakBot();

// Ready event is triggered when the bot is ready
oak.client.on('ready', () => {
    console.log('Professor Oak, is online!');
});

oak.client.on('message', message => {
    let response = oak.messageHandler(oak.client, message);

    if (response === null) { return; }

    let { controller, msgProcessed, msgArgs } = response;

    // Execute the required controller passing in the user message
    controller.execute(msgProcessed, msgArgs);
});