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

For a User with UID 1234, an exercise goal with name "Farmer's Walk", a target weight of 210 lbs, and a current max weight of 100 lbs.

```json
{
  "uid": "1234",
  "exercise": "Farmer's Walk",
  "target": 210,
  "current": 100
}
```

## Notes

- If the User does not have any `Goal` instance when requested then nothing will be returned.
