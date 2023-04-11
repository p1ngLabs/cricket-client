import { useRouter } from 'next/router';
import Link from 'next/link';
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
          <div className="container mx-auto">
            <Newsletter />
          </div>
          <div className="divider my-0 h-0" />
        </>
      )}

      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row md:justify-between items-start py-10">
          <div className="footer-left">
            <h1 className="font-bold text-2xl mb-3">
              {process.env.NEXT_PUBLIC_APP_NAME?.toLocaleUpperCase()}
            </h1>
            <p className="max-w-sm text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod consectetur blanditiis
              molestias, expedita sit optio, voluptas officiis fuga tenetur, saepe maxime ipsam at!
              Voluptas sapiente, nam sed dicta ad ut.
            </p>
          </div>

          <div className="footer-right mt-5 md:mt-0">
            {/* TODO: get site info from db, edit in admin settings tab */}
            <ul className="flex flex-col text-xs sm:text-sm gap-2">
              <li className="flex items-center gap-2">
                <HiOutlineLocationMarker className="text-xl" />
                46 Trần Hưng Đạo, Hàng Bài, Hoàn Kiếm, Hà Nội, Vietnam
              </li>
              <li className="flex items-center gap-2">
                <HiPhone className="text-xl" />
                <Link href="tel:+84969465045">0969 465 045</Link>
              </li>
              <li className="flex items-center gap-2">
                <HiOutlineMail className="text-xl" />
                <Link href="mailto:thecricketproject.hn@gmail.com">
                  thecricketproject.hn@gmail.com
                </Link>
              </li>
            </ul>
            <div className="flex gap-4 mt-5">
              <Link
                href="https://www.facebook.com/thecricketproject.hn"
                target="_blank"
                className="text-2xl opacity-100 hover:text-blue-500"
              >
                <BsFacebook />
              </Link>
              <Link
                href="https://www.instagram.com/cricketproject__/"
                target="_blank"
                className="text-2xl opacity-100 hover:text-blue-500"
              >
                <BsInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-xs py-2 opacity-70">
        {process.env.NEXT_PUBLIC_APP_NAME} &copy; {currentYear}
      </p>
    </footer>
  );
};

export default Footer;
