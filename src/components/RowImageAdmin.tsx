import Image from 'next/image';
import Link from 'next/link';

const RowImageAdmin = (props: { imgSrc: string }) => {
  const { imgSrc } = props;

  return (
    <Link href={imgSrc} passHref legacyBehavior>
      <a target="_blank">
        <Image src={imgSrc} width={40} height={40} className="rounded-md" alt="avatar" />
      </a>
    </Link>
  );
};

export default RowImageAdmin;
