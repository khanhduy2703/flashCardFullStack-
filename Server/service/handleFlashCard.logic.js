 const handleFormat = (flashcard , listCard)=>{
    const {name_flash_card , description} = flashcard[0]
    const result =  listCard.reduce((acc,curr,index)=>{
        const   {front_card, back_card , status , images_card}= curr
        acc[index] = {front_card, back_card , status , images_card}
        return acc
     },[])
  
     return  {
        name_flash_card , 
        description ,
        listCard : result
     }
 }





 module.exports = {
    handleFormat
 }