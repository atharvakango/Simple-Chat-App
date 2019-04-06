var rootref = firebase.database().ref().child("messages");

rootref.on("child_added",snap=>{
	var nm = snap.child("name").val();
	var txt = snap.child("text").val();
	var photo = snap.child("photoUrl").val();
	$("#table_body").append('<tr><td>'+nm+"</td><td>" +txt+'</td><td><img src = "' + photo + '" alt="No image here" style=" width: 200px;height: 300px;"></td></tr>');
});