'use client';

import { Card, Carousel } from 'antd';
import type { CarouselRef } from 'antd/es/carousel';
import { useEffect, useRef, useState } from 'react';

type HighlightData = {
  name: string;
  message: string;
  weight: number;
  image_url: string[];
  post_url: string;
};

const HighlightBox = () => {
  const nextArrow = (
    <div className="flex size-8 items-center justify-center rounded-full border transition hover:bg-gray-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg>
    </div>
  );

  const prevArrow = (
    <div className="flex size-8 items-center justify-center rounded-full border  transition hover:bg-gray-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>
    </div>
  );
  const slider = useRef<CarouselRef>(null);
  const [highlightData, setHighlightData] = useState<HighlightData[]>([]);
  const fetchData = async () => {
    const response = await fetch(
      'https://pantip.com/api/forum-service/home/get_highlight',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-language': 'en-US,en;q=0.9',
          'if-none-match': 'W/"c0c-HXskRU9mUVEqB3ENC3GHubzd738"',
          priority: 'u=1, i',
          ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
          'sec-ch-ua':
            '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          cookie:
            'pantip_visitc=s44ix61fv9r7kTSifcI6F; iUUID=5b811b461e2d855f7b492149891de8a1; ka_iid=EsuyBpFH1ifC4YE9BwRtku; _cc_id=74ad2737370ba8bc6766c8ee34aa5f8e; __gads=ID=7d148f9a33193fd8:T=1699982539:RT=1700500167:S=ALNI_MYKClMKIQfgkXRYFAjyjYXtzdTu2w; __gpi=UID=00000c8764f5b0f7:T=1699982539:RT=1700500167:S=ALNI_MZGPyHu7pHH46NO1XXiMaToZynGnQ; cto_bundle=_tHeWF9nTlRwJTJCV3Jtc3o3UjZQazE4YW1XNXlFTUl3RDRWJTJGNnZpWkVLJTJCRzZ6TmJEbnVuYVIxTkdRJTJGTk8zZ2ticHdsdTZpeEpoUkdzbEZPVFdiaW5wcmVqb1RlVGRXbURIM3N0VGExcGZFWmNQN0ZteiUyQmJ6JTJGWTJWd01YaGtVZGhFNmFiTTVtM21kYWJWRXFkWVpkOEdXUUVwYmM0MVdBSEg0JTJCTzhKTFZoUUF1Rm13a3ZOdzNSZ1Bqd0NvdFNUUkV6V0V4ejRmRHJqR1I2S1VWZFUyQSUyRnNnTTJnQjFUd1hUVUI1cDNjcjRXY05HeUdXRDBFTEc1TENRT015WUZoazNNdU9DVQ; _ga=GA1.1.1709816800.1699982539; FCNEC=%5B%5B%22AKsRol85n172ErzesMMYBK7G9VIvM6j5lKuTBDcaMeBATy-QHhWdLoav8Pv-TdwTnedeEB-wUBp2OQSW30ETy2bM6Wb3J-d1aBF4v3uhOSIjuTRNRDz1FHZ_X6VaYkn0_bL6TPfLVk83hTcjpAS6Mi9tlf5b1QqnjQ%3D%3D%22%5D%5D; _ga_ZMC2WGXL4Z=GS1.1.1704736106.8.1.1704736142.24.0.0; rlr=37342050',
          Referer: 'https://pantip.com/',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
        },
        body: null,
        method: 'GET',
      },
    );
    const data = await response.json();
    setHighlightData(data?.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Card
      title="Highlight"
      className="m-2 cursor-default md:max-lg:w-[300px]"
      style={{ padding: 0 }}
      hoverable
    >
      <div className=" flex w-full justify-evenly ">
        <button
          type="button"
          onClick={() => {
            slider.current?.prev();
          }}
        >
          {prevArrow}
        </button>
        <div className="sm:max-md:hidden ">
          <Carousel
            arrows={false}
            dots={false}
            ref={slider}
            slidesToShow={3}
            className="w-[700px] "
            autoplay
            adaptiveHeight
          >
            {highlightData.map((item) => (
              <div
                key={item?.name}
                className="m-2 rounded-md border p-3 hover:bg-gray-300"
              >
                <div className="mb-3">
                  <img src={item?.image_url[0]} alt="" />
                </div>
                <div className="line-clamp-2">
                  <h3>{item?.name}</h3>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <button
          type="button"
          onClick={() => {
            slider.current?.next();
          }}
        >
          {nextArrow}
        </button>
      </div>
    </Card>
  );
};

export { HighlightBox };
