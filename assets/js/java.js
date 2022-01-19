$(document).ready(function () {
  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDOU_2PB7bBegaKcc9RrILiDiiV4KpoO7I",
    authDomain: "hoycomien-575d7.firebaseapp.com",
    projectId: "hoycomien-575d7",
    storageBucket: "hoycomien-575d7.appspot.com",
    messagingSenderId: "146790859369",
    appId: "1:146790859369:web:b985329bb4386fdd7458f8",
    measurementId: "G-LGHHC1ZN6F"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  // Inicializar Auth de Firebase (correo y contraseña)
  const auth = firebase.auth();

  // Inicializar Auth de Google
  const provider = new firebase.auth.GoogleAuthProvider();

  // Inicializar Firestore (base de datos)
  const db = firebase.firestore();

  //------------------------------------------------------------------

  //Comentar--
  $("#contenidoWeb").hide();
  $("#IngresoDeRegistro").hide();
  $("#IngresoDeRegistro2").hide();
  $("#IngresoConGoogle").hide();
  $("#buttonRetro").hide();


  /*Registro de usuarios*/
  $("#btnIngresoConEmail").click(function (e) {
    e.preventDefault();

    $("#login").hide();
    $("#buttonRetro").show();
    $("#contenidoWeb").show();

  });
  $("#buttonRetro").click(function (e) {
    e.preventDefault();

    $("#contenidoWeb").hide();
    $("#login").show();
    $("#buttonRetro").hide();
  });

  //-----------------------------------------------------------------------
  //-----------------------------------------------------------------------
  /* Registro con gmail y contraseña*/
  $("#btnIngresoGmail").click(function (e) {
    e.preventDefault();

    $("#login").hide();
    $("#buttonRetro").show();
    $("#IngresoConGoogle").show();
  });
  $("#btnContinuar").click(function (e) {
    e.preventDefault();

    $("#IngresoConGoogle").hide();
    $("#buttonRetro").show();
    $("#contenidoWeb").show();
  });
  $("#buttonRetro").click(function (e) {
    e.preventDefault();

    $("#IngresoConGoogle").hide();
    $("#login").show();
    $("#buttonRetro").hide();
  });

  //-----------------------------------------------------------------------
  //-----------------------------------------------------------------------
  /*Registrarse*/
  $("#registrateAviso").click(function (e) {
    e.preventDefault();

    $("#login").hide();
    $("#buttonRetro").show();
    $("#IngresoDeRegistro").show();
  });

  $("#btnSiguiente").click(function (e) {
    e.preventDefault();

    $("#IngresoDeRegistro").hide();
    $("#buttonRetro").show();
    $("#IngresoDeRegistro2").show();
  });

  $("#btnContinuar").click(function (e) {
    e.preventDefault();

    $("#IngresoDeRegistro2").hide();
    $("#buttonRetro").show();
    $("#contenidoWeb").show();
  });

  //Boton para retroceder
  $("#buttonRetro").click(function (e) {
    e.preventDefault();

    $("#IngresoDeRegistro").hide();
    $("#login").show();
    $("#buttonRetro").hide();
  });
  $("#buttonRetro").click(function (e) {
    e.preventDefault();

    $("#IngresoDeRegistro2").hide();
    $("#login").show();
    $("#buttonRetro").hide();
  });
  $("#buttonRetro").click(function (e) {
    e.preventDefault();

    $("#contenidoWeb").hide();
    $("#login").show();
    $("#buttonRetro").hide();
  });

  //Boton para continuar
  $("#btnContinuar1").click(function (e) {
    e.preventDefault();

    $("#IngresoDeRegistro2").hide();
    $("#buttonRetro").show();
    $("#contenidoWeb").show();
  });

  //Boton para continuar
  $("#btnContinuar1").click(function (e) {
    e.preventDefault();

    $("#IngresoDeRegistro2").hide();
    $("#buttonRetro").show();
    $("#contenidoWeb").show();
  });

});