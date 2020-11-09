class Student {
	constructor(exams, test, name) {
		this.exams = exams;
		this.test = test;
		this.name = name;
	}

	score() {
		console.log(
			`${this.name} your scores are ${this.exams} for exams and ${this.test} for test. `
		);
	}
}

module.exports = Student;
