function OrderCard( props) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4 my-4">
      <img src={props.img} alt={props.name} className="w-24 h-24 object-cover rounded-lg" />
      <div>
        <h2 className="text-lg font-semibold">{props.name}</h2>
        <p className="text-sm text-gray-600">Quantity: {props.qty}</p>
      </div>
    </div>
  );
}

export default OrderCard;
