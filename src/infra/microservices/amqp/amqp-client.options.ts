import { configService } from 'nest-shared';

export const amqpClientOptions = {
    urls: [configService.getValue<string>('AMQP_URL', true)],
    queue: configService.getValue<string>('AMQP_QUEUE', false),
    queueOptions: {
        durable: false,
    },
};
