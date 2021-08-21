import firebase from 'firebase'
import 'firebase/firestore'

let firebaseConfig = {
	apiKey: "AIzaSyB3gA4nY1QkLEdmRnUdYtQpSvxDwLODF78",
	authDomain: "petping-c03ea.firebaseapp.com",
	databaseURL: "https://petping-c03ea.firebaseio.com",
	projectId: "petping-c03ea",
	storageBucket: "petping-c03ea.appspot.com",
	messagingSenderId: "599382513060",
	appId: "1:599382513060:web:87d051ebd7fb1293735d31",
	measurementId: "G-44N08KR5WX"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();