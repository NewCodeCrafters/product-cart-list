const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center gap-5 mb-7">
      <figure>
        <img src="/images/illustration-empty-cart.svg" alt="" />
      </figure>
      <p className="text-rose-500 font-semibold text-base">
        Your added items will appear here
      </p>
    </div>
  );
};

export default EmptyCart;
