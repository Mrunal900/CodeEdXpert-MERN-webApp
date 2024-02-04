import { toast } from "react-hot-toast"

// import rzpLogo from "../../assets/Logo/rzp_logo.png"
import { resetCart } from "../../slices/cartSlice"
import { setPaymentLoading } from "../../slices/courseSlice"
import { apiConnector } from "../apiconnector"
import { studentEndpoints } from "../apis"

const {
  COURSE_PAYMENT_API,
  COURSE_VERIFY_API,
  // SEND_PAYMENT_SUCCESS_EMAIL_API,
} = studentEndpoints



// Load the Razorpay SDK from the CDN
function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script")
    script.src = src;
    script.onload = () => {
      resolve(true);
    }
    script.onerror = () => {
      resolve(false);
    }
    document.body.appendChild(script)
  })
}

// Buy the Course
export async function BuyCourse(
  token,
  courses,
  user_details,
  navigate,
  dispatch
) {
  const toastId = toast.loading("Loading...")
  try {
    // Loading the script of Razorpay SDK
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

    if (!res) {
      toast.error(
        "Razorpay SDK failed to load. Check your Internet Connection."
      )
      return
    }

    // Initiating the Order in Backend
    const orderResponse = await apiConnector(
      "POST",
      COURSE_PAYMENT_API,
      {
        courses,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    )

    if (!orderResponse.data.success) {
      throw new Error(orderResponse.data.message)
    }
    console.log("PAYMENT RESPONSE FROM BACKEND............", orderResponse)

    // Opening the Razorpay SDK
    // const options = {
    //   key: process.env.RAZORPAY_KEY,
    //   currency: orderResponse.data.data.currency,
    //   amount: `${orderResponse.data.data.amount}`,
    //   order_id: orderResponse.data.data.id,
    //   name: "CodeEdXpert",
    //   description: "Thank you for Purchasing the Course.",
    //   image: rzpLogo,
    //   prefill: {
    //     name: `${user_details.firstName} ${user_details.lastName}`,
    //     email: user_details.email,
    //   },
    //   handler: function (response) {
    //     sendPaymentSuccessEmail(response, orderResponse.data.data.amount, token)
    //     verifyPayment({ ...response, courses }, token, navigate, dispatch)
    //   },
    // }

  //   var options = {
  //     "key": process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
  //     "amount": `${orderResponse.data.data.amount}`, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  //     "currency": "INR",
  //     "name": "CodeEdXpert", //your business name
  //     "description": "Test Transaction",
  //     "image": rzpLogo,
  //     "order_id": orderResponse.data.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  //     "handler": function (response){
  //       sendPaymentSuccessEmail(response, orderResponse.data.data.amount, token)
  //           verifyPayment({ ...response, courses }, token, navigate, dispatch)
  //     },
  //     "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
  //         "name": `${user_details.firstName} ${user_details.lastName}`, //your customer's name
  //         "email": user_details.email, 
  //         "contact": "9000090000"  //Provide the customer's phone number for better conversion rates 
  //     }
  // };
    // const paymentObject = new window.Razorpay(options)

    // paymentObject.open()
    // paymentObject.on("payment.failed", function (response) {
    //   console.log("Payment failed:", response);
    //   toast.error("Oops! Payment Failed.");
    // });

    // sendPaymentSuccessEmail(response, orderResponse.data.data.amount, token)
    verifyPayment({courses }, token, navigate, dispatch)
    
  } catch (error) {
    console.log("PAYMENT API ERROR............", error)
    toast.error("Could Not make Payment.")
  }
  toast.dismiss(toastId)
}

// Verify the Payment
async function verifyPayment(bodyData, token, navigate, dispatch) {
  const toastId = toast.loading("Verifying Payment...")
  dispatch(setPaymentLoading(true))
  try {
    const response = await apiConnector("POST", COURSE_VERIFY_API, bodyData, {
      Authorization: `Bearer ${token}`,
    })

    console.log("VERIFY PAYMENT RESPONSE FROM BACKEND............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }

    toast.success("Payment Successful. You are Added to the course ")
    navigate("/dashboard/enrolled-courses")
    dispatch(resetCart())
  } catch (error) {
    console.log("PAYMENT VERIFY ERROR............", error)
    toast.error("Could Not Verify Payment.")
  }
  toast.dismiss(toastId)
  dispatch(setPaymentLoading(false))
}

// // Send the Payment Success Email
// async function sendPaymentSuccessEmail(response, amount, token) {
//   try {
//     await apiConnector(
//       "POST",
//       SEND_PAYMENT_SUCCESS_EMAIL_API,
//       {
//         orderId: response.razorpay_order_id,
//         paymentId: response.razorpay_payment_id,
//         amount,
//       },
//       {
//         Authorization: `Bearer ${token}`,
//       }
//     )
//   } catch (error) {
//     console.log("PAYMENT SUCCESS EMAIL ERROR............", error)
//   }
// }
