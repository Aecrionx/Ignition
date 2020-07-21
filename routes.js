const url = require('url');
let reader = require('./scripts/file_reader');
let writer = require('./scripts/file_writer');

let fs = require('fs');
const qs = require('querystring');

html = {
    render(path, response) {
        fs.readFile(path, null, function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write('file not found');
            } else {
                response.write(data);
            }
            response.end('ok');
        });
    }
}
 
module.exports = {
    handleRequest(request, response) {
        
		if (request.method === 'POST')
		{
			var payload = '';
			
			request.on('data', function (data) {
				payload = JSON.parse(data);
			

				if (payload.length > 1e6)
					request.connection.destroy();
					return;
			});

			request.on('end', function () {
				
				
				let path = url.parse(request.url).path;
	
				switch (path) {
					
					case '/login':
						var bool = reader.read(payload.username,payload.password) 
						if(bool.bool==false)
						{
							response.writeHead(403);
							response.write('Route not found');
							response.end();					
						}
						else
						{
							if(bool.type == "business"){
								response.writeHead(202);
								response.end();
							}
							else if(bool.type == "driver")
								response.end("ok");
							else
							{
								response.writeHead(403);
								response.end();
							}
						}
						break;
					case '/sign_up':
						var bool = writer.write(payload.username,payload.password,payload.type) 
	
						if(bool == true)
							if(payload.type=="driver")
								response.end("ok");
							else
							{
								response.writeHead(202);
								response.end();
							}
						else
							response.writeHead(403);
							response.end();
						
						break;
					default:
						response.writeHead(404);
						response.write('Route not found');
						response.end();
					
				}

			});
			

		}
		else
		{
			response.writeHead(200, {
				'Content-Type': 'text/html'
			});
	 
			let path = url.parse(request.url).pathname;
	 
			switch (path) {
				case '/':
					html.render('./index.html', response);
					break;
				case '/business_list.html':
					html.render('./business_list.html', response);
					break;
				case '/login':
					html.render('./login.html', response);
					break;
				case '/driver_list.html':
					html.render('./driver_list.html', response);
					break;
				case '/home':
					html.render('./login.html', response);
					break;	
				case '/business':
					html.render('./business_list.html', response);
					break;
				case '/driver':
					html.render('./driver_list.html', response);
					break;							
				default:
					response.writeHead(404);
					response.write('Route not found');
					response.end();
			}
		}
    }
}
