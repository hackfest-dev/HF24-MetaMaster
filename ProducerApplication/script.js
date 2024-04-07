import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";


const firebaseConfig = {
apiKey: "AIzaSyDS832d9qz5QxPiGB4csI_DX7zzNlEijas",
authDomain: "vrsupermarket-9f39d.firebaseapp.com",
databaseURL: "https://vrsupermarket-9f39d-default-rtdb.firebaseio.com",
projectId: "vrsupermarket-9f39d",
storageBucket: "vrsupermarket-9f39d.appspot.com",
messagingSenderId: "659271850157",
appId: "1:659271850157:web:a65aecfc4d736a6358ce24"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

var shopEntryEnabled = true;

document.getElementById("toggleButton").addEventListener('click', function(e){
    shopEntryEnabled = !shopEntryEnabled;
    var button = document.getElementById('toggleButton');
    if (shopEntryEnabled) {
        button.textContent = 'Enable Shop Entry';
        window.alert("Entry to shop is Enabled");
    } else {
        button.textContent = 'Disable Shop Entry';
        window.alert("Entry to shop is Disabled");
    }
});