import clsx from 'clsx';
import {Inter} from 'next/font/google';
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import {ReactNode} from 'react';
import Navigation from '@/src/app/components/Navigation';
import {locales} from '@/src/app/config';
import Header from '../components/Header';
import SelectLanguage from '../components/SelectLanguage';

const inter = Inter({subsets: ['latin']});

type Props = {
  children: ReactNode;
  params: {locale: string};
};
const locales2 = ['es', 'en'];
export function generateStaticParams() {
  return locales2.map((locale) => ({locale}));
}

export async function generateMetadata({
  params: {locale}
}: Omit<Props, 'children'>) {
  const t = await getTranslations({locale, namespace: 'LocaleLayout'});

  return {
    title: t('title')
  };
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <html className="h-full" lang={locale}>
      <body className={clsx(inter.className, 'flex h-full flex-col')}>
        {<Navigation />}
        {<SelectLanguage />}
        {/*<Header />*/}
        {children}
      </body>
    </html>
  );
}