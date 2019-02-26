"use strict";

const $formTodo = document.querySelector(".form-todo");
const $newTask = $formTodo.querySelector(".newTask");
const $wrapTask = $formTodo.querySelector(".wrapTask");

$formTodo.addEventListener("submit", event => event.preventDefault());

function addTask() {
    const { value } = $newTask;

    if (value !== "") {
        const template = `
                <div class="wrap">
                    <input class="taskInput" id="${value}" type="checkbox">
                    <label class="task" for="${value}">${value}</label>
                    <span class="check">&#10003;</span>
                    <span class="remove">X</span>
                </div>
            `;

        $wrapTask.insertAdjacentHTML('beforeend', template);
        $newTask.value = "";
    }
};

$wrapTask.addEventListener("click", event => {
    const { target } = event;

    if (target.classList.contains("remove")) {
        const $wrap = target.closest(".wrap");

        $wrap.classList.add("-remove");
        $wrap.addEventListener('transitionend', () => $wrap.remove());
    }
});

$wrapTask.addEventListener("click", event => {
    const { target } = event;

    if (target.classList.contains("check")) {
        const $wrap = target.closest(".wrap");

        $wrap.classList.toggle("-active");
    }
});