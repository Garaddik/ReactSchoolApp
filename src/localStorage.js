export const saveState = (state) => {
    try{
        const serializeState = JSON.stringify(state)
        localStorage.setItem('state',serializeState)
    }catch(err){
      // not required  
    }
}

export const preloadedState  = () =>{
    try{
        const serializeState = localStorage.getItem('state')
        if(serializeState === null){
            return undefined
        }
        return JSON.parse(serializeState)
    }catch(err){
        return undefined
    }
}