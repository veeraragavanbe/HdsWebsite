var firebaseConfig = {
  apiKey: "AIzaSyBHMZB5nJXtm3UAnVACsxR-LXyK8KtVdno",
  authDomain: "hyper-mart-shopping.firebaseapp.com",
  databaseURL: "https://hyper-mart-shopping-default-rtdb.firebaseio.com",
  projectId: "hyper-mart-shopping",
  storageBucket: "hyper-mart-shopping.appspot.com",
  messagingSenderId: "306358878756",
  appId: "1:306358878756:web:9de20019ab10ca65998eb1",
  measurementId: "G-8FNG928M5F"
};
firebase.initializeApp(firebaseConfig);


document.getElementById('cont_value').onclick = function(){
  //window.location.reload();
  var name = document.getElementById('fname1').value;
  var email= document.getElementById('email1').value;
  var mobile = document.getElementById('mobile1').value;
  var message = document.getElementById('subject1').value;
  firebase.database().ref('SITE_CONTACT/' + mobile).set({
     Name: name,
     Email: email,
     Message: message,
     Contact: mobile
  });
  document.getElementById('fname1').value = "";
  document.getElementById('email1').value = "";
  document.getElementById('subject1').value = "";
  document.getElementById('mobile1').value = "";
  alert("ThankYou " + name + " We get back to you soon ");
  
  addveera(name);
}
function addveera(name){
  var x1 = name;
  console.log("Hello" + x1);
  $(document).ready(function () { 
      setTimeout(function () { 
        //alert('Reloading Page'); 
        location.reload(true); 
      }, 5000); 
    }); 
}


