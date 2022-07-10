import { getTokenFromContext } from 'src/utils/token';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

const prefix = 'Bearer';
export const Token = createParamDecorator(
  (_, ctx: ExecutionContext): string => {
    const token = getTokenFromContext(ctx);
    return token.match(prefix) ? token : `${prefix} ${token}`;
  },
);
