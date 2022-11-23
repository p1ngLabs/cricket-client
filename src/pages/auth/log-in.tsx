import { Button, Flex, Heading, Input, useColorMode, useColorModeValue } from '@chakra-ui/react';

const LoginPage = () => {
  const { toggleColorMode } = useColorMode();
  const toggleBackgroundColor = useColorModeValue('grey.100', 'grey.700');
  return (
    <Flex height='100vh' alignItems='center' justifyContent='center'>
      <Flex direction='column' background={toggleBackgroundColor} p={12} rounded={6}>
        <Heading mb={6}>Log In</Heading>
        <Input placeholder='mail@mail.com' variant='filled' mb={3} type='email'></Input>
        <Input placeholder='******' variant='filled' mb={6} type='password'></Input>
        <Button colorScheme='teal'>Log In</Button>
        <Button onClick={toggleColorMode}>Quên mật khẩu ?</Button>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
