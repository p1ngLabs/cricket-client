import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { Newsletter } from '@components/index';
import { HiOutlineLocationMarker, HiPhone, HiOutlineMail } from 'react-icons/hi';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  return (
    <footer id="footer" className="bg-cricket_gray">
      {router.pathname === '/' && (
        <>
          <div className="container mx-auto w-11/12 sm:w-full">
            <Newsletter />
          </div>
          <div className="divider my-0 h-0" />
        </>
      )}

      <div className="container mx-auto w-11/12 sm:w-full">
        <div className="flex flex-col sm:flex-row sm:justify-between items-start py-10 sm:h-60">
          <div className="footer-left">
            <h2 className="font-bold text-2xl mb-3">
              {process.env.NEXT_PUBLIC_APP_NAME?.toUpperCase()}
            </h2>
            <p className="max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod consectetur blanditiis
              molestias, expedita sit optio, voluptas officiis fuga tenetur, saepe maxime ipsam at!
              Voluptas sapiente, nam sed dicta ad ut.
            </p>
          </div>

          <div className="footer-right mt-8 sm:mt-0">
            {/* TODO: get site info from db, edit in admin settings tab */}
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <HiOutlineLocationMarker className="text-2xl" />
                46 Trần Hưng Đạo, Hàng Bài, Hoàn Kiếm, Hà Nội, Vietnam
              </li>
              <li className="flex items-center gap-2">
                <HiPhone className="text-2xl" />
                0969 465 045
              </li>
              <li className="flex items-center gap-2">
                <HiOutlineMail className="text-2xl" />
                thecricketproject.hn@gmail.com
              </li>
            </ul>
            <div className="flex gap-4 mt-5">
              <NextLink
                href="https://www.facebook.com/thecricketproject.hn"
                target="_blank"
                className="text-3xl opacity-60"
                title="Facebook"
              >
                <BsFacebook />
              </NextLink>
              <NextLink
                href="https://www.instagram.com/cricketproject__/"
                target="_blank"
                className="text-3xl opacity-60"
                title="Instagram"
              >
                <BsInstagram />
              </NextLink>
            </div>
          </div>
        </div>
      </div>
      <div className="divider my-0 h-0" />
      <p className="text-center py-1 opacity-70">
        &copy; {currentYear} {process.env.NEXT_PUBLIC_APP_NAME}
      </p>
    </footer>
  );
};

export default Footer;
