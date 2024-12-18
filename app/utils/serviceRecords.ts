export interface ServiceRecord {
  id: number;
  service: string;
  date: string;
  status: string;
  cost: string;
  vehicle: string;
  demurrage: string;
  details?: {
    [key: string]: {
      description: string;
      cost: string;
    };
  };
}