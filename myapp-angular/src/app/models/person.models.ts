class Person {
    _id: string;
    name: string;
    city: String;
    date: Date;
    status: string;

    constructor() {
            this.name = "";
            this.city = "";
            this.date = new Date();
            this.status = "";
        }
}

export default Person;
