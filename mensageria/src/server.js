const express = require('express');
const amqp = require('amqplib');

const app = express();
const port = 3000;
const queue = 'tasks';

app.use(express.json()); 

app.post('/send-task', async (req, res) => {
    const task = req.body.task;

    if (!task) {
        return res.status(400).send({ error: 'Task is required' });
    }

    try {
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();
        await channel.assertQueue(queue);
        channel.sendToQueue(queue, Buffer.from(task));
        console.log(`Sent: ${task}`);
        
        await channel.close();
        await connection.close();
        
        res.status(200).send({ message: 'Task sent successfully!' });
    } catch (error) {
        console.error('Error sending task:', error);
        res.status(500).send({ error: 'Failed to send task' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
