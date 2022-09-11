
First of all I would like to thank "Keywordio" for this valuable opportunity.


This file will give you a summary you of my project setup and the steps taken by to reach the culmination,the other file my_experience.txt talks about the challenges i faced with this assignment and the vision i have for it.


------------------Setup and Summary---------------------------------



-------------I begun with the Backend(django framework)

+++Started of by creating a virtual python env called "prj" and installed django on it.

+++ created django project called "library"

+++created a django App called "books"

+++ developed the models,serializer and viewset for 'user'

+++ As per the assignment had to connect MYSQL database to django,downloaded and installed Mysql database and made it run on localhost(http://127.0.0.1:8000/)

+++ Created a user and database and granted the user all the permission required by the database, and then configured the django settings.py to connect to mysql.

+++ created models,serializer and APIviewset for 'books',for custom GET,POST,PUT and DELETE handle function. (http://127.0.0.1:8000/library/books/)

+++ Used postman to check if all Http request and response meet my expectation,and are working accurately

+++ also created "token" authentication for user that generates a token when user is created and is returned when 'http://127.0.0.1:8000/library/users/' method=POST from the frontend(installed rest_framework for generating tokens)

+++That was the end of the Backend


------------------- now started with the Frontend(reactjs)

+++ Started of by creating a react project using CLi called 'frontendapp'


+++ later on created the front end portion of the website for login and sign up that log's in the user and also registers then and collects the token returned during login.

+++ then created the frontend portion to perform CRUD restful Api requests on Books
where i show the list of Books with using Get all request by providing a refresh/load Books button. it shows you the list of all books in a dynamic form input field format.

+++ The Form input field (each Book is represented by Form)is dynamically generated with a smart Edit and delete button so u can edit and delete the book while looking at them.and then u can click Refresh/load Books button for the refreshing Books that u can view.
the edit and delte button make use of(PUT and DELETE book requests)


+++ In the end i created the insert Form field at the bottom of the webpage for iserting the the books nto the table(using POST method request)

+++ at the end the created authentication token on the backend  was partially used in the front end, due to insufficient time. but almost all of the requirements from the assignment was fulfilled  .

-----------------
 

