import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const MusicCardSkeleton =()=>{
    return(
        <Card width={"250px"} borderRadius={10} overflow="hidden" mx={1}>
            <Skeleton height={"300px"}/>
            <CardBody>
                <SkeletonText/>
            </CardBody>
        </Card>
    )
}
export default MusicCardSkeleton