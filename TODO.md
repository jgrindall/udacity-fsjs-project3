Having the product list as the "main" page is a great start for your users.

Create the TypeScript model for products in the app.

Generate the service(s). Which service(s) make the most sense?

Fetch data from the API (or included data.json file) and render products in your product list.

Create routing between components.

Ensure that inputs are validated in the client.

For example, your checkout form needs to collect information from the user in order for them to complete the checkout process.

How do you ensure that you are collecting accurate information from the user?

Your README must contain:

- A brief description of your application, including key features and functionalities

- Instruction to start the project, including any scripts or dependencies the user should know


Rubric
======

When the reviewer starts your application, they must be able to

	- view a list of products, add them to a shopping cart

	- adjust quantities

	- and complete the checkout process by submitting a form, bringing them to an order confirmation page.

Code is free from syntax errors and follows the Udacity Frontend Nanodegree Style Guide

The experience and flow of the application resemble that of a typical e-commerce application, including:

- cart shows total cost

- Input forms are validated

- Feedback is given to the user when the cart is modified

- The details page for a product shows a photo, name, the price, and the description.

- Products can be removed from the cart

- An order confirmation page (e.g. a “success” page) is shown to the user after successful checkout


Components
====

- Use *ngFor

- Collect input from the user using controlled form elements and Angular events

- ngModel is used on the element to bind a form control to a data property.

- ngModelChange is used to listen to any ngModel changes (i.e., rather than change).

- Use Angular event bindings

- The application listens for and responds to user actions (e.g., click) using Angular event bindings.

- Create and use custom TypeScript models

- Individual properties of the model are appropriately typed (e.g., url: string).


Data Flow
====

- Use decorators to pass data between parent and child components

- When information needs to be shared between parent and child components, the application uses the @Input decorator.

- Conversely, when sending data from a child component to its parent component, the application uses the @Output decorator and EventEmitter class.

- Use a service to pass data between sibling components

- Cart data is shared between the product list component and the shopping cart component.

- As such, a service is used to facilitate passing data between said components.


Routing
====

- Use Angular routing in templates. <router-outlet> and routerLink. Use an AppRoutingModule


Suggestions to Make Your Project Stand Out!
====

- Enable a signup/login flow using Auth0.

- Incorporate the back end built in the second course of this Nanodegree program to persist data.

- Apply your own styling to the application.

- Show an item amount “badge” next to the link for your shopping cart.

- Additionally, show the properly-calculated cart total in the cart.

- When no items are in the cart, indicate that the cart is empty.



