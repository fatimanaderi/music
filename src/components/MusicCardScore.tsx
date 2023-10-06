import {Badge} from "@chakra-ui/react"
interface Props{
    lan : string
}

const MusicCardScore=({lan} : Props)=>{
    return(
     <Badge borderRadius={2} colorScheme="purple" >{lan}</Badge>
    )
}
export default MusicCardScore;