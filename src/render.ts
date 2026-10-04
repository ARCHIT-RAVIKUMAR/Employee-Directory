import type { Employee } from "./types.js";

function cell(text: string, className?: string): HTMLTableCellElement {
  const td = document.createElement("td");
  td.textContent = text;
  if (className) td.className = className;
  return td;
}

function makeRow(e: Employee): HTMLTableRowElement {
  const tr = document.createElement("tr");

  const name = cell(e.name, "name");
  if (e.muid !== undefined) {
    const small = document.createElement("small");
    small.textContent = e.muid;
    name.append(small);
  }
  const role = cell(e.role, "role");
  const dept = cell(e.department, "dept");

  const mail = document.createElement("td");
  mail.className = "mail";
  const link = document.createElement("a");
  link.href = `mailto:${e.email}`;
  link.textContent = e.email;
  mail.append(link);

  tr.append(name, role, dept, mail);
  return tr;
}

export function renderEmployees(body: HTMLElement, list: readonly Employee[]): void {
  body.replaceChildren(...list.map(makeRow));
}
