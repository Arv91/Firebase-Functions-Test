var functions = require('firebase-functions');

exports.updateHtml = functions.database.ref('/counter')
  .onWrite(event => {
    var eventSnapshot = event.data;
	var userDataSnapshot = eventSnapshot.child('userdata');

    if (userDataSnapshot.changed()) {
      return eventSnapshot.ref.update({ updateddata : userDataSnapshot.val()});
    }
});