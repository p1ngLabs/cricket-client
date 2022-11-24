import Head from 'next/head';
import {
  Button,
  ButtonGroup,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

const LoginPage = () => {
  const { toggleColorMode } = useColorMode();
  const toggleBackgroundColor = useColorModeValue('grey.100', 'grey.700');

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APPNAME}</title>
        <meta name="description" content="Thư viện cho bạn và cho tôi..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col rounded-lg">
          <Heading mb={6}>Log In</Heading>
          <Input placeholder="mail@mail.com" variant="filled" mb={3} type="email"></Input>
          <Input placeholder="******" variant="filled" mb={6} type="password"></Input>
          <ButtonGroup isAttached>
            <Button colorScheme="teal">Log In</Button>
            <Button onClick={toggleColorMode}>Quên mật khẩu ?</Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
