module.exports = {
	write: function(thisusername,thispass,thistype)
	{
		const csv = require('csv-parser');
		const fs = require('fs');
		const path = require("path");
		const data = fs.readFileSync(path.join(__dirname,"/stuff.json"));
		var users = JSON.parse(data);
		
		for(var i = 0; i< users.users.length;i++)
		{
			if(users.users[i].username == thisusername)
				return false;			
		}
		users.users.push({username: thisusername, password:thispass, type:thistype}); //add some data
		json = JSON.stringify(users); //convert it back to json
		fs.writeFile('./scripts/stuff.json', json, 'utf8', function(err){ if(err) throw err;}); // write it back
		return true;
		
		
	}
}

