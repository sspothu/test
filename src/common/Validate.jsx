// // // export default function Validate(obj){
// // //     const errors={}
// // //     const emailreg=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
// // //     const passreg=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/
// // //     if(obj.FirstName=="")
// // //         {
// // //             errors.firstname="Name is required";
           
// // //         }
// // //         if(obj.LastName=="")
// // //             {
// // //                 errors.lastname="Name is required";
// // //             }
// // //        if(obj.Email=="")
// // //         {
// // //             errors.mail="Email is required";
           
// // //         }else if(!obj.Email.match(emailreg)){
// // //             errors.mail="Email Should be Valid";
// // //         }
 
// // //         if(obj.Password==""){
// // //             errors.password="Password is required"
// // //         }else if(!obj.Password.match(passreg))
// // //             {
// // //                 errors.password="Password must contain one upper,lower and digit &length more than 8"
 
// // //             }
       
 
// // //         if(obj.ConfirmPassword!==obj.Password)
// // //             {
// // //                 errors.confirmpassword="password should be same as above"
// // //             }
 
 
// // //     return errors;
// // // }

// // export default function Validate(obj){
// //     const errors={}
// //     const emailreg=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
// //     const passreg=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/
// //     if(obj.FirstName=="")
// //         {
// //             errors.firstname="Name is required";
           
// //         }
// //         if(obj.LastName=="")
// //             {
// //                 errors.lastname="Name is required";
// //             }
// //        if(obj.Email=="")
// //         {
// //             errors.mail="Email is required";
           
// //         }else if(!obj.Email.match(emailreg)){
// //             errors.mail="Email Should be Valid";
// //         }
 
// //         if(obj.Password==""){
// //             errors.password="Password is required"
// //         }else if(!obj.Password.match(passreg))
// //             {
// //                 errors.password="Password must contain one upper,lower and digit &length more than 8"
 
// //             }
       
 
// //         if(obj.ConfirmPassword!==obj.Password)
// //             {
// //                 errors.confirmpassword="password should be same as above"
// //             }
 
 
// //     return errors;
// // }
// export default function Validate(obj){
//     const errors={}
//     const emailreg=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
//     const passreg=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/
//     if(obj.FirstName=="")
//         {
//             errors.firstname="Name is required";
           
//         }
//         if(obj.LastName=="")
//             {
//                 errors.lastname="Name is required";
//             }
//        if(obj.Email=="")
//         {
//             errors.mail="Email is required";
           
//         }else if(!obj.Email.match(emailreg)){
//             errors.mail="Email Should be Valid";
//         }
 
//         if(obj.Password==""){
//             errors.password="Password is required"
//         }else if(!obj.Password.match(passreg))
//             {
//                 errors.password="Password must contain one upper,lower and digit &length more than 8"
 
//             }
       
 
//         if(obj.ConfirmPassword!==obj.Password)
//             {
//                 errors.confirmpassword="password should be same as above"
//             }
 
 
//     return errors;
// }
export default function Validate(obj){
    const errors={}
    const emailreg=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const passreg=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/
    if(obj.FirstName=="")
        {
            errors.firstname="FirstName is required";
           
        }
        if(obj.LastName=="")
            {
                errors.lastname="LastName is required";
            }
       if(obj.Email=="")
        {
            errors.mail="Email is required";
           
        }else if(!obj.Email.match(emailreg)){
            errors.mail="Email Should be Valid";
        }
 
        if(obj.Password==""){
            errors.password="Password is required"
        }else if(!obj.Password.match(passreg))
            {
                errors.password="Password should be atleast of 8 characthers"
 
            }
       
 
        if(obj.ConfirmPassword!==obj.Password)
            {
                errors.confirmpassword="password should be same as above"
            }
 
 
    return errors;
}