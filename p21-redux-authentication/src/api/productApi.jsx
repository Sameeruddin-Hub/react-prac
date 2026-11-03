import axiosInstance from "../config/axiosInstance";
export let getProducts = async () => {
    console.log('api call function running..')

    try {
        let res = await axiosInstance.get('/products')
        // console.log(res.data.products);
        return res.data.products;
    } catch (error) {
        console.log("error in products api", error)
    }
};