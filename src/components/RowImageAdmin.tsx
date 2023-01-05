import Image from 'next/image';
import Link from 'next/link';
import defaultAvatar from 'public/images/default.jpg';

const RowImageAdmin = (props: { imgSrc: string }) => {
  const { imgSrc } = props;

  return (
    <Link href={imgSrc ? imgSrc : defaultAvatar.src} passHref legacyBehavior>
      <a target="_blank">
        <Image
          src={imgSrc ? imgSrc : defaultAvatar}
          width={40}
          height={40}
          className="rounded-md"
          style={{ display: 'inline' }}
          alt="avatar"
        />
      </a>
    </Link>
  );
};

export default RowImageAdmin;
