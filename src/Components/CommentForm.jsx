const CommentForm = () => {
  return (
    <div className="text-slate-500">
      <div className="flex gap-4">
        <div className="my-4">
          <p>Full Name</p>
          <input
            type="text"
            placeholder=""
            className="px-4 py-2 border border-black bg-transparent outline-none"
          />
        </div>
        <div className="my-4">
          <p>Email</p>
          <input
            type="email"
            placeholder=""
            className="px-4 py-2 border border-black bg-transparent outline-none"
          />
        </div>
        <div className="my-4">
          <p>Web Side</p>
          <input
            type="text"
            placeholder=""
            className="px-4 py-2 border border-black bg-transparent outline-none"
          />
        </div>
      </div>
      <div className="my-4 w-full">
        <p>Your Comment Box</p>
        <textarea
          className="px-4 py-2 border  border-black bg-transparent outline-none"
          name=""
          id=""
          cols="70"
          rows="6"
        ></textarea>
        <button className="btn-style my-6">Submit Comment</button>
      </div>
    </div>
  );
};

export default CommentForm;
