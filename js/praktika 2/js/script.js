const task1 = document.querySelector("#task1"), 
      task2_1 = document.querySelector("#task2_1"),
      task2_2 = document.querySelector("#task2_2"),
      task3 = document.querySelector("#task3"),
      task4 = document.querySelector("#task4"),
      task5 = document.querySelector("#task5");
      
const result1 = document.querySelector("#resultFirstExercise"),
      result2 = document.querySelector("#resultSecondExercise"),
      result3 = document.querySelector("#resultThirdExercise"),
      result4 = document.querySelector("#resultFourthExercise"),
      result5 = document.querySelector("#resultFifthExercise");

task1.addEventListener("input", () => {result1.textContent = getAge(parseInt(task1.value)).toString()});
task2_1.addEventListener("input", () => {result2.textContent = getReminder(parseInt(task2_1.value), parseInt(task2_2.value)).toString()})      //() => { task(getReminder, result2, delimoe, delitel) });
task2_2.addEventListener("input", () => {result2.textContent = getReminder(parseInt(task2_1.value), parseInt(task2_2.value)).toString()})     // () => { task(getReminder, result2, delimoe, delitel) });
task3.addEventListener("input", () => {result3.textContent = faceControl(parseInt(task3.value)).toString()})  // () => { task(faceControl, result3, controlAge) });
task4.addEventListener("input", () => {result4.textContent = getNextAge(parseInt(task4.value)).toString()})   //  () => { task(getNextAge, result4, ageAgain) });
task5.addEventListener("input", () => {result5.textContent = canRide(parseInt(task5.value)).toString()} )     //   () => { task(canRide, result5, grow) });

function getAge(age) {
    return age+1;
}

function getReminder(left, right) {
    return left % right;
}

function faceControl(age) {
    if (age >= 18)
        return "Welcome";
    else
        return "Отказ";
}

function getNextAge(age) {
    return isNaN(age) ? 0 : age+1;
}

function canRide(grow) {
    return grow >= 140;
}