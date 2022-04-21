import { format } from 'date-fns';

export const formatDateTime = (date: string | Date = new Date()): string =>
  format(new Date(date), 'd/L/Y h:mmaaa');
