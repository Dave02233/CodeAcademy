CREATE TABLE advisors (
  id INTEGER PRIMARY KEY,
  email VARCHAR(100) UNIQUE,
  name VARCHAR(100),
  department VARCHAR(100)
);

CREATE TABLE students (
  id INTEGER PRIMARY KEY,
  name VARCHAR(100),
  year VARCHAR(50),
  email VARCHAR(100) UNIQUE,
  advisor_id INTEGER REFERENCES advisors(id)
);

CREATE TABLE majors (
  id INTEGER PRIMARY KEY,
  major VARCHAR(100),
  credits_reqd INTEGER
);

CREATE TABLE students_majors (
  student_id INTEGER REFERENCES students(id),
  major_id INTEGER REFERENCES majors(id)
);
