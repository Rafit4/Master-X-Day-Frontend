(this["webpackJsonpjust-do-it"]=this["webpackJsonpjust-do-it"]||[]).push([[0],{167:function(e,t,r){},168:function(e,t,r){},169:function(e,t,r){},171:function(e,t,r){"use strict";r.r(t);var a=r(2),c=r.n(a),s=r(22),n=r.n(s),o=(r(63),r(26)),i=r(25),A=(r(68),r(69),r(1)),d=function(e){var t=e.members;return Object(A.jsx)("div",{className:"card__user",children:Object(A.jsxs)("div",{className:"container__users",children:[Object(A.jsx)("p",{children:"Members:"}),t.map((function(e,t){return Object(A.jsxs)("div",{className:"card__user--item",children:[Object(A.jsx)("img",{src:"https://freesvg.org/img/Male-Avatar.png",alt:""}),Object(A.jsxs)("p",{children:[" ",e.fullName," "]})]},t)}))]})})},u=(r(71),function(e){var t=e.list,r=e.cards,c=Object(a.useState)([]),s=Object(o.a)(c,2),n=s[0],i=s[1];return Object(a.useEffect)((function(){var e=r.filter((function(e){return e.idList===t.id}));i(e)}),[r,t]),Object(A.jsx)(A.Fragment,{children:"To Do"===t.name?Object(A.jsxs)("div",{style:{backgroundColor:"#F44336"},className:"centerBoard__container--card",children:[Object(A.jsx)("h2",{children:n.length}),Object(A.jsx)("p",{className:"centerBoard__container--card-title",children:t.name})]}):"Done"===t.name?Object(A.jsxs)("div",{style:{backgroundColor:"#C1EE92"},className:"centerBoard__container--card",children:[Object(A.jsx)("h2",{children:n.length}),Object(A.jsx)("p",{className:"centerBoard__container--card-title",children:t.name})]}):Object(A.jsxs)("div",{style:{backgroundColor:"#FFA000"},className:"centerBoard__container--card",children:[Object(A.jsx)("h2",{children:n.length}),Object(A.jsx)("p",{className:"centerBoard__container--card-title",children:t.name})]})})}),b=r(24),j=(r(167),function(e){var t=e.lists,r=e.cards,a={labels:t.map((function(e){return e.name})),datasets:[{data:t.map((function(e){return r.filter((function(t){return t.idList===e.id})).length})),label:"Tasks to do",backgroundColor:["rgba(244, 67, 54)","rgba(255, 160, 0)","rgba(193, 238, 146)"],borderColor:["rgba(0, 0, 0, 0.5)","rgba(0, 0, 0, 0.5)","rgba(0, 0, 0, 0.5)"],borderWidth:1}]};return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("section",{className:"vertical-bar-section",children:[Object(A.jsx)("h1",{className:"vertical-bar-section__title",children:"Team progress"}),Object(A.jsx)("section",{className:"vertical-bar-section__graph",children:Object(A.jsx)(b.Bar,{data:a,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})})]})})}),l=(r(168),function(){return Object(A.jsxs)("nav",{className:"menu",children:[Object(A.jsxs)("ul",{className:"container",children:[Object(A.jsx)("li",{className:"items",children:Object(A.jsxs)("div",{className:"icon_container",children:[" ",Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASxSURBVHgB7ZpPbBtFFMa/mdiV2kMUoCoVgcaCCJoKG0cIVBClQQiVC+rGN+BAeuiph8YSFxAoicQR0XDmEF8QF0jMjZyatpyKhJ0GaKhKY7e04l/bNIcWkXSH99Z2/G/Wu2vPuhf/pES749mNv33fvDczG6BHjx49ahAwxbPWmBTyqA0sY2U+gweEGUFxa0IIObd9rpBVm3Yaq9kCuoyECYQYqz+HJXbINZlITaHLmBHkggKmRSK1hnhqAl0i4vzeb8XoKKbtsYVCh9aJCYE5EU8dtjftmbBtKNkWbA8h5Wntzw6ZwwEriQ5RAhPdsKEkW0x69BlAREwjAP37BrFz98Paz6o2tCyEgL8xJMRtBKB/6DG8+sn7eHr8iFsXsqFckPHUnGN3g0ilKL2Cxok7BQjyfkCiu3aSoDfx+mcfOxHTUbZhzqQNq3XI7Un5GcSJ8YyAeK9y+vihF5A8/k5dl2vnzuPSwiLu/XPL7S4FtWWP45dsHh0Q2T4KOfs8cehF7B4Zxq8L3+H3cz/ousREROYoG2Y6yYah1qFGOFFw5NiGrkmjZMPT7daurgqqwGJY1HPH33YTVqpdnA0DJo2Ir150UxmVJ+lowBYo4j87Y8KivmzINTKADb0jRGLYAmSFSccOwJSIijkYomJDTvMmbOgtKNrHs4RYXRtPRkdTQzAIp3a24YF3LQ8bjuda2dBbUN/9JU1rAbn5IkLgySOH8fKHJ5zUr0cknSlUPHVKJ6wPXvyx+i/2PLNMR3vhFGCxhD77GLWvb/d5dMSiOrQ93+sfGsTe5+NoFy7KfD1H7fZvRWzdvdfcSeCg6BMW9ozcwV8X89VmE/gorJ1wiZIGF2VXahaU3hHyg+EINfIIZULOiJsUqY2rN5o7COynaE3S97jzQOpQO1SyYYvaxXabMiVovfaEx0BY7HIRU/ke/gqrF1LNwhZH6SjGT48zlWnu/n0Ly198hZurl137KIUZbVLg6TwtxCZq24TCkle1fuXrM7MPDcdOwjCcEK4sntFnO7AQRZlXHUM+W2iOUCI1yavKpou4WkdFjD57DS4MPLVvHQa5efEy8hSVlksOXs+tZLOVBo3lVNI1mwsRQxdge/38ZRZ//rji2kdBfU5Wn6ao1D3EZkG2ykBWa0rDTb5FyFxZPOvUHQ97pUmIdiGoD0WSdnlsWb+Joex8bWiboK3gwYOjU8NvvTHGdSgobC+OysbV625d1snuM7gwP9vqPqFsBb/0wQmnGPqBiyUP+jUa9G642UuHmbTdsBV87fvzvgT5spdSM/gpuwSfmBEUELYXR6VFTSnZa2VhFgHpqiBf9hLI0LZZ2o+9dFQF+V27t7n05m0sHvRu9iLf5pV9Px3EXjoivCVbHtADvq5IpHg7N+2VbSpsFK87QjztdeGbwPbSESExp+BXTBme1aqklWllC5/2ypbtVYAh2HKBxJRpec1G8QbOfvRp6ymLTaveDu2lQzrhDohzTYvocHF0EePYS0l7NAwxTITHAtmHRqvLC69G2nwBVjsjRoiUslzpjxQQDqHZS0fY71hDtZcOM4WV7SSqM/Ru2UuHuX+8oAkqiaJZusp2MyI9evTo0ZL/AdFPFD2QxWYqAAAAAElFTkSuQmCC",alt:"logo"})]})}),Object(A.jsx)("li",{className:"items",children:Object(A.jsxs)("div",{className:"icon_container",children:[" ",Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATBSURBVHgBzVlNaBxlGH73J802pGYCVlLUZC29tGgzqQcFDa4XMaAwhRYUhG5A0CaH7ElqD+56CYgHEw+lIJIVtHgRIiqheEhCQUGw3QZsRaW7WS22tpJd8tefzW7f55v5JrOzszuzzU7TB96db2bnm+/53v/ZJfIfCkucZYoly1IxZIllliXBEqVtwphBpOJBsIGo/QEB8geKsaAmL3SFQ/Ta7m7qi7SL8/yt27SwvEYLK2vWeTmWl42jPwSXYqrSPZeB6VSc90Z20Mm9T9Bbex51vB8ET+Wv0Zf/3pSXCgbJjC8EGZ+Q7lf0Omvs9IGnWHth10njV67SePaqPM2xDLAUQtQ8YqT71hssF0nfsfW70xg807mTZp7dT5Fg0NNDB7sfEcdzhWUc4CIRlrPNaDDGkjSOAu+9Gcx8dLytIEhulOd3a6VjN4sVFf7283NPs3nbzcmFuyX64Ya+l662EG+gg/p2ttcsMvTrZUkS6HbXvQ7TbCZbNUDHtbAq4o+R+y+gMTkxhmmt5IATf+atfsYa20Uzh/bXLHRy7+M0dP53eZrwQhDRGMdA6QzQ2NEgJY6ExNiKuQtlczzyZE/NQ+yEF9fvkBNgakT6Ikc54yU3B0lKctGeAF34vI1S8XANOeDiX7r2YN6Duzpqvodmfnuhn1ONQm6Adg2ojTQYY0lZyTkRkyisSIL1HwnNKB4i2qJtpZEGp8QdTGp2sjE5P1GPYIyMsjN2NCQ06Aa5AVSIIkfsVrCwsiqHmXoEzRIVf9VbHuvfF7AssE5bwcKyOX+x3ur9+IipQU/aA7TBzcgez/7jej+CyQlIRXk9goHpegRFHVX3efc7pXNT2+eWloU4YaS3hw5yknaqzYvrt0XJM5BjSdcjqMhFmwH8VWrxnUtXxIJ2gNxPXGVGe2tzJZK5RXsf4sObg3kE3CE5rD8SC6EifHej4DoPGxk6f5nvXRLnj+0IT/MhjXG9ZiGFD/hgbKC5PTx/ICh6pPlMhYqlDfrm+v+CLPKjvfaiWpz6+zq9eylLf6zdkpczqxvlw3wUF7zW4qagVxu20VRZJHA4vqzDsmEtMPliqSYdTZKuHFPtLTWxFYkjYVF97GkKWoPYyM2R3qQmqLp9q9uwirqViofYp7auZGjxzI/l+dGJErrkLuNykfRInSZLi2+H0+pmNW9VecNzRrRgdnSiumXzAicTq3LQt6eF9Tew+dxm0JBgM4naHQG1Mqu491o2OBHE+4bIaV7LnFd89v0qOnNI1Oscuw9qcnJy+H7epxpj/KtS3BhCk8Ne5tg1iN0JzSFJtxrRzeoWJ8vLVyNYWZiqPzYUarl5gan3qxpfx5867JB2xLvHCQwQGF8n28gPgFykvUJnfxFpFmaGS31LtuRsJwhyKZxAazMf+9veo1bnrpkvWZLkJDUgiEweATm8e/hhWju0wRqS81SnmphRjOL+xcwGPSjY1NAwP06Qt9/v/JIsuQDs0+T9h8ZWyiy5RHIzDhcn4105/Tanohdrb8hxyzfwAYek/pskolOjLaKZbIxgEukgcYbb3nz1lyB1+FOTHDBB2wBoxDSRdogqKY0qiVeoonRUmW5byEmkqLFfpekhQJR0IohA618KMWox7gFNALdJmXAA1wAAAABJRU5ErkJggg==",alt:"notifications"})]})}),Object(A.jsx)("li",{className:"items",children:Object(A.jsx)("div",{className:"icon_container",children:Object(A.jsx)("img",{src:"data:image/png;base64,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",alt:"calendar"})})})]}),Object(A.jsxs)("ul",{className:"container2",children:[Object(A.jsx)("li",{className:"items",children:Object(A.jsx)("div",{className:"icon_container",children:Object(A.jsx)("img",{src:"data:image/png;base64,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",alt:"members"})})}),Object(A.jsx)("li",{className:"items",children:Object(A.jsx)("div",{className:"icon_container",children:Object(A.jsx)("img",{src:"data:image/png;base64,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",alt:"others"})})})]})]})}),O=(r(169),function(e){var t=e.lists,r=e.cards,a={labels:t.map((function(e){return e.name})),datasets:[{data:t.map((function(e){return r.filter((function(t){return t.idList===e.id})).length})),backgroundColor:["rgba(244, 67, 54)","rgba(255, 160, 0)","rgba(193, 238, 146)"],borderColor:["rgba(0, 0, 0, 0.5)","rgba(0, 0, 0, 0.5)","rgba(0, 0, 0, 0.5)"],borderWidth:1}]};return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("section",{className:"pie-section",children:[Object(A.jsx)("h1",{className:"pie-section__title",children:"Team progress"}),Object(A.jsx)("section",{className:"pie-section__graph",children:Object(A.jsx)(b.Pie,{data:a})})]})})}),g="RESET_REQUEST",p="START_GET_BOARDS",m="SUCCESS_GET_BOARDS",h="ERROR_GET_BOARDS",x="START_GET_MEMBERS_BY_BOARD_ID",R="SUCCESS_GET_MEMBERS_BY_BOARD_ID",B="ERROR_GET_MEMBERS_BY_BOARD_ID",f="START_GET_LISTS_BY_BOARD_ID",S="SUCCESS_GET_LISTS_BY_BOARD_ID",C="ERROR_GET_LISTS_BY_BOARD_ID",E="START_GET_CARDS_BY_BOARD_ID",v="SUCCESS_GET_CARDS_BY_BOARD_ID",y="ERROR_GET_CARDS_BY_BOARD_ID",Y="START_GET_CARDS_BY_LIST_ID",T="SUCCESS_GET_CARDS_BY_LIST_ID",Q="ERROR_GET_CARDS_BY_LIST_ID",I=Object(i.b)((function(e){return{boards:e.boardReducer.boards,members:e.boardReducer.members,lists:e.boardReducer.lists,cardsByBoard:e.boardReducer.cardsByBoard,cardsByList:e.boardReducer.cardsByList,errorRequest:e.boardReducer.errorRequest,successRequest:e.boardReducer.successRequest}}),(function(e){return{getBoards:function(){var t;e({type:p,payload:t})},getMembersByBoardId:function(t){e({type:x,payload:{boardId:t}})},getListsByBoardId:function(t){e({type:f,payload:{boardId:t}})},getCardsByBoardId:function(t){e({type:E,payload:{boardId:t}})},getCardsByListId:function(t){e({type:Y,payload:{listId:t}})},resetRequest:function(){var t;e({type:g,payload:t})}}}))((function(e){var t=e.getBoards,r=e.getMembersByBoardId,c=e.getListsByBoardId,s=e.getCardsByBoardId,n=e.getCardsByListId,i=e.resetRequest,b=e.boards,g=e.members,p=e.lists,m=e.cardsByBoard,h=(e.cardsByList,e.successRequest),x=e.errorRequest,R=Object(a.useState)(!0),B=Object(o.a)(R,2),f=B[0],S=B[1];return Object(a.useEffect)((function(){t()}),[t]),Object(a.useEffect)((function(){b[0]&&(r(b[0].id),c(b[0].id),s(b[0].id))}),[b,r,c,s]),Object(a.useEffect)((function(){p[0]&&p.forEach((function(e){n(e.id)}))}),[p,n]),(h||x)&&f&&(setTimeout((function(){return i()})),S(!1)),Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)("div",{className:"wrapper__menu",children:Object(A.jsx)(l,{})}),Object(A.jsx)("div",{className:"wrapper__user",children:Object(A.jsx)(d,{members:g})}),Object(A.jsx)("div",{className:"wrapper__center",children:m[0]?Object(A.jsx)("div",{className:"centerBoard__container",children:p.map((function(e,t){return Object(A.jsx)(u,{list:e,cards:m},t)}))}):null}),Object(A.jsx)("div",{className:"wrapper__graphs",children:Object(A.jsxs)("div",{className:"graphs__container",children:[Object(A.jsx)(j,{lists:p,cards:m}),Object(A.jsx)(O,{lists:p,cards:m})]})})]})})),k=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,172)).then((function(t){var r=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,n=t.getTTFB;r(e),a(e),c(e),s(e),n(e)}))},N=r(4),F=r(12),G=r(58),U={boards:[],members:[],lists:[],cardsByBoard:[],cardsByList:[],message:"",successRequest:!1,errorRequest:!1},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(N.a)(Object(N.a)({},e),{},{data:t.payload,boards:[]});case m:var r=t.result;return Object(N.a)(Object(N.a)({},e),{},{successRequest:!0,boards:r});case h:return Object(N.a)(Object(N.a)({},e),{},{errorRequest:!0,message:t.error.message});case x:return Object(N.a)(Object(N.a)({},e),{},{data:t.payload,members:[]});case R:var a=t.result;return Object(N.a)(Object(N.a)({},e),{},{successRequest:!0,members:a});case B:return Object(N.a)(Object(N.a)({},e),{},{errorRequest:!0,message:t.error.message});case f:return Object(N.a)(Object(N.a)({},e),{},{data:t.payload,lists:[]});case S:var c=t.result;return Object(N.a)(Object(N.a)({},e),{},{successRequest:!0,lists:c});case C:return Object(N.a)(Object(N.a)({},e),{},{errorRequest:!0,message:t.error.message});case E:return Object(N.a)(Object(N.a)({},e),{},{data:t.payload,cardsByBoard:[]});case v:var s=t.result;return Object(N.a)(Object(N.a)({},e),{},{successRequest:!0,cardsByBoard:s});case y:return Object(N.a)(Object(N.a)({},e),{},{errorRequest:!0,message:t.error.message});case Y:return Object(N.a)(Object(N.a)({},e),{},{data:t.payload,cardsByList:[]});case T:var n=t.result;return Object(N.a)(Object(N.a)({},e),{},{successRequest:!0,cardsByList:n});case Q:return console.log(t.error),Object(N.a)(Object(N.a)({},e),{},{errorRequest:!0,message:t.error.message});case g:return Object(N.a)(Object(N.a)({},e),{},{successRequest:!1,errorRequest:!1});default:return Object(N.a)({},e)}},q=Object(F.c)({boardReducer:L}),D=r(7),w=r.n(D),H=r(6);function X(e,t,r){var a,c;return c=r?{method:t,body:r,headers:{"Content-Type":"application/json"}}:{method:t,headers:{"Content-Type":"application/json"}},fetch(e,c).then((function(e){switch(e.status){case 400:a=400;break;case 401:a=401;break;case 403:a=403;break;case 500:a=500}return e.json()})).then((function(e){switch(a){case 400:var t;throw e.errors?e.errors[0]&&(t=e.errors[0].defaultMessage):t=e.message,{message:t};case 401:throw{message:"error"};case 403:throw{message:"error"};case 500:throw{message:"error"};default:return e}}))}var W=w.a.mark($),M=w.a.mark(ee),P=w.a.mark(te),V=w.a.mark(re),Z=w.a.mark(ae),z=w.a.mark(ce),J="".concat("https://api.trello.com/1"),K="".concat("42d207340728b952b47ec8d8d0944765"),_="".concat("7da73b6abde5bf5cb2fd6cac937704aca260e7c1783f0ec7d5338c557da7e11c");function $(){var e;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(H.b)(X,"".concat(J,"/members/me/boards?key=").concat(K,"&token=").concat(_),"GET");case 3:return e=t.sent,t.next=6,Object(H.c)({type:m,result:e});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(H.c)({type:h,error:t.t0});case 12:case"end":return t.stop()}}),W,null,[[0,8]])}function ee(e){var t,r,a;return w.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,r=t.boardId,c.prev=2,c.next=5,Object(H.b)(X,"".concat(J,"/boards/").concat(r,"/members?key=").concat(K,"&token=").concat(_),"GET");case 5:return a=c.sent,c.next=8,Object(H.c)({type:R,result:a});case 8:c.next=14;break;case 10:return c.prev=10,c.t0=c.catch(2),c.next=14,Object(H.c)({type:B,error:c.t0});case 14:case"end":return c.stop()}}),M,null,[[2,10]])}function te(e){var t,r,a;return w.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,r=t.boardId,c.prev=2,c.next=5,Object(H.b)(X,"".concat(J,"/boards/").concat(r,"/lists?key=").concat(K,"&token=").concat(_),"GET");case 5:return a=c.sent,c.next=8,Object(H.c)({type:S,result:a});case 8:c.next=14;break;case 10:return c.prev=10,c.t0=c.catch(2),c.next=14,Object(H.c)({type:C,error:c.t0});case 14:case"end":return c.stop()}}),P,null,[[2,10]])}function re(e){var t,r,a;return w.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,r=t.boardId,c.prev=2,c.next=5,Object(H.b)(X,"".concat(J,"/boards/").concat(r,"/cards?key=").concat(K,"&token=").concat(_),"GET");case 5:return a=c.sent,c.next=8,Object(H.c)({type:v,result:a});case 8:c.next=14;break;case 10:return c.prev=10,c.t0=c.catch(2),c.next=14,Object(H.c)({type:y,error:c.t0});case 14:case"end":return c.stop()}}),V,null,[[2,10]])}function ae(e){var t,r,a;return w.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,r=t.listId,c.prev=2,c.next=5,Object(H.b)(X,"".concat(J,"/lists/").concat(r,"/cards?key=").concat(K,"&token=").concat(_),"GET");case 5:return a=c.sent,c.next=8,Object(H.c)({type:T,result:a});case 8:c.next=14;break;case 10:return c.prev=10,c.t0=c.catch(2),c.next=14,Object(H.c)({type:Q,error:c.t0});case 14:case"end":return c.stop()}}),Z,null,[[2,10]])}function ce(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.d)(p,$);case 2:return e.next=4,Object(H.d)(x,ee);case 4:return e.next=6,Object(H.d)(f,te);case 6:return e.next=8,Object(H.d)(E,re);case 8:return e.next=10,Object(H.d)(Y,ae);case 10:case"end":return e.stop()}}),z)}var se=w.a.mark(ne);function ne(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.a)([ce()]);case 2:case"end":return e.stop()}}),se)}var oe=Object(G.a)(),ie=function(){return Object(N.a)(Object(N.a)({},Object(F.e)(q,Object(F.a)(oe))),{},{runSaga:oe.run(ne)})}();n.a.render(Object(A.jsx)(c.a.StrictMode,{children:Object(A.jsx)(i.a,{store:ie,children:Object(A.jsx)(I,{})})}),document.getElementById("root")),k()},63:function(e,t,r){},68:function(e,t,r){},69:function(e,t,r){},71:function(e,t,r){}},[[171,1,2]]]);
//# sourceMappingURL=main.ebac4775.chunk.js.map