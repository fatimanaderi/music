import { IconType } from "react-icons";
import {Center, HStack,Icon} from "@chakra-ui/react"
interface Props{
    nameIcon : IconType;
    valueName : string;
}

const MusicCardIcon=({nameIcon,valueName} : Props)=>{
    return(
        <HStack>
            <Center>
                <Icon mx={1} as={nameIcon} color={"gray.500"}/>
                {valueName}
            </Center>
        </HStack>
    )
}
export default MusicCardIcon;