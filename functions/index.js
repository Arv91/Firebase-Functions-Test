var functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello from Firebase!");
// })


exports.updateHtml = functions.database.ref('/counter')
  .onWrite(event => {
    var eventSnapshot = event.data;
    //functions.database.ref().update({ "something" : eventSnapshot.val() });
    //var counterSnapshot = eventSnapshot;
    // if (eventSnapshot.changed()) {
    //   return eventSnapshot.val();
    // }
	var userDataSnapshot = eventSnapshot.child('userdata');
    //var updateUserDataSnapshot = eventSnapshot.child('something');
    if (userDataSnapshot.changed()) {
      return eventSnapshot.ref.update({ updateddata : userDataSnapshot.val()});
    }
});