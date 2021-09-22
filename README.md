# Notes

- I have included a nodejs server based on the previous project in this nanodegree.

- For simplicity, it does not use a database

  - The products list is hard coded
  
  - There is only one user. The username is "username" and the password is "udac1ty".
  
  - In the angular log in form I have prepopulated these fields so you don't have to type them in
  
  - The users shopping cart is held in memory.
  
- The folder 'client' contains the angular app.

- The folder 'server' contains the nodejs app.

- The folder 'lib' contains some types such as "Product" which are shared between the two

- any api calls to the 'cart' are protected by a JWT.

- The users's cart is held in local storage if they are not logged in.

- Once they log in it will be synced with the server.

- Users can edit their cart and then log in when they want to checkout

- Or they can log in first and edit their cart.

- For simplicity the checkout input fields are all validated with minlength=3, maxlength=32 regardless of what they are for.

- The UI is based on material design.

- A video shows the basic functionality.

[![Watch the video]](shop.mp4)

----



# Building and running

- Build the lib:

	- "cd lib"
	- "npm run build"
	
	
- Build and start the server:

	- "cd server"
	- "npm i"
	- "npm run build"
	- "npm run prod"
	
	
- Run the angular app

	 - "cd client"
	 - "ng serve"
	 
	 

