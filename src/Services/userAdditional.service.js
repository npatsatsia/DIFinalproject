import userApi from '../API/userAdditional.axios'

const changeUser = async ({newPassword, userName, email}) => {
    const user = JSON.parse(localStorage.getItem('userinfo'))
    return await userApi.put('User/updateuserdata',
    {
        id: user.id.toString(),
        userName: userName? userName : user.userName ,
        email: email? email : user.email,
        newPassword
    },
      )
}

const editUser = {
    changeUser
};

export default editUser;