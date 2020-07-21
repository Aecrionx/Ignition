module.exports = {
	
	read:function(thisuser,thispass)
	{
		const csv = require('csv-parser');
		const fs = require('fs');
		const path = require("path");
		const data = fs.readFileSync(path.join(__dirname,"/stuff.json"));
		const users = JSON.parse(data);
		
		var keys = Object.keys(users);
	
		
		for( var i=0; i < users.users.length;i++)
		{
			if(users[keys][i].username==thisuser && users[keys][i].password==thispass)
				return {
					bool:true,
					type:users[keys][i].type
				};
		}
		return false;
	}
}

