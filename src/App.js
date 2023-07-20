import './App.css';
import Main from './pages/main';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import AuthProvider from './hoc/auth-provider';
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCNKAnyYSaykWeJYPJ9oXUIWKwYsKwa2NY',
  authDomain: "coder-commerce-ede9e.firebaseapp.com",
  projectId: "coder-commerce-ede9e",
  storageBucket: "coder-commerce-ede9e.appspot.com",
  messagingSenderId: "893836221804",
  appId: "1:893836221804:web:ce0dfe049b6e6eae3ca749",
  measurementId: "G-ECHZ2JTQE9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Main />
      </AuthProvider>
    </div>
  );
}

export default App;
