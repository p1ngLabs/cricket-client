const PageTitle = (props: { title: string | undefined }) => {
  const { title } = props;

  return <h1 className="font-bold text-xl text-gray-700">Danh sách {title}</h1>;
};

export default PageTitle;
