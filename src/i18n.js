import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Robot Adoption": "Robot Adoption",
      "Login": "Login",
      "Username": "Username",
      "Password": "Password",
      "Login Error": "Authentication error. Check your credentials",
      "Enter Username": "Enter your username",
      "Enter Password": "Enter your password",
      "Year of Manufacture": "Year of Manufacture",
      "Processing Capacity": "Processing Capacity",
      "Additional Features": "Additional Features",
      "Robot Details": "Robot Details",
      "Name": "Name",
      "Model": "Model",
      "Description": "Description",
      "Manufacturer": "Manufacturer",
      "Contact Info": "Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers",
    },
  },
  es: {
    translation: {
      "Robot Adoption": "Adopta un Robot",
      "Login": "Inicio de sesión",
      "Username": "Nombre de Usuario",
      "Password": "Contraseña",
      "Login Error": "Error de autenticación. Revise sus credenciales",
      "Enter Username": "Ingrese su nombre de usuario",
      "Enter Password": "Ingrese su contraseña",
      "Year of Manufacture": "Año de fabricación",
      "Processing Capacity": "Capacidad de procesamiento",
      "Additional Features": "Características adicionales",
      "Robot Details": "Detalles del Robot",
      "Name": "Nombre",
      "Model": "Modelo",
      "Description": "Descripción",
      "Manufacturer": "Empresa Fabricante",
      "Contact Info": "Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers",
      },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
