import Tweet from "../../components/Tweet";
import {Flex} from "@chakra-ui/react";

const Timeline = ({  data, loading }) => {
    if (loading)
        return <div>Loading...</div>;
    return(
        <Flex direction={'column'}>
            {
                data?.tweets?.length > 0 ?
                    data.tweets.map(tweet => <Tweet tweetId={tweet._id} fullname={tweet.author?.fullname} username={tweet.author} tweetBody={tweet.content} />)
                    : 'No Tweets Yet'
            }
        </Flex>
    )
}
export default Timeline
