import '../CSS/Tweet.css';

function Twitter({ content, likeCount }) {
    return (
        <div className='tweet-wrapper'>
            <div className="tweet-content">
                {content}
            </div>
            <div className="likes">
                {likeCount} Likes
            </div>
        </div>
    )
}

export default Twitter;