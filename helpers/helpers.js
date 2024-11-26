export const checkDatas = (params) =>{

    let {_id, name, takecare, email, sintomas, date} = params

    return Object.values({_id, name, takecare, email, sintomas, date}).every( value => value.trim() !== "") ? true : false

}

export const checkEmail = (email) => {

    return email.includes("@") ? true : false

}