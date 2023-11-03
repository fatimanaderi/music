import { Box, Center, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { Music } from "../../hooks/useMusicDetail";
import country from "../../data/country.json";
import { MdLanguage } from "react-icons/md";
import {
  FaLocationDot,
  FaSquarePollVertical,
  FaCalendar,
  FaSquareCheck,
  FaCube,
} from "react-icons/fa6";
interface Props {
  music: Music;
}
const MainDetails = ({ music }: Props) => {
  const findCountry = (cca2: string) => {
    let filteredCountry = country.filter((item) => item.cca2 == cca2);
    return {
      name: filteredCountry[0] ? filteredCountry[0].name : "-",
      flag: filteredCountry[0] ? filteredCountry[0].flag : "",
    };
  };
  const { name, flag } = findCountry(music.country);
  return (
    <Box>
      <Heading size={"lg"}>{music.title}</Heading>
      <Flex my={2}>
        <Center>
          <Icon mx={2} as={FaLocationDot} color={"purple.400"} boxSize={6} />
          <Text>{name ? name : music.country}</Text>
        </Center>
      </Flex>
      <Flex my={2}>
        <Center>
          <Icon mx={2} as={FaCalendar} color={"purple.400"} boxSize={6} />
          <Text>{music.date} </Text>
        </Center>
      </Flex>
      <Flex my={2}>
        <Center>
          <Icon mx={2} as={MdLanguage} color={"purple.400"} boxSize={6} />
          <Text>
            {music["text-representation"].language} {flag ? flag : ""}
          </Text>
        </Center>
      </Flex>
      <Flex my={2}>
        <Center>
          <Icon
            mx={2}
            as={FaSquarePollVertical}
            color={"purple.400"}
            boxSize={6}
          />
          <Text>{music.quality}</Text>
        </Center>
      </Flex>
      <Flex my={2}>
        <Center>
          <Icon mx={2} as={FaSquareCheck} color={"purple.400"} boxSize={6} />
          <Text>{music.status}</Text>
        </Center>
      </Flex>
      <Flex my={2}>
        <Center>
          <Icon mx={2} as={FaCube} color={"purple.400"} boxSize={6} />
          <Text>{music.packaging}</Text>
        </Center>
      </Flex>
    </Box>
  );
};
export default MainDetails;
