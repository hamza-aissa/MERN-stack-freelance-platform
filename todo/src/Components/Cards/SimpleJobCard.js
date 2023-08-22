import React from "react";
import Card from "./Card";
import user from "../../assets/user.jpg";
const SimpleJobCard = () => {
  return (
    <Card height="250px" width="350px">
      <div className="flex flex-col mx-4 ">
        <div className="flex flex-row space-x-5">
          <img className="rounded-full w-[40px] h-[40px] " src={user} alt="" />
          <div className="flex flex-col">
            <h3 className="font-poppins text-white font-semibold ">jobtitle</h3>
            <span className="font-poppins text-grey font-normal ">company</span>
          </div>
        </div>
        <div>
          <p className="text-sm text-grey font-poppins ">
            We are Looking for an experienced full-stach develper to work on a
            freelance platform project Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Libero voluptas
          </p>
        </div>
        <div className="flex flex-row space-x-3">
          <div className="rounded-[30px] bg-grey  text-white font-poppins font-light px-2 py-2  ">
            full-stack
          </div>
          <div className="rounded-[30px] bg-grey text-white font-poppins font-light px-2 py-2">
            remote
          </div>
          <div className="rounded-[30px] bg-grey  text-white font-poppins font-light px-2 py-2 ">
            full time
          </div>
        </div>
        <div className="flex flex-row space-x-5 ">
          <div className="w-[90px] rounded-[10px] border-2 border-primary bg-primary/40  text-primary px-1 py-1 text-center ">
            Enlist
          </div>
          <div className="w-40 rounded-[10px] border-2 border-grey bg-grey/20  text-grey px-1 py-1 ">
            Read Qualifications
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SimpleJobCard;
