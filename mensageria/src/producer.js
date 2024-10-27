const amqp = require('amqplib');

const queue = 'tasks';

async function sendTask(task) {
    try {
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();
        await channel.assertQueue(queue);
        channel.sendToQueue(queue, Buffer.from(task));
        console.log(`Sent: ${task}`);
        await channel.close();
        await connection.close();
    } catch (error) {
        console.error('Error sending task:', error);
    }
}

sendTask('Processamento de pedidos');
