import Radio from "../Components/Radio";

function CollectionFilter(){
    const PriceArr=["1000-2000","2000-3000","3000-4000","Above 4000"]
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