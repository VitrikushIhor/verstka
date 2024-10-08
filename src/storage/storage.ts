import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDZFyjWw4e_XpxLiN6TfSwJybO8JxMXU18",
	authDomain: "test-d6f56.firebaseapp.com",
	projectId: "test-d6f56",
	storageBucket: "test-d6f56.appspot.com",
	messagingSenderId: "749184008328",
	appId: "1:749184008328:web:2757687bcd3601b8785f3d"
};

const app = initializeApp(firebaseConfig);
export const fireStore = getFirestore(app);
