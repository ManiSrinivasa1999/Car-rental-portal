import {firebaseConfig} from './config.js';
(
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      // const model = {};
      const view = {
        render: () => {

        },
        init: () => {
          view.render();
        },
      };
      const controller = {
        init: () => {
          view.init();
        },
      };
      firebase.initializeApp(firebaseConfig);
      const ui = new firebaseui.auth.AuthUI(firebase.auth());
      ui.start('#firebaseui-auth-container', {
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        ],
        signInSuccessURL: 'user.html',
      });
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // user signed in
          controller.init();
        } else {
          // no user signed in
        }
      });
    }
  }
)();
