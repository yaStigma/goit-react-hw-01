import userData from "../userData.json";
// import friends from "../friends.json";
// import transactions from "../transactions.json";
import Profile  from "./Profile/Profile";
import css from "./App.module.css";


export default function App () {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      {/* <FriendList friends={friends} /> */}
      {/* <TransactionHistory items={transactions} /> */}
    </div>
  );
}
