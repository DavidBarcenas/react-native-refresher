module.exports = {
  root: true,
  extends: '@react-native-community',

  /*
  Esta propiedad solo se declara para que no ponga
  las desestructuraciones de los imports con una linea roja
  */
  rules: {
    'prefer-destructuring': [
      {
        object: true,
        array: true,
      },
    ],
  },
};
