import { Module } from '@nestjs/common';
import { SharedService } from './shared.service';
import { SharedController } from './shared.controller';

@Module({
  providers: [SharedService],
  exports: [SharedService]
})
export class SharedModule {}
