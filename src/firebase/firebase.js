import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database
//   .ref('expenses')
//   .once('value')
//   .then(snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// //-------child_removed
// database.ref('expenses').on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// //-------child_changed
// database.ref('expenses').on('child_changed', snapshot => {
//   console.log('id', snapshot.key);
//   console.log('expense', snapshot.val());
// });

// // database.ref('expenses').on('value', snapshot => {
// //   const expenses = [];
// //   snapshot.forEach(childSnapshot => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });
// //   console.log(expenses);
// // });

// // database.ref('expenses').push({
// //   description: 'Food',
// //   amount: 24000,
// //   note: '',
// //   cretedAt: 0
// // });

// // database.ref('notes').push({
// //   title: 'second note!',
// //   body: 'This is my note.'
// // });

// // const firebaseNotes = {
// //   notes: {
// //     ahjkhajkdhs: {
// //       title: 'First note!',
// //       body: 'This is my note'
// //     },
// //     ljdasjlsk: {
// //       title: 'Second note!',
// //       body: 'This is my note'
// //     }
// //   }
// // };

// // database
// //     .ref()
// //     .set({
// //         name: 'Messi',
// //         age: 31,
// //         job: 'Software developer',
// //         location: {
// //             city: 'Rosario',
// //             Ccountry: 'Argentina'
// //         }
// //     })
// //     .then(() => {
// //         console.log('Data is saved');
// //     })
// //     .catch(e => {
// //         console.log('This failed', e);
// //     });

// //  database.ref('isSingle').remove()
// //     .then(() => {
// //         console.log('Syncronization is finished');
// //     })
// //     .catch((e) => {
// //         console.log('Synchronization failed', e);
// //     });

// //  Update only at the root level
// // database.ref().update({
// //     job: 'Manager',
// //     'location/city': 'Bosto'
// // });

// // database
// //     .ref()
// //     .once('value')
// //     .then(snapshot => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     })
// //     .catch(e => {
// //         console.log('Error fetching data', e);
// //     });

// // const onValueChange = database.ref().on(
// //   'value',
// //   snapshot => {
// //     console.log(snapshot.val());
// //   },
// //   e => {
// //     console.log('Unable to fetch data', e);
// //   }
// // );

// // setTimeout(() => {
// //   database.ref().off(onValueChange);
// // }, 3500);
