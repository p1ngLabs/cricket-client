import { Spinner } from '@chakra-ui/react';

const Loading = () => {
  return (
    <div className="text-center mt-8">
      <Spinner speed="0.6s" emptyColor="gray.100" size="xl" thickness="4px" color="blue.500" />;
    </div>
  );
};

export default Loading;
