# hacktiv8-finalproject
Final Project

#### 1. Clone Git
```sh
git clone https://github.com/penggunakreatif/hacktiv8-finalproject.git
```

#### 2. Rename file `.env.example` to `.env`

#### 3. NPM
```
npm install
```


#### 4. Run Project
```
node index.js
```
or
```
nodemon index.js
```

## How to Use
Open your Postman (HTTPClient)

#### Register new account
```
POST http://localhost:3000/register
```

Set your Parameter
```
{
"username" : "YOUR_USERNAME",
"email" : "YOUR_EMAIL",
"password" : "YOUR_PASSWORD"
}
```


RESPONSE
```
{
    "message": "Create Success!",
    "data": {
        "id": 3,
        "username": "pengguna.kreatif",
        "email": "pengguna.kreatif@gmail.com",
        "password": "password123"
    }
}
```

#### Login
```
POST http://localhost:3000/login
```

Set your Parameter
```
{
"email" : "YOUR_EMAIL",
"password" : "YOUR_PASSWORD"
}
```

RESPONSE
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJwZW5nZ3VuYS5rcmVhdGlmIiwiZW1haWwiOiJwZW5nZ3VuYS5rcmVhdGlmQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoicGFzc3dvcmQxMjMiLCJpYXQiOjE2NzM0MjM0ODF9.Wvi-8WsxpgoKkeBB_i2LAwLyOtCf42gz66Z9AbfeDMo"
}
```


#### Create Notes 
```
POST localhost:3000/notes
```

Please set Parameter Header `x-access-token`
```
x-access-token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJwZW5nZ3VuYS5rcmVhdGlmIiwiZW1haWwiOiJwZW5nZ3VuYS5rcmVhdGlmQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoicGFzc3dvcmQxMjMiLCJpYXQiOjE2NzM0MjM0ODF9.Wvi-8WsxpgoKkeBB_i2LAwLyOtCf42gz66Z9AbfeDMo"
```

RESPONSE 
![alt text](https://github.com/penggunakreatif/hacktiv8-finalproject/blob/main/image/create-note.png?raw=true)



#### Get Notes by ID 
```
POST localhost:3000/notes/:id
```
Set Parameter Header `x-access-token`

RESPONSE 
![alt text](https://github.com/penggunakreatif/hacktiv8-finalproject/blob/main/image/view-note.png?raw=true)


#### Update Notes by ID 
```
PUT localhost:3000/notes/:id
```
Set Parameter Header `x-access-token`

PARAM 
```
{
    "name"  : "List 4",
    "description" : "Final Project"
}
```


RESPONSE 
![alt text](https://github.com/penggunakreatif/hacktiv8-finalproject/blob/main/image/update-note.png?raw=true)


#### DELETE Notes by ID 
```
DELETE localhost:3000/notes/:id
```
Set Parameter Header `x-access-token`


RESPONSE 
![alt text](https://github.com/penggunakreatif/hacktiv8-finalproject/blob/main/image/delete-note.png?raw=true)

#### GET NOTES BY USER
```
GET localhost:3000/notes/byUser
```
Set Parameter Header `x-access-token`


RESPONSE 
![alt text](https://github.com/penggunakreatif/hacktiv8-finalproject/blob/main/image/note-byuser.png?raw=true)



