export type LeadFormState = {
  status: 'idle' | 'success' | 'error';
  message: string;
};

export const initialLeadFormState: LeadFormState = {
  status: 'idle',
  message: '',
};
