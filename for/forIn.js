import {memberList} from "../store/companyStore.js";

// in -> 인덱스로 접근
const handleForIn = () => {
    for (const index in memberList) {
        console.log(index + ':', memberList[index]);
        console.log('--------------------------------------');
    }
}

handleForIn();

