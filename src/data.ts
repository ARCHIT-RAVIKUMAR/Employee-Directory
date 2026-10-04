import type { Department, Employee } from "./types.js";

export const departments: readonly Department[] = [
  "Engineering",
  "Design",
  "Marketing",
  "Human Resources",
  "Finance",
];

export const employees: Employee[] = [
  {
    id: 1,
    name: "ARCHIT RAVIKUMAR",
    muid: "architravikumar@mulearn",
    role: "Software Engineering Intern",
    department: "Engineering",
    email: "archit@gmail.com",
  },
  { id: 2, name: "Aarav", role: "Frontend Developer", department: "Engineering", email: "aarav@gmail.com", phone: "+91 98765 43210" },
  { id: 3, name: "Priya", role: "Product Designer", department: "Design", email: "priya@gmail.com" },
  { id: 4, name: "Karthik", role: "Backend Developer", department: "Engineering", email: "karthik@gmail.com" },
  { id: 5, name: "Meera", role: "Marketing Lead", department: "Marketing", email: "meera@gmail.com", phone: "+91 91234 56780" },
  { id: 6, name: "Rohan", role: "HR Manager", department: "Human Resources", email: "rohan@gmail.com" },
  { id: 7, name: "Ananya", role: "Financial Analyst", department: "Finance", email: "ananya@gmail.com" },
  { id: 8, name: "Vikram", role: "UX Researcher", department: "Design", email: "vikram@gmail.com" },
];
