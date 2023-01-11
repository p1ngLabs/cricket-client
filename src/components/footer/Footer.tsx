import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { Newsletter } from '@components/index';
import { Divider, Heading, List, ListIcon, ListItem, Stack } from '@chakra-ui/react';
import { HiOutlineLocationMarker, HiPhone, HiOutlineMail } from 'react-icons/hi';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  return (
    <footer id="footer" className="bg-gray">
      {router.pathname === '/' && (
        <>
          <div className="container mx-auto w-11/12 sm:w-full">
            <Newsletter />
          </div>
          <Divider />
        </>
      )}

      <div className="container mx-auto w-11/12 sm:w-full">
        <div className="flex flex-col sm:flex-row sm:justify-between items-start py-10 sm:h-60">
          <div className="footer-left">
            <Heading size="md">{process.env.NEXT_PUBLIC_APP_NAME?.toUpperCase()}</Heading>
            <p className="max-w-sm mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod consectetur blanditiis
              molestias, expedita sit optio, voluptas officiis fuga tenetur, saepe maxime ipsam at!
              Voluptas sapiente, nam sed dicta ad ut.
            </p>
          </div>
          <div className="footer-right mt-8 sm:mt-0">
            {/* TODO: get site info from db, edit in admin settings tab */}
            <List spacing={2}>
              <ListItem>
                <ListIcon className="text-xl" as={HiOutlineLocationMarker} />
                46 Trần Hưng Đạo, Hàng Bài, Hoàn Kiếm, Hà Nội, Vietnam
              </ListItem>
              <ListItem>
                <ListIcon className="text-xl" as={HiPhone} />
                0969 465 045 - Mrs. Thơm
              </ListItem>
              <ListItem>
                <ListIcon className="text-xl" as={HiOutlineMail} />
                thecricketproject.hn@gmail.com
              </ListItem>
            </List>

            <Stack direction="row" spacing={4} className="mt-5">
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
            </Stack>
          </div>
        </div>

        <Divider />

        <p className="text-center py-1 opacity-70">
          &copy; {currentYear} {process.env.NEXT_PUBLIC_APP_NAME}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
