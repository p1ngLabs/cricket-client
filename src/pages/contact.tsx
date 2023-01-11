import { NextPage } from 'next/types';
import Layout from '@layouts/Layout';
import { Button, FormControl, FormLabel, Heading, Input, Textarea } from '@chakra-ui/react';

const ContactPage: NextPage = () => {
  return (
    <Layout>
      <div className="contact-map mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.2903230307306!2d105.85067081543156!3d21.021066393415627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab8424ba85b7%3A0x8387015666848c0c!2sThe%20Cricket%20Project!5e0!3m2!1sen!2s!4v1673451988009!5m2!1sen!2s"
          width="100%"
          height="500px"
          loading="lazy"
        ></iframe>
      </div>

      <section className="contact-info my-8">
        <Heading as="h1" size="lg" className="mb-4 text-center">
          GET IN TOUCH
        </Heading>
        <form className="flex flex-col w-2/4 mx-auto gap-4">
          <FormControl>
            <FormLabel htmlFor="name">
              Name<sup className="required">*</sup>
            </FormLabel>
            <Input
              id="name"
              type="text"
              variant="flushed"
              placeholder="Your name"
              className="w-2/5"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">
              Email<sup className="required">*</sup>
            </FormLabel>
            <Input id="email" type="email" variant="flushed" placeholder="Email" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="subject">
              Subject<sup className="required">*</sup>
            </FormLabel>
            <Input id="subject" type="text" variant="flushed" placeholder="Subject" />
          </FormControl>
          <FormControl className="w-full">
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea id="message" variant="flushed" placeholder="Type your message here..." />
          </FormControl>
          <Button type="button" variant="outline" className="mx-auto mt-3">
            SEND EMAIL
          </Button>
        </form>
      </section>
    </Layout>
  );
};

export default ContactPage;
