import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from '../products/products.module';
import { UsersModule } from 'src/users/users.module';
import { PaymentsModule } from 'src/payments/payments.module';

@Module({
  imports: [
    ProductsModule,
    UsersModule,
    PaymentsModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_DB)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
