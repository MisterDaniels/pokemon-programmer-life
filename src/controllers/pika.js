module.exports = {
    name: 'pika',
    description: 'Give a Pika Piiii!',
    execute(message, args) {
        message.channel.send('Pika Piii!');
    }
}