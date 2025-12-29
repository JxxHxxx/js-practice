import {memberList} from "../store/companyStore.js";

// of -> 요소로 접근
const handleForOf = () => {
    for (const member of memberList) {
        console.log('memeber: ' , member);
        console.log('--------------------------------------');
    }
}

handleForOf();