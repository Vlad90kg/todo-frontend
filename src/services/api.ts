import axios from 'axios';

import {Todo} from 'types';

const api = axios.create({baseURL:'http://localhost:8080/api'});

export async function getTodos(): Promise<Todo[]> {
    const res = await api.get<Todo[]>('todo');
    return res.data;
}


export async function getTodo(id:string): Promise<Todo> {
    const res = await  api.get<Todo>('todo/${id}');
    return res.data;
}

export async function deleteTodo(id:string): Promise<void> {
    await  api.delete('todo/${id}');
}

export async function addTodo(todo: Omit<Todo, "id">) {
    const res = await api.post('todo');
    return res.data;
}

export async function updateTodo(todo:Todo) {
    const res = await api.put<Todo>(`todo/${todo.id}`, todo);
    return res.data;
}