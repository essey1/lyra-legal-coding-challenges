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
    const subjects = {};
    let studentCount = 0;

    students.forEach(student => {
        studentCount++;
        for (const [subject, grade] of Object.entries(student.grades)) {
            if (!subjects[subject]) {
                subjects[subject] = { total: 0, count: 0 };
            }
            subjects[subject].total += grade;
            subjects[subject].count++;
        }
    });

    return Object.fromEntries(
        Object.entries(subjects).map(([subject, { total, count }]) => 
            [subject, total / count]
        )
    );
}

console.log(averageGrades([
    { name: "Alice", grades: { math: 90, english: 85, science: 92 } },
    { name: "Bob", grades: { math: 75, english: 80, science: 85 } }
])); 
// { math: 82.5, english: 82.5, science: 88.5 }