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
  "message": "Goal created"
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
  "message": "Goal created"
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
  "message": "Goal updated"
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
  "message": "Goal deleted"
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







# Workouts

## Get all Workouts for Current User

Get the Workouts of the currently Authenticated User.

**URL** : `/workouts`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

For a User with UID 1234, we search for all workouts that is labeled with the UID and return them.

```json
[
  {
    "uid": 1234,
    "name": "Workout One",
    "date": "2/1/22",
    "exercises": [
      {
        "name": "Bench Press",
        "sets": [
            {
              "pounds": 150,
              "reps": 10
            },
            {
              "pounds": 150,
              "reps": 10
            },
            {
              "pounds": 150,
              "reps": 10
            }
        ]
      },
    {
      "name": "Overhead Squat",
      "sets": [
        {
         "pounds": 150,
         "reps": 10
        },
        {
          "pounds": 150,
          "reps": 10
        },
        {
          "pounds": 150,
          "reps": 10
        }
      ]
    },
    {
      "name": "Bicep Curl",
      "sets": [
        {
          "pounds": 150,
          "reps": 10
        },
        {
          "pounds": 150,
          "reps": 10
        },
        {
          "pounds": 150,
          "reps": 10
        }
      ]
    }
  ]
},
[
    {
        "uid": 1234,
        "name": "Workout Two",
        "date": "2/1/22",
        "exercises": [
        {
          "name": "Bench Press",
          "sets": [
            {
              "pounds": 150,
              "reps": 10
            },
            {
              "pounds": 150,
             "reps": 10
            },
            {
              "pounds": 150,
              "reps": 10
            }
          ]
        },
        {
          "name": "Overhead Squat",
          "sets": [
            {
              "pounds": 150,
              "reps": 10
            },
            {
              "pounds": 150,
              "reps": 10
            },
            {
              "pounds": 150,
              "reps": 10
            }
          ]
        },
        {
          "name": "Bicep Curl",
          "sets": [
            {
              "pounds": 150,
              "reps": 10
            },
            {
              "pounds": 150,
              "reps": 10
            },
            {
              "pounds": 150,
              "reps": 10
            }
          ]
        }
      ]
    }
  ]
]
```


## Notes
- If the User does not have any `Workouts` instance when requested then nothing will be returned.




# Workout

## Gets a specific workout for the user

Get a specific workout of the currently Authenticated User.

**URL** : `/workouts/:name`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

For a User with UID 1234, we search for a specific workout by workout name that is labeled with the UID and return them. For example if the user is looking for "Workout One" they would use this endpoint and get this result.

```json
{
  "uid": 1234,
  "name": "Workout One",
  "date": "2/1/22",
  "exercises": [{
    "name": "Bench Press",
    "sets": [{
      "pounds": 150,
      "reps": 10,
    }, {
      "pounds": 150,
      "reps": 10,
    }, {
      "pounds": 150,
      "reps": 10,
    }],
  }, {
    "name": "Overhead Squat",
    "sets": [{
      "pounds": 150,
      "reps": 10,
    }, {
      "pounds": 150,
      "reps": 10,
    }, {
      "pounds": 150,
      "reps": 10,
    }],
  }, {
    "name": "Bicep Curl",
    "sets": [{
      "pounds": 150,
      "reps": 10,
    }, {
      "pounds": 150,
      "reps": 10,
    }, {
      "pounds": 150,
      "reps": 10,
    }]
  }]
}]
}
```


## Notes
- If the User does not have the specific `Workout` instance when requested then nothing will be returned.



# Add a Set

## Adds a set to a specific exercise within a workout

Adds a set to a specific exercise from a workout of the currently Authenticated User.

**URL** : `/workouts/addSet`

**Method** : `PUT`

**Auth required** : YES

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

For a User with UID 1234, we search for the workout that we are modifying and then add onto the new set and saving that to the database.


## Notes
- If the User does not have the specific `Workout` instance when requested then nothing will be returned.



# Delete a Set

## Deletes a set to a specific exercise within a workout

Deletes a set to a specific exercise from a workout of the currently Authenticated User.

**URL** : `/workouts/deleteSet`

**Method** : `PUT`

**Auth required** : YES

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

For a User with UID 1234, we search for the workout that we are modifying and then deleting the specific set using the sets data to look it up within the workout data and saving that to the database.


```json
{
  "message": "updated exercise ${exercise_name} for ${req.user.name} (delete)`"
}
```

## Notes
- If the User does not have the specific `Workout` instance when requested then nothing will be returned.



# Add an Exercise

## Adds an Exercise to a specific workout

Adds an Exercise to a specific workout of the currently Authenticated User.

**URL** : `/workouts/addExercise`

**Method** : `PUT`

**Auth required** : YES

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

For a User with UID 1234, we search for the workout data based on their UID and the workout name within the body. We then add on to that workout data the new exercise component and save that to our database.

```json
{
  "message": "`added exercise ${exercise_name} to workout ${name}`"
}
```

## Notes
- If the User does not have the specific `Workout` instance when requested then nothing will be returned.

## Update a Workout Name

Update a Workout Name to an existing Workout of the currently Authenticated User.

**URL** : `/workout/:name`

**Method** : `PUT`

**Auth required** : YES

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

For a User with UID 1234, when they create a workout from the 
start workout page they have to change the workout name. The user changed the template name of Back Workout to Best Back Plan The old
json looks like:
```json
{
  "uid": "1234",
  "name": "Back Workout",
  "date": "4/24/22",
  "exercises": []
}
```
and after the request it looks like:
```json
{
  "uid": "1234",
  "name": "Best Back Plan",
  "date": "4/24/22",
  "exercises": []
}
```
## Notes

- Returns status code 500 if workout is not found


# Delete an Exercise

## Delete an Exercise to a specific workout

Deletes an Exercise to a specific workout of the currently Authenticated User.

**URL** : `/workouts/addExercise`

**Method** : `DELETE`

**Auth required** : YES

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

For a User with UID 1234, we search for the workout data based on their UID and the workout name within the body. We then create a new exercise array without the exercise that we want to delete and we save that to our workout data.

```json
{
  "message": "deleted exercise ${exercise} from workout ${name}"
}
```

## Notes
- If the User does not have the specific `Workout` instance when requested then nothing will be returned.
## Create a Workout

Create a Workout Entry for the currently Authenticated User.

**URL** : `/workout/:name`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

For a User with UID 1234, when they create a workout with the template name Back Workout in the url. The workout
entry is below gets created for that user.
```json
{
  "uid": "1234",
  "name": "Back Workout",
  "date": "4/24/22",
  "exercises": [{
        "name": "Pull Ups",
        "set": []
      },
      {
        "name": "Back Extension",
        "set": []
      },
      {
        "name": "Pull-down",
        "set": []
      },
      {
        "name": "Rows",
        "set": []
      },
      {
        "name": "Bent Over Row",
        "set": []
      },
      {
        "name": "Renegade Row",
        "set": []
      }]
}
```
## Notes

- If the workout does not match a template it leaves exercises blank

## Get all Exercises

Get all exercise names stored in the database,

**URL** : `/exercises`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Content examples**

For any authenticated user /exercises endpoint:

```json
[
  "Pull Ups",       "Bicep Curls",
  "Renegade Row",   "Deadlift",
  "Back Extension", "Tricep Extension",
  "Hammer Curls",   "Overhead Squat",
  "Bench Press",    "Rows",
  "Back Extension", "Bent Over Row",
  "Barbell Squat",  "Shoulder Press",
  "Farmer's Walk",  "Overhead Lunge",
  "Pull-down",      "Weighted Step Up",
  "Clean and Jerk", "Squat"
]
```

## Notes

- None

