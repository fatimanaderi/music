import {Badge, color} from "@chakra-ui/react"
interface Props{
    lan : string
}

const MusicCardLan=({lan} : Props)=>{
    return(
     <Badge borderRadius={2} colorScheme="green" >{lan}</Badge>
    )
}
export default MusicCardLan;