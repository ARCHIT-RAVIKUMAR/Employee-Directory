import { departments, employees } from "./data.js";
import { renderEmployees } from "./render.js";
import { searchEmployees } from "./search.js";
function byId(id) {
    const el = document.getElementById(id);
    if (!el)
        throw new Error(`#${id} is missing from index.html`);
    return el;
}
const tbody = byId("rows");
const searchBox = byId("search");
const fieldPicker = byId("field");
const deptPicker = byId("department");
const count = byId("count");
for (const d of departments) {
    deptPicker.add(new Option(d, d));
}
function refresh() {
    const found = searchEmployees(employees, {
        query: searchBox.value,
        field: fieldPicker.value,
        department: deptPicker.value,
    });
    renderEmployees(tbody, found);
    if (found.length === 0) {
        count.textContent = "Nobody matches that. Check the spelling or change the filters.";
    }
    else if (found.length === employees.length) {
        count.textContent = `${employees.length} people`;
    }
    else {
        count.textContent = `${found.length} of ${employees.length} people`;
    }
}
searchBox.addEventListener("input", refresh);
fieldPicker.addEventListener("change", refresh);
deptPicker.addEventListener("change", refresh);
refresh();
