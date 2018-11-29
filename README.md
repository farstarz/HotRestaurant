# HotRestaurant

#Frontend
- HomePage
    - Link to Tables Page
        - GET request - shoud run the updatetable function
    - Link to Reservations Page
    - link for JSON objects for reserved and waitlist arrays
        - GET requests for array JSON object
- Tables Page
    - Link to Reservation Page
    - Link to HomePage
    - link for JSON objects for reserved and waitlist arrays
        - GET requests for array JSON object
    - link to clear tables(array)
        - GET request to run clear table function
- Reservations Page
    - Link to Table Page
        - GET request - shoud run the updatetable function
    - Link to Homepage
    - Form
        - Name: name
        - PhoneNumber: Phone
        - Email: email
        - Unique ID: uniqueID
        - submit button: submitBtn
    - link for JSON objects for reserved and waitlist arrays
        - GET requests for array JSON object

#Backend
- setup express
- setup routing using express
- Constructor function for reservation objects
- One list for waitlist and reserved tables
- Reserve Function
    - add the form data to the array using post request 
- update table function
    - repopulate the tables on the table pages with the current data in array.
- API Reservedtable function
    - display the JSON objects in the array first 5 elements
- API Waitlisttable function
    - display the JSON objects in the array except first 5 elements
- API clear table fuction
    - should clear the array
    - run update table function





- Table Page
    - Get request to display the information form the arrays on the screen
    - return JSON for reservation array, waitlist array
    - clear Table will clear the reservation array and waitlist array
- Reservation Page
    - POST request to add the form data to the arrays
    - add to reserved till the total count is 5
    - add to waitlist array if the total count is more than 5
- deploy the project to heroku

