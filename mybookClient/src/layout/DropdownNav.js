import React,{useState} from 'react';


const DropdownNav = () => {
  const [open,setOpen] = useState(false)

  return (
    <>
    <div>
      <button onClick={()=>setOpen(!open)}>
        도서관 & 책
      </button>
         {
           open? (
             <div className="menu"> 
                <button>도서관 찾기</button>
                <button>책 찾기</button>
             </div>
           ) : null
         }
    </div>
    </>
  )
}

export default DropdownNav;