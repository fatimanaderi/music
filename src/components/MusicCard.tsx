import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import {Music} from "../hooks/useMusics"

interface Props{
    music : Music
}
const MusicCard =({music} : Props)=>{
    return (
        <Card borderRadius={10} overflow="hidden">
            <Image src={music.thumbnailsSmall} />
            <CardBody>
                <Heading fontSize={"2xl"}>{music.title}</Heading>
            </CardBody>
        </Card>
    )
}
export default MusicCard;