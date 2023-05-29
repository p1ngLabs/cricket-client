import Image from 'next/image';
import Link from 'next/link';
import defaultAvatar from 'public/images/default.jpg';

const RowImageAdmin = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <Link href={imgSrc ? imgSrc : defaultAvatar.src} target="_blank">
      <Image
        src={imgSrc ? imgSrc : defaultAvatar}
        width={50}
        height={50}
        className="rounded-md"
        style={{ display: 'inline-block' }}
        alt="avatar"
      />
    </Link>
  );
};

export default RowImageAdmin;
