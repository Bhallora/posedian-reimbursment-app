import { CREATE_APPLICATION, DELETE_APPLICATION } from "../constants/action-types";
import { employees } from '../data-object/data-object';
const initialState = employees;

const applicationReducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case CREATE_APPLICATION:
            let newState = [...state];
            newState.push({
                id: 3,
                name: "Monalisa",
                employeeCode: "114578",
                voucherNo: "8792ef8",
                date: "08-02-2019",
            }
            )
            console.log(newState);
            return newState;

        default:
            return initialState;
    }
}
export default applicationReducer;