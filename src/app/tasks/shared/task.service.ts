import { Injectable } from "@angular/core";

import { Task } from "./task.model";

const TASKS: Array<Task> = [
	{ id: 1, title: 'Fazer tarefa1' },
	{ id: 2, title: 'Fazer tarefa2' },
	{ id: 3, title: 'Fazer tarefa3' },
	{ id: 4, title: 'Fazer tarefa4' },
	{ id: 5, title: 'Fazer tarefa5' },
	{ id: 6, title: 'Fazer tarefa6' }
];

@Injectable()

export class TaskService{
	public getTasks(): Promise<Task[]>{
		let promise = new Promise((resolve, reject) => {
			if(TASKS.length > 0){
				resolve(TASKS)
			} else {
				let error_msg = 'Não Há Tarefas'
				reject(error_msg)  
			}
		})

		return promise;
	}

	public getImportantTasks(): Promise<Task[]>{
		return Promise.resolve(TASKS.slice(0, 3));
	}
}