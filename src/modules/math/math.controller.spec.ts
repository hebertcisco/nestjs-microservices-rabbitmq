import { Test, TestingModule } from '@nestjs/testing';
import { MathController } from './math.controller';
import { MathService } from './math.service';

describe('MathController', () => {
    let controller: MathController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [MathController],
            providers: [MathService],
        }).compile();

        controller = module.get<MathController>(MathController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
