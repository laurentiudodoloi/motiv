export class User {
    public firstName: string;
    public lastName: string;
    public email: string;
    public points: string;
    public level: string;

    constructor(props) {
        this.firstName = props.firstName;
        this.lastName = props.lastName;
        this.email = props.email;
        this.points = props.points;
        this.level = props.level;
    }
}
