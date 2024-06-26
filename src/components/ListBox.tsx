const ListBox = ({ img, desc, title }: any) => {
  return (
    <div className="m-2 flex gap-3 rounded-md border p-2">
      <div className="p-3">
        <img src={img} alt="" className="w-[800px]" />
      </div>
      <div className="mt-3 p-3">
        <div className="text-lg">{title}</div>
        <p className=" line-clamp-2">{desc}</p>
      </div>
    </div>
  );
};

export { ListBox };
