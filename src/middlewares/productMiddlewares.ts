import { Request, Response, NextFunction } from 'express';

export const updateValueMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.body.value) {
    req.body.value = req.body.value * 1.25;
  }
  next();
};