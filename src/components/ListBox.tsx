const ListBox = ({ img, desc, title }: any) => {
  return (
    <div className="m-2 flex cursor-pointer items-center gap-3 rounded-md border p-2 transition duration-300 hover:bg-gray-300">
      <div className="p-3">
        <img src={img} alt="" className="w-[800px]" />
      </div>
      <div className="mt-3 p-3">
        <div className="text-[26px]">{title}</div>
        <p className=" line-clamp-3 text-gray-600">{desc}</p>
      </div>
    </div>
  );
};

export { ListBox };
