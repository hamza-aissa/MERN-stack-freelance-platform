import React from "react";
import { useEnlistMutation } from "./userSlice";
import { useDispatch } from "react-redux";
const Enlist = () => {
  const dispatch = useDispatch();
  const [enlist, { isLoading }] = useEnlistMutation();

  const click = () => {};
  return (
    <div className="flex flex-row space-x-5 ">
      <div className="w-[90px] rounded-[10px] border-2 border-primary bg-primary/40  text-primary px-1 py-1 text-center ">
        Enlist
      </div>
      <div className="w-40 rounded-[10px] border-2 border-grey bg-grey/20  text-grey px-1 py-1 ">
        Read Qualifications
      </div>
    </div>
  );
};

export default Enlist;
