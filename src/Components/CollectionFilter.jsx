import Radio from "../Components/Radio";

function CollectionFilter() {
  const collectionArr = ["Sneakers", "Cricket", "Football", "Running", "Gym"];

  return (
    <div>
      <h1 className="">Collection</h1>
      <div>
        {collectionArr.map((item) => {
          return <Radio name={item} />;
        })}
      </div>
    </div>
  );
}

export default CollectionFilter;
