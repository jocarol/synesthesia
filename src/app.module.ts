import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColorService } from './color/color.service';
import { ColorController } from './color/color.controller';

@Module({
  imports: [],
  controllers: [AppController, ColorController],
  providers: [AppService, ColorService],
})
export class AppModule {}
