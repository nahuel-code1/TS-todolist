import React from 'react'
import { ITask } from '../interfaces'

interface Props {
    task: ITask;
    deleteTask( taskIdToDelete: number ): void;
}

export const TodoTask = ( { task, deleteTask }: Props ) => {
    return (
        <div>
            {task.task_name} {task.deadline}
            <button onClick={() => {
                deleteTask(task.id_task);
            }}>
                X
            </button>
        </div>
    )
}