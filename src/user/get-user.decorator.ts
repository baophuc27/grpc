import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from './schemas/user.schema';

export const GetUser = createParamDecorator(
    (data: unknown, ctx: ExecutionContext): User => {
        const request = ctx.switchToHttp().getRequest();
        var accessToken = request.headers.token
        return accessToken
    },
);