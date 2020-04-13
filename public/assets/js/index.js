(document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    const userSignUp = document.getElementById('user-signup');
    const adminSignUp = document.getElementById('admin-signup');
    const MODEL = {};
    const VIEW = {
      render: () => {
      },
      init: () => {
        userSignUp.onclick = () => {
          CONTROLLER.handleUserLoginPage();
        },
        adminSignUp.onclick = () => {
          CONTROLLER.handleAdminLoginPage();
        },
        VIEW.render();
      },
    };
    const CONTROLLER = {
      handleUserLoginPage: () => {
        location.href = 'user-signup.html';
      },
      handleAdminLoginPage: () => {
        location.href = 'admin-signup.html';
      },
      init: () => {
        VIEW.init();
      },
    };
    CONTROLLER.init();
  }
})();
