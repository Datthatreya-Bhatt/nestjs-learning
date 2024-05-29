import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [UserModule,

    ClientsModule.register([
      {
        name: 'test',
        transport: Transport.GRPC,
        options: {
          package: 'user',
          protoPath: join(__dirname, '../proto/user.proto'),
        },
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
