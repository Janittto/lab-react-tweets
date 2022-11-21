import User from "./User";
import ProfileImage from "./ProfileImage";
import Timestamps from "./Timestamps";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  console.log(props);
  return (
    <div className="tweet">
    <ProfileImage image={props.tweet.user.image} />

    <div className="body">
        <div className="top">
        
          <User userData={props.tweet.user} />
          <Timestamps time={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />   
      
        <Actions />      
      </div>
    </div>
  );
}

export default Tweet;
