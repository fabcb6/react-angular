import { Pizza } from './pizza';

export interface ApiResponse {
  pizzas?: Pizza[];
  status?: string | boolean;
  data?: Pizza[] | string;

  message?: string;
  error?: string;
}
