import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (ref.current) onSearch(ref.current.value);
      }}
    >
      {/* Add elements inside input */}
      <InputGroup>
        {/* Add a left icon inside the input  */}
        <InputLeftElement children={<BsSearch />}></InputLeftElement>

        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled" // change the input appearance
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
