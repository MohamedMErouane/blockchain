import { Request } from 'express';

declare module 'express' {
  export interface Request {
    user?: any; // Change `any` to your actual user type if available
  }
}
