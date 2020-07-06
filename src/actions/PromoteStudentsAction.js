import { postAPI, apiLocation } from '../commons/Util'

function client_promoteStudents(schoolid, standardid, year, student) {
    return fetch(`${apiLocation()}/schools/${schoolid}/standards/${standardid}/ssassociation?year=${year}`,
        postAPI(student)
    )
    .then(response => {
        if(response.status === 500){
            return true
        }
    })
}

export function promoteStudents(schoolid, standardid, year, student) {
    return (client_promoteStudents(schoolid, standardid, year, student))
}