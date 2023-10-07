import userApi from '../API/userAdditional.axios'

const changeUser = async (userName, email, newPassword) => {
    return await userApi.put('User/updateuserdata',
    {
        id: 35,
        userName: 'lari',
        email: 'lari@gmail.com',
        newPassword: 'Lari123@'
    },
      )
}

const editUser = {
    changeUser
};

export default editUser;