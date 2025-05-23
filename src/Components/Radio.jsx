function Radio() {
  return (
    <div className="ml-5 flex justify-start gap-2 items-center ">
      <input
        type="checkbox"
        value="nike"
        className="appearance-none w-3 h-3  border-2 border-blue-700 checked:bg-blue-700 checked:border-white checked:ring-blue-700   checked:ring-2 rounded-full cursor-pointer"
      ></input>
      <label for="nike" className="">Nike</label>
    </div>
  );
}

export default Radio;
