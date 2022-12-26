import { Injectable } from '@nestjs/common';
import { GetNotificationsDto } from './dto/get-notifications.dto';

@Injectable()
export class MathService {
    public getNotifications(getNotificationsDto: GetNotificationsDto): void {
        const { data } = getNotificationsDto;
        console.log('data', data);
        // channel.ack(originalMsg);
    }
}
