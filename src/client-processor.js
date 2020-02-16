import Discord from 'discord.js';

const fs = require('fs');

const processClient = token => {
    const client = new Discord.Client();
    processControllers(client);
    
    // Initialize OakBot using config token
    client.login(token).catch(error => {
        console.log(`Failed ${error}`);
    });

    return client;
};

const processControllers = client => {
    const controllerFiles = fs.readdirSync(__dirname + '/controllers');
    client.controllers = new Discord.Collection();

    for (let file of controllerFiles) {
        let controller = require(`./controllers/${file}`);
        client.controllers.set(controller.name, controller);
    }
};

export { processClient };