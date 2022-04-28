# API Endpoint Documentation

This document outlines the API endpoints exposed by the IronTherapy backend.

# Goals

## Get all Goals for Current User

Get the goals of the currently Authenticated User.

**URL** : `/goals`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

```json
[
{
  "uid": "1234",
  "exercise": "Farmer's Walk",
  "target": 210,
  "current": 100
},
{
  "uid": "1234",
  "exercise": "Pull up",
  "target": 65,
  "current": 50
},
]
```

## Notes

- If the User does not have any `Goal` instance when requested then nothing will be returned.

# Specific goal

## Get a specific goal for Current User 

Get the goal of the currently Authenticated User denoted by the exercise name.

**URL** : `/goals/:exercise`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

```json
{
  "uid": "1234",
  "exercise": "Farmer's Walk",
  "target": 210,
  "current": 100
}
```

## Notes

- If the goal isn't found then a 404 is returned


# Goal exists

## Check to see if a given goal exists

Check to see if a goal of the currently Authenticated User denoted by the exercise name exists.

**URL** : `/goals/exists/:exercise`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

```json
{
  true
}
```

## Notes

None

# Add goal

## Add a new goal if it doesn't exist within the user

Add a new goal for a given user if a goal with the same exercise doesn't exist.

**URL** : `/goals`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : None

## Success Response

**Code** : `201 Created`

**Content examples**

```json
{
  message: "Goal created"
}
```

## Notes

- Returns a 409 if the goal already exists

# Goal exists

## Check to see if a given goal exists

Check to see if a goal of the currently Authenticated User denoted by the exercise name exists.

**URL** : `/goals/exists/:exercise`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

```json
{
  true
}
```

## Notes

None

# Add goal

## Add a new goal if it doesn't exist within the user

Add a new goal for a given user if a goal with the same exercise doesn't exist.

**URL** : `/goals`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : None

## Success Response

**Code** : `201 Created`

**Content examples**

```json
{
  message: "Goal created"
}
```

## Notes

- Returns a 409 if the goal already exists


# Update goal

## Updates the weight values of the goal

Updates the target and current values of the goal

**URL** : `/goals/:exercise`

**Method** : `PUT`

**Auth required** : YES

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

```json
{
  message: "Goal updated"
}
```

## Notes

- Returns same thing even if the data is the same

# Delete goal

## Deletes a given goal

Deletes a specific goal of a used based on exercise.

**URL** : `/goals/:exercise`

**Method** : `DELETE`

**Auth required** : YES

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

```json
{
  message: "Goal deleted"
}
```

## Notes

- Returns 500 if delete on a goal that doesn't exist

# Default

## Check and assign default goals

Make default goals endpoint here that checks to see if they have any goals for the exercise, if not, make the three default goals. Returns all the goals of the user.


**URL** : `/goals/default`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

```json
[
{
  "uid": "dghju94289jh8re",
  "exercise": "Bench Press",
  "target": 150,
  "current": 0
},
{
  "uid": "dghju94289jh8re",
  "exercise": "Squat",
  "target": 150,
  "current": 0
},{
  "uid": "dghju94289jh8re",
  "exercise": "Deadlift",
  "target": 150,
  "current": 0
},
]
```

## Notes

- If the user has any goals when this is called no new goals are added but all the users goals are still returned
