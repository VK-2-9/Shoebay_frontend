import Radio from "../Components/Radio";


function ColorFilter(){
    const ColorArr=["Red","Blue","Black","Yellow","Green","White"]
    return(
         <div>
          <h1 className="">Colour</h1>
          <div>
        {ColorArr.map((item) => {
          return <Radio name={item} />;
        })}
      </div>
          </div>
    )
}

export default ColorFilter