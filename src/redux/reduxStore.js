import { createStore } from "redux";
import { firebaseAuth, firebaseStore } from "Fbase";

firebaseAuth.onAuthStateChanged((user) => {
  if (user) {
    initialState.UserObject = {
      email: user.email,
      displayName: user.displayName,
      uid: user.uid,
      photoURL: user.providerData[0].photoURL || null,
      updateProfile: (args) => user.updateProfile(args),
    };
  }
});

firebaseStore
  .collection("tweets")
  .orderBy("createdAt", "desc")
  .onSnapshot((snapshot) => {
    const tweetArray = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    initialState.Tweets = tweetArray;
  });

const initialState = {
  UserObject: {},
  Tweets: [],
};

export default initialState;
