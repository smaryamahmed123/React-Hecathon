
// // store/slices/AuthSlice.js
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import { auth, db } from "../../Config/Firebase";
// import { useSelector } from 'react-redux';
// const initialState = {
//     user: null,
//     isAuthenticated: false,
//     error: null
// };


// const AuthSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         loginSuccess: (state, action) => {
//           const user = action.payload; // Assuming action.payload is the user object
    
//           state.user = {
//             uid: user.uid,
//             email: user.email,
//             // Add other necessary fields
//           };
//           state.isAuthenticated = true;
//           state.error = null;
//         },
//         loginFailure: (state, action) => {
//           state.user = null;
//           state.isAuthenticated = false;
//           state.error = action.payload;
//         },
//         logout: (state) => {
//           state.user = null;
//           state.isAuthenticated = false;
//           state.error = null;
//         },
//         addToCartSuccess: (state, action) => {
//           const cartData = action.payload;
//           state.user = {
//             ...state.user,
//             cart: cartData,
            
//           };
//         console.log(cartData)
//         },
//       },
// })

// export const handleSubmit = createAsyncThunk( 'auth/get', async (userData, { dispatch}) => {
//     const cartData = useSelector((state) => state.auth.user.cart);
//     console.log(cartData);
//     const { firstName, lastName, email, password, navigate } = userData;
//     try {
      
//      if( !firstName || !lastName ||!email || !password){
//        toast.error("required fields are missing!", {
//          position: "top-center",
//          autoClose: 5000,
//          hideProgressBar: false,
//          closeOnClick: true,
//          pauseOnHover: true,
//          draggable: true,
//          progress: undefined,
//          theme: "colored",
//          // transition: Bounce,
//          });
//          return;
//      }

//        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
 
//        const userObj = {
//          firstName,
//          lastName,
//          email,
//          isActive: true,
//          userRole: 1,
//        }

//        const uid = userCredential.user.uid
 
//        await setDoc(doc(db, 'users',uid ), userObj)
//        navigate("/login");
// (userCredential.user)
    
//     }
//      catch (error) {
//         dispatch(loginFailure(error.message));
    
//     }
// })


//    const { actions, reducer } = AuthSlice;
//    export const { logout, loginFailure, loginSuccess, addToCartSuccess } = actions
//    export default reducer;









// userSlice.js

// import { createSlice } from '@reduxjs/toolkit';

// const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     uid: null,
//   },
//   reducers: {
//     setUid: (state, action) => {
//       state.uid = action.payload;
//     },
//   },
// });

// export const { setUid } = userSlice.actions;
// export const selectUid = (state) => state.user.uid;
// console.log(selectUid)
// export default userSlice.reducer;
