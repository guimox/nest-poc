import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: 'simform',
    username: 'postgres',
    entities: [],
    database: 'pgWithNest',
    synchronize: true,
    logging: true,
  }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
