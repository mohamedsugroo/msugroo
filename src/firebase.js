import firebase from 'firebase/app';
import 'firebase/database';

const app =  firebase.initializeApp({

});

export const db = app.database();
export const reviewRef = db.ref().child('reviews');

let data;
reviewRef.on('value', snap => {
    data = snap.val();
    console.log(snap.val())
})

export const reviewData = reviewData;