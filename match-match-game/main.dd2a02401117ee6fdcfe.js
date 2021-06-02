(()=>{"use strict";var e={233:(e,t,n)=>{n.r(t)},42:(e,t,n)=>{n.r(t)},653:(e,t,n)=>{n.r(t)},85:(e,t,n)=>{n.r(t)},76:(e,t,n)=>{n.r(t)},80:(e,t,n)=>{n.r(t)},962:(e,t,n)=>{n.r(t)},528:(e,t,n)=>{n.r(t)},467:(e,t,n)=>{n.r(t)},57:(e,t,n)=>{n.r(t)},268:(e,t,n)=>{n.r(t)},337:(e,t,n)=>{n.r(t)},950:(e,t,n)=>{n.r(t)},503:(e,t,n)=>{n.r(t)},373:(e,t,n)=>{n.r(t)},752:function(e,t,n){var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(i,a){function r(e){try{l(s.next(e))}catch(e){a(e)}}function o(e){try{l(s.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}l((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const i=n(229),a=n(310);t.App=class{constructor(e){this.rootElement=e,this.game=new i.Game,this.rootElement.append(this.game.element)}start(){return s(this,void 0,void 0,(function*(){const e=yield fetch("./images.json"),t=(yield e.json())[a.setTypeOfCards()],n=[],s=a.setDifficulty();let i=0;0===s&&(i=8),1===s&&(i=18),2===s&&(i=32);for(let e=0;e<i;e++)n.push(`${t.category}/${t.images[e]}`);this.game.newGame(n)}))}}},49:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AboutGame=void 0;const s=n(583);n(233);class i extends s.BaseComponent{constructor(){super("section",["about-game"]),this.sectionTitle=new s.BaseComponent("h3",["section-title"]),this.element.append(this.sectionTitle.element),this.sectionTitle.element.append("How to play?"),this.manual=new s.BaseComponent("div",["manual"]),this.element.append(this.manual.element),this.manualList=new s.BaseComponent("div",["manual__list"]),this.manual.element.append(this.manualList.element),this.manualList.element.innerHTML='\n        <div class="manual__item item-one">\n          <p class="manual__item-number">1</p>\n          <p class="manual__item-title">Register new player in game</p>\n        </div>\n        <div class="manual__item item-two">\n          <p class="manual__item-number">2</p>\n          <p class="manual__item-title">Configure your game settings</p>\n        </div>\n        <div class="manual__item item-three">\n          <p class="manual__item-number">3</p>\n          <p class="manual__item-title">\n           Start you new game!\n           Remember card positions and match it before times up.\n          </p>\n        </div>\n        ',this.manualImage=new s.BaseComponent("div",["manual__image-list"]),this.manual.element.append(this.manualImage.element),this.manualImage.element.innerHTML='\n        <div class="manual__image-item manual-reg"></div>\n        <div class="manual__image-item manual-settings"></div>\n        <div class="manual__image-item manual-game"></div>\n        '}}t.AboutGame=i},332:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Avatar=void 0,n(42);const s=n(583);class i extends s.BaseComponent{constructor(e){e.unshift("avatar"),super("div",e)}}t.Avatar=i},583:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BaseComponent=void 0,t.BaseComponent=class{constructor(e="div",t=[],n){this.element=document.createElement(e),this.element.classList.add(...t),void 0!==n&&this.element.append(`${n}`)}}},842:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BestScore=void 0;const s=n(527),i=n(332),a=n(583);n(653);class r extends a.BaseComponent{constructor(){if(super("section",["best-score"]),this.sectionTitle=new a.BaseComponent("h3",["section-title"],"Best 10 players"),this.element.append(this.sectionTitle.element),this.playerInfo=new a.BaseComponent("div",["player-info"]),this.element.append(this.playerInfo.element),this.avatar=new i.Avatar(["avatar"]),this.avatar.element.style.backgroundImage="url(https://sun9-47.userapi.com/impf/c638327/v638327859/67aa/gKEJ8pS6Gtw.jpg?size=608x960&quality=96&sign=c12850ec96514fc3fb6dca42f3a42e6b&type=album)",this.playerInfo.element.append(this.avatar.element),this.infoWrapper=new a.BaseComponent("div",["infoWrapper"]),this.playerInfo.element.append(this.infoWrapper.element),this.fullName=new a.BaseComponent("p",["full-name"],"Alexandr Demchenko"),this.infoWrapper.element.append(this.fullName.element),this.email=new a.BaseComponent("p",["email"],"Alexandr.Demchenko@list.ru"),this.infoWrapper.element.append(this.email.element),this.scoreTitle=new a.BaseComponent("p",["score-title"],"Score:"),this.playerInfo.element.append(this.scoreTitle.element),this.score=new a.BaseComponent("span",["score"],"1000000"),this.scoreTitle.element.append(this.score.element),s.validUserList)for(let e=0;e<s.validUserList.length&&e<9;e++)this.playerInfo=new a.BaseComponent("div",["player-info"]),this.element.append(this.playerInfo.element),this.avatar=new i.Avatar(["avatar"]),this.avatar.element.style.backgroundImage=Object(s.validUserList[e]).avatar,this.playerInfo.element.append(this.avatar.element),this.infoWrapper=new a.BaseComponent("div",["infoWrapper"]),this.playerInfo.element.append(this.infoWrapper.element),this.fullName=new a.BaseComponent("p",["full-name"],`${Object(s.validUserList[e]).firstName} ${Object(s.validUserList[e]).lastName}`),this.infoWrapper.element.append(this.fullName.element),this.email=new a.BaseComponent("p",["email"],`${Object(s.validUserList[e]).email}`),this.infoWrapper.element.append(this.email.element),this.scoreTitle=new a.BaseComponent("p",["score-title"],"Score:"),this.playerInfo.element.append(this.scoreTitle.element),this.score=new a.BaseComponent("span",["score"],`${Object(s.validUserList[e]).score}`),this.scoreTitle.element.append(this.score.element)}}t.BestScore=r},113:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Button=void 0,n(85);const s=n(583);class i extends s.BaseComponent{constructor(e,t){e.unshift("button"),super("button",e),this.element.innerText=`${t}`}}t.Button=i},343:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Card=void 0,n(76);const s=n(583),i=n(310);class a extends s.BaseComponent{constructor(e){super("div",["card-container"]),this.image=e,this.isFlipped=!1;const t=i.setCardsStyle();this.element.innerHTML=`\n        <div class="${t}">\n            <div class="card__front" style="background-image: url('./images/${e}')"></div>\n            <div class="card__back"></div>\n        </div>\n        `}flipToBack(){return this.isFlipped=!0,this.flip(!0)}flipToFront(){return this.isFlipped=!1,this.flip()}flip(e=!1){return new Promise((t=>{this.element.classList.toggle("flipped",e),this.element.addEventListener("transitionend",(()=>t()),{once:!0})}))}}t.Card=a},610:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CardsField=t.SHOW_TIME=void 0,n(80);const s=n(583);t.SHOW_TIME=3e3;class i extends s.BaseComponent{constructor(e){super("div",e),this.cards=[]}clear(){this.cards=[],this.element.innerHTML=""}addCards(e){this.cards=e,this.cards.forEach((e=>this.element.append(e.element))),setTimeout((()=>{this.cards.forEach((e=>e.flipToBack()))}),t.SHOW_TIME)}}t.CardsField=i},229:function(e,t,n){var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(i,a){function r(e){try{l(s.next(e))}catch(e){a(e)}}function o(e){try{l(s.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}l((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Game=t.countOfFailcomparison=t.countOfcomparison=void 0;const i=n(310),a=n(680),r=n(583),o=n(343);t.countOfcomparison=0,t.countOfFailcomparison=0;class l extends r.BaseComponent{constructor(){super(),this.isAnimation=!1,this.cardsField=i.setCardsFieldStyle(),this.element.appendChild(this.cardsField.element),t.countOfcomparison=0,t.countOfFailcomparison=0}newGame(e){this.cardsField.clear();const t=e.concat(e).map((e=>new o.Card(e))).sort((()=>Math.random()-.5));t.forEach((e=>e.element.addEventListener("click",(()=>this.cardHandler(e))))),this.cardsField.addCards(t)}cardHandler(e){return s(this,void 0,void 0,(function*(){if(!this.isAnimation&&e.isFlipped){if(this.isAnimation=!0,yield e.flipToFront(),!this.activeCard)return this.activeCard=e,void(this.isAnimation=!1);this.activeCard.image!==e.image?(this.activeCard.element.classList.add("card-non-success"),e.element.classList.add("card-non-success"),yield a.delay(2e3),this.activeCard.element.classList.remove("card-non-success"),e.element.classList.remove("card-non-success"),yield Promise.all([this.activeCard.flipToBack(),e.flipToBack()]),t.countOfFailcomparison+=1):(this.activeCard.element.classList.add("card-success"),e.element.classList.add("card-success"),t.countOfcomparison+=1),this.activeCard=void 0,this.isAnimation=!1}}))}}t.Game=l},110:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GameSettings=void 0;const s=n(583);n(962);class i extends s.BaseComponent{constructor(){super("section",["game-settings"]),this.cardsSettings=new s.BaseComponent("div",["cards-settings"]),this.element.append(this.cardsSettings.element),this.cardsSettings.element.innerHTML='\n        <p class="settings-title">Game cards</p>\n        <div>\n          <p class="settings-subtitle">select game cards type</p>\n          <div class="select-card">\n            <div class="select-card-item">\n              <p>Star Wars</p>\n            </div>\n            <div class="select-card-item">\n              <p>Fruits</p>\n            </div>\n            <div class="select-card-item">\n              <p>Cartoons</p>\n            </div>\n          </div>\n        ',this.difficultySettings=new s.BaseComponent("div",["difficulty-settings"]),this.element.append(this.difficultySettings.element),this.difficultySettings.element.innerHTML='\n        <p class="settings-title">Difficulty</p>\n        <div>\n          <p class="settings-subtitle">select game type</p>\n          <div class="select-difficulty">\n            <div class="select-difficulty-item">\n              <p>4 x 4</p>\n            </div>\n            <div class="select-difficulty-item">\n              <p>6 x 6</p>\n            </div>\n            <div class="select-difficulty-item">\n              <p>8 x 8</p>\n            </div>\n          </div>\n        </div>\n        '}}t.GameSettings=i},977:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0,n(528);const s=n(583),i=n(185),a=n(263),r=n(113),o=n(332);class l extends s.BaseComponent{constructor(){super("header",["header"]),this.logo=new i.Logo,this.element.append(this.logo.element),this.nav=new a.Navigation,this.element.append(this.nav.element),this.button=new r.Button(["headerButton","registration-button"],"register new player"),this.element.append(this.button.element),this.button=new r.Button(["headerButton","start-game","hidden"],"start game"),this.element.append(this.button.element),this.button=new r.Button(["headerButton","pause-game","hidden"],"pause game"),this.element.append(this.button.element),this.button=new r.Button(["headerButton","unpause-game","hidden"],"unpause game"),this.element.append(this.button.element),this.button=new r.Button(["headerButton","stop-game","hidden"],"stop game"),this.element.append(this.button.element),this.avatar=new o.Avatar(["avatar","hidden"]),this.element.append(this.avatar.element)}}t.Header=l},69:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Input=void 0;const s=n(583);class i extends s.BaseComponent{constructor(e,t,n,s){super("input",t),this.element.setAttribute("id",e),this.element.setAttribute("type",n),this.element.setAttribute("placeholder",s),this.element.setAttribute("required","required")}}t.Input=i},185:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Logo=void 0,n(467);const s=n(583);class i extends s.BaseComponent{constructor(){super("a",["logo"]),this.element.innerHTML='\n        <p class="logo__title">Match</p>\n        <p class="logo__title logo__subtitle">Match</p>\n        '}}t.Logo=i},743:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Main=void 0,n(57);const s=n(583),i=n(752),a=n(49),r=n(842),o=n(110),l=n(310),c=n(610);class d extends s.BaseComponent{constructor(e){if(""===e&&(e="aboutGame"),super("main",["main"]),this.wrapper=new s.BaseComponent("div",["section__wrapper"]),this.element.append(this.wrapper.element),this.aboutGame=new a.AboutGame,this.bestScore=new r.BestScore,this.gameSettings=new o.GameSettings,this.timer=new s.BaseComponent("div",["timer"]),"aboutGame"===e&&this.wrapper.element.append(this.aboutGame.element),"bestScore"===e&&this.wrapper.element.append(this.bestScore.element),"game-settings"===e&&this.wrapper.element.append(this.gameSettings.element),"startGame"===e){const e=this.wrapper.element;if(!e)throw Error("App root element not found");e.innerHTML="",this.element.append(this.timer.element),this.timer.element.innerHTML='\n      <p class="timer-minute">00</p>\n      <p class="timer-dote">:</p>\n      <p class="timer-second">00</p>\n      ',new i.App(e).start(),setTimeout((()=>l.startNewTimer()),c.SHOW_TIME)}}}t.Main=d},263:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Navigation=void 0,n(268);const s=n(583);class i extends s.BaseComponent{constructor(){super("nav",["navigation"]),this.element.innerHTML='\n    <ul class="nav__list">\n        <li class="nav__list-item active">\n          <div class="nav_element-icon icon__about"></div>\n          <p>About Game</p>\n        </li>\n        <li class="nav__list-item">\n        <div class="nav_element-icon icon__best"></div>\n        <p>Best Score</p>\n      </li>\n      <li class="nav__list-item">\n      <div class="nav_element-icon icon__settings"></div>\n      <p>Game Settings</p>\n    </li>\n    </ul>\n    '}}t.Navigation=i},359:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Registration=void 0;const s=n(583),i=n(113),a=n(69);n(337);class r extends s.BaseComponent{constructor(){super("div",["registration","hidden"]);const e=" ~ ! @ # $ % * () _ — + = | : ; \" ' ` < > , . ? / ^";this.formTitle=new s.BaseComponent("h3",["form__title"],"Registr new Player"),this.element.append(this.formTitle.element),this.inputAndAvatarWrapper=new s.BaseComponent("div",["input-avatar__wrapper"]),this.element.append(this.inputAndAvatarWrapper.element),this.form=new s.BaseComponent("form",["reg-form"]),this.form.element.id="reg-form",this.inputAndAvatarWrapper.element.append(this.form.element),this.inputWrapper=new s.BaseComponent("div",["input__wrapper"]),this.form.element.append(this.inputWrapper.element),this.input=new a.Input("user-first-name",["form__input","first-name"],"text","First Name"),this.input.element.setAttribute("pattern","^[a-zA-Zа-яА-Я0-9 ]{0,30}[a-zA-Zа-яА-Я]+[ 0-9]*$"),this.input.element.setAttribute("maxlength","30"),this.input.element.setAttribute("title",`Имя не может состоять только из цифр или содержать символы ${e}, длинна имени не более 30 символов`),this.inputWrapper.element.append(this.input.element),this.inputWrapper=new s.BaseComponent("div",["input__wrapper"]),this.form.element.append(this.inputWrapper.element),this.input=new a.Input("user-last-name",["form__input","last-name"],"text","Last Name"),this.input.element.setAttribute("pattern","^^[a-zA-Zа-яА-Я0-9 ]{0,30}[a-zA-Zа-яА-Я]+[ 0-9]*$"),this.input.element.setAttribute("maxlength","30"),this.input.element.setAttribute("title",`Фамилия не может состоять только из цифр или содержать символы ${e}, длинна фамилии не более 30 символов`),this.inputWrapper.element.append(this.input.element),this.inputWrapper=new s.BaseComponent("div",["input__wrapper"]),this.form.element.append(this.inputWrapper.element),this.input=new a.Input("user-email",["form__input","email"],"email","E-mail"),this.input.element.setAttribute("maxlength","30"),this.input.element.setAttribute("title","не более 30  символов"),this.inputWrapper.element.append(this.input.element),this.buttonWrapper=new s.BaseComponent("div",["button__wrapper"]),this.element.append(this.buttonWrapper.element),this.button=new i.Button(["form-button","add-user__btn","invalid__btn"],"add user"),this.button.element.setAttribute("form","reg-form"),this.button.element.setAttribute("type","submit"),this.buttonWrapper.element.append(this.button.element),this.button=new i.Button(["form-button","cancel__btn"],"cansel"),this.buttonWrapper.element.append(this.button.element),this.inputWrapper=new s.BaseComponent("div",["load-btn__wrapper"]),this.inputAndAvatarWrapper.element.append(this.inputWrapper.element),this.input=new a.Input("upload",["btn-load--input"],"file",""),this.inputWrapper.element.append(this.input.element)}}t.Registration=r},203:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WinFrame=void 0;const s=n(583),i=n(113);n(950);class a extends s.BaseComponent{constructor(){super("div",["win-frame","hidden"]),this.message=new s.BaseComponent("p",["message"]),this.element.append(this.message.element),this.submitButton=new i.Button(["win-frame__button"],"ok"),this.element.append(this.submitButton.element)}}t.WinFrame=a},310:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.wonGame=t.stopGame=t.setNewMessageInWonFrame=t.unPauseGame=t.pauseGame=t.startNewTimer=t.clearTimer=t.unPauseTimer=t.pauseTimer=t.startTimer=t.setCardsFieldStyle=t.setCardsStyle=t.setDifficulty=t.setTypeOfCards=t.getGameSettings=t.gameMinutOfTimer=void 0;const s=n(610),i=n(229),a=n(142),r=n(938),o=n(527);let l,c=0,d=0,u=0;function m(){return d}function p(){const e=(new Date).getTime()-u,t=document.querySelector(".timer-minute");if(!t)return;const n=document.querySelector(".timer-second");n&&(l=setInterval((()=>{const s=(new Date).getTime();u=new Date(s-e).getTime();const i=String(new Date(u).getMinutes()),a=String(new Date(u).getSeconds());new Date(u).getSeconds()<10?n.innerHTML=`0${a}`:n.innerHTML=a,new Date(u).getMinutes()<10?t.innerHTML=`0${i}`:t.innerHTML=i}),1e3))}function h(){clearInterval(l)}function f(){p()}function v(){u=0}function _(){document.querySelector(".message").innerText=`\n  Congratulations! You successfully \n  found all matches on ${t.gameMinutOfTimer} minutes.\n  `}function w(){const e=u/1e3;t.gameMinutOfTimer=Number((e/60).toFixed(1)),clearInterval(a.winGame),h(),o.updateScore(r.getScore(e,i.countOfcomparison,i.countOfFailcomparison)),_()}t.gameMinutOfTimer=0,t.getGameSettings=function(){const e=document.querySelector(".card-item__active"),t=document.querySelectorAll(".select-card-item");t.forEach((n=>{n===e&&(c=Array.from(t).indexOf(n))}));const n=document.querySelector(".difficulty-item__active"),s=document.querySelectorAll(".select-difficulty-item");s.forEach((e=>{e===n&&(d=Array.from(s).indexOf(e))}))},t.setTypeOfCards=function(){return c},t.setDifficulty=m,t.setCardsStyle=function(){return 0===m()?"card card-one":1===m()?"card card-two":2===m()?"card card-three":"card"},t.setCardsFieldStyle=function(){return 0===m()?new s.CardsField(["cards-field","cards-field-one"]):1===m()?new s.CardsField(["cards-field","cards-field-two"]):2===m()?new s.CardsField(["cards-field","cards-field-three"]):new s.CardsField(["cards-field"])},t.startTimer=p,t.pauseTimer=h,t.unPauseTimer=f,t.clearTimer=v,t.startNewTimer=function(){v(),p()},t.pauseGame=function(){const e=document.querySelector(".cards-field");if(!e)throw Error("Cards Field not founded");e.classList.add("cards-field-pause"),h()},t.unPauseGame=function(){const e=document.querySelector(".cards-field");if(!e)throw Error("Cards Field not founded");e.classList.remove("cards-field-pause"),f()},t.setNewMessageInWonFrame=_,t.stopGame=w,t.wonGame=function(){let e=0;const t=document.querySelectorAll(".card-container");if(0!==t.length&&(t.forEach((t=>{t.classList.contains("card-success")&&(e+=1)})),t.length===e)){if(!document.querySelector(".start-game"))throw Error("Start-game button not founded");const e=document.querySelector(".pause-game");if(!e)throw Error("Start-game button not founded");const t=document.querySelector(".unpause-game");if(!t)throw Error("Start-game button not founded");const n=document.querySelector(".stop-game");if(!n)throw Error("Start-game button not founded");const s=document.querySelector(".registration-button");if(!s)throw Error("Start-game button not founded");const i=document.querySelector(".win-frame"),a=document.querySelector(".wrapper"),r=document.querySelector(".avatar");null==r||r.classList.add("hidden"),null==a||a.classList.add("wrapper-hidden"),null==i||i.classList.remove("hidden"),n.classList.add("hidden"),e.classList.add("hidden"),t.classList.add("hidden"),s.classList.remove("hidden"),w()}}},870:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.setFile=t.getFile=t.connectDB=void 0;const s=n(527),i="Users";function a(e){const t=indexedDB.open("Vitebsk121",1);t.onerror=function(e){console.log(e)},t.onsuccess=function(){e(t.result)},t.onupgradeneeded=function(){t.result.createObjectStore(i,{keyPath:"id",autoIncrement:!0}),a(e)}}t.connectDB=a,t.getFile=function(){a((e=>{const t=e.transaction([i],"readonly").objectStore(i).getAll();t.onerror=e=>console.log(e),t.onsuccess=function(){s.getPlayersList(t.result)}}))},t.setFile=function(e){a((t=>{const n=t.transaction([i],"readwrite").objectStore(i).add(e);n.onerror=e=>console.log(e),n.onsuccess=function(){return n.result}}))}},142:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.service=t.clearForm=t.clearStyle=t.changeHeaderAvatar=t.readyToGameStyle=t.loadAvatar=t.winGame=void 0;const s=n(610),i=n(743),a=n(310),r=n(870),o=n(527);let l,c=!1;function d(){const e=document.querySelector('input[type="file"]'),t=document.querySelector(".load-btn__wrapper");if(!e)throw Error("fileInputElement not founded");if(!t)throw Error("imageContainer not founded");const n=e;e.addEventListener("change",(()=>{const e=n.files;if(!e||null==e)throw Error("file not founded");const s=new FileReader;e[0]&&(s.readAsDataURL(e[0]),s.onload=()=>{const e=s.result;t.style.backgroundImage=`url(${e})`},n.value="")}))}function u(){const e=document.querySelector(".registration-button");null==e||e.classList.add("hidden");const t=document.querySelector(".start-game");null==t||t.classList.remove("hidden");const n=document.querySelector(".avatar");null==n||n.classList.remove("hidden")}function m(){document.querySelector(".avatar").style.backgroundImage=o.user.avatar}function p(){document.querySelectorAll(".input__wrapper").forEach((e=>e.classList.remove("input__wrapper-valid")));const e=document.querySelector(".wrapper"),t=document.querySelector(".registration");if(!t)throw Error("Reg form not founded");if(!e)throw Error("Wrapper not founded");e.classList.remove("wrapper-hidden"),t.classList.add("hidden")}function h(){const e=document.querySelector(".first-name"),t=document.querySelector(".last-name"),n=document.querySelector(".email"),s=document.querySelector(".load-btn__wrapper");e.value="",t.value="",n.value="",s.style.backgroundImage=l}t.loadAvatar=d,t.readyToGameStyle=u,t.changeHeaderAvatar=m,t.clearStyle=p,t.clearForm=h,t.service=function(){function e(e){const t=document.querySelector("main"),n=new i.Main(e);if(!t)throw Error("Main not found");t.replaceWith(n.element)}r.connectDB((()=>console.log("inexedDB opened"))),l=document.querySelector(".load-btn__wrapper").style.backgroundImage;const n=document.querySelectorAll(".nav__list-item");n.forEach((t=>t.addEventListener("click",(()=>{n.forEach((e=>e.classList.remove("active"))),t.classList.add("active"),0===Array.from(n).indexOf(t)&&e("aboutGame"),1===Array.from(n).indexOf(t)&&(r.getFile(),setTimeout((()=>{e("bestScore")}),500)),2===Array.from(n).indexOf(t)&&(e("game-settings"),function(){const e=document.querySelectorAll(".select-card-item");e[a.setTypeOfCards()].classList.add("card-item__active"),e.forEach((t=>t.addEventListener("click",(()=>{e.forEach((e=>e.classList.remove("card-item__active"))),t.classList.add("card-item__active"),a.getGameSettings()}))));const t=document.querySelectorAll(".select-difficulty-item");t[a.setDifficulty()].classList.add("difficulty-item__active"),t.forEach((e=>e.addEventListener("click",(()=>{t.forEach((e=>e.classList.remove("difficulty-item__active"))),e.classList.add("difficulty-item__active"),a.getGameSettings()}))))}())}))));const f=document.querySelector(".win-frame__button");null==f||f.addEventListener("click",(()=>{const e=document.querySelector(".win-frame"),t=document.querySelector(".wrapper");null==e||e.classList.add("hidden"),null==t||t.classList.remove("wrapper-hidden"),n[1].click()}));const v=document.querySelector(".logo");null==v||v.addEventListener("click",(()=>{n.forEach((e=>e.classList.remove("active"))),Array.from(n)[0].classList.add("active"),e("aboutGame")}));const _=document.querySelector(".registration-button");if(!_)throw Error("Registration button not founded");_.addEventListener("click",(()=>{const e=document.querySelector(".wrapper"),t=document.querySelector(".registration");if(!t)throw Error("Reg form not founded");if(!e)throw Error("Wrapper not founded");e.classList.add("wrapper-hidden"),t.classList.remove("hidden"),function(){!function(){const e=document.querySelector(".add-user__btn");if(!e)throw Error("submitButton not founded");if(!document.forms.item(0))throw Error("form not founded");const t=document.querySelectorAll(".input__wrapper"),n=document.querySelector(".first-name"),s=document.querySelector(".last-name"),i=document.querySelector(".email");if(!n)throw Error("firstNameInput not founded");if(!t)throw Error("inputsWrapper not founded");n.addEventListener("input",(()=>{if(/^[a-zA-Zа-яА-Я0-9\s]{0,30}[a-zA-Zа-яА-Я]+[\s0-9]*$/.test(n.value)){if(Number(n.value))return void t[0].classList.remove("input__wrapper-valid");t[0].classList.add("input__wrapper-valid"),t[0].classList.contains("input__wrapper-valid")&&t[1].classList.contains("input__wrapper-valid")&&t[2].classList.contains("input__wrapper-valid")&&e.classList.remove("invalid__btn")}else t[0].classList.remove("input__wrapper-valid"),t[0].classList.contains("input__wrapper-valid")&&t[1].classList.contains("input__wrapper-valid")&&t[2].classList.contains("input__wrapper-valid")||e.classList.add("invalid__btn")})),s.addEventListener("input",(()=>{if(/^[a-zA-Zа-яА-Я0-9\s]{0,30}[a-zA-Zа-яА-Я]+[\s0-9]*$/.test(s.value)){if(Number(s.value))return void t[1].classList.remove("input__wrapper-valid");t[1].classList.add("input__wrapper-valid"),t[0].classList.contains("input__wrapper-valid")&&t[1].classList.contains("input__wrapper-valid")&&t[2].classList.contains("input__wrapper-valid")&&e.classList.remove("invalid__btn")}else t[1].classList.remove("input__wrapper-valid"),t[0].classList.contains("input__wrapper-valid")&&t[1].classList.contains("input__wrapper-valid")&&t[2].classList.contains("input__wrapper-valid")||e.classList.add("invalid__btn")})),i.addEventListener("input",(()=>{/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(i.value)?(t[2].classList.add("input__wrapper-valid"),t[0].classList.contains("input__wrapper-valid")&&t[1].classList.contains("input__wrapper-valid")&&t[2].classList.contains("input__wrapper-valid")&&e.classList.remove("invalid__btn")):(t[2].classList.remove("input__wrapper-valid"),t[0].classList.contains("input__wrapper-valid")&&t[1].classList.contains("input__wrapper-valid")&&t[2].classList.contains("input__wrapper-valid")||e.classList.add("invalid__btn"))}))}();const e=document.querySelector(".add-user__btn");if(!e)throw Error("submitButton1 not founded");const t=document.forms.item(0);if(!t)throw Error("form not founded");e.addEventListener("click",(e=>{t.checkValidity()&&(e.preventDefault(),o.preSaveUser(),h(),p(),m(),u())}))}(),d()}));const w=document.querySelector(".cancel__btn");if(!w)throw Error("Cancel button not founded");w.addEventListener("click",(()=>{p(),h()}));const g=document.querySelector(".start-game");if(!g)throw Error("Start-game button not founded");const y=document.querySelector(".pause-game");if(!y)throw Error("Start-game button not founded");const b=document.querySelector(".unpause-game");if(!b)throw Error("Start-game button not founded");const L=document.querySelector(".stop-game");if(!L)throw Error("Start-game button not founded");g.addEventListener("click",(()=>{!0!==c&&(c=!0,e("startGame"),setTimeout((()=>{g.classList.add("hidden"),y.classList.remove("hidden"),L.classList.remove("hidden"),c=!1,t.winGame=setInterval(a.wonGame,500)}),s.SHOW_TIME))})),y.addEventListener("click",(()=>{y.classList.add("hidden"),b.classList.remove("hidden"),a.pauseGame()})),b.addEventListener("click",(()=>{b.classList.add("hidden"),y.classList.remove("hidden"),a.unPauseGame()})),L.addEventListener("click",(()=>{L.classList.add("hidden"),y.classList.add("hidden"),b.classList.add("hidden"),g.classList.remove("hidden"),a.stopGame()}))}},680:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.delay=void 0,t.delay=function(e){return new Promise((t=>{setTimeout(t,e)}))}},938:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getScore=void 0,t.getScore=function(e,t,n){let s=100*(t-n)-10*e;return s<0&&(s=0),s=Number(s.toFixed()),s}},527:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getPlayersList=t.addUserToDB=t.updateScore=t.preSaveUser=t.validUserList=t.user=void 0;const s=n(870);function i(e,t){const n=Object(e).score,s=Object(t).score;let i=0;return n<s&&(i=1),n>s&&(i=-1),i}t.user={firstName:"",lastName:"",email:"",score:0,avatar:""},t.validUserList=[],t.preSaveUser=function(){const e=document.getElementById("user-first-name"),n=document.getElementById("user-last-name"),i=document.getElementById("user-email"),a=document.querySelector(".load-btn__wrapper").style.backgroundImage;t.user={firstName:e.value,lastName:n.value,email:i.value,score:0,avatar:a},s.setFile(t.user)},t.updateScore=function(e){t.user.score=e,s.setFile(t.user)},t.addUserToDB=function(){s.setFile(t.user)},t.getPlayersList=function(e){t.validUserList=[];const n=[];e.forEach((e=>{Object(e).score>0&&n.push(e)})),console.log(n),n.sort(i),t.validUserList=n,console.log(n)}}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var a=t[s]={exports:{}};return e[s].call(a.exports,a,a.exports,n),a.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{n(373),n(503);const e=n(977),t=n(743),s=n(142),i=n(583),a=n(359),r=n(203);class o{constructor(n){this.rootElement=n,this.wrapper=new i.BaseComponent("div",["wrapper"]),this.rootElement.append(this.wrapper.element),this.registration=new a.Registration,this.rootElement.append(this.registration.element),this.winFrame=new r.WinFrame,this.rootElement.append(this.winFrame.element),this.header=new e.Header,this.wrapper.element.append(this.header.element),this.main=new t.Main(""),this.wrapper.element.append(this.main.element)}}window.onload=()=>{const e=document.querySelector("body");if(!e)throw Error("App root element not found");new o(e),s.service()}})()})();