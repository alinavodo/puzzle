import UserDataModel from '../model';
import View from './view';
import "../style/loginPage.css";

class LoginPageView extends View {
  public errFillInput: HTMLElement | null;
  public errValidation: HTMLElement | null;
  private form: HTMLFormElement | null;
  private userDataModel: UserDataModel;

  constructor(userDataModel: UserDataModel) {
    const params = {
      tag: 'div',
      classNames: [],
    };
    super(params);
    this.createPageView();
    this.errFillInput = document.querySelector('.err-fill-input');
    this.errValidation = document.querySelector('.err-validation');
    this.form = document.querySelector('.login-page-form');
    this.userDataModel = userDataModel;
  }


  createPageView() {
    const loginPage = `
            <div class="login-page-form">
                <h1 class="greetings-text">Hello, let's get to know each other and learn English!</h1>
                <form class="form">
                  <input class="register-input" placeholder="First name" type="text" id="firstName"/>
                  <input class="register-input" placeholder="Last name" type="text" id="lastName"/>
                  <div class="error" id="error"></div>
                  <button class="btn-login" id="btnLogIn" type="button">Login</button>
                  </form>
            </div>
        `
        ;
    const divElement = document.createElement('div');
    divElement.innerHTML = loginPage;
    document.body.appendChild(divElement);
  }

  showErrors(): void {                       
    const errorLogin = document.getElementById('error') as HTMLInputElement | null;

if (errorLogin) {
  errorLogin.innerHTML = `<div class="error-reg" id="errorReg">Please write correctly</div>`;
}

  }

  setHiddenForm(): void {
    if (!this.form) return;
    this.form.classList.add('hidden');
  }

  getFirstNameInput(): HTMLInputElement {
    return document.getElementById('firstName') as HTMLInputElement;
  }

  getLastNameInput(): HTMLInputElement  {
    return document.getElementById('lastName') as HTMLInputElement;
  }

  getLoginBtn(): HTMLInputElement  {
    return document.getElementById('lastName') as HTMLInputElement;
  }
}

export default LoginPageView;
