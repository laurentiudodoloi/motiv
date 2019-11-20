export class Target {
    public id: number;
    public text: string;
    public deadline: Date;
    public points: number;
    public achieved: number;

    constructor(props) {
        this.id = props.id;
        this.text = props.text;
        this.deadline = props.deadline;
        this.points = props.points;
        this.achieved = props.achieved;
    }
}
