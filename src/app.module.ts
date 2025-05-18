import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '../prisma/prisma.module';
import { UserModule } from './modules/user/user.module';
import { QuizModule } from './modules/quiz/quiz.module';

@Module({
  // imports: [
  //   ConfigModule.forRoot({ isGlobal: true }),
  //   TypeOrmModule.forRoot({
  //     type: 'postgres',
  //     host: process.env.POSTGRES_HOST,
  //     port: parseInt(<string>process.env.POSTGRESS_PORT),
  //     username: process.env.POSTGRES_USER,
  //     password: process.env.POSTGRES_PASSWORD,
  //     database: process.env.POSTGRES_DATABASE,
  //     autoLoadEntities: true,
  //     synchronize: true, // not usable in production due to loss of data
  //   }),
  //   TodoModule,
  // ],
  controllers: [AppController],
  providers: [AppService],
  imports: [PrismaModule,UserModule, QuizModule],
})
export class AppModule {}
