---------------------------------------------------------------
create newFlashcard => checkFlashCard is not Existing => create FlashCard => create listflashCard 
showflashCard => receive resquest from client => get nameFlashCard from param => show listCard of flashCard
showFlashCards => receive respuest from clien => get nameFolder form param => show more flashCard of folder   
deleteFlashCard => recevive resquest from client => get idFlashCard and nameFolder form param => delete  element in database`


-------------------------------------
1. create Folder Sevice     
     -  where complex logic is processed 
2.  models configuration follows transcaction node js with mysql  
3. create status for table  folder and flashcard to admin can delete it 
----------------------------------------
1. resgiter 
     -  check account is exsit or not exist in database
          - if exist => res about client  
          - else  => aprove create new user 
-----------------------------------------------
2. fix edit in database  