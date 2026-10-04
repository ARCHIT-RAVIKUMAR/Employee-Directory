import type { Employee, SearchField, SearchOptions } from "./types.js";

function textFor(e: Employee, field: SearchField): string {
  switch (field) {
    case "name":
      return `${e.name} ${e.muid ?? ""}`;
    case "role":
      return e.role;
    case "department":
      return e.department;
    case "email":
      return e.email;
    case "all":
      return `${e.name} ${e.muid ?? ""} ${e.role} ${e.department} ${e.email}`;
  }
}

export function searchEmployees(list: readonly Employee[], opts: SearchOptions): Employee[] {
  const q = opts.query.trim().toLowerCase();
  const dept = opts.department ?? "All";

  return list.filter((e) => {
    if (dept !== "All" && e.department !== dept) return false;
    return q === "" || textFor(e, opts.field).toLowerCase().includes(q);
  });
}
