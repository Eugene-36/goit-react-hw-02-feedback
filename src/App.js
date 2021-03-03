import "./App.css";
// import Profile from "./components/Profile/Profile";
// import Statistics from "./components/Statistics/Statistics";
// import FriendList from "./components/FriendsList/FriendsList";
// import Transaction from "./components/TransactionHistory/TransactionHistory";
// import userJson from "./db/db.user.json";
// import statistics from "./db/db.statistics.json";
// import friends from "./db/db.friends.json";
// import transactionObj from "./db/db.transactionHistory.json";
//todo: Вторая дз
import FeedBack from "./components/FeedBack/FeedBack";
console.log(FeedBack);

function App() {
  //const { name, tag, location, avatar, stats } = userJson;
  return (
    <div className="App">
      {/* <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={statistics} />
      <Statistics stats={statistics} />
      <FriendList friends={friends} />
      <Transaction items={transactionObj} /> */}
    </div>
  );
}

export default App;
