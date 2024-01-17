import { randomUUID } from "node:crypto"
import { sql } from "./db.js";

export class DatabasePostgres {
    list(search){
        let videos;

        if(search){
            videos = sql`select * from videos where title ilike "%${search}%"`
        }else{
            videos = sql`select * from videos`
        }
    }
    
    create(video) {
        const videoId = randomUUID()
        
    }

    update(id, video){
        
    }

    delete(id){
        
    }


};