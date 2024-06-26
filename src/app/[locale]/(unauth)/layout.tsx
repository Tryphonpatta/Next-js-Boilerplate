import Link from 'next/link';
import { useTranslations } from 'next-intl';

import UserButton from '@/components/UserButton';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout(props: { children: React.ReactNode }) {
  const t = useTranslations('RootLayout');

  return (
    <BaseTemplate
      leftNav={
        <>
          <li>
            <Link
              href="/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {t('home_link')}
            </Link>
          </li>
          <li>
            <Link
              href="/myfeed/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              My Feed
            </Link>
          </li>
          <li>
            <Link
              href="/pantipick/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              Pantip Pick
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              Pantip Hitz
            </Link>
          </li>
          <li>
            <a
              className="border-none text-gray-700 hover:text-gray-900"
              href="https://github.com/ixartz/Next-js-Boilerplate"
            >
              Explore
            </a>
          </li>
        </>
      }
      rightNav={<UserButton />}
    >
      <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
    </BaseTemplate>
  );
}
