class UserTask1 {
    constructor(name , email) {
        this.name = name;
        this.email = email;
    }
}

function createUser(name, email) {
    return new UserTask1(name, email);
}

console.log(createUser("roman", "e@mail.ru"));

class UserTask2 {
    constructor(id, status) {
        this.id = id;
        this.status = status;
    }

    getId() {
        return "#" + this.id.toString();
    }

    isAdmin() {
        return status == 'Admin';
    }
}

const user1 = new UserTask2(id = 100, status = "Admin");
console.log(user1.getId(), user1.isAdmin());
const user2 = new UserTask2(id = 217, status = "SimpleUser");
console.log(user2.getId(), user2.isAdmin());


class AreaOfCircle {
    constructor(radius) {
        this.radius = radius;
    }

    get radius() {
        return 2 * 3.14 * this._radius;
    }

    set radius(x) {
        this._radius = x;
    }
}

const area = new AreaOfCircle(2);
console.log(area.radius);
area.radius = 10;
console.log(area.radius);


class Course {
    constructor(mark) {
        this.mark = mark
    }

    getGrade() {
        return this.mark > 3
    }

    getCertificate() {
        return this.getGrade() ? "Выдать сертификат" : "Курс не пройден";
    }
}

const course1 = new Course(5);
console.log(course1.getCertificate());

const course2 = new Course(3);
console.log(course2.getCertificate());