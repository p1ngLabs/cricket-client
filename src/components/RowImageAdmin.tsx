import Image from 'next/image';
import Link from 'next/link';

const RowImageAdmin = (props: { src: string }) => {
  const { src } = props;

  return (
    <Link href={src} passHref legacyBehavior>
      <a target="_blank">
        <Image src={src} width={40} height={40} className="rounded-md" alt="avatar" />
      </a>
    </Link>
  );
};

export default RowImageAdmin;
