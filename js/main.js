var userOne=[];
		axios.get("https://jsonplaceholder.typicode.com/users").then(function(response)
		users = response.data;
	let showData="";
	
	for(var i=0; i < userOne.length ; i++){
		showData = showData + "<tr><td>"+users[i].name+"</td> <td>"+users[i].username +"</td><td>"+users[i].email +"</td> </tr>"
		
	
	
	}
	
	document.getElementById("tabBody").innerHTML= showData;
	
