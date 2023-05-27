import type { NextPage } from 'next/types';
import Layout from '@/components/user/Layout';
import { AspectRatio, Box, Button, TextInput, Textarea, Title, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    marginInline: 'auto',
    [theme.fn.smallerThan('sm')]: {
      width: '80%',
    },
  },
}));

const ContactPage: NextPage = () => {
  const { classes } = useStyles();

  return (
    <Layout>
      <AspectRatio ratio={16 / 9} mt={60}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.2903230307306!2d105.85067081543156!3d21.021066393415627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab8424ba85b7%3A0x8387015666848c0c!2sThe%20Cricket%20Project!5e0!3m2!1sen!2s!4v1673451988009!5m2!1sen!2s"
          width="100%"
        ></iframe>
      </AspectRatio>

      <Box component="section" my={32}>
        <Title order={2} my="lg" size="2rem" transform="uppercase" align="center">
          Get in touch
        </Title>

        <form className={classes.form}>
          <TextInput
            type="text"
            id="name"
            label="Full Name"
            placeholder="Your name"
            withAsterisk
            mb="md"
          />
          <TextInput
            type="text"
            id="email"
            label="Email"
            placeholder="Email address"
            withAsterisk
            mb="md"
          />
          <TextInput
            type="text"
            id="subject"
            label="Subject"
            placeholder="Email subject"
            withAsterisk
            mb="md"
          />
          <Textarea
            id="message"
            label="Message"
            placeholder="Type your message here..."
            withAsterisk
            mb="md"
          />
          <Button mx="auto" color="dark" mt="md" size="lg" fullWidth uppercase>
            Send Email
          </Button>
        </form>
      </Box>
    </Layout>
  );
};

export default ContactPage;
