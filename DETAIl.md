# folder
    - cretating new folder 
        req {
            name_Folder : xxxxxx
        }
        res{
            name_Folder : xxxxx
            User: xxxxx
        }
    - Editing folder  
        req {
            new_name_Folder : xxxxx
            user: xxxxxx
        }
        res{
            new_name_folder :xxxx
            user: xxxxx
        }
    - Getting folders 
        - sreach 
            =>{
                name_folder : xxxxx,
            }
        - show 
            =>{
                [list_folder]
            }
    - tick
## flashCard 
     - cretating new flashCard 
        => {
            name_flashCard : xxxxx
            des: xxxxxx
            status: xxxx
            [
                {
                    id_card: x
                    front_Card: xxxxx,
                    back_Card: xxxxx,
                    name_folder : xxxx

                }
            ]
        }
    - Editing cards 
        - name FlashCard 
          {
            newNameFlashCard : xxxxxx
            }
        - one Card 
        req_res{
            newFrontCard : xxxxx
            newBackCard : xxxx
        }
        
        - more Card 
        {
            [
                {
                     newFrontCard : xxxxx
                    newBackCard : xxxx
                }
            
            ]
        }
    - Getting flashCard
        - sreach => name_card
            =>{
                name_flashCard : xxxx
            }
        - show => listcard of flashCard
            =>{
                [
                    {listCard}
                ]
            }   
    - tick => return status =  yes / no 
### learn and exam 
    -  learn 

---------------------------------------------------------------
create newFlashcard => checkFlashCard is not Existing => create FlashCard => create listflashCard 
showflashCard => receive resquest from client => get nameFlashCard from param => show listCard of flashCard
showFlashCards => receive respuest from clien => get nameFolder form param => show more flashCard of folder   
deleteFlashCard => recevive resquest from client => get idFlashCard and nameFolder form param => delete  element in database`