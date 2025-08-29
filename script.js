async function logtasks(){
    const res = await fetch(API)
    const tasks = await res.json()
    console.log("tasks from server: ", tasks)
}
    
