import { memo } from 'react';

const SectionTitle = (props: { title: string }) => {
  const { title } = props;

  return <h2 className="text-center font-bold uppercase text-3xl mb-8">{title}</h2>;
};

export default memo(SectionTitle);
