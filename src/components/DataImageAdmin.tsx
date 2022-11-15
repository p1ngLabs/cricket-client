import Image from 'next/image';
import Link from 'next/link';

const DataImageAdmin = (props: { src: string }) => {
  const { src } = props;

  return (
    <Link href={src} passHref legacyBehavior>
      <a target="_blank">
        <Image src={src} width={50} height={50} className="rounded-md" alt="avatar" />
      </a>
    </Link>
  );
};

export default DataImageAdmin;
