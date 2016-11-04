import { Meteor } from 'meteor/meteor';
import { i18n } from 'meteor/anti:i18n';

if(Meteor.isClient){
  i18n.setLanguage(navigator.language.split('-')[0]);
}

i18n.map('en', {
  title: 'Title',
  access_denied: 'e-Brain',
  cant_get_here: "You can't get here! Please log in.",
  not_found: "Sorry, we couldn't find a page at this address.",
});

i18n.map('es', {
  title: 'Título',
  access_denied: 'Acceso denegado',
  cant_get_here: "Por favor, inicia sesión con tu cuenta.",
  not_found: "Lo sentimos, pero no encontramos lo que buscas.",
});
