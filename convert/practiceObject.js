import {memberList} from "../store/companyStore.js";

// 리스트성 데이터를 Map 으로 변환 스프레드 연산자 활용
const handleListToMap = () => {
    return { ...memberList }
}

console.log(handleListToMap());

console.log('-----------------------------------\n');


//
const handleExtractElement = () => {
    return memberList.map(element => ({memberId : element.memberId, memberName : element.memberName}))
}

console.log(handleExtractElement());