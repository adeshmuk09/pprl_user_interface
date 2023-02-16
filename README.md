# pprl_user_interface

The project is to create an user-interface  which will allow user to perform pre-processing data for PPRL (privacy-preserving record linkage) from a CSv file.
The application that performs the pre-processing steps "Transformer Service" is provided at:

https://hub.docker.com/r/mds4ul/pprl-transform


We created an interface whose working is explained in below steps:

1. Run the website
2. Upload a csv file
3. Click on Data-processsing button
4. You will see a text while in which preprocessing steps such as special character filtering and normalizaion is done. 

First install docker in Windows
Connect the image file provided to he docker. 


Download webstorm which is and integrates development environment for coding in javascript and HTM,css, etc

Download the files provided in the repository
index.html -- The file is used to cretae an user interface
logo.png-- the image is used to add pictures to the main page
style.css--it is used to edit and style the main front end page, to adjust the text postion, size, padding, etc
script.js - to run the preprocessing task in back-end and display the output text file


After installing the webstorm,

1. Create a folder naming assets where you have to upload a logo.png file
2. Create a css folder and upload a style.css file
3. Create a js folder and upload script.jss

Run the index. html file and you will be forwarded to the test website
http://localhost:63342/untitled/index.html?_ijt=bnqmhvc9rho87nkhsbb4akjek3

Upload your csv file and you can see your pre-processed data
