$(document).ready(function () {
    // Import the functions you need from the SDKs you need
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyAPIYPyY8ceO2VO_Ux2fkmOZP-Wk0tbzXA",
      authDomain: "twitter-demo-fb461.firebaseapp.com",
      projectId: "twitter-demo-fb461",
      storageBucket: "twitter-demo-fb461.appspot.com",
      messagingSenderId: "945517606063",
      appId: "1:945517606063:web:39762d24d4930b0fe7905a"
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
    $("#btnIngresoConEmail").click(function(e){
    e.preventDefault();
    
    $("#login").hide();
    $("#buttonRetro").show();
    $("#contenidoWeb").show();
    
    });
    $("#buttonRetro").click(function(e){
      e.preventDefault();
      
      $("#contenidoWeb").hide();
      $("#login").show();
      $("#buttonRetro").hide();
      });
    
    //-----------------------------------------------------------------------
    //-----------------------------------------------------------------------
    /* Registro con gmail y contraseña*/
    $("#btnIngresoGmail").click(function(e){
      e.preventDefault();
    
      $("#login").hide();
      $("#buttonRetro").show();
      $("#IngresoConGoogle").show();
    });
    $("#btnContinuar").click(function(e){
      e.preventDefault();
    
      $("#IngresoConGoogle").hide();
      $("#buttonRetro").show();
      $("#contenidoWeb").show();
    });
    $("#buttonRetro").click(function(e){
      e.preventDefault();
      
      $("#IngresoConGoogle").hide();
      $("#login").show();
      $("#buttonRetro").hide();
      });
    
    //-----------------------------------------------------------------------
    //-----------------------------------------------------------------------
    /*Registrarse*/
    $("#registrateAviso").click(function(e){
      e.preventDefault();
    
      $("#login").hide();
      $("#buttonRetro").show();
      $("#IngresoDeRegistro").show();
    });
    
    $("#btnSiguiente").click(function(e){
      e.preventDefault();
    
      $("#IngresoDeRegistro").hide();
      $("#buttonRetro").show();
      $("#IngresoDeRegistro2").show();
    });
    
    $("#btnContinuar").click(function(e){
      e.preventDefault();
    
      $("#IngresoDeRegistro2").hide();
      $("#buttonRetro").show();
      $("#contenidoWeb").show();
    });
    
    //Boton para retroceder
    $("#buttonRetro").click(function(e){
      e.preventDefault();
      
      $("#IngresoDeRegistro").hide();
      $("#login").show();
      $("#buttonRetro").hide();
      });
    $("#buttonRetro").click(function(e){
        e.preventDefault();
        
        $("#IngresoDeRegistro2").hide();
        $("#login").show();
        $("#buttonRetro").hide();
        });
    $("#buttonRetro").click(function(e){
          e.preventDefault();
          
        $("#contenidoWeb").hide();
        $("#login").show();
        $("#buttonRetro").hide();     
      });
    
    //Boton para continuar
    $("#btnContinuar1").click(function(e){
      e.preventDefault();
      
    $("#IngresoDeRegistro2").hide();
    $("#buttonRetro").show();
    $("#contenidoWeb").show();     
    });
    
    });