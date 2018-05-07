/**
 * Class type to create a Task objects
 */
export class Task {

    private taskId: number;
    private taskTxt: string;
    private taskSelected: boolean;

    constructor(taskId: number, taskTxt: string) {
        this.setTaskId(taskId);
        this.setTaskTxt(taskTxt);
        this.setTaskSelected(false);
    }

    public getTaskId() {
        return this.taskId;
    }

    public setTaskId(taskId: number) {
        this.taskId = taskId;
    }

    public getTaskTxt() {
        return this.taskTxt;
    }

    public setTaskTxt(taskTxt: string) {
        this.taskTxt = taskTxt;
    }

    public isTaskSelected() {
        return this.taskSelected;
    }

    public setTaskSelected(taskSelected: boolean) {
        this.taskSelected = taskSelected;
    }

}
