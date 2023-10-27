export const checkValidateForm = (name,email,password)=>{
    const isValidName =/^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(name);
    const isValidEmail =/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
const isValidPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
if(!isValidName) return "Invalid Username."
if(!isValidEmail) return "Invalid email address."
if(!isValidPassword) return "Password is not valid."

return null;
}