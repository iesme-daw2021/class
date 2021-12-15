window.addEventListener('DOMContentLoaded', (event) => {
  // // Formas de llegar al form profile
  // document.forms.profile;
  // document.forms.profile[0];
  //
  // // Formas de llegar al select hobbies
  // document.forms.profile.elements[0];
  // document.forms.profile.elements.hobbies;
  // document.forms.profile.hobbies;
  //
  // // Formas de seleccionar un elemento
  // document.forms.profile.hobbies.value = 'sleep';
  // document.forms.profile.hobbies.selectedIndex = 0;
  // document.forms.profile.hobbies.options[1].selected = true;
  //
  // // Formas de seleccionar un elemento cuando es selección múltiple
  // document.forms.profile.hobbies.options[0].selected = false;
  // document.forms.profile.hobbies.options[1].selected = true;
  // document.forms.profile.hobbies.options[2].selected = true;
  //
  //  () => document.forms.profile.hobbies.options[2].selected;
  //
  document.forms.profile.input.onchange = (event) => {
    console.log('pasa');
    document.querySelector('div').innerHTML =
      document.forms.profile.input.value;
  };
  //
  document.forms.profile.onsubmit = (event) => {
    console.log('SUMBIT');
    event.preventDefault();
    // VALIDACION
    document.forms.profile.submit();
  };
});
