import app from '../../main.ts';
import UserDataModel from '../model.ts';
import LoginPageView from '../view/loginPageView.ts';
import StartPageView from '../view/startPageView.ts';

class LoginPageController {
  private view: LoginPageView;
  private model: UserDataModel;

  constructor(view: LoginPageView, model: UserDataModel) {
    this.view = view;
    this.model = model;
    this.setupEventListeners();
  }

  private setupEventListeners() {

    const loginBtn = document.getElementById('btnLogIn');

    if (loginBtn) {
     
      loginBtn.addEventListener('click', () => {
        console.log('fgfgfgfg')
        this.btnChecked()
        app.createView();
        this.view.showErrors();
      });
    }
  }

  private btnChecked()  {
    const firstName = this.view.getFirstNameInput();
    const lastName = this.view.getLastNameInput();
    const btnLogIn = this.view.getLoginBtn();
    if(firstName && lastName){
      const isValidLastName = this.validateName();
      if (isValidLastName) {
          this.model.setFirstName(firstName.value);
          this.model.setLastName(lastName.value);
          btnLogIn.disabled = false;
          this.model.saveToLocalStorage();
          const urlSearchParams = new URLSearchParams(window.location.search);
          urlSearchParams.set('page', 'start')
          const startPageView = new StartPageView();
          window.history.replaceState(null, '', `?${urlSearchParams.toString()}`);

          document.body.append(startPageView.getHtmlElement());
      };
    }
    }

    private validateName(): boolean {
      const firstName = this.view.getFirstNameInput();
      const lastName = this.view.getLastNameInput();
      const firstLen = firstName.value.length;
      const lastLen = lastName.value.length;
      const reg = /^[A-Za-z-]+$/;
      const regFirst = reg.test(firstName.value);
      const regLast = reg.test(lastName.value);
      const validFirstLet = firstLen > 0 && firstName.value[0] === firstName.value[0].toUpperCase();
      const validLastLet = lastLen > 0 && lastName.value[0] === lastName.value[0].toUpperCase();
      return firstLen >= 3 && lastLen >= 4 && regFirst && regLast && validFirstLet && validLastLet;
  }
}



export default LoginPageController;
