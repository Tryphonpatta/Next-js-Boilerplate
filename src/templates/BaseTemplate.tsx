import { useTranslations } from 'next-intl';

import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div className=" w-full px-1 text-gray-700 antialiased ">
      <div className="mx-auto overflow-x-hidden md:max-w-full">
        <header className=" hidden border-b border-gray-300 md:block">
          <div className="flex items-center justify-between">
            <nav>
              <div>
                <img
                  src="https://f.ptcdn.info/978/055/000/p3k2z0w5eDbyA2F02dP-o.png"
                  alt=""
                  className="ml-2 size-20"
                />
              </div>
            </nav>
            <nav>
              <ul className="flex flex-wrap gap-x-14 text-xl">
                {props.leftNav}
              </ul>
            </nav>

            <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">
                {props.rightNav}
              </ul>
            </nav>
          </div>
        </header>

        <main>{props.children}</main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          © Copyright {new Date().getFullYear()} {AppConfig.name}.
          {` ${t('made_with')} `}
          <a
            href="https://creativedesignsguru.com"
            className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          >
            CreativeDesignsGuru
          </a>
          .
          {/*
           * PLEASE READ THIS SECTION
           * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
           * The link doesn't need to appear on every pages, one link on one page is enough.
           * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
           */}
        </footer>
      </div>
    </div>
  );
};

export { BaseTemplate };
