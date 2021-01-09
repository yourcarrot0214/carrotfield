# Twitter Clone Coding with React - Firebase

## Firebase

---

### 1. Auth

> `firebase.auth()`
> 기본 앱 또는 지정된 앱에 대한 인증 서비스를 가져옵니다. `firebase.auth()`를 인수없이 호출하여 기본 앱의 인증 서비스에 액세스하거나 firebase.auth (app)로 호출하여 특정 앱과 연결된 인증 서비스에 액세스 할 수 있습니다.

#### 1.1 신규 사용자 가입

> 신규 사용자가 자신의 이메일 주소와 비밀번호를 사용해 앱에 가입할 수 있는 양식을 만듭니다.
> 사용자가 양식을 작성하면 사용자가 입력한 이메일 주소와 비밀번호의 유효성 검사를 거친 뒤
> `createUserWithEmailAndPassword()` 메서드에 전달합니다.

```
firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
        // Signed In
    })
    .catch((error) => {
        // Error Handler
    })
```

#### 1.2 기존 사용자 로그인

> 기존 사용자가 자신의 이메일 주소와 비밀번호를 사용해 로그인 할 수 있는 양식을 만듭니다.
> 사용자가 양식을 작성하면 `signInWithEmailAndPassword()` 메서드를 호출합니다.

```
firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
        // Sign in
    })
    .catch((error) => {
        // Error Handler
    })
```

#### 1.3 인증 상태 관찰자 설정 및 사용자 데이터 가져오기

> 로그인한 사용자에 대한 정보가 필요한 앱 페이지마다 전역 인증 객체에 관찰자를 연결합니다.
> 사용자의 로그인 상태가 변경될 때마다 이 관찰자가 호출됩니다.
> `onAuthStateChanged()` 메서드를 이용해 관찰자를 연결합니다.
> 사용자가 로그인되면 관찰자에서 사용자에 대한 정보를 가져올 수 있습니다.

```
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
```

#### 1.4 소셜 로그인(Google, Github, etc..)

> 소셜 로그인을 앱에 통합하여 사용자가 소셜 계정으로 Firebase에 인증하도록 할 수 있습니다.
> 소셜 로그인을 통합하려면 Firebase SDK를 사용해 로그인 과정을 진행해도 되고,
> 수동으로 진행하고 그 결과인 ID Token을 Firebase에 전달해도 됩니다.

```
    // provider : 소셜 제공업체 객체의 인스턴스 생성
    const googleProvider = firebase.auth().GoogleAuthProvider();
    const githubProvider = firebase.auth().GithubAuthProvider();

    // login in
    firebase.auth().signInWithRedirect(provider);
```

#### 1.5 로그아웃

> 사용자를 로그아웃 시키려면 `signOut()`을 호출합니다.

```
firebase.auth().signOut()
```

---

### 2. FirebaseStore

> Firebase에서 제공하는 NoSQL 클라우드 데이터베이스 입니다.
> 클라이언트 및 서버측 개발에 사용되는 데이터를 저장하고 동기화 할 수 있습니다.
> Firebase 프로젝트 빌드 목록에서 Cloud Firestore에서 생성합니다.

#### 2.1 데이터 추가하기

> 단일 문서를 만들거나 덮어쓰려면 `set()` 메서드를 사용합니다.

```
import 'firebase/firestore'
const firebaseStore = firebase.firestore();

const tweetInfo = {
    userId: 'stylenbs@naver.com',
    createdAt: Date.now(),
    text: 'This is New Tweet.'
}

// 작업을 수행하는 함수에서 async await로 promise를 수행해야 합니다.
await firebaseStore.collection('tweetDB').doc('tweet').set(tweetInfo);

```

문서(doc)가 없으면 새로 만들고, 문서가 있으면 새로 제공한 데이터로 내용을 덮어씁니다.
`set()`을 사용하여 문서를 만들 때는 만들 문서의 ID를 지정해야 합니다.(doc)
문서에 유의미한 ID를 두지 않아도 될 경우 Cloud Firestore에서 자동으로 ID를 생성하도록 둡니다.
이때는 set()을 사용하지 않고 add()를 사용합니다.

```
await firebaseStore.collection('tweetDB').add(tweetInfo)
```

#### 2.2 문서 업데이트

> 전체 문서를 덮어쓰지 않고 문서의 일부를 업데이트 하려면 `update()` 메서드를 사용합니다.

```
 await firebaseStore.doc(`tweetDB/${tweetObject.id}`).update({
      text: NewTweet,
    });
```

> 문서를 삭제하려면 `delete()` 메서드를 사용합니다.

```
await firebaseStore.doc(`tweetDB/${tweetObject.id}`).delete();
```

> 컬렉션의 모든 문서를 가져오려면 `get()` 메서드를 사용합니다.

```
firebaseStore.collection('tweetDB').get()
```

> `onSnapshot()` 메서드로 실시간 업데이트를 가져올 수 있습니다.
> 사용자가 제공하는 콜백이 최초로 호출될 때는 단일 문서의 현재 내용으로 문서 스냅샷이 즉시 생성됩니다.
> 그런 다음 내용이 변경될 때마다 콜백이 호출되어 문서 스냅샷을 업데이트 합니다.

```
  useEffect(() => {
    firebaseStore.collection("tweets").onSnapshot((snapshot) => {
      const tweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTweets(tweetArray);
    });
  }, []);
```
