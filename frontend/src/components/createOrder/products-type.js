import {React,useState,useEffect} from "react";
import './createOrder.css'


const ProductType = ({item,index , setnewObjs ,iscancel}) =>{

    const washTypes=[
        {   
            name:"Washing",
            imgNormal:"./images/washing-machine.svg",
            imgBlue:"./images/washing-machine-clicked.svg",
            price:20,
            id:1
        },
        {
            name:"Ironing",
            imgNormal:"./images/ironing.svg",
            imgBlue:"./images/ironing-clicked.svg",
            price:15,
            id:2
        },{
            name:"Towel",
            imgNormal:"./images/towel.svg",
            imgBlue:"./images/blueTowel.svg",
            price:10,
            id:3
        },{
            name:"Bleaching",
            imgNormal:"./images/bleach.svg",
            imgBlue:"./images/bleach-clicked.svg",
            price:25,
            id:4
        },
    ]

    const [count,setCount]=useState(0);
    const [washlist, setwashlist] = useState([]);
    const [price, setprice] = useState(0);
    const [totalprice, settotalprice] = useState(0);

    const countChange=(e)=>{
        
        setCount(e.target.value);
    }
    const handleclick =(obj)=>{
        let result = true
        washlist.forEach(element => {
            if(element.id===obj.id){
                
                result =false
            }})
            if (result){
                // console.log(obj)
                setwashlist([...washlist,obj])
            }
        }

        useEffect(() => {
            
            let totalwash =0
            if(washlist){
            washlist.forEach((element)=>{
            totalwash = element.price+totalwash})}
            setprice(totalwash)
    }, [washlist]);

    useEffect(() => {
            
        settotalprice(price*count)
         let totalval=price*count
          const  newobj ={
            name:item.name,
            subprice:totalval,
            quantity:count,
            washprice:price,
            washes:washlist,
        }
        setnewObjs(newobj)
 
        }, [price,count]);
        useEffect(() => {
            setwashlist([])
            setCount(0) 
    
            }, [iscancel]);
            function reset(e){
                e.preventDefault();
                setwashlist([])
                setCount(0)
            }
            const setZero = (e)=>{
               e.target.value = "";
            }
    return (
        <div className="item-selection">
            <img src={item.img} alt="no pic" className="item-img"></img>
            <div className="item-info">
              <p id="name">{item.name}</p>
              <p id="data">{item.description}</p>
            </div>
            <div id="quantity-div">
            <input className="quantityCount" type="Number" min="0"   value={count ? count:0} onClick={setZero} onChange={countChange}></input>
            </div>
            <div className='Wash-type-section'>
                  <div className={` normal1 ${washlist.find((ele)=>ele.id===1) ? "blue1":""}`} onClick={()=>handleclick(washTypes[0])}></div>
                  <div className={` normal2 ${washlist.find((ele)=>ele.id===2) ? "blue2":""}`}  onClick={()=>{handleclick(washTypes[1])}}></div>
                  <div className={` normal3 ${washlist.find((ele)=>ele.id===3) ? "blue3":""}`}  onClick={()=>{handleclick(washTypes[2])}}></div>
                  <div className={` normal4 ${washlist.find((ele)=>ele.id===4) ? "blue4":""}`}  onClick={()=>{handleclick(washTypes[3])}}></div>
              </div>
              <div className='individulas-amount'>
                  { count ?
                   <h3> {count} x {price} ={totalprice} </h3> :
                  <p>____</p> }
              </div>
              <div className='resets'>
                {count || price ?             
            <button className='reset-btn' onClick={reset}>Reset</button> : ""
                }
              </div>
          </div>
    )
}
export default ProductType;