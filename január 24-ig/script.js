const apiUrl = "https://vvri.pythonanywhere.com/api";
let currentType = "students"; // Alapértelmezett: tanulók

// Oldal betöltésekor frissíti a listákat
document.addEventListener("DOMContentLoaded", () => {
    updateLists();
});

// Váltás tanulók és kurzusok között
document.querySelectorAll('input[name="studentCourseChoose"]').forEach(input => {
    input.addEventListener("change", () => {
        currentType = input.id === "student" ? "students" : "courses";
        document.getElementById("workingField").style.display = "none";
    });
});

// Listák frissítése
async function updateLists() {
    const students = await getAll("students");
    const courses = await getAll("courses");

    const studentList = document.getElementById("studentList");
    const courseList = document.getElementById("courseList");

    studentList.innerHTML = students.map(student => `
        <li>${student.name}</li>
    `).join("");

    courseList.innerHTML = courses.map(course => `
        <li>${course.name}</li>
    `).join("");
}

// Új elem hozzáadása
async function addNew() {
    const workingField = document.getElementById("workingField");
    workingField.innerHTML = "";

    if (currentType === "students") {
        const courses = await getAll("courses");
        workingField.innerHTML = `
            <label for="nameInput">Tanuló neve:</label>
            <input type="text" id="nameInput">
            <label for="courseSelect">Kurzus:</label>
            <select id="courseSelect">
                ${courses.map(course => `<option value="${course.id}">${course.name}</option>`).join("")}
            </select>
            <button onclick="saveNew()">Mentés</button>
        `;
    } else {
        workingField.innerHTML = `
            <label for="nameInput">Kurzus neve:</label>
            <input type="text" id="nameInput">
            <button onclick="saveNew()">Mentés</button>
        `;
    }

    workingField.style.display = "flex";
}

// Új elem mentése
async function saveNew() {
    const name = document.getElementById("nameInput").value.trim();
    if (!name) {
        alert("Adjon meg nevet!");
        return;
    }

    const data = currentType === "students" ? {
        name: name,
        course_id: document.getElementById("courseSelect").value
    } : { name: name };

    const response = await post(data, currentType);
    if (response) {
        alert("Sikeres mentés!");
        document.getElementById("workingField").style.display = "none";
        updateLists(); // Lista frissítése
    } else {
        alert("Hiba történt a mentés során.");
    }
}

// Meglévő elem módosítása
async function modify() {
    const items = await getAll(currentType);
    const workingField = document.getElementById("workingField");
    workingField.innerHTML = "";

    if (items.length === 0) {
        alert("Nincs elérhető elem.");
        return;
    }

    workingField.innerHTML = `
        <label for="itemSelect">Válasszon elemet:</label>
        <select id="itemSelect">
            ${items.map(item => `<option value="${item.id}">${item.name}</option>`).join("")}
        </select>
        <label for="nameInput">Új név:</label>
        <input type="text" id="nameInput">
        ${currentType === "students" ? `
            <label for="courseSelect">Új kurzus:</label>
            <select id="courseSelect">
                ${(await getAll("courses")).map(course => `<option value="${course.id}">${course.name}</option>`).join("")}
            </select>
        ` : ""}
        <button onclick="saveModified()">Mentés</button>
    `;

    workingField.style.display = "flex";
}

// Módosítás mentése
async function saveModified() {
    const id = document.getElementById("itemSelect").value;
    const name = document.getElementById("nameInput").value.trim();
    const courseId = currentType === "students" ? document.getElementById("courseSelect").value : null;

    const data = currentType === "students" ? {
        name: name || (await get(id, currentType)).name,
        course_id: courseId
    } : { name: name || (await get(id, currentType)).name };

    const response = await put(data, id, currentType);
    if (response) {
        alert("Sikeres módosítás!");
        document.getElementById("workingField").style.display = "none";
        updateLists(); // Lista frissítése
    } else {
        alert("Hiba történt a módosítás során.");
    }
}

// Elem törlése
async function deleteItem() {
    const items = await getAll(currentType);
    const workingField = document.getElementById("workingField");
    workingField.innerHTML = "";

    if (items.length === 0) {
        alert("Nincs elérhető elem.");
        return;
    }

    workingField.innerHTML = `
        <label for="itemSelect">Válasszon elemet:</label>
        <select id="itemSelect">
            ${items.map(item => `<option value="${item.id}">${item.name}</option>`).join("")}
        </select>
        <button onclick="confirmDelete()">Törlés</button>
    `;

    workingField.style.display = "flex";
}

// Törlés megerősítése
async function confirmDelete() {
    const id = document.getElementById("itemSelect").value;
    const response = await deleteItemById(id, currentType);
    if (response) {
        alert("Sikeres törlés!");
        document.getElementById("workingField").style.display = "none";
        updateLists(); // Lista frissítése
    } else {
        alert("Hiba történt a törlés során.");
    }
}

// API függvények
async function getAll(type) {
    const response = await fetch(`${apiUrl}/${type}`);
    return response.ok ? await response.json() : [];
}

async function get(id, type) {
    const response = await fetch(`${apiUrl}/${type}/${id}`);
    return response.ok ? await response.json() : null;
}

async function post(data, type) {
    const response = await fetch(`${apiUrl}/${type}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    return response.ok ? await response.json() : null;
}

async function put(data, id, type) {
    const response = await fetch(`${apiUrl}/${type}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    return response.ok ? await response.json() : null;
}

async function deleteItemById(id, type) {
    const response = await fetch(`${apiUrl}/${type}/${id}`, {
        method: "DELETE"
    });
    return response.ok;
}