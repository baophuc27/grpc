import {Injectable, CanActivate, ExecutionContext} from '@nestjs/common'
import {Observable, throwError} from 'rxjs'
import {JwtService} from '@nestjs/jwt'
import { AuthGuard } from '@nestjs/passport';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class GrpcAuthGuard extends AuthGuard('jwt'){
    constructor(private jwtService: JwtService){
        super();
    }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>{
        const type = context.getType()
        const prefix = 'Bearer';
        let header;
        if (type === 'rpc'){
            const metadata = context.getArgByIndex(1)
            if (!metadata){
                return false;
            }
            header = metadata.get('Authorization')[0]
        }
        
        if (!header || !header.includes(prefix)){
            return false
        }

        const token = header.slice(header.indexOf(' ') + 1)
        try {
            this.jwtService.verify(token)
            return true
        }
        catch(e){
            return false
        }
    }


}