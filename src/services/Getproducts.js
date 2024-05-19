import axios from 'axios'

export const Getproducts = async() => {
    const data = await axios.get("https://dummyjson.com/products");
    return data
    
}
// export const Addproducts = async(obj) => {
//     const data = await axios.post("https://dummyjson.com/products",obj)
//     return data
// }
