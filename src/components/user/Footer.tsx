import Link from 'next/link';
import { Box, Container, Flex, List, Space, Text, Tooltip, createStyles } from '@mantine/core';
import { HiOutlineLocationMarker, HiPhone, HiOutlineMail } from 'react-icons/hi';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import Image from 'next/image';
import darkLogo from 'public/images/logo-black-transparent.png';

const currentYear = new Date().getFullYear();

const useStyles = createStyles((theme) => ({
  footer: {
    backgroundColor: '#f4f4f4',
    paddingTop: '2rem',
  },
  infoItemWrapper: {
    alignItems: 'center',
  },
}));

const Footer = () => {
  const { classes } = useStyles();

  return (
    <Box component="footer" className={classes.footer} mt="5rem">
      <Container size="lg">
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          justify="space-between"
          align="center"
          gap="xl"
        >
          <Image src={darkLogo} width={150} alt="footer logo" />

          <Box>
            <List fz="sm" style={{ flex: 1 }}>
              <List.Item
                icon={<HiOutlineLocationMarker fontSize={18} />}
                classNames={{ itemWrapper: classes.infoItemWrapper }}
              >
                46 Trần Hưng Đạo, Hàng Bài, Hoàn Kiếm, Hà Nội, Vietnam
              </List.Item>
              <Space h={8} />
              <List.Item
                icon={<HiPhone fontSize={18} />}
                classNames={{ itemWrapper: classes.infoItemWrapper }}
              >
                <Text component={Link} href="tel:+84969465045">
                  0969 465 045
                </Text>
              </List.Item>
              <Space h={8} />
              <List.Item
                icon={<HiOutlineMail fontSize={18} alignmentBaseline="central" />}
                classNames={{ itemWrapper: classes.infoItemWrapper }}
              >
                <Text component={Link} href="mailto:thecricketproject.hn@gmail.com">
                  thecricketproject.hn@gmail.com
                </Text>
              </List.Item>
            </List>

            <Flex gap={16} mt="lg" justify={{ base: 'center', sm: 'start' }}>
              <Tooltip label="Facebook">
                <Text
                  component={Link}
                  href="https://www.facebook.com/thecricketproject.hn"
                  target="_blank"
                  sx={(theme) => ({
                    '&:hover': {
                      color: theme.colors.dark[4],
                    },
                  })}
                >
                  <BsFacebook fontSize={28} />
                </Text>
              </Tooltip>
              <Tooltip label="Instagram">
                <Text
                  component={Link}
                  href="https://www.instagram.com/cricketproject__/"
                  target="_blank"
                  sx={(theme) => ({
                    '&:hover': {
                      color: theme.colors.dark[4],
                    },
                  })}
                >
                  <BsInstagram fontSize={28} />
                </Text>
              </Tooltip>
            </Flex>
          </Box>
        </Flex>

        <Text
          component="p"
          fz="sm"
          align="center"
          opacity={0.65}
          my={0}
          py={8}
          style={{ userSelect: 'none' }}
        >
          {process.env.NEXT_PUBLIC_APP_NAME} &copy; {currentYear}
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
