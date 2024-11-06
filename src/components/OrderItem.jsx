/* eslint-disable react/prop-types */
const OrderItem = (props) => {
  console.log(props);
  return (
    <li className="flex justify-between items-center border-b border-b-rose-400/15 pb-3">
      <div className="flex gap-2 items-center">
        <figure className="w-20 rounded-md overflow-hidden">
          <img src={props.image.thumbnail} alt={props.name} />
        </figure>
        <div className="flex flex-col gap-3">
          <h3 className="text-rose-900 font-semibold text-lg">{props.name}</h3>
          <div className="flex gap-4">
            <span className="text-red font-semibold text-base">
              {props.quantity}x
            </span>
            <span className="text-rose-400 font-normal text-base">
              @ ${props.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <span className="text-rose-900 font-semibold text-base">
        ${(props.quantity * props.price).toFixed(2)}
      </span>
    </li>
  );
};

export default OrderItem;
