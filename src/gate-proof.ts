// TEMPORARY negative test for the Prompt 5.3 tsc gate — DELETE AFTER VERIFYING.
// A locale dict missing most UIKeys must fail `tsc --noEmit` (and thus `npm run build`).
import type { UIKeys } from '@/i18n/ui';

export const bogusLocale: Record<UIKeys, string> = {
  'nav.home': 'Home',
};
