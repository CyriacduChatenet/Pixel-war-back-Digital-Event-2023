import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { RolesGuard } from './auth/guards/roles.guard';
import { PixelModule } from './pixel/pixel.module';
import { UserModule } from './user/user.module';
import { TeamModule } from './team/team.module';
<<<<<<< HEAD
import { UploadFileModule } from './upload-file/upload-file.module';
=======
import { ScreenshotModule } from './screenshot/screenshot.module';
import { GameModule } from './game/game.module';
>>>>>>> main

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRESQL_ADDON_HOST,
<<<<<<< HEAD
      port: 5432,
=======
      port: parseInt(process.env.POSTGRESQL_ADDON_PORT),
>>>>>>> main
      username: process.env.POSTGRESQL_ADDON_USER,
      password: process.env.POSTGRESQL_ADDON_PASSWORD,
      database: process.env.POSTGRESQL_ADDON_DB,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AuthModule,
    PixelModule,
    UserModule,
    TeamModule,
<<<<<<< HEAD
    UploadFileModule,
=======
    ScreenshotModule,
    GameModule,
>>>>>>> main
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
