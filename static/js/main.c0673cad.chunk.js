(this["webpackJsonpclone-twitter"]=this["webpackJsonpclone-twitter"]||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(0),r=c.n(a),s=c(25),i=c.n(s),o=(c(90),c(11)),l=c(44),j=c(17),u=c(42),b=c(50);c(91),c(102),c(103);b.a.initializeApp({apiKey:"AIzaSyBKlsNg9ESrPNAaoLCpiyVh-FVIOLGQC_I",authDomain:"clone-twitter-829d4.firebaseapp.com",projectId:"clone-twitter-829d4",databaseURL:"gs://clone-twitter-829d4.appspot.com",storageBucket:"clone-twitter-829d4.appspot.com",messagingSenderId:"46704523245",appId:"1:46704523245:web:e016c5cc287a58385199e4"});var d=b.a.auth(),O=b.a,h=b.a.firestore(),m=b.a.storage(),x=c(10),p=c.n(x),f=c(19),g=c(14),v=c(16),w=function(e){e.commentsLength;var t=e.toggleComment;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("span",{onClick:t,children:Object(n.jsx)(g.a,{icon:v.c})})})},N=function(e){var t=e.onDeleteTweet;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("span",{onClick:t,children:Object(n.jsx)(g.a,{icon:v.i})})})},_=function(e){var t=e.toggleEditing;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("span",{onClick:t,children:Object(n.jsx)(g.a,{icon:v.f})})})},y=function(e){var t=e.IsPublic,c=e.onChangeScope;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("span",{onClick:c,children:Object(n.jsx)(g.a,{icon:t?v.e:v.d})})})},C=c(111);var I=function(e){var t=e.isCreator,c=e.isOwner,a=e.onDeleteTweet,r=e.toggleEditing,s=e.toggleComment,i=e.onChangeScope,o=e.IsPublic;return Object(n.jsxs)("div",{className:"nweet__actions",children:[o||t||c?Object(n.jsx)(C.a,{title:"\ub313\uae00",children:Object(n.jsx)("span",{children:Object(n.jsx)(w,{toggleComment:s})})}):null,t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(C.a,{title:"\uc0ad\uc81c\ud558\uae30",children:Object(n.jsx)("span",{children:Object(n.jsx)(N,{onDeleteTweet:a})})}),Object(n.jsx)(C.a,{title:"\uc218\uc815\ud558\uae30",children:Object(n.jsx)("span",{children:Object(n.jsx)(_,{toggleEditing:r})})}),Object(n.jsx)(C.a,{title:"\uacf5\uac1c\ubc94\uc704\uc124\uc815",children:Object(n.jsx)("span",{children:Object(n.jsx)(y,{IsPublic:o,onChangeScope:i})})})]}):null]})},S=c(107),k=function(e){var t=e.tweetObject,c=e.toggleEditing,a=e.NewTweet,r=e.setNewTweet,s=e.setIsEditing,i=function(){var e=Object(f.a)(p.a.mark((function e(c){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,h.doc("tweets/".concat(t.id)).update({text:a});case 3:return s((function(e){return!e})),e.abrupt("return",S.b.success("\uac8c\uc2dc\uae00\uc774 \uc5c5\ub370\uc774\ud2b8 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h4",{children:t.displayName}),Object(n.jsxs)("form",{onSubmit:i,className:"container nweetEdit",children:[Object(n.jsx)("input",{type:"text",value:a,placeholder:"Edit Your Tweet",onChange:function(e){var t=e.target.value;r(t)},autoFocus:!0,required:!0,className:"formInput"}),Object(n.jsx)("input",{type:"submit",value:"Edit Tweet",className:"formBtn"}),Object(n.jsx)("span",{onClick:c,className:"formBtn cancelBtn",children:"Cancel"})]})]})},U=c(106),F=function(e){var t=e.tweetObject,c=e.UserObject,a=t.email.split("@")[0];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("h4",{className:"nweet__displayName",children:[t.displayName,Object(n.jsx)("span",{className:"nweet__email",children:a})]}),t.IsPublic?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h4",{className:"nweet__text",children:t.text}),t.attachmentURL&&Object(n.jsx)("div",{style:{backgroundImage:"url(".concat(t.attachmentURL,")")},className:"nweet__image"})]}):"0soACgRb5hNgZHQLjlMcpB4478n2"===c.uid||t.creatorId===c.uid?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h4",{className:"nweet__text",children:t.text}),t.attachmentURL&&Object(n.jsx)(U.a,{src:t.attachmentURL})]}):Object(n.jsx)("h4",{className:"nweet__text private",children:"\ube44\uacf5\uac1c \uac8c\uc2dc\uae00 \uc785\ub2c8\ub2e4."})]})},L=function(e){var t=e.UserObject,c=e.tweetObject,r=(e.toggleComment,Object(a.useState)("")),s=Object(o.a)(r,2),i=s[0],l=s[1],j=Object(a.useState)(!0),u=Object(o.a)(j,2),b=u[0],d=u[1],O=function(){var e=Object(f.a)(p.a.mark((function e(n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a={email:t.email,displayName:t.displayName,text:i,createdAt:new Date,creatorId:t.uid,IsPublic:b,responseTo:c.id},e.next=4,h.collection("comments").add(a);case 4:l("");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"form__scope",onClick:function(){d((function(e){return!e}))},children:b?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(g.a,{icon:v.e}),Object(n.jsx)("span",{children:"\ub313\uae00\uc774 \ubaa8\ub450\uc5d0\uac8c \uacf5\uac1c\ub429\ub2c8\ub2e4."})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(g.a,{icon:v.d}),Object(n.jsxs)("span",{children:["\ub313\uae00\uc774 ",c.displayName," \ub2d8\uc5d0\uac8c\ub9cc \uacf5\uac1c\ub429\ub2c8\ub2e4."]})]})}),Object(n.jsxs)("form",{onSubmit:O,className:"container nweetEdit",children:[Object(n.jsx)("input",{type:"text",value:i,placeholder:"\ub313\uae00\uc744 \uc785\ub825\ud558\uc138\uc694.",onChange:function(e){l(e.currentTarget.value)},className:"formInput",required:!0}),Object(n.jsx)("input",{type:"submit",value:"\ub2f5\uae00\ub2ec\uae30",className:"formBtn"})]})]})},E=function(e){var t=e.comment,c=e.onToggleCommentEditMode,a=e.NewComment,r=e.setNewComment,s=function(){var e=Object(f.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,h.doc("comments/".concat(t.id)).update({text:a});case 3:return c((function(e){return!e})),e.abrupt("return",S.b.success("\ub313\uae00\uc774 \uc5c5\ub370\uc774\ud2b8 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h4",{children:t.displayName}),Object(n.jsxs)("form",{onSubmit:s,className:"container nweetEdit",children:[Object(n.jsx)("input",{type:"text",value:a,placeholder:"Edit Your Comment",onChange:function(e){var t=e.target.value;r(t)},autoFocus:!0,required:!0,className:"formInput"}),Object(n.jsx)("input",{type:"submit",value:"Edit Comment",className:"formBtn"}),Object(n.jsx)("span",{onClick:c,className:"formBtn cancelBtn",children:"Cancel"})]})]})},R="\ube44\uacf5\uac1c \ub313\uae00 \uc785\ub2c8\ub2e4.",P=function(e){var t=e.UserObject,c=e.tweetObject,r=e.commentObject,s=t.uid===r.creatorId,i=r.email.split("@")[0],l=Object(a.useState)(!1),j=Object(o.a)(l,2),u=j[0],b=j[1],d=Object(a.useState)(r.text),O=Object(o.a)(d,2),m=O[0],x=O[1],g=Object(a.useState)(r.IsPublic),v=Object(o.a)(g,2),w=v[0],C=v[1],I=function(){b((function(e){return!e}))},k=function(){var e=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\ub313\uae00\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=5;break}return e.next=4,h.doc("comments/".concat(r.id)).delete();case 4:return e.abrupt("return",S.b.success("\ub313\uae00\uc774 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4."));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!w),e.next=3,h.doc("comments/".concat(r.id)).update({IsPublic:!w});case 3:return t=w?"\ub313\uae00\uc774 \uac8c\uc2dc\uae00 \uc791\uc131\uc790\uc5d0\uac8c\ub9cc \uacf5\uac1c\ub429\ub2c8\ub2e4.":"\ub313\uae00\uc774 \ubaa8\ub450\uc5d0\uac8c \uacf5\uac1c\ub429\ub2c8\ub2e4.",e.abrupt("return",S.b.success(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"nweet",children:u?Object(n.jsx)(E,{comment:r,onToggleCommentEditMode:I,NewComment:m,setNewComment:x}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("h4",{className:"nweet__displayName",children:[r.displayName,Object(n.jsx)("span",{className:"nweet__email",children:i})]}),r.IsPublic?Object(n.jsx)("h4",{className:"nweet__text",children:r.text}):t.uid===r.creatorId||c.creatorId===t.uid?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("span",{className:"nweet__scope",children:R}),Object(n.jsx)("h4",{className:"nweet__text",children:r.text})]}):Object(n.jsx)("h4",{className:"nweet__text private",children:R}),s&&Object(n.jsxs)("div",{className:"nweet__actions",children:[Object(n.jsx)(N,{onDeleteTweet:k}),Object(n.jsx)(_,{toggleEditing:I}),Object(n.jsx)(y,{IsPublic:w,onChangeScope:U})]})]})})},B=function(e){var t=e.isCreator,c=e.isOwner,r=e.tweetObject,s=e.commentsObject,i=e.UserObject,l=Object(a.useState)(!1),j=Object(o.a)(l,2),u=j[0],b=j[1],d=Object(a.useState)(!1),O=Object(o.a)(d,2),x=O[0],g=O[1],v=Object(a.useState)(r.text),w=Object(o.a)(v,2),N=w[0],_=w[1],y=Object(a.useState)(r.IsPublic),C=Object(o.a)(y,2),U=C[0],E=C[1],R=function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!U),e.next=3,h.doc("tweets/".concat(r.id)).update({IsPublic:!U});case 3:return t=U?"\uac8c\uc2dc\uae00\uc774 \uc815\ubcd1\ud6c8\ub2d8\uc5d0\uac8c\ub9cc \uacf5\uac1c\ub429\ub2c8\ub2e4.":"\uac8c\uc2dc\uae00\uc774 \ubaa8\ub450\uc5d0\uac8c \uacf5\uac1c\ub429\ub2c8\ub2e4.",e.abrupt("return",S.b.success(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){b((function(e){return!e}))},D=function(){g((function(e){return!e}))},T=function(){var e=Object(f.a)(p.a.mark((function e(){var t,c,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window.confirm("\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"),c=s.filter((function(e){return e.responseTo===r.id})),!t){e.next=17;break}return e.next=5,h.doc("tweets/".concat(r.id)).delete();case 5:if(!c){e.next=13;break}n=0;case 7:if(!(n<c.length)){e.next=13;break}return e.next=10,h.doc("comments/".concat(c[n].id)).delete();case 10:n++,e.next=7;break;case 13:if(!r.attachmentURL){e.next=16;break}return e.next=16,m.refFromURL(r.attachmentURL).delete();case 16:return e.abrupt("return",S.b.success("\uac8c\uc2dc\uae00\uc774 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4."));case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"nweet",children:u?Object(n.jsx)(k,{tweetObject:r,toggleEditing:B,NewTweet:N,setNewTweet:_,setIsEditing:b}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(F,{tweetObject:r,UserObject:i}),Object(n.jsx)(I,{isOwner:c,isCreator:t,tweetObject:r,onDeleteTweet:T,toggleEditing:B,toggleComment:D,onChangeScope:R,IsPublic:U}),t&&s.length>0&&Object(n.jsx)("div",{className:"notice",children:"".concat(s.length,"\uac1c\uc758 \ub313\uae00\uc774 \uc788\uc2b5\ub2c8\ub2e4 :)")}),x&&s.map((function(e){return Object(n.jsx)(P,{UserObject:i,tweetObject:r,commentObject:e},e.id)})),x&&Object(n.jsx)(L,{UserObject:i,tweetObject:r,toggleComment:D})]})})},D=c(110),T=c(109),A=function(e){var t=e.IsPublic,c=e.onChangeScope;return Object(n.jsxs)("div",{className:"form__scope",children:[Object(n.jsx)("div",{className:"scope__switch",children:Object(n.jsx)(T.a,{defaultChecked:!0,onChange:c})}),t?Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("span",{className:"scope__public",children:"\uac8c\uc2dc\uae00\uc774 \ubaa8\ub450\uc5d0\uac8c \uacf5\uac1c\ub429\ub2c8\ub2e4."})}):Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("span",{className:"scope__private",children:"\uac8c\uc2dc\uae00\uc774 \uc815\ubcd1\ud6c8 \ub2d8\uc5d0\uac8c\ub9cc \uacf5\uac1c\ub429\ub2c8\ub2e4."})})]})},z=["\uc624\ub298 \ud558\ub8e8 \uc5b4\ub560\ub098\uc694?","\uc798 \uc9c0\ub0b4\uace0 \uacc4\uc2dc\uc8e0?","\uc88b\uc740 \ud558\ub8e8 \ub418\uc138\uc694!","\ub9cc\ub098\uc11c \ubc18\uac11\uc2b5\ub2c8\ub2e4 :)"],M=function(e){var t=e.UserObject,c=Object(a.useState)(""),r=Object(o.a)(c,2),s=r[0],i=r[1],l=Object(a.useState)(""),j=Object(o.a)(l,2),u=j[0],b=j[1],d=Object(a.useState)(!0),O=Object(o.a)(d,2),x=O[0],w=O[1],N=t.displayName?"".concat(z[Math.floor(Math.random()*z.length)]):"\ud504\ub85c\ud544\uc5d0\uc11c \uc2e4\uba85\uc744 \uc5c5\ub370\uc774\ud2b8 \ud6c4 \uc774\uc6a9\ud574\uc8fc\uc138\uc694.",_=function(){var e=Object(f.a)(p.a.mark((function e(c){var n,a,r,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),""!==s){e.next=3;break}return e.abrupt("return",S.b.warn("\uac8c\uc2dc\uae00\uc744 \uc791\uc131\ud574 \uc8fc\uc138\uc694."));case 3:if(null!==t.displayName){e.next=5;break}return e.abrupt("return",S.b.error("\ud504\ub85c\ud544\uc5d0\uc11c \ub2c9\ub124\uc784\uc744 \ub4f1\ub85d \ud6c4 \uc774\uc6a9\ud574 \uc8fc\uc138\uc694:)"));case 5:if(n="",""===u){e.next=15;break}return S.b.warn("\uac8c\uc2dc\uae00\uc744 \uc5c5\ub85c\ub4dc \uc911\uc785\ub2c8\ub2e4."),a=m.ref().child("".concat(t.uid,"/").concat(Object(D.a)())),e.next=11,a.putString(u,"data_url");case 11:return r=e.sent,e.next=14,r.ref.getDownloadURL();case 14:n=e.sent;case 15:return o={email:t.email,displayName:t.displayName,text:s,createdAt:new Date,creatorId:t.uid,IsPublic:x,attachmentURL:n},e.next=18,h.collection("tweets").add(o);case 18:return i(""),y(),e.abrupt("return",S.b.success("\uac8c\uc2dc\uae00\uc774 \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4."));case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){b("")};return Object(n.jsxs)("div",{className:"tweetform__container",children:[Object(n.jsx)(A,{IsPublic:x,onChangeScope:function(){w(!x)}}),Object(n.jsxs)("form",{onSubmit:_,className:"factoryForm",children:[Object(n.jsxs)("div",{className:"factoryInput__container",children:[Object(n.jsx)("input",{className:"factoryInput__input",type:"text",placeholder:N,onChange:function(e){var t=e.target.value;i(t)},maxLength:120,value:s}),Object(n.jsx)("input",{type:"submit",value:"\ud83e\udd55",className:"factoryInput__arrow"})]}),Object(n.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(n.jsx)("span",{children:"Add photos"}),Object(n.jsx)(g.a,{icon:v.g})]}),Object(n.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],c=new FileReader;c.onloadend=function(e){var t=e.currentTarget.result;b(t)},t&&c.readAsDataURL(t)},style:{opacity:0}}),u&&Object(n.jsxs)("div",{className:"factoryForm__attachment",children:[Object(n.jsx)("img",{src:u,style:{backgroundImage:u},alt:"\ucca8\ubd80\uc774\ubbf8\uc9c0"}),Object(n.jsxs)("div",{className:"factoryForm__clear",onClick:y,children:[Object(n.jsx)("span",{children:"Remove"}),Object(n.jsx)(g.a,{icon:v.h})]})]})]})]})},q=function(e){var t=e.UserObject,c="0soACgRb5hNgZHQLjlMcpB4478n2"===t.uid,r=Object(a.useState)([]),s=Object(o.a)(r,2),i=s[0],l=s[1],j=Object(a.useState)([]),b=Object(o.a)(j,2),d=b[0],O=b[1];Object(a.useEffect)((function(){return h.collection("tweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(u.a)({id:e.id},e.data())}));l(t)}))}),[]),Object(a.useEffect)((function(){return h.collection("comments").orderBy("createdAt","asc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(u.a)({id:e.id},e.data())}));O(t)}))}),[]);return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(M,{UserObject:t}),Object(n.jsx)("div",{className:"notice",children:"\ub2f9\uadfc \ubc2d\uc5d0 ".concat(i.length,"\uac1c\uc758 \uac8c\uc2dc\uae00\uc774 \uc788\uc2b5\ub2c8\ub2e4.")}),Object(n.jsx)("div",{className:"nweet__container",children:i.map((function(e){return Object(n.jsx)(B,{tweetObject:e,isCreator:t.uid===e.creatorId,isOwner:c,UserObject:t,commentsObject:(a=e.id,d.filter((function(e){return e.responseTo===a})))},e.id);var a}))})]})},G=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(a.useState)(""),i=Object(o.a)(s,2),l=i[0],j=i[1],u=Object(a.useState)(""),b=Object(o.a)(u,2),O=b[0],h=b[1],m=Object(a.useState)(!0),x=Object(o.a)(m,2),g=x[0],v=x[1],w=Object(a.useState)(""),N=Object(o.a)(w,2),_=N[0],y=N[1],C=function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!g||l===O){e.next=4;break}return y("\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),e.abrupt("return");case 4:if(e.prev=4,!g){e.next=11;break}return e.next=8,d.createUserWithEmailAndPassword(c,l);case 8:return e.abrupt("return",S.b.success("\uacc4\uc815\uc774 \uc131\uacf5\uc801\uc73c\ub85c \uc0dd\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4."));case 11:return e.next=13,d.signInWithEmailAndPassword(c,l);case 13:return e.abrupt("return",S.b.success("Welcome to Carrot Field"));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(4),console.log("login form submit error :: ",e.t0.message),y(e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(t){return e.apply(this,arguments)}}(),I=function(e){var t=e.target,c=t.name,n=t.value;"email"===c?r(n):"password"===c?j(n):"password-check"===c&&h(n)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("form",{onSubmit:C,className:"container",children:[Object(n.jsx)("input",{type:"email",placeholder:"E-mail",name:"email",onChange:I,value:c,required:!0,className:"authInput"}),Object(n.jsx)("input",{type:"password",placeholder:"Password",name:"password",onChange:I,value:l,required:!0,className:"authInput"}),g&&Object(n.jsx)("input",{type:"password",placeholder:"Password Check",name:"password-check",onChange:I,value:O,required:!0,className:"authInput"}),Object(n.jsx)("input",{type:"submit",value:g?"\uacc4\uc815 \uc0dd\uc131":"\ub85c\uadf8\uc778",className:"authInput authSubmit"}),_&&Object(n.jsx)("span",{className:"authError",children:_})]}),Object(n.jsx)("span",{onClick:function(){v((function(e){return!e}))},className:"authSwitch",children:g?"\ub85c\uadf8\uc778 \ud558\uae30":"\uacc4\uc815 \uc0dd\uc131\ud558\uae30"})]})},J=c(67);var W=function(){var e=function(){var e=Object(f.a)(p.a.mark((function e(t){var c,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(c=t.target.name)?n=new O.auth.GoogleAuthProvider:"github"===c&&(n=new O.auth.GithubAuthProvider),e.next=4,d.signInWithRedirect(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"authBtns",children:[Object(n.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Login with Google ",Object(n.jsx)(g.a,{icon:J.b})]}),Object(n.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Login with Github ",Object(n.jsx)(g.a,{icon:J.a})]})]})},H=function(){return Object(n.jsxs)("div",{className:"authContainer",children:[Object(n.jsx)(g.a,{icon:v.a,color:"orangered",size:"4x",style:{marginBottom:30}}),Object(n.jsx)(G,{}),Object(n.jsx)(W,{})]})},Q=function(e){var t=e.UserObject,c=e.refreshUser,r=Object(j.f)(),s=Object(a.useState)(t.displayName),i=Object(o.a)(s,2),l=i[0],b=i[1],O=Object(a.useState)(t.photoURL),x=Object(o.a)(O,2),w=x[0],N=x[1],_=function(){var e=Object(f.a)(p.a.mark((function e(n){var a,r,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!==l){e.next=3;break}return e.abrupt("return",S.b.warning("\uc774\ub984 \ud639\uc740 \ub2c9\ub124\uc784\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694."));case 3:if(t.displayName===l){e.next=10;break}return e.next=6,t.updateProfile(Object(u.a)(Object(u.a)({},t),{},{displayName:l}));case 6:c(),y("tweets"),y("comments"),b("");case 10:if(a="",w===t.photoURL){e.next=24;break}return S.b.warn("\ud504\ub85c\ud544\uc744 \uc5c5\ub370\uc774\ud2b8 \uc911\uc785\ub2c8\ub2e4."),r=m.ref().child("".concat(t.uid,"/").concat(Object(D.a)())),e.next=16,r.putString(w,"data_url");case 16:return s=e.sent,e.next=19,s.ref.getDownloadURL();case 19:return a=e.sent,e.next=22,t.updateProfile(Object(u.a)(Object(u.a)({},t),{},{photoURL:a}));case 22:c(),N(a);case 24:return e.abrupt("return",S.b.success("\ud504\ub85c\ud544\uc774 \uc5c5\ub370\uc774\ud2b8 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."));case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(e){h.collection(e).where("creatorId","==",t.uid).get().then((function(t){t.empty?console.log("No matching documents."):t.forEach((function(t){h.collection(e).doc(t.id).update({displayName:l})}))}))};return Object(n.jsxs)("div",{className:"container",children:[w?Object(n.jsx)("img",{className:"profile__img",alt:"\ud504\ub85c\ud544 \uc774\ubbf8\uc9c0",src:w}):Object(n.jsx)("div",{className:"profile__img__container",children:Object(n.jsx)(g.a,{icon:v.k,size:"6x"})}),Object(n.jsxs)("form",{onSubmit:_,className:"profileForm",children:[Object(n.jsxs)("label",{htmlFor:"image-file",className:"profile__label",children:[Object(n.jsx)("span",{children:"\ud504\ub85c\ud544 \uc774\ubbf8\uc9c0"}),Object(n.jsx)(g.a,{icon:v.g})]}),Object(n.jsx)("input",{id:"image-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],c=new FileReader;c.onloadend=function(e){var t=e.currentTarget.result;N(t)},t&&c.readAsDataURL(t)},style:{opacity:0}}),Object(n.jsx)("input",{type:"text",placeholder:"\uc774\ub984 \ud639\uc740 \ub2c9\ub124\uc784\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694 :)",value:l,onChange:function(e){var t=e.target.value;b(t)},className:"formInput",maxLength:8}),Object(n.jsx)("input",{type:"submit",value:"\ud504\ub85c\ud544 \uc5c5\ub370\uc774\ud2b8",className:"formBtn",style:{marginTop:10}})]}),Object(n.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){return d.signOut(),r.push("/"),S.b.success("\ub2f9\uadfc\ubc2d\uc5d0\uc11c \ub85c\uadf8\uc544\uc6c3 \ud588\uc2b5\ub2c8\ub2e4.")},children:"\ub85c\uadf8\uc544\uc6c3"})]})},K=function(){return Object(n.jsx)("div",{className:"nav__container",children:Object(n.jsx)("nav",{children:Object(n.jsxs)("ul",{className:"ul__container",children:[Object(n.jsx)("li",{children:Object(n.jsx)(l.b,{to:"/",style:{marginRight:10},children:Object(n.jsx)(g.a,{icon:v.a,color:"orangered",size:"2x"})})}),Object(n.jsx)("li",{children:Object(n.jsxs)(l.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(n.jsx)(g.a,{icon:v.j,color:"#04AAFF",size:"2x"}),Object(n.jsx)("span",{style:{marginTop:10},children:"\ub0b4 \ud504\ub85c\ud544"})]})}),Object(n.jsx)("li",{children:Object(n.jsxs)(l.b,{to:"/devcarrot",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(n.jsx)(g.a,{icon:v.b,color:"#04AAFF",size:"2x"}),Object(n.jsx)("span",{style:{marginTop:10},children:"\uac1c\ubc1c\uc790 \uc774\uc57c\uae30"})]})})]})})})},V=function(){return Object(n.jsxs)("div",{className:"devcarrot__container",children:[Object(n.jsxs)("div",{className:"devcarrot__header",children:[Object(n.jsx)("h1",{children:"devCarrot"}),Object(n.jsx)("h3",{children:'"\ubc30\uc6c0\uc774 \uc788\ub294 \uacf3\uc744 \ucc3e\uc544 \ub2e4\ub2d9\ub2c8\ub2e4."'})]}),Object(n.jsx)("div",{className:"devcarrot__info",children:Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:["name: ",Object(n.jsx)("span",{children:"'ByungHoon Jeong',"})]}),Object(n.jsxs)("li",{children:["phone: ",Object(n.jsx)("span",{children:"'010-9556-5432',"})]}),Object(n.jsxs)("li",{children:["email: ",Object(n.jsx)("span",{children:"'stylenbs@gmail.com',"})]}),Object(n.jsxs)("li",{children:["github:"," ",Object(n.jsx)("span",{style:{color:"#04aaff"},children:Object(n.jsx)("a",{href:"https://github.com/yourcarrot0214",target:"blank",children:"'@yourcarrot0214',"})})]}),Object(n.jsxs)("li",{children:["resume:"," ",Object(n.jsx)("span",{style:{color:"#04aaff"},children:Object(n.jsx)("a",{href:"https://www.notion.so/devCarrot-770adfda777640ca8e463f34c132fe3f",target:"blank",children:"'notion@devCarrot',"})})]})]})}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:"devcarrot__header",children:[Object(n.jsx)("h1",{children:"skills"}),Object(n.jsx)("h3",{children:'"Front-end \uac1c\ubc1c\uc790\ub85c \uc131\uc7a5\uc911\uc785\ub2c8\ub2e4."'})]}),Object(n.jsx)("div",{className:"devcarrot__info",children:Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:["Language: ",Object(n.jsx)("span",{children:"JavaScript"})]}),Object(n.jsxs)("li",{children:["Library: ",Object(n.jsx)("span",{children:"React"})]}),Object(n.jsxs)("li",{children:["Experience: ",Object(n.jsx)("span",{children:"Node, express, MongoDB, Firebase"})]})]})}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:"devcarrot__header",children:[Object(n.jsx)("h1",{children:"Service Info"}),Object(n.jsx)("h3",{children:'"\ud3d0\uc1c4\uc801\uc778 SNS\ub97c \uad6c\ud604\ud558\uace0 \uc2f6\uc5c8\uc2b5\ub2c8\ub2e4."'})]}),Object(n.jsxs)("div",{className:"devcarrot__info",children:[Object(n.jsx)("ul",{children:Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://github.com/yourcarrot0214/carrotfield",target:"blank",children:"\ucf54\ub4dc\ubcf4\ub7ec\uac00\uae30"})})}),Object(n.jsx)("p",{children:"Twitter\uc758 tweet \uae30\ub2a5\uc744 \uc77c\ubd80 \ud074\ub860 \ud588\uc2b5\ub2c8\ub2e4. \uacb0\uacfc\uc801\uc73c\ub85c CRUD \uae30\ub2a5\uc744 \uac16\ucd98 \uac8c\uc2dc\ud310 \ud615\ud0dc\uac00 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),Object(n.jsx)("p",{children:"\ud074\ub860\uc744 \ud1b5\ud574 \uc2f8\uc774\uc6d4\ub4dc \ubc29\uba85\ub85d \uae30\ub2a5\uc744 \uad6c\ud604\ud558\uace0\uc790 \ud588\uc2b5\ub2c8\ub2e4. \uacf5\uac1c\uc801\uc778 SNS\uc5d0\uc11c \ud558\uae30 \ud798\ub4e0 \ub9d0\ub4e4(\uc624\ub798\ub41c \uc548\ubd80, \ube44\ubc00\uc2a4\ub7f0 \uc598\uae30\ub4e4)\uc744 \ud560 \uc218 \uc788\ub294 \ucc44\ub110\uc774 \uc788\uc5c8\uc73c\uba74 \ud588\uc2b5\ub2c8\ub2e4."}),Object(n.jsx)("p",{children:"\uccab \uacf5\uac1c \uc11c\ube44\uc2a4\ub97c \ud574\ubcf4\uba74\uc11c '\uc0ac\uc6a9\uc790\uc758 \ud589\ub3d9\uc744 \ub0b4 \uc0dd\uac01\ub300\ub85c \uc720\ub3c4\ud558\ub294 \uac83\uc774 \uc27d\uc9c0 \uc54a\ub2e4.'\ub77c\ub294\uac83\uc744 \uac00\uc7a5 \ud06c\uac8c \ub290\uaf08\uc2b5\ub2c8\ub2e4. \ud589\ub3d9 \ud328\ud134\uc744 \ubd84\uc11d\ud558\uace0 \uc0ac\uc6a9\uc790\uc758 \uc694\uad6c\uc0ac\ud56d\uc744 \ud568\uaed8 \ubc18\uc601\ud558\uc5ec \uc11c\ube44\uc2a4\ub97c \uad6c\ud604\ud558\ub294 \uac1c\ubc1c\uc790\uac00 \ub418\uaca0\uc2b5\ub2c8\ub2e4."})]})]})},Y=function(e){var t=e.IsLoggedIn,c=e.UserObject,a=e.refreshUser;return Object(n.jsxs)(l.a,{children:[t&&Object(n.jsx)(K,{UserObject:c}),Object(n.jsx)(j.c,{children:t?Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"router__container",children:[Object(n.jsx)(j.a,{exact:!0,path:"/",children:Object(n.jsx)(q,{UserObject:c})}),Object(n.jsx)(j.a,{exact:!0,path:"/profile",children:Object(n.jsx)(Q,{UserObject:c,refreshUser:a})}),Object(n.jsx)(j.a,{exact:!0,path:"/devcarrot",children:Object(n.jsx)(V,{})})]})}):Object(n.jsx)(j.a,{children:Object(n.jsx)(H,{exact:!0,path:"/auth"})})})]})},Z=c(63),X=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"loader__container",children:Object(n.jsx)(Z.a,{className:"loading__icon"})})})};c(99);var $=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(a.useState)(null),i=Object(o.a)(s,2),l=i[0],j=i[1];return Object(a.useEffect)((function(){d.onAuthStateChanged((function(e){j(e?{email:e.email,displayName:e.displayName,uid:e.uid,photoURL:e.providerData[0].photoURL||null,updateProfile:function(t){return e.updateProfile(t)}}:null),r(!0)}))}),[]),Object(n.jsx)("div",{className:"app__container",children:c?Object(n.jsx)(Y,{IsLoggedIn:Boolean(l),UserObject:l,refreshUser:function(){var e=d.currentUser;j({displayName:e.displayName,email:e.email,uid:e.uid,photoURL:e.photoURL,updateProfile:function(t){return e.updateProfile(t)}})}}):Object(n.jsx)(X,{})})};c(100);i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)($,{})}),document.getElementById("root"))},90:function(e,t,c){}},[[101,1,2]]]);
//# sourceMappingURL=main.c0673cad.chunk.js.map