(this["webpackJsonpclone-twitter"]=this["webpackJsonpclone-twitter"]||[]).push([[0],{73:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(1),r=n.n(a),s=n(30),i=n.n(s),o=(n(73),n(9)),u=n(38),l=n(14),j=n(33),b=n(39);n(74),n(86),n(87);b.a.initializeApp({apiKey:"AIzaSyBKlsNg9ESrPNAaoLCpiyVh-FVIOLGQC_I",authDomain:"clone-twitter-829d4.firebaseapp.com",projectId:"clone-twitter-829d4",databaseURL:"gs://clone-twitter-829d4.appspot.com",storageBucket:"clone-twitter-829d4.appspot.com",messagingSenderId:"46704523245",appId:"1:46704523245:web:e016c5cc287a58385199e4"});var d=b.a.auth(),m=b.a,p=b.a.firestore(),O=b.a.storage(),h=n(8),x=n.n(h),f=n(15),g=n(11),v=n(13),w=function(e){e.commentsLength;var t=e.toggleComment;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("span",{onClick:t,children:Object(c.jsx)(g.a,{icon:v.b})})})},N=function(e){var t=e.onDeleteTweet;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("span",{onClick:t,children:Object(c.jsx)(g.a,{icon:v.h})})})},y=function(e){var t=e.toggleEditing;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("span",{onClick:t,children:Object(c.jsx)(g.a,{icon:v.e})})})},_=function(e){var t=e.IsPublic,n=e.onChangeScope;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("span",{onClick:n,children:Object(c.jsx)(g.a,{icon:t?v.d:v.c})})})};var C=function(e){var t=e.isCreator,n=e.isOwner,a=e.onDeleteTweet,r=e.toggleEditing,s=e.toggleComment,i=e.onChangeScope,o=e.IsPublic;return Object(c.jsxs)("div",{className:"nweet__actions",children:[o||t||n?Object(c.jsx)(w,{toggleComment:s}):null,t?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(N,{onDeleteTweet:a}),Object(c.jsx)(y,{toggleEditing:r}),Object(c.jsx)(_,{IsPublic:o,onChangeScope:i})]}):null]})},I=n(90),k=function(e){var t=e.tweetObject,n=e.toggleEditing,a=e.NewTweet,r=e.setNewTweet,s=e.setIsEditing,i=function(){var e=Object(f.a)(x.a.mark((function e(n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,p.doc("tweets/".concat(t.id)).update({text:a});case 3:return s((function(e){return!e})),e.abrupt("return",I.b.success("\uac8c\uc2dc\uae00\uc774 \uc5c5\ub370\uc774\ud2b8 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h4",{children:t.displayName}),Object(c.jsxs)("form",{onSubmit:i,className:"container nweetEdit",children:[Object(c.jsx)("input",{type:"text",value:a,placeholder:"Edit Your Tweet",onChange:function(e){var t=e.target.value;r(t)},autoFocus:!0,required:!0,className:"formInput"}),Object(c.jsx)("input",{type:"submit",value:"Edit Tweet",className:"formBtn"}),Object(c.jsx)("span",{onClick:n,className:"formBtn cancelBtn",children:"Cancel"})]})]})},S=function(e){var t=e.tweetObject,n=e.UserObject,a=t.email.split("@")[0];return console.log(a),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("h4",{className:"nweet__displayName",children:[t.displayName,Object(c.jsx)("span",{className:"nweet__email",children:a})]}),t.IsPublic||"0soACgRb5hNgZHQLjlMcpB4478n2"===n.uid||t.creatorId===n.uid?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h4",{className:"nweet__text",children:t.text}),t.attachmentURL&&Object(c.jsx)("img",{src:t.attachmentURL,alt:"\ucca8\ubd80\uc774\ubbf8\uc9c0"})]}):Object(c.jsx)("h4",{className:"nweet__text private",children:"\ube44\uacf5\uac1c \uac8c\uc2dc\uae00 \uc785\ub2c8\ub2e4."})]})},U=function(e){var t=e.UserObject,n=e.tweetObject,r=(e.toggleComment,Object(a.useState)("")),s=Object(o.a)(r,2),i=s[0],u=s[1],l=Object(a.useState)(!0),j=Object(o.a)(l,2),b=j[0],d=j[1],m=function(){var e=Object(f.a)(x.a.mark((function e(c){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),a={email:t.email,displayName:t.displayName,text:i,createdAt:new Date,creatorId:t.uid,IsPublic:b,responseTo:n.id},e.next=4,p.collection("comments").add(a);case 4:u("");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"form__scope",onClick:function(){d((function(e){return!e}))},children:b?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(g.a,{icon:v.d}),Object(c.jsx)("span",{children:"\ub313\uae00\uc774 \ubaa8\ub450\uc5d0\uac8c \uacf5\uac1c\ub429\ub2c8\ub2e4."})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(g.a,{icon:v.c}),Object(c.jsxs)("span",{children:["\ub313\uae00\uc774 ",n.displayName," \ub2d8\uc5d0\uac8c\ub9cc \uacf5\uac1c\ub429\ub2c8\ub2e4."]})]})}),Object(c.jsxs)("form",{onSubmit:m,className:"container nweetEdit",children:[Object(c.jsx)("input",{type:"text",value:i,placeholder:"\ub313\uae00\uc744 \uc785\ub825\ud558\uc138\uc694.",onChange:function(e){u(e.currentTarget.value)},className:"formInput",required:!0}),Object(c.jsx)("input",{type:"submit",value:"\ub2f5\uae00\ub2ec\uae30",className:"formBtn"})]})]})},F=function(e){var t=e.comment,n=e.onToggleCommentEditMode,a=e.NewComment,r=e.setNewComment,s=function(){var e=Object(f.a)(x.a.mark((function e(c){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,p.doc("comments/".concat(t.id)).update({text:a});case 3:return n((function(e){return!e})),e.abrupt("return",I.b.success("\ub313\uae00\uc774 \uc5c5\ub370\uc774\ud2b8 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h4",{children:t.displayName}),Object(c.jsxs)("form",{onSubmit:s,className:"container nweetEdit",children:[Object(c.jsx)("input",{type:"text",value:a,placeholder:"Edit Your Comment",onChange:function(e){var t=e.target.value;r(t)},autoFocus:!0,required:!0,className:"formInput"}),Object(c.jsx)("input",{type:"submit",value:"Edit Comment",className:"formBtn"}),Object(c.jsx)("span",{onClick:n,className:"formBtn cancelBtn",children:"Cancel"})]})]})},L="\ube44\uacf5\uac1c \ub313\uae00 \uc785\ub2c8\ub2e4.",E=function(e){var t=e.UserObject,n=e.tweetObject,r=e.commentObject,s=t.uid===r.creatorId,i=Object(a.useState)(!1),u=Object(o.a)(i,2),l=u[0],j=u[1],b=Object(a.useState)(r.text),d=Object(o.a)(b,2),m=d[0],O=d[1],h=Object(a.useState)(r.IsPublic),g=Object(o.a)(h,2),v=g[0],w=g[1],C=function(){j((function(e){return!e}))},k=function(){var e=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\ub313\uae00\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=5;break}return e.next=4,p.doc("comments/".concat(r.id)).delete();case 4:return e.abrupt("return",I.b.success("\ub313\uae00\uc774 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4."));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(f.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!v),e.next=3,p.doc("comments/".concat(r.id)).update({IsPublic:!v});case 3:return t=v?"\ub313\uae00\uc774 \uac8c\uc2dc\uae00 \uc791\uc131\uc790\uc5d0\uac8c\ub9cc \uacf5\uac1c\ub429\ub2c8\ub2e4.":"\ub313\uae00\uc774 \ubaa8\ub450\uc5d0\uac8c \uacf5\uac1c\ub429\ub2c8\ub2e4.",e.abrupt("return",I.b.success(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"nweet",children:l?Object(c.jsx)(F,{comment:r,onToggleCommentEditMode:C,NewComment:m,setNewComment:O}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("h4",{className:"nweet__displayName",children:[r.displayName,Object(c.jsx)("span",{className:"nweet__email",children:r.email})]}),r.IsPublic?Object(c.jsx)("h4",{className:"nweet__text",children:r.text}):t.uid===r.creatorId||n.creatorId===t.uid?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("span",{className:"nweet__scope",children:L}),Object(c.jsx)("h4",{className:"nweet__text",children:r.text})]}):Object(c.jsx)("h4",{className:"nweet__text private",children:L}),s&&Object(c.jsxs)("div",{className:"nweet__actions",children:[Object(c.jsx)(N,{onDeleteTweet:k}),Object(c.jsx)(y,{toggleEditing:C}),Object(c.jsx)(_,{IsPublic:v,onChangeScope:S})]})]})})},P=function(e){var t=e.isCreator,n=e.isOwner,r=e.tweetObject,s=e.commentsObject,i=e.UserObject;Object(a.useEffect)((function(){R("tweets"),R("comments")}));var u=Object(a.useState)(!1),l=Object(o.a)(u,2),j=l[0],b=l[1],d=Object(a.useState)(!1),m=Object(o.a)(d,2),h=m[0],g=m[1],v=Object(a.useState)(r.text),w=Object(o.a)(v,2),N=w[0],y=w[1],_=Object(a.useState)(r.IsPublic),F=Object(o.a)(_,2),L=F[0],P=F[1],R=function(e){p.collection(e).where("creatorId","==",i.uid).get().then((function(t){t.empty?console.log("No matching documents."):t.forEach((function(t){p.collection(e).doc(t.id).update({displayName:i.displayName})}))}))},B=function(){var e=Object(f.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!L),e.next=3,p.doc("tweets/".concat(r.id)).update({IsPublic:!L});case 3:return t=L?"\uac8c\uc2dc\uae00\uc774 \uc815\ubcd1\ud6c8\ub2d8\uc5d0\uac8c\ub9cc \uacf5\uac1c\ub429\ub2c8\ub2e4.":"\uac8c\uc2dc\uae00\uc774 \ubaa8\ub450\uc5d0\uac8c \uacf5\uac1c\ub429\ub2c8\ub2e4.",e.abrupt("return",I.b.success(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){b((function(e){return!e}))},D=function(){g((function(e){return!e}))},A=function(){var e=Object(f.a)(x.a.mark((function e(){var t,n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window.confirm("\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"),n=s.filter((function(e){return e.responseTo===r.id})),!t){e.next=17;break}return e.next=5,p.doc("tweets/".concat(r.id)).delete();case 5:if(!n){e.next=13;break}c=0;case 7:if(!(c<n.length)){e.next=13;break}return e.next=10,p.doc("comments/".concat(n[c].id)).delete();case 10:c++,e.next=7;break;case 13:if(!r.attachmentURL){e.next=16;break}return e.next=16,O.refFromURL(r.attachmentURL).delete();case 16:return e.abrupt("return",I.b.success("\uac8c\uc2dc\uae00\uc774 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4."));case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"nweet",children:j?Object(c.jsx)(k,{tweetObject:r,toggleEditing:T,NewTweet:N,setNewTweet:y,setIsEditing:b}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(S,{tweetObject:r,UserObject:i}),Object(c.jsx)(C,{isOwner:n,isCreator:t,tweetObject:r,onDeleteTweet:A,toggleEditing:T,toggleComment:D,onChangeScope:B,IsPublic:L}),t&&s.length>0&&Object(c.jsx)("div",{className:"notice",children:"".concat(s.length,"\uac1c\uc758 \ub313\uae00\uc774 \uc788\uc2b5\ub2c8\ub2e4 :)")}),h&&s.map((function(e){return Object(c.jsx)(E,{UserObject:i,tweetObject:r,commentObject:e},e.id)})),h&&Object(c.jsx)(U,{UserObject:i,tweetObject:r,toggleComment:D})]})})},R=n(93),B=n(92),T=["\uc624\ub298 \ud558\ub8e8 \uc5b4\ub560\ub098\uc694?","\uc798 \uc9c0\ub0b4\uace0 \uacc4\uc2dc\uc8e0?","\uc88b\uc740 \ud558\ub8e8 \ub418\uc138\uc694!","\ub9cc\ub098\uc11c \ubc18\uac11\uc2b5\ub2c8\ub2e4 :)"],D=function(e){var t=e.UserObject,n=Object(a.useState)(""),r=Object(o.a)(n,2),s=r[0],i=r[1],u=Object(a.useState)(""),l=Object(o.a)(u,2),j=l[0],b=l[1],d=Object(a.useState)(!0),m=Object(o.a)(d,2),h=m[0],w=m[1],N=t.displayName?"".concat(T[Math.floor(Math.random()*T.length)]):"\ud504\ub85c\ud544\uc5d0\uc11c \uc2e4\uba85\uc744 \uc5c5\ub370\uc774\ud2b8 \ud6c4 \uc774\uc6a9\ud574\uc8fc\uc138\uc694.",y=function(){var e=Object(f.a)(x.a.mark((function e(n){var c,a,r,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!==s){e.next=3;break}return e.abrupt("return",I.b.warn("\uac8c\uc2dc\uae00\uc744 \uc791\uc131\ud574 \uc8fc\uc138\uc694."));case 3:if(null!==t.displayName){e.next=5;break}return e.abrupt("return",I.b.error("\ud504\ub85c\ud544\uc5d0\uc11c \ub2c9\ub124\uc784\uc744 \ub4f1\ub85d \ud6c4 \uc774\uc6a9\ud574 \uc8fc\uc138\uc694:)"));case 5:if(c="",""===j){e.next=15;break}return I.b.warn("\uac8c\uc2dc\uae00\uc744 \uc5c5\ub85c\ub4dc \uc911\uc785\ub2c8\ub2e4."),a=O.ref().child("".concat(t.uid,"/").concat(Object(R.a)())),e.next=11,a.putString(j,"data_url");case 11:return r=e.sent,e.next=14,r.ref.getDownloadURL();case 14:c=e.sent;case 15:return o={email:t.email,displayName:t.displayName,text:s,createdAt:new Date,creatorId:t.uid,IsPublic:h,attachmentURL:c},e.next=18,p.collection("tweets").add(o);case 18:return i(""),_(),e.abrupt("return",I.b.success("\uac8c\uc2dc\uae00\uc774 \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4."));case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){b("")};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"form__scope",children:[Object(c.jsx)(B.a,{defaultChecked:!0,onChange:function(){w(!h)}}),h?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("span",{className:"scope__public",children:"\uac8c\uc2dc\uae00\uc774 \ubaa8\ub450\uc5d0\uac8c \uacf5\uac1c\ub429\ub2c8\ub2e4."})}):Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("span",{className:"scope__private",children:"\uac8c\uc2dc\uae00\uc774 \uc815\ubcd1\ud6c8 \ub2d8\uc5d0\uac8c\ub9cc \uacf5\uac1c\ub429\ub2c8\ub2e4."})})]}),Object(c.jsxs)("form",{onSubmit:y,className:"factoryForm",children:[Object(c.jsxs)("div",{className:"factoryInput__container",children:[Object(c.jsx)("input",{className:"factoryInput__input",type:"text",placeholder:N,onChange:function(e){var t=e.target.value;i(t)},maxLength:120,value:s}),Object(c.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(c.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(c.jsx)("span",{children:"Add photos"}),Object(c.jsx)(g.a,{icon:v.f})]}),Object(c.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;b(t)},t&&n.readAsDataURL(t)},style:{opacity:0}}),j&&Object(c.jsxs)("div",{className:"factoryForm__attachment",children:[Object(c.jsx)("img",{src:j,style:{backgroundImage:j},alt:"\ucca8\ubd80\uc774\ubbf8\uc9c0"}),Object(c.jsxs)("div",{className:"factoryForm__clear",onClick:_,children:[Object(c.jsx)("span",{children:"Remove"}),Object(c.jsx)(g.a,{icon:v.g})]})]})]})]})},A=function(e){var t=e.UserObject,n="0soACgRb5hNgZHQLjlMcpB4478n2"===t.uid,r=Object(a.useState)([]),s=Object(o.a)(r,2),i=s[0],u=s[1],l=Object(a.useState)([]),b=Object(o.a)(l,2),d=b[0],m=b[1];return Object(a.useEffect)((function(){p.collection("tweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(j.a)({id:e.id},e.data())}));u(t)})),p.collection("comments").orderBy("createdAt","asc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(j.a)({id:e.id},e.data())}));m(t)}))}),[]),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(D,{UserObject:t}),Object(c.jsx)("div",{className:"notice",children:"\ub2f9\uadfc \ubc2d\uc5d0 ".concat(i.length,"\uac1c\uc758 \uac8c\uc2dc\uae00\uc774 \uc788\uc2b5\ub2c8\ub2e4.")}),Object(c.jsx)("div",{style:{marginTop:30},children:i.map((function(e){return Object(c.jsx)(P,{tweetObject:e,isCreator:t.uid===e.creatorId,isOwner:n,UserObject:t,commentsObject:d.filter((function(t){return t.responseTo===e.id}))},e.id)}))})]})},z=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),i=Object(o.a)(s,2),u=i[0],l=i[1],j=Object(a.useState)(""),b=Object(o.a)(j,2),m=b[0],p=b[1],O=Object(a.useState)(!0),h=Object(o.a)(O,2),g=h[0],v=h[1],w=Object(a.useState)(""),N=Object(o.a)(w,2),y=N[0],_=N[1],C=function(){var e=Object(f.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!g||u===m){e.next=4;break}return _("\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),e.abrupt("return");case 4:if(e.prev=4,!g){e.next=11;break}return e.next=8,d.createUserWithEmailAndPassword(n,u);case 8:return e.abrupt("return",I.b.success("\uacc4\uc815\uc774 \uc131\uacf5\uc801\uc73c\ub85c \uc0dd\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4."));case 11:return e.next=13,d.signInWithEmailAndPassword(n,u);case 13:return e.abrupt("return",I.b.success("Welcome to Carrot Field"));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(4),console.log("login form submit error :: ",e.t0.message),_(e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(t){return e.apply(this,arguments)}}(),k=function(e){var t=e.target,n=t.name,c=t.value;"email"===n?r(c):"password"===n?l(c):"password-check"===n&&p(c)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("form",{onSubmit:C,className:"container",children:[Object(c.jsx)("input",{type:"email",placeholder:"E-mail",name:"email",onChange:k,value:n,required:!0,className:"authInput"}),Object(c.jsx)("input",{type:"password",placeholder:"Password",name:"password",onChange:k,value:u,required:!0,className:"authInput"}),g&&Object(c.jsx)("input",{type:"password",placeholder:"Password Check",name:"password-check",onChange:k,value:m,required:!0,className:"authInput"}),Object(c.jsx)("input",{type:"submit",value:g?"\uacc4\uc815 \uc0dd\uc131":"\ub85c\uadf8\uc778",className:"authInput authSubmit"}),y&&Object(c.jsx)("span",{className:"authError",children:y})]}),Object(c.jsx)("span",{onClick:function(){v((function(e){return!e}))},className:"authSwitch",children:g?"\ub85c\uadf8\uc778 \ud558\uae30":"\uacc4\uc815 \uc0dd\uc131\ud558\uae30"})]})},M=n(53);var q=function(){var e=function(){var e=Object(f.a)(x.a.mark((function e(t){var n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?c=new m.auth.GoogleAuthProvider:"github"===n&&(c=new m.auth.GithubAuthProvider),e.next=4,d.signInWithRedirect(c);case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"authBtns",children:[Object(c.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Login with Google ",Object(c.jsx)(g.a,{icon:M.b})]}),Object(c.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Login with Github ",Object(c.jsx)(g.a,{icon:M.a})]})]})},G=function(){return Object(c.jsxs)("div",{className:"authContainer",children:[Object(c.jsx)(g.a,{icon:v.a,color:"orangered",size:"4x",style:{marginBottom:30}}),Object(c.jsx)(z,{}),Object(c.jsx)(q,{})]})},W=function(e){var t=e.UserObject,n=e.refreshUser,r=Object(l.f)(),s=Object(a.useState)(t.displayName),i=Object(o.a)(s,2),u=i[0],b=i[1],m=Object(a.useState)(t.photoURL),p=Object(o.a)(m,2),h=p[0],w=p[1],N=function(){var e=Object(f.a)(x.a.mark((function e(c){var a,r,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),""!==u){e.next=3;break}return e.abrupt("return",I.b.warning("\uc774\ub984 \ud639\uc740 \ub2c9\ub124\uc784\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694."));case 3:if(t.displayName===u){e.next=8;break}return e.next=6,t.updateProfile(Object(j.a)(Object(j.a)({},t),{},{displayName:u}));case 6:n(),b("");case 8:if(a="",h===t.photoURL){e.next=22;break}return I.b.warn("\ud504\ub85c\ud544\uc744 \uc5c5\ub370\uc774\ud2b8 \uc911\uc785\ub2c8\ub2e4."),r=O.ref().child("".concat(t.uid,"/").concat(Object(R.a)())),e.next=14,r.putString(h,"data_url");case 14:return s=e.sent,e.next=17,s.ref.getDownloadURL();case 17:return a=e.sent,e.next=20,t.updateProfile(Object(j.a)(Object(j.a)({},t),{},{photoURL:a}));case 20:n(),w(a);case 22:return e.abrupt("return",I.b.success("\ud504\ub85c\ud544\uc774 \uc5c5\ub370\uc774\ud2b8 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."));case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"container",children:[h?Object(c.jsx)("img",{className:"profile__img",alt:"\ud504\ub85c\ud544 \uc774\ubbf8\uc9c0",src:h}):Object(c.jsx)("div",{className:"profile__img__container",children:Object(c.jsx)(g.a,{icon:v.j,size:"6x"})}),Object(c.jsxs)("form",{onSubmit:N,className:"profileForm",children:[Object(c.jsxs)("label",{htmlFor:"image-file",className:"profile__label",children:[Object(c.jsx)("span",{children:"\ud504\ub85c\ud544 \uc774\ubbf8\uc9c0"}),Object(c.jsx)(g.a,{icon:v.f})]}),Object(c.jsx)("input",{id:"image-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;w(t)},t&&n.readAsDataURL(t)},style:{opacity:0}}),Object(c.jsx)("input",{type:"text",placeholder:"\uc774\ub984 \ud639\uc740 \ub2c9\ub124\uc784\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694 :)",value:u,onChange:function(e){var t=e.target.value;b(t)},className:"formInput",maxLength:8}),Object(c.jsx)("input",{type:"submit",value:"\ud504\ub85c\ud544 \uc5c5\ub370\uc774\ud2b8",className:"formBtn",style:{marginTop:10}})]}),Object(c.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){return d.signOut(),r.push("/"),I.b.success("\ub2f9\uadfc\ubc2d\uc5d0\uc11c \ub85c\uadf8\uc544\uc6c3 \ud588\uc2b5\ub2c8\ub2e4.")},children:"\ub85c\uadf8\uc544\uc6c3"})]})},Q=function(e){var t=e.UserObject;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{className:"nav__container",children:[Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:"/",style:{marginRight:10},children:Object(c.jsx)(g.a,{icon:v.a,color:"orangered",size:"2x"})})}),Object(c.jsx)("li",{children:Object(c.jsxs)(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(c.jsx)(g.a,{icon:v.i,color:"#04AAFF",size:"2x"}),Object(c.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\ub2d8\uc758 \ud504\ub85c\ud544"):"\ud504\ub85c\ud544"})]})})]})})})},Y=function(e){var t=e.IsLoggedIn,n=e.UserObject,a=e.refreshUser;return Object(c.jsxs)(u.a,{children:[t&&Object(c.jsx)(Q,{UserObject:n}),Object(c.jsx)(l.c,{children:t?Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"router__container",children:[Object(c.jsx)(l.a,{exact:!0,path:"/",children:Object(c.jsx)(A,{UserObject:n})}),Object(c.jsx)(l.a,{exact:!0,path:"/profile",children:Object(c.jsx)(W,{UserObject:n,refreshUser:a})})]})}):Object(c.jsx)(l.a,{children:Object(c.jsx)(G,{exact:!0,path:"/auth"})})})]})},H=n(48),J=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"loader__container",children:Object(c.jsx)(H.a,{className:"loading__icon"})})})};n(83);var K=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(null),i=Object(o.a)(s,2),u=i[0],l=i[1];return Object(a.useEffect)((function(){d.onAuthStateChanged((function(e){l(e?{email:e.email,displayName:e.displayName,uid:e.uid,photoURL:e.providerData[0].photoURL||null,updateProfile:function(t){return e.updateProfile(t)}}:null),r(!0)}))}),[]),Object(c.jsxs)("div",{className:"app__container",children:[n?Object(c.jsx)(Y,{IsLoggedIn:Boolean(u),UserObject:u,refreshUser:function(){var e=d.currentUser;l({displayName:e.displayName,email:e.email,uid:e.uid,photoURL:e.photoURL,updateProfile:function(t){return e.updateProfile(t)}})}}):Object(c.jsx)(J,{}),Object(c.jsxs)("footer",{children:["\xa9 Carrot Field ",(new Date).getFullYear()]})]})};n(84);i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(K,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.f743b9d1.chunk.js.map