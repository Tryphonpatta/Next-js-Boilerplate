'use client';

import { Card, Spin } from 'antd';
import { useState } from 'react';

import { ListBox } from './ListBox';

const RealtimeBox = () => {
  const [count, setCount] = useState(3);
  const [isLoad, setIsLoad] = useState(false);
  const data = [
    {
      img: 'https://upload.wikimedia.org/wikipedia/th/c/c5/Pantip_Logo.png',
      title: 'title',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non beatae saepe dicta tempore illo accusantium in amet at, possimus, quos ad magni enim, ratione repellendus eius! Ut dolor vitae temporibus!',
    },
  ];
  return (
    <Card
      title="Pantip Realtime"
      className="m-2 w-[1000px] cursor-default"
      hoverable
    >
      {[...Array(count)].map((e, i) => (
        <div key={`${data[i % data.length]?.title} ${e}`}>
          <ListBox
            img={data[i % data.length]?.img}
            title={data[i % data.length]?.title}
            desc={data[i % data.length]?.desc}
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() => {
          setIsLoad(true);
          setTimeout(() => {
            setIsLoad(false);
            setCount(count + 2);
          }, 2000);
        }}
        className=" text-md mt-2 h-12 w-full rounded-md bg-gray-300 transition duration-300 hover:bg-gray-400"
      >
        {isLoad ? <Spin /> : 'Load more'}
      </button>
    </Card>
  );
};

export { RealtimeBox };
