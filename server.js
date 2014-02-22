var sys = require("sys"),
	http = require("http"),
	RaspiCam = require("raspicam"),
	fs = require("fs"),
	url = require("url");

http.createServer(function(request, response) {

	//sys.puts(sys.inspect(request));
	sys.puts("URL request: "+request.url);

	var pos = -1,
		r_url = request.url,
		r_url_params = url.parse(r_url, true).query;
	//console.log(r_url_params);

	pos = r_url.indexOf('?');
	if(pos > 0) {
		r_url = r_url.substring(0, pos); 
	}
	//console.log(url);

	response.writeHead(200, {
		"Content-Type": "text/html"
	});

	switch(r_url){
		
		case "/":

			response.end("home");

		break;

		case "/grab":

			var camera = new RaspiCam({
				mode: "photo",
				output: "files/%d.jpg",
				encoding: "jpg",
				timelapse: 1000,
				//timeout: 4000,
				timeout: 1000,
				quality: 100,
				encoding: 'jpg',
				width: 2592,
				height: 1944
				//width: 1024,
				//height: 768
			});			
			var readed = false,
				group;

			camera.on("start", function(){ 
				console.log('camera.started()');

				fs.readFile('app/storage/settings.json', function read(err, data) {

					if(err) throw err;
					
					var content = JSON.parse(data);
					group = content.group + 1;

					console.log('Next group ID: '+group);
				});
			});
			camera.on("stop", function(){ 
				console.log('camera.stop()');
			});

			camera.on("read", function(err, filename){ 
			    //console.log('camera.read() '+filename);
			    readed = true;
			});

			//listen for the process to exit when the timeout has been reached
			camera.on("exit", function(){
			    console.log('camera.exited()');

			    if(readed) {

				    fs.rename("files/1.jpg", "public/files/"+group+"-1.jpg", function() {
						//fs.rename("files/2.jpg", "public/files/"+group+"-2.jpg", function() {
							//fs.rename("files/3.jpg", "public/files/"+group+"-3.jpg", function() {
						    	//fs.rename("files/4.jpg", "public/files/"+group+"-4.jpg", function() {
									
									console.log('Files renamed.');

									fs.writeFile('app/storage/settings.json', JSON.stringify({group: group}), function(err) {
										if(err) {
											console.log(err);
										} else {
											console.log('Settings saved.');

											response.end(r_url_params.callback+'('+JSON.stringify({group: group})+');');
										}
									});
							    //});
						    //});	
					    //});			    	
				    });
				}
			});

			camera.start();

			/*
			setTimeout(function() {
				console.log('timeout()');
				camera.stop();
			}, 10000);
			*/

		break;

		default:
			response.end("404 not found");
		break;
	}
	
}).listen(8080);
//}).listen(9000);

sys.puts("Server running at http://192.168.0.102:8080");
//sys.puts("Server running at http://192.168.0.7:9000");
