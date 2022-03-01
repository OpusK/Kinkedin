import React, { useEffect, useState } from 'react'
import InputOption from "./InputOption"
import Post from "./Post"

import "./Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

import { query, collection, addDoc, onSnapshot, serverTimestamp, orderBy } from "firebase/firestore";
import { db } from "./firebase";

function Feed() {
  const [refresh, setRefresh] = useState(false);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // https://firebase.google.com/docs/firestore/quickstart#read_data
    try {
      const db_posts = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
      onSnapshot(db_posts, (snapshot) => {
        setPosts(snapshot.docs.map((doc) => ({
          id: doc.id, data: doc.data()
        })));
      });
    } catch (e) {
      console.log("on snapshot error: " + e);
    }
  }, [refresh]);

  const sendPost = (e) => {
    e.preventDefault();

    try {
      // https://firebase.google.com/docs/firestore/quickstart#add_data
      addDoc(collection(db, "posts"), {
        name: "Kei",
        description: "I'm a software engineer",
        message: input,
        photoUrl: "",
        timestamp: serverTimestamp(),
      });
      console.log("Sent post: " + input);
    } catch (e) {
      console.error('error adding doc to db: ' + e);
    }

    setRefresh(!refresh);
    setInput("");
  }

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E" />
        </div>
      </div>

      {posts.length && posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed
