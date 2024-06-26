import { getTranslations } from 'next-intl/server';

import { CarouselMenu } from '@/components/CarouselMenu';
import { HighlighBox } from '@/components/HighlightBox';
import { SearchBox } from '@/components/SearchBox';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="my-5 flex justify-center">
        <SearchBox />
      </div>
      <CarouselMenu />
      <HighlighBox />
    </div>
  );
}
