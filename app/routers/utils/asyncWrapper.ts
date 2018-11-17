import { Request, Response, NextFunction } from 'express';
/**
 *
 * @param {function} fn
 */
export function asyncWrapper(fn: (req: Request, res: Response,nex: NextFunction) => any) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res,next);
      return;
    } catch (err) {
      next(err);
    }
  };
}
