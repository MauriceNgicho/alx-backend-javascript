import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const database = process.argv[2];

    readDatabase(database)
      .then((fields) => {
        const response = ['This is the list of our students'];
        const sortedFields = Object.keys(fields).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

        for (const field of sortedFields) {
          if (Object.prototype.hasOwnProperty.call(fields, field)) {
            const students = fields[field];
            response.push(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
          }
        }

        res.status(200).send(response.join('\n'));
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    const database = process.argv[2];

    return readDatabase(database)
      .then((fields) => {
        const students = fields[major];
        res.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
