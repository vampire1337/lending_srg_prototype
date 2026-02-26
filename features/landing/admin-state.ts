export type LandingContentAdminState = {
  status: 'idle' | 'success' | 'error';
  message: string;
};

export const initialLandingContentAdminState: LandingContentAdminState = {
  status: 'idle',
  message: '',
};
