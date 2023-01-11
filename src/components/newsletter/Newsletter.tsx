import { Button, Heading, Input } from '@chakra-ui/react';

const Newsletter = () => {
  return (
    <div className="flex sm:flex-row flex-col items-start gap-8 py-8">
      <div className="left-newsletter">
        <Heading size="lg" className="mb-2">
          Subcribe to our newsletter
        </Heading>
        <Heading size="sm">To receive exclusive offers and deals</Heading>
      </div>
      <form method="POST" action="/api/subscribe" className="flex sm:ml-auto gap-2">
        <Input
          type="text"
          bgColor="white"
          focusBorderColor="none"
          size="lg"
          placeholder="Your email address"
        />
        <Button type="button" size="lg">
          SIGN UP
        </Button>
      </form>
    </div>
  );
};

export default Newsletter;
