import { getRequest, postRequest } from "./Request"

export const Get_Database = () => {
    return getRequest("userdata")
}

// export const Post_Database = (data) => {
//     return postRequest("userdata" , )
// }
