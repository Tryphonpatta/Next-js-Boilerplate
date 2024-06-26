'use client';

import { Card } from 'antd';
import { useEffect, useState } from 'react';

type Tag = {
  name: string;
  slug: string;
};

const HitTabs = () => {
  const [tags, setTags] = useState<Tag[]>([]);

  const fetchTag = async () => {
    const response = await fetch(
      'https://pantip.com/api/forum-service/home/get_tag_hit?limit=10',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-language': 'en-US,en;q=0.9',
          'if-none-match': 'W/"57c-IjK3SEcja5LWFRoamGKLzc3FCSA"',
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
    console.log(data);
    setTags(data?.data);
  };
  useEffect(() => {
    fetchTag();
  }, []);
  return (
    <div className="m-2">
      <Card title="Hit Tags" style={{ padding: 0, width: '200px' }}>
        <div className="!p-0">
          {tags?.map((tag) => (
            <div key={tag.name} className="">
              <p className="cursor-pointer hover:underline">{tag.name}</p>
              <hr />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export { HitTabs };
