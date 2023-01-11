import { Input, InputGroup, InputRightAddon } from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';

const handleSubmit = () => {
  console.log('search');
};

const Searchbar = () => {
  return (
    <form action="/search" method="GET" className="search w-96 mr-4 hidden sm:block">
      <InputGroup>
        <Input
          type="search"
          placeholder="Search for books, authors"
          focusBorderColor="none"
          bgColor="white"
        />
        <InputRightAddon className="cursor-pointer" fontSize="xl" onClick={handleSubmit}>
          <FiSearch onClick={handleSubmit} />
        </InputRightAddon>
      </InputGroup>
    </form>
  );
};

export default Searchbar;
