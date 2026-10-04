export type Department =
  | "Engineering"
  | "Design"
  | "Marketing"
  | "Human Resources"
  | "Finance";

export type Role = string;

export type SearchField = "all" | "name" | "role" | "department" | "email";

export interface Employee {
  id: number;
  name: string;
  muid?: string;
  role: Role;
  department: Department;
  email: string;
  phone?: string;
}

export interface SearchOptions {
  query: string;
  field: SearchField;
  department?: Department | "All";
}
