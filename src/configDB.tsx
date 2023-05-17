import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const FirebaseConnection = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyDIZVaDRUPUxnfPSGgHs16I-EPWySUK2FY",
        authDomain: "pracadyplomowa-8a45f.firebaseapp.com",
        databaseURL: "https://pracadyplomowa-8a45f-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "pracadyplomowa-8a45f",
        storageBucket: "pracadyplomowa-8a45f.appspot.com",
        messagingSenderId: "324703695321",
        appId: "1:324703695321:web:069a55f84e3da8dc8c29c8"
    };

    const app = initializeApp(firebaseConfig);
    return getDatabase(app);
}

export default FirebaseConnection