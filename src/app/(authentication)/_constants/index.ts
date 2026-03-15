export const protectedRoutes = [
  "/dashboard",
  "/profile",
  "/settings",
  "/groups",
  "/school",
  "/assignments",
  "/assignments/homework",
  "/assignments/exams",
];

export const publicRoutes = ["/login", "/signup"];

export const testUsers = [
  {
    id: "1",
    identifier: "student",
    password: "123456",
    name: "student",
    role: "student"
  },
  {
    id: "2",
    identifier: "teacher",
    password: "123456",
    name: "teacher",
    role: "teacher",
  },
  {
    id: "3",
    identifier: "abdulaziz",
    password: "abdulaziz123456",
    name: "abdulaziz",
    role: "teacher",
  },
];
