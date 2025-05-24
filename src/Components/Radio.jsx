import { useContext } from "react";
import { DataContext } from "./DataContext";
 


function Radio(props) {

  const{filterInput,setFilterInput,allProducts, setAllProducts,productsData}=useContext(DataContext)

 

  const  handleClick=(e)=>{
    const selectedvalue=e.target.value.toLowerCase()
    let selectedFilters=[];
    if((filterInput.includes(selectedvalue))){
      selectedFilters=filterInput.filter((item)=>item!==selectedvalue)
        
    }else{
        selectedFilters=[...filterInput,selectedvalue]
    }
    setFilterInput(selectedFilters)
          console.log(filterInput)
          console.log(selectedFilters)
    
    if(selectedFilters.length===0) {
      setAllProducts(productsData)
    }  else{
        const radioFilteredProducts=productsData.filter((item)=>{
          return selectedFilters.every((tag=>item.tags.includes(tag)))
        })
        setAllProducts(radioFilteredProducts)
    }
  }

  return (
    <div className="ml-5 flex justify-start gap-2 items-center ">
      <input
      onChange={handleClick}
        type="checkbox"
        value={props.name}
        className="appearance-none w-3 h-3  border-2 border-blue-700 checked:bg-blue-700 checked:border-white checked:ring-blue-700   checked:ring-2 rounded-full cursor-pointer"
      ></input>
      <label for={props.name} className="">{props.name}</label>
    </div>
  );
}

export default Radio;
