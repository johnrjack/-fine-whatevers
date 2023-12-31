# Fine Whatever

#### Team:

* Chase Whitaker
* John Jackson
* Daniel Mitchell
* Heather DePesa
* Peter Trinh

## Intended Audience

Fine Whatever is a web application that allows user to appreciate other user's arts locally and globally. By being a user, you can show your appreication to other user's art by liking their art, or you can post your own art to show-off to other user.

## Project Diagram

![image](/uploads/57edde9c9d2ced6a26ea048ee367be3e/image.png)

## Getting Started

#### Cloning Repository

Please have Docker downloaded before continuing with the following steps:
1. In the terminal, change the directory that the project will be clone in
2. In the terminal, type https://gitlab.com/im-fine-with-whatever/fine-whatevers
3. Switch to the directory

**Running Docker**
```
docker volume create fwvolume
docker-compose build
docker-compose up
```

**Note**

If encounter a warning about missing environment variable named OS and macOS, it can be safely ingored

## Functionality

* Users can create an account and log into the account
  * The user can make changes to their account by either updating or deleting the account
* The login user can create an art
  * The user can make changes to their art by either updating or deleteing the art
* Other user is able to like that user's art
  * The other user that liked the art, will store their liked arts under their account

## API Overview

#### Account

| Method | Action             | URL                                |
|  ----- | ------------------ | ---------------------------------- |
| POST |  Create an Account  | http://localhost:8000/accounts |
| PUT | Update Account | http://localhost:8000/accounts/{user_id} |
| GET | Get Account Detail | http://localhost:8000/accounts/{user_id} |
| DEL | Delete Account | http://localhost:8000/accounts/{user_id} |

 <details>
<summary><strong>Create Account</strong></summary>
<br>

#### Input:
```
{
    "username": "string",
    "password": "string",
    "email": "string",
    "user_pic_url": "string",
    "bio": "string",
    "zipcode": 0
}
```
#### Ouput:
```
{
    "access_token": "string",
    "token_type": "Bearer",
    "account": {
      "id": 0,
      "username": "string",
      "email": "string",
      "user_pic_url": "string",
      "bio": "string",
      "zipcode": 0
  }
}
```

</details>

 <details>
<summary><strong>Update Account</strong></summary>
<br>

#### Input:
```
{
    "username": "string",
    "email": "string",
    "user_pic_url": "string",
    "bio": "string",
    "zipcode": "string"
}
```
#### Ouput:
```
{
    "id": 0,
    "username": "string",
    "email": "string",
    "user_pic_url": "string",
    "bio": "string",
    "zipcode": 0
}
```

</details>

</details>

<details>
<summary><strong>Account Detail</strong></summary>
<br>

```
{
	"id": 0,
  "username": "string",
  "email": "string",
  "user_pic_url": "string",
  "bio": "string",
  "zipcode": 0
}
```

</details>

<details>
<summary><strong>Delete Account</strong></summary>
<br>

```
{
	true
}
```

</details>

#### Art

| Method | Action             | URL                                |
|  ----- | ------------------ | ---------------------------------- |
| POST | Create an Art | http://localhost:8000/arts |
| PUT | Update Art | http://localhost:8000/arts/{art_id}/update |
| GET | List of Arts | http://localhost:8000/arts |
| GET | Art Detail | http://localhost:8000/arts/{art_id} |
| DEL | Delete Art | http://localhost:8000/arts/{art_id} |

 <details>
<summary><strong>Create Art</strong></summary>
<br>

#### Input:
```
{
    "title": "string",
    "category": "string",
    "art_pic_url": "string",
    "description": "string",
    "price": 0
}
```
#### Ouput:
```
{
    "id": 0,
    "user_id": 0,
    "title": "string",
    "category": "string",
    "art_pic_url": "string",
    "description": "string",
    "price": 0
}
```

</details>

 <details>
<summary><strong>Update Art</strong></summary>
<br>

#### Input:
```
{
    "title": "string",
    "category": "string",
    "art_pic_url": "string",
    "description": "string",
    "price": 0

}
```
#### Ouput:
```
{
    "id": 0,
    "user_id": 0,
    "title": "string",
    "category": "string",
    "art_pic_url": "string",
    "description": "string",
    "price": 0
}
```

</details>

<details>
<summary><strong>List of Arts</strong></summary>
<br>

```
[
  {
      "id": 0,
      "user_id": 0,
      "title": "string",
      "category": "string",
      "art_pic_url": "string",
      "description": "string",
      "price": 0,
      "username": "string"
  }
]
```

</details>

<details>
<summary><strong>Art Detail</strong></summary>
<br>

```
{
    "id": 0,
    "user_id": 0,
    "title": "string",
    "category": "string",
    "art_pic_url": "string",
    "description": "string",
    "price": 0,
    "username": "string"
}
```

</details>

<details>
<summary><strong>Delete Art</strong></summary>
<br>

```
{
	true
}
```

</details>

#### Likes
| Method | Action             | URL                                |
|  ----- | ------------------ | ---------------------------------- |
| POST | Create a Like | http://localhost:8000/likes |

<details>
<summary><strong>Create Like</strong></summary>
<br>

```
{
    "user_id": 0,
    "art_id": 0,
    "liked_by": 0,
    "created_at": "2023-04-26T22:25:18.105Z"
}
```

</details>
