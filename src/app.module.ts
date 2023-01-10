import { Module } from '@nestjs/common';
import { WineModule } from './modules/wines.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user.modules'

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://fadavinho:fadinha@cluster0.hgmd7kd.mongodb.net/?retryWrites=true&w=majority',
    ),
    WineModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
