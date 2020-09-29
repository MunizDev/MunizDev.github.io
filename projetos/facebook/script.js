const btnLogin = document.querySelector('#button-login');
const user = document.querySelector('#user-email-phone');
btnLogin.addEventListener('click', function () {
  alert(user.value);
});

const radioCustomGender = document.getElementsByName('gender')[2];
radioCustomGender.addEventListener('click', function () {
  const newAccForm = document.querySelector('.new-account');
  const genderCustom = document.createElement('input');
  genderCustom.type = 'text';
  genderCustom.name = 'gender-custom';
  genderCustom.className = 'account-input';
  genderCustom.placeholder = 'Gênero (opcional)';
  newAccForm.appendChild(genderCustom);
  newAccForm.insertBefore(genderCustom, newAccForm.children[7]);
});

function checkedGender() {
  const allGender = document.getElementsByName('gender');
  let resultado = '';
  if (allGender[0].checked === true) {
    resultado = 'Feminino';
  } else if (allGender[1].checked === true) {
    resultado = 'Masculino';
  } else if (allGender[2].checked === true) {
    resultado = 'Personalizado';
  }
  return resultado;
}

const inputFirstName = document.getElementsByName('firstname')[0];
const inputLastName = document.getElementsByName('lastname')[0];
const inputPhoneEmail = document.getElementsByName('phone_email')[0];
const inputBirthdate = document.getElementsByName('birthdate')[0];

const validate = new window.JustValidate('.new-account', {
  messages: {
    primeiroNome: {
      required: 'Campos inválidos',
    },
    ultimoNome: {
      required: 'Campos inválidos',
    },
    email: {
      required: 'Campos inválidos',
    },
    password: {
      required: 'Campos inválidos',
    },
    birthdate: {
      required: 'Campos inválidos',
    },
    radio: {
      required: 'Campos inválidos',
    },
  },

  rules: {
    primeiroNome: {
      required: true,
    },
    ultimoNome: {
      required: true,
    },
    birthdate: {
      required: true,
    },
    radio: {
      required: true,
    },
    password: {
      strength: {
        custom: '[a-zA-Z0-9]',
      },
    },
  },

  submitHandler() {
    const divRightContent = document.getElementsByClassName('right-content')[0];
    const fullName = `${inputFirstName.value} ${inputLastName.value}`;
    const saudacoes = `Olá, ${fullName}
${inputPhoneEmail.value}
${inputBirthdate.value}
${checkedGender()}`;
    const divSaudacoes = document.createElement('div');
    divSaudacoes.innerText = saudacoes;
    divRightContent.innerHTML = '';
    divRightContent.appendChild(divSaudacoes);
  },
});

window.onload = function () {
  return validate;
};
