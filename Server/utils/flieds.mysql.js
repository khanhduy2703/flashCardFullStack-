const tableUser = {
    account : "account",
    password: "password",
    email : "email",
    phone:"phone",
    status:"status",
    createdAt:"create_at"
}
const tableFolder = {
    idFolder:"id_folder",
    nameFolder:'name_folder',
    idUser: 'id_user',
    isHidden:'is_hidden',
    status :'status'
}
const tableFlashCard = {
    idFlashCard: "id_flash_card",
    nameFlashCard:"name_flash_card",
    description: "desctription",
    isHidden: "is_hidden",
    idFolder: "id_folder",
    status :'status'
}
const tableCard = {
    idCard :'id_card',
    frontCard: "front_card",
    backCard:"back_card",
    imageCard:"image_card",
    idFlashCard:"id_flash_card",
    isHidden:"is_hidden",
    status :'status'
}
module.exports = {
    tableUser,
    tableFlashCard,
    tableCard,
    tableFolder
}