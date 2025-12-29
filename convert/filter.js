import {memberList} from "../store/companyStore.js";


const handleFilter = () => {
    return memberList.filter(element => {
        return element.orgId === 'GR00001'
    })
}

console.log(handleFilter());