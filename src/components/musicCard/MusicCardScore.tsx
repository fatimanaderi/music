import {Badge} from "@chakra-ui/react"
interface Props{
    score : string
}

const MusicCardScore=({score} : Props)=>{
    return(
     <Badge borderRadius={2} colorScheme="purple" >{score}</Badge>
    )
}
export default MusicCardScore;