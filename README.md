# Twitter Clone Coding with React - Firebase

## Firebase

### 1. Auth

> firebase.auth()
> 기본 앱 또는 지정된 앱에 대한 인증 서비스를 가져옵니다. firebase.auth ()를 인수없이 호출하여 기본 앱의 인증 서비스에 액세스하거나 firebase.auth (app)로 호출하여 특정 앱과 연결된 인증 서비스에 액세스 할 수 있습니다.

#### 1.1 신규 사용자 가입

> 신규 사용자가 자신의 이메일 주소와 비밀번호를 사용해 앱에 가입할 수 있는 양식을 만듭니다.
> 사용자가 양식을 작성하면 사용자가 입력한 이메일 주소와 비밀번호의 유효성 검사를 거친 뒤
> createUserWithEmailAndPassword() 메서드에 전달합니다.

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
> 사용자가 양식을 작성하면 signInWithEmailAndPassword() 메서드를 호출합니다.

```
firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
        // Sign in
    })
    .catch((error) => {
        // Error Handler
    })
```

### 1.3 인증 상태 관찰자 설정 및 사용자 데이터 가져오기

> 로그인한 사용자에 대한 정보가 필요한 앱 페이지마다 전역 인증 객체에 관찰자를 연결합니다.
> 사용자의 로그인 상태가 변경될 때마다 이 관찰자가 호출됩니다.
> onAuthStateChanged() 메서드를 이용해 관찰자를 연결합니다.
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

### 1.4 소셜 로그인(Google, Github, etc..)

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

### 1.5 로그아웃

> 사용자를 로그아웃 시키려면 signOut()을 호출합니다.

```
firebase.auth().signOut()
```
