import { randomUUID } from 'node:crypto'
import { Database } from "./database.js"
import { buildRoutePath } from './utils/build-route-path.js'

const database = new Database()

export const routes = [
    {
        method: 'GET',
        path: buildRoutePath('/tasks'),
        handler: (req, res) => {
            const { search } = req.query

            const tasks = database.select('tasks', search ? {
                title: search,
                description: search,
            } : null)

            return res.end(JSON.stringify(tasks))
        }
    },
    {
        method: 'POST',
        path: buildRoutePath('/tasks'),
        handler: (req, res) => {
            const bodyContent = req.body

            const expectedPropertiesFromBodyContent = ['title', 'description']

            const filteredBodyProperties = Object.entries(bodyContent).filter(([key, value]) => {
                return expectedPropertiesFromBodyContent.includes(key)
            })

            if (filteredBodyProperties.length < 1) {
                return res.writeHead(400).end()
            }

            if (!bodyContent.title || !bodyContent.description) {
                return res.writeHead(400).end()
            }

            const date = new Date().toISOString()

            const task = {
                id: randomUUID(),
                title: bodyContent.title,
                description: bodyContent.description,
                created_at: date,
                updated_at: date,
                completed_at: null,
            }

            database.insert('tasks', task)

            return res.writeHead(201).end()
        }
    },
    {
        method: 'PUT',
        path: buildRoutePath('/tasks/:id'),
        handler: (req, res) => {
            const { id } = req.params

            const task = database.select('tasks').find((row) => row.id === id)

            if (!task) {
                return res.writeHead(404).end()
            }

            const bodyContent = req.body

            const expectedPropertiesFromBodyContent = ['title', 'description']

            const filteredBodyProperties = Object.entries(bodyContent).filter(([key, value]) => {
                return expectedPropertiesFromBodyContent.includes(key)
            })

            if (filteredBodyProperties.length < 1) {
                return res.writeHead(400).end()
            }

            if (!bodyContent.title && !bodyContent.description) {
                return res.writeHead(400).end()
            }

            const date = new Date().toISOString()

            const updatedTask = {
                ...bodyContent,
                updated_at: date,
            }

            database.update('tasks', id, updatedTask)

            return res.writeHead(201).end()
        }
    },
    {
        method: 'PATCH',
        path: buildRoutePath('/tasks/:id/complete'),
        handler: (req, res) => {
            const { id } = req.params

            const task = database.select('tasks').find((row) => row.id === id)

            const date = new Date().toISOString()

            if (!task) {
                return res.writeHead(404).end()
            }

            const taskCompleteDate = !!task.completed_at
                ? null : date

            database.update('tasks', id, {
                completed_at: taskCompleteDate
            })

            return res.writeHead(201).end()
        }
    },
    {
        method: 'DELETE',
        path: buildRoutePath('/tasks/:id'),
        handler: (req, res) => {
            const { id } = req.params

            const task = database.select('tasks').find((row) => row.id === id)

            if (!task) {
                return res.writeHead(404).end()
            }

            database.delete('tasks', id)

            return res.writeHead(204).end()
        }
    },
]