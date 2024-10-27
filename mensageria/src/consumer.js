const amqp = require('amqplib');

const queue = 'tasks';

async function consumeTasks() {
    try {
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();
        await channel.assertQueue(queue);
        console.log('Aguardando por mensagens %s', queue);

        channel.consume(queue, (msg) => {
            if (msg !== null) {
                console.log(`Received: ${msg.content.toString()}`);
                channel.ack(msg); 
            }
        });
    } catch (error) {
        console.error('Error consuming tasks:', error);
    }
}

consumeTasks();
