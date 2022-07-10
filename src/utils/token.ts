import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
export const getTokenFromContext = (
  ctx: ExecutionContext,
): string | undefined =>
  GqlExecutionContext.create(ctx).getContext().req.get('Authorization');
