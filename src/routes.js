const HOME = "/";
const LOGIN = "/login";
const LOGOUT = "/logout";
const JOIN = "/join";
const TODO = "/todo";
const TIMER = "/timer";


//user
const USER = "/user";
const USER_DETAIL = "/:id";
const EDIT_PROFIlE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

//secret_diary
const SECRET_DIARY = "/secret-diary";



const router = {
    home : HOME,
    login : LOGIN,
    logout : LOGOUT,
    join : JOIN,

    todo : TODO,
    timer : TIMER,
    
    user : USER,
    userDetail : USER_DETAIL,
    editProfile : EDIT_PROFIlE,
    changePassword : CHANGE_PASSWORD,

    secret_diary : SECRET_DIARY
} 

export default router;