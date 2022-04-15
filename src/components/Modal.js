const Modal = () => {
  return (
    <div className=" ml-[18rem] border bg-slate-600   w-[31rem] h-[29.5rem]">
      <div className="flex">
        <div className="modal cirlce  ml-[2rem] mt-[4rem]"></div>
        <div className="mt-[5rem] ml-4 ">
          <div className="modal midLine mb-8"></div>
          <div className="modal midLine mb-8"></div>
          <div className="modal midLine"></div>
        </div>
      </div>

      <div className="flex justify-evenly">
        <div className=" ">
          <div className="modal shortLine mb-8 mt-8"></div>
          <div className="modal shortLine mb-8"></div>
          <div className="modal shortLine mb-8"></div>
          <div className="modal shortLine mb-8"></div>
        </div>
        <div className="">
          <div className="modal midLine mb-8 mt-8"></div>
          <div className="modal midLine mb-8"></div>
          <div className="modal midLine mb-8"></div>
          <div className="modal midLine mb-8"></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
