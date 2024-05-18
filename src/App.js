import './App.css';
import TweetList from './components/TweetList';
const initialDummyTweets = [
  { "id": 0, "content": "we have a new twitter called threads", "likeCount": 3 },
  { "id": 1, "content": "what should we post,", "likeCount": 4 },
  { "id": 2, "content": "what is up with tech community", "likeCount": 5 }
]
function App() {
  return (
    <div className="App">
      <TweetList tweets={initialDummyTweets} />
    </div>
  );
}

export default App;


