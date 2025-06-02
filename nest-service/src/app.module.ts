import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { UsersController } from './users/users.controller';
import { AuthController } from './auth/auth.controller';
import { CategoriesModule } from './categories/categories.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '172.25.231.139', // địa chỉ DB
      port: 5432, // cổng mặc định PostgreSQL
      username: 'kequeen', // user DB
      password: '123456', // pass DB
      database: 'mydatabase', // tên database
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // nơi chứa entity
      synchronize: true, // tự động sync entity với DB (chỉ dùng dev)
    }),
    UsersModule,
    AuthModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
