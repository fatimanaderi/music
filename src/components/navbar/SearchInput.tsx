import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useMusicQueryStore from "../../store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useMusicQueryStore(s=>s.setSearchText);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search your Music..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};
export default SearchInput;
