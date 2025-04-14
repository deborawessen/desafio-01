import { Database } from "./dababase.js"
import { buildRoutePath } from "./utils/buildRoutePath.js"
import {randomUUID} from 'node:crypto'
import {format} from 'date-fns'

const database = new Database()

export const routes = [
    {
        method: 'POST',
        path: buildRoutePath('/tasks'),
        handle: (req, res)=>{
            const {title, description} = req.body
            
            if(!title || !description){
                return res.writeHead(400).end('Title and description are required')
            }
            
            const date = new Date()
            const task = ({
            id: randomUUID(),
            title,
            description,
            completed_at: null,
            created_at: format(date, 'MM-dd-yyyy HH:mm:ss'),
            updated_at: format(date, 'MM-dd-yyyy HH:mm:ss'),
            })
            database.insert('tasks', task)
            return res.writeHead(201).end()
            
            
        }
    },
    {
        method: 'GET',
        path: buildRoutePath('/tasks'),
        handle: (req, res)=>{
            const tasks = database.select('tasks')
            return res.end(JSON.stringify(tasks))
        }

    },
    {
        method: 'PUT',
        path: buildRoutePath('/tasks/:id'),
        handle: (req, res)=>{
            const {id} = req.params
            const date = new Date()
            const {title, description} = req.body
            if(!title || !description){
                return res.writeHead(400).end('Title and description are required')
            }
            return database.update('tasks',id,{
                title,
                description,
                updated_at: format(date, 'MM-dd-yyyy HH:mm:ss')
            }) ? res.writeHead(204).end() : res.writeHead(404).end('Record not found')
           
        }

    },
    {
        method: 'DELETE',
        path: buildRoutePath('/tasks/:id'),
        handle: (req, res)=>{
            const {id} = req.params
            return database.delete('tasks', id) ? res.writeHead(204).end() : res.writeHead(404).end('Record not found')
            
        }
    },
    {
        method: 'PATCH',
        path: buildRoutePath('/tasks/:id/complete'),
        handle: (req, res)=>{
            const {id} = req.params
            const date = new Date()
            return database.update('tasks', id,{
                completed_at:format(date, 'MM-dd-yyyy HH:mm:ss')
            }) ? res.writeHead(204).end() : res.writeHead(404).end('Record not found')
        }

    },
]