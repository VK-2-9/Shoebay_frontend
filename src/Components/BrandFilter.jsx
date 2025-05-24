import Radio from "../Components/Radio";

function BrandFilter(){
    const BrandArr=["Nike","Puma","NewBalance","Wildcraft","Adidas","Reebok","Skechers"]
    return(
       <div>
          <h1 >Brand</h1>
            <div>
        {BrandArr.map((item) => {
          return <Radio name={item} />;
        })}
      </div>
          </div>
    )
}

export default BrandFilter