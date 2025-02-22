// Challenge 3: Object Manipulation
// Implement a function that takes an array of objects representing students
// and returns the average grade for each subject across all students.
// Each student object has a 'grades' property containing subject-grade pairs.
// Example input:
// [
// { name: "Alice", grades: { math: 90, english: 85, science: 92 } },
// { name: "Bob", grades: { math: 75, english: 80, science: 85 } }
// ]
// Expected output: { math: 82.5, english: 82.5, science: 88.5 }

function averageGrades(students) {
    let subjects = {}; 

    // Loop through each student
    for (let i = 0; i < students.length; i++) {
        let student = students[i];

        // Loop through each subject in grades
        for (let subject in student.grades) {
            if (!subjects[subject]) {
                subjects[subject] = { total: 0, count: 0 };
            }
            subjects[subject].total += student.grades[subject];
            subjects[subject].count++;
        }
    }

    // Create final result object
    let result = {};
    for (let subject in subjects) {
        result[subject] = subjects[subject].total / subjects[subject].count;
    }

    return result;
}

console.log(averageGrades([
    { name: "Alice", grades: { math: 90, english: 85, science: 92 } },
    { name: "Bob", grades: { math: 75, english: 80, science: 85 } }
])); 