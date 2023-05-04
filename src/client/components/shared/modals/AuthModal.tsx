import {
  Button,
  Modal,
  PasswordInput,
  Space,
  TextInput,
  Text,
  createStyles,
  rem,
  Center,
  UnstyledButton,
  Divider,
  Flex,
  Group,
  useMantineTheme,
} from '@mantine/core';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

const useStyles = createStyles(() => ({
  title: {
    fontSize: rem(32),
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  removeUnderlineOnHover: {
    textDecoration: 'underline',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  oauthButton: {
    flex: 1,
  },
}));

export type TAuthMode = 'register' | 'login' | 'forgot';

interface AuthModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const AuthModal = ({ isModalOpen, closeModal }: AuthModalProps) => {
  const [authMode, setAuthMode] = useState<TAuthMode>('login');
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted');
  };

  return (
    <Modal
      opened={isModalOpen}
      onClose={closeModal}
      title={
        authMode === 'login' ? 'Sign in' : authMode === 'register' ? 'Sign up' : 'Forgot password'
      }
      classNames={{
        title: classes.title,
      }}
      overlayProps={{
        color: theme.colorScheme === 'light' ? theme.colors.dark[9] : theme.colors.gray[2],
        blur: 2,
      }}
      radius="md"
      centered
    >
      <form onSubmit={handleSubmit}>
        {authMode === 'register' && (
          <>
            <Group position="apart" spacing="sm">
              <TextInput
                label="First Name"
                placeholder="First Name"
                withAsterisk
                required
                style={{ flexGrow: 1 }}
              />
              <TextInput
                label="Last Name"
                placeholder="Last Name"
                withAsterisk
                required
                style={{ flexGrow: 1 }}
              />
            </Group>

            <Space h={16} />

            <TextInput label="Username" placeholder="Username" />

            <Space h={16} />
          </>
        )}

        <TextInput type="email" placeholder="Email" label="Email" size="md" withAsterisk required />

        {authMode === 'forgot' || (
          <>
            <Space h={16} />
            <PasswordInput
              placeholder="Password"
              label="Password"
              size="md"
              withAsterisk
              required
            />
          </>
        )}

        {authMode === 'register' && (
          <>
            <Space h={16} />
            <PasswordInput
              placeholder="Confirm password"
              label="Confirm password"
              size="md"
              withAsterisk
              required
            />
          </>
        )}

        <UnstyledButton
          my={16}
          fz="sm"
          onClick={() => setAuthMode('forgot')}
          className={classes.removeUnderlineOnHover}
        >
          Forgot password?
        </UnstyledButton>

        <Button type="submit" w="100%" color="dark" size="md">
          Submit
        </Button>

        <Divider
          my="sm"
          label="OR"
          labelPosition="center"
          styles={{ label: { fontSize: '16px' } }}
        />

        <Flex justify="space-between" gap="sm">
          <Button
            component={Link}
            href="#"
            leftIcon={<FaFacebookF />}
            color="indigo"
            className={classes.oauthButton}
          >
            Sign In with Facebook
          </Button>
          <Button
            component={Link}
            href="#"
            leftIcon={<FaGoogle />}
            color="red"
            className={classes.oauthButton}
          >
            Sign In with Google
          </Button>
        </Flex>

        <Center fz="sm" mt={8}>
          <Text c="gray" span>
            {authMode === 'register' ? 'Already have account?' : 'No account yet?'}
          </Text>
          <UnstyledButton
            fz="sm"
            ml={6}
            onClick={
              authMode === 'register' ? () => setAuthMode('login') : () => setAuthMode('register')
            }
            className={classes.removeUnderlineOnHover}
          >
            {authMode === 'register' ? 'Sign In' : 'Create an Account'}
          </UnstyledButton>
        </Center>
      </form>
    </Modal>
  );
};

export default AuthModal;
