
import {useLocale, useTranslations} from 'next-intl';
import {locales} from '../config';
 
// A Client Component that registers an event listener for
// the `change` event of the select, uses `useRouter`
// to change the locale and uses `useTransition` to display
// a loading state during the transition.
import LocaleSwitcherSelect from './LocaleSwitcherSelect';
 
export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
 
  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {locales.map((cur: any) => (
        <option key={cur} value={cur}>
          {t('locale', {locale: cur})}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}