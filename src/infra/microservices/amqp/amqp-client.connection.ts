import { connect, Connection } from 'amqplib';

export type PublishInQueueArgs = {
    queue: string;
    message: string;
    connection: Connection;
};
export class AmqpClient {
    public async start(): Promise<Connection> {
        const connection = await connect(
            String(process.env.RABBITMQ_CONNECTION_URL),
        );
        return connection;
    }
    public async publishInQueue(args: PublishInQueueArgs): Promise<boolean> {
        const { connection, queue, message } = args;
        const channel = await connection.createChannel();
        const publish = channel.sendToQueue(queue, Buffer.from(message));
        setTimeout(function () {
            connection.close();
        }, 1000);
        return publish;
    }
}
