const fs = require("fs")

const countStudents = (filename) => {
    
    const students = {}
    const rows = {}
    let studentsCount = -1

    try {
        const data = fs.readFileSync(filename, 'utf-8');
        const lines = data.trim().split('\n')
        for (const line of lines) {
            const fields = line.split(',')
            if (students[fields[3]]) {
                students[fields[3]].push(fields[0])
            } else {
                students[fields[3]] = [fields[0]]
            }
            if (rows[fields[3]]) {
                rows[fields[3]].push(line)
            } else {
                rows[fields[3]] = [line]
            }
            studentsCount += 1
        }
    

        console.log(`Number of students: ${studentsCount}`)

        for (const [key, value] of Object.entries(students)) {
            if (key) {
                console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`)
            }


        }
    
    
    } catch (error) {
        throw new Error('Cannot load the database');
    }
    
}
    module.exports = countStudents