import TweetList from './TweetList';
import AddTweet from './AddTweet';
import { useState } from 'react';
const initialDummyTweets = [
    { "id": 0, "content": "we have a new twitter called threads", "likeCount": 3, "createdAt": new Date() },
    { "id": 1, "content": "what should we post,", "likeCount": 4, "createdAt": new Date() },
    { "id": 2, "content": "what is up with tech community", "likeCount": 5, "createdAt": new Date() }
]

function Twitter() {
    const [tweets, setTweets] = useState(initialDummyTweets);
    const handleAddTweet = (text) => {
        let nextId = (tweets.length > 0) ? tweets[tweets.length - 1].id + 1 : 0;
        setTweets([...tweets, {
            "content": text,
            likeCount: Math.floor(Math.random() * 10),
            id: nextId,
            createdAt: new Date()
        }])
    }
    const handleEditTweet = (tweet) => {
        setTweets(tweets.map((currentTweet) => {
            if (currentTweet.id === tweet.id) {
                return tweet;
            }
            else {
                return currentTweet;
            }
        }))
    }
    const sortTweets = () => {
        tweets.sort((t1, t2) => t2.createdAt.getTime() - t1.createdAt.getTime());
        setTweets([...tweets]);
    }
    return (
        <>
            <AddTweet onAddTweet={handleAddTweet} />
            <button onClick={sortTweets}>Sort Tweet By Created At</button>
            <TweetList tweets={tweets} onEditTweet={handleEditTweet} />
        </>
    );
}
export default Twitter;