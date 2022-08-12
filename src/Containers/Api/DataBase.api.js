import { deleteRequest, getRequest, postRequest } from "./Request"

export const Get_Database = () => {
    return getRequest("userdata")
}

export const Post_Database = (data) => {
    return postRequest("userdata" , data)
}

export const Delete_Database = (id) => {
    return deleteRequest("userdata/"+id)
}