// import { useSearchParams } from "react-router-dom"
// import "./Verify.css"
// import { useContext, useEffect } from "react";
// import { StoreContext } from "../../Context/StoreContext";
// import axios from "axios";
// const Verify = () => {

//     const [searchParams,setSearchParams] = useSearchParams();
//     const success= searchParams.get("success")
//     const orderId = searchParams.get("orderId")
//     const {url}=useContext(StoreContext);
//     const navigate = useNavigate();

//     const verifyPayment = async ()=>{
//         const response = await axios.post(url+"/api/order/verify",{success,orderId});
//         if(response.data.success){
//           navigate("/myorders")
//         }
//         else{
//             navigate("/")
//         }
//     }

//     useEffect(()=>{
//      verifyPayment();
//     },[])

//   return (
//     <div className="verify">
//     <div className="spinner"> </div>
//     </div>
//   )
// }

// export default Verify






import { useSearchParams, useNavigate } from "react-router-dom";
import "./Verify.css";
import { useContext, useEffect, useCallback } from "react";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";

const Verify = () => {
    const [searchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const { url } = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = useCallback(async () => {
        try {
            const response = await axios.post(url + "/api/order/verify", { success, orderId });
            if (response.data.success) {
                navigate("/myorders");
            } else {
                navigate("/");
            }
        } catch (error) {
            console.error("Error verifying payment:", error);
            navigate("/");
        }
    }, [success, orderId, url, navigate]);

    useEffect(() => {
        verifyPayment();
    }, [verifyPayment]);

    return (
        <div className="verify">
            <div className="spinner"></div>
        </div>
    );
};

export default Verify;