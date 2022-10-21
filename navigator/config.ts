import { firebase } from "@react-native-firebase/auth";

 const firebaseConfig= {
    
        apiKey: 'AIzaSyAmSO1DWXff74UxktSIwz8ccrsvW2cEYEU',
        authDomain: 'typescriptproject-41c88.firebaseapp.com',
        projectId: 'typescriptproject-41c88',
        storageBucket: 'typescriptproject-41c88.appspot.com',
        messagingSenderId: '103150305693',
        appId: '1:103150305693:ios:24b57180c0dc4dacc52f74'
    
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export {firebase}