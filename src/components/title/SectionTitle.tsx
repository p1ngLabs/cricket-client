import { memo } from 'react';

const SectionTitle = (props: { title: string }) => {
  const { title } = props;

  return (
    <h2 className="relative text-center font-bold uppercase text-3xl mb-8 before:border-t before:w-full before:absolute before:left-0 before:top-4 before:border-gray-400 before:-z-10 mx-4">
      <span className="px-8 bg-white">{title}</span>
    </h2>
  );
};

export default memo(SectionTitle);
