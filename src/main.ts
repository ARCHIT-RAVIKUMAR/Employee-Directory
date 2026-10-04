import { departments, employees } from "./data.js";
import { renderEmployees } from "./render.js";
import { searchEmployees } from "./search.js";
import type { Department, SearchField } from "./types.js";

function byId<T extends HTMLElement>(id: string): T {
  const el = document.getElementById(id);
  if (!el) throw new Error(`#${id} is missing from index.html`);
  return el as T;
}

const tbody = byId<HTMLTableSectionElement>("rows");
const searchBox = byId<HTMLInputElement>("search");
const fieldPicker = byId<HTMLSelectElement>("field");
const deptPicker = byId<HTMLSelectElement>("department");
const count = byId<HTMLParagraphElement>("count");

for (const d of departments) {
  deptPicker.add(new Option(d, d));
}

function refresh(): void {
  const found = searchEmployees(employees, {
    query: searchBox.value,
    field: fieldPicker.value as SearchField,
    department: deptPicker.value as Department | "All",
  });

  renderEmployees(tbody, found);

  if (found.length === 0) {
    count.textContent = "Nobody matches that. Check the spelling or change the filters.";
  } else if (found.length === employees.length) {
    count.textContent = `${employees.length} people`;
  } else {
    count.textContent = `${found.length} of ${employees.length} people`;
  }
}

searchBox.addEventListener("input", refresh);
fieldPicker.addEventListener("change", refresh);
deptPicker.addEventListener("change", refresh);
refresh();
