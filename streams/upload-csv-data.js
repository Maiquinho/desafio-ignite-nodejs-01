import fs from 'node:fs'
import { parse } from 'csv-parse'

const csvPath = new URL('../tasks.csv', import.meta.url)

async function uploadCSVData() {
    const parser = fs
        .createReadStream(csvPath)
        .pipe(parse({
            delimiter: ',',
            encoding: 'utf8',
            from_line: 2,
            skip_empty_lines: true,
            quote: '"'
        }))

    for await (const row of parser) {
        const [title, description] = row

        console.log({ title, description })

        await fetch('http://localhost:3333/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                description
            })
        })

        // Fake lazy upload 1 row per second
        await new Promise((resolve) => setTimeout(resolve, 500))
    }
}

uploadCSVData()