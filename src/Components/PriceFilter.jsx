import Radio from "../Components/Radio";

function CollectionFilter(){
    const PriceArr=["500-1000","1000-2000","2000-3000","Above 3000"]
    return(
        <div>
            <h1>Price</h1>
            <div>
        {PriceArr.map((item) => {
          return <Radio name={item} />;
        })}
      </div>
        </div>
    )
}

export default CollectionFilter