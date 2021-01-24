import {ClientOptions, Transport} from '@nestjs/microservices'
import {join} from 'path'

export const grpcClientOptions: ClientOptions ={
    transport: Transport.GRPC,
    options: {
        url:' 0.0.0.0:5000',
        package: 'user',
        protoPath: join(__dirname,'./protos/user.proto')
    },
}