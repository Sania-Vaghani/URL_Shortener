import {createServer} from "http"
import {readFileSync, writeFileSync} from "fs"
import crypto from "crypto"
import path from "path"

const DATA_FILE = path.join("data","links.json")

const serverFile = (file,content,res) => {
    try{
        var data = readFileSync(file,"utf-8")
        res.writeHead(200,{"content-type":content})
        res.end(data)
    }catch(error){
        res.writeHead(404,{"content-type":"text/plain"})
        res.end("404 Page Not Found")
    }
}

const loadLinks = () => {
    try{
        const data= readFileSync(DATA_FILE,"utf-8")
        return JSON.parse(data)
    } catch (error) {
        if(error.code === "ENOENT"){
            writeFileSync(DATA_FILE,JSON.stringify({}))
            return {}
        }
        throw error
    }
}

const saveLinks = (links) => {
    writeFileSync(DATA_FILE,JSON.stringify(links))
}

const server = createServer((req,res)=>{
    if(req.method==="GET"){
        if(req.url === "/")
        {
            serverFile("index.html","text/html",res)
        }
        else if(req.url === "/style.css")
        {
            serverFile("style.css","text/css",res)
        }
        else if(req.url === "/links"){
            const links = loadLinks()
            res.writeHead(200,{"content-type":"application/json"})
            return res.end(JSON.stringify(links))
        }else{
            const links = loadLinks()
            const shortCode = req.url.slice(1)
            console.log("Links Red. ",req.url)
            if(links[shortCode]){
                res.writeHead(302,{location : links[shortCode]})
                return res.end()
            }
            res.writeHead(400,{"content-type":"text/plain"})
            res.end("404 Page Not Found")
        }
    }

    if(req.method==="POST" && req.url==="/shorten"){

        const links = loadLinks()

        let data=""
        req.on("data",(chunk)=>{
            data+=chunk
        })
        req.on("end",()=>{
            console.log(data)
            const {url,shortCode} = JSON.parse(data)

            if(!url){
                res.writeHead(400,{"content-type":"text/plain"})
                res.end("404 Page Not Found")
            }

            const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex")
            
            if(links[finalShortCode]){
                res.writeHead(400,{"Content-type":"text/plain"})
                return res.end("Short Code already exists.Please Choose another.")
            }

            links[finalShortCode] = url
            saveLinks(links)

            res.writeHead(200,{"Content-type":"application/json"})
            res.end(JSON.stringify({success:true,shortCode:finalShortCode}))
        })
    }
})

server.listen(1411)