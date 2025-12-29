import {memberList} from "../store/companyStore.js";


const handleReduce = () => {
    return memberList.reduce((acc, member) => {
        acc[member.memberId] = member;
        return acc
    }, {})
}

console.log(handleReduce())