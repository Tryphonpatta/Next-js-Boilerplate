'use client';

import { Card } from 'antd';
import { useState } from 'react';

import { ListBox } from './ListBox';

const PickBox = () => {
  const [count, setCount] = useState(3);
  const data = [
    {
      img: 'https://upload.wikimedia.org/wikipedia/th/c/c5/Pantip_Logo.png',
      title: 'title',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non beatae saepe dicta tempore illo accusantium in amet at, possimus, quos ad magni enim, ratione repellendus eius! Ut dolor vitae temporibus!',
    },
  ];
  return (
    <Card
      title="Pantip Picks"
      className="m-2 w-[700px] cursor-default"
      hoverable
    >
      {[...Array(count)].map((e, i) => (
        <div key={e} className="">
          <ListBox
            img={data[i % data.length]?.img}
            title={data[i % data.length]?.title}
            desc={data[i % data.length]?.desc}
          />
        </div>
      ))}
      <div className="flex h-9  w-full  justify-center">
        <button
          type="button"
          onClick={() => {
            setCount(count + 2);
          }}
          className=" text-md mt-2 h-9 w-24 rounded-md bg-gray-300 hover:bg-gray-400"
        >
          Load more
        </button>
      </div>
    </Card>
  );
};

export { PickBox };
