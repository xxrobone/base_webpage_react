import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

//import from firestore
const firebaseConfig = {
  /* apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID, */
  apiKey: 'AIzaSyAQ-yMfz07MweLlGguSjJum96jhlOWpuiw',
  authDomain: 'rjwportfolio-6e348.firebaseapp.com',
  projectId: 'rjwportfolio-6e348',
  storageBucket: 'rjwportfolio-6e348.appspot.com',
  messagingSenderId: '113294750820',
  appId: '1:113294750820:web:3d6105123e60c067df9b71',
};

// init firebase
initializeApp(firebaseConfig);

//init firestore
const db = getFirestore();

export { db };
