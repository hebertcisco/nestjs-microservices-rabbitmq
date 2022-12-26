import { Test, TestingModule } from '@nestjs/testing';
import { MathService } from './math.service';

describe('MathService', () => {
    let service: MathService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [MathService],
        }).compile();

        service = module.get<MathService>(MathService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
