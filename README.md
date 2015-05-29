photobooth
==========

Raspberry Pi photobooth

# Requirements

- Raspberry pi
	- Raspberri camera
	- Apache
	- PHP
		- Composer
		- Laravel 4
	- NodeJS
		- Bower
			- Bootstrap
			- jQuery
		- Raspicam
- Router
- Mobile phone or tablet

# Installation

- Clone this repo on your raspberry pi

    $ git clone git@github.com:FR6/photobooth.git

- Install Node modules
	
    $ npm install raspicam

- Install Laravel packages

    $ composer install

- Install Bower components

- mkdir public/files
- nano app/storage/settings.json

	{"group":0}

# Configure

- Set static IP to your raspberry pi

# Usage

- Connect raspberry pi to router with RJ45 cable
- Connect mobile or tablet to router by Wifi
- Connect to your raspberry pi with a SSH application on your mobile or tablet
- Start node server

	$ node /var/www/photoboot/server.js

- In your mobile or tablet browser go to 

	http://<static ip>:8080/photoboot

- Take pictures pressing button...
