```javascript
// File: 02_basics/04_objects.js
// Purpose: Practice object destructuring and JSON API introduction

// Object Destructuring
const course = {
  courseName: "JS in Hindi",
  price: "999",
  courseInstructor: "Hitesh"
};

// Without Destructuring
console.log(course.courseInstructor); // Output: "Hitesh"

// With Destructuring
const { courseInstructor } = course;
console.log(courseInstructor); // Output: "Hitesh"

// With Alias
const { courseInstructor: instructor } = course;
console.log(instructor); // Output: "Hitesh"

// Simulated JSON API Response (Object)
const githubUser = {
  "login": "so3",
  "id": 123,
  "public_repos": 10,
  "created_at": "2020-01-01T00:00:00Z"
};
console.log(githubUser.login); // Output: "so3"

// Simulated JSON API Response (Array of Objects)
const randomUsers = {
  "results": [
    {
      "name": {
        "first": "John",
        "last": "Doe"
      },
      "email": "john.doe@example.com"
    },
    {
      "name": {
        "first": "Jane",
        "last": "Smith"
      },
      "email": "jane.smith@example.com"
    }
  ],
  "info": {
    "seed": "abc123",
    "results": 2
  }
};
console.log(randomUsers.results[0].name.first); // Output: "John"

// Reference: MDN for Destructuring and JSON
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
```