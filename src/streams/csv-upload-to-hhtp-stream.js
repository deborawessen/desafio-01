import fs from 'node:fs'
import { parse } from "csv-parse";

const dataBasePath = new URL('../../db.csv', import.meta.url)

export async function ReadCsvFile() {
    const parser = fs.createReadStream(dataBasePath).pipe(parse({
        columns: true,
        from_line: 2,
    }))

    for await (const row of parser){
        try{
            const res = await fetch('http://localhost:3333/tasks',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(row)
            })
            if(!res.ok){
                console.log('Failed to import row:', row)
            }else{
                console.log('CSV imported successfully')
            }
        }catch{
            console.log('Error while importing row:', row)
        }
        
    }
}

ReadCsvFile()
