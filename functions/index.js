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
	var profilePictureSnapshot2 = eventSnapshot.child('something2');
    var profilePictureSnapshot = eventSnapshot.child('something');
    if (profilePictureSnapshot2.changed()) {
      return profilePictureSnapshot.ref.update({ something : profilePictureSnapshot2.val() + 1 });
    }
});