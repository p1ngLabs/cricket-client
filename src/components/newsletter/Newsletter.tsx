const Newsletter = () => {
  return (
    <div className="flex sm:flex-row sm:justify-between flex-col items-start gap-8 py-8">
      <div className="left-newsletter prose">
        <h2 className="mb-2">Subcribe to our newsletter</h2>
        <h4>To receive exclusive offers and deals</h4>
      </div>
      <form className="flex items-center gap-2 sm:w-2/5">
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Your email address"
        />
        <button type="button" className="btn uppercase">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
