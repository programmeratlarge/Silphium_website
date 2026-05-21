export const MAX_MESSAGE_LENGTH = 2000;

export const INQUIRY_TYPES = [
  'press',
  'investor',
  'partnership',
  'collaboration',
  'general',
] as const;

export type InquiryType = (typeof INQUIRY_TYPES)[number];
