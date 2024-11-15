import React from "react";

const CapitalGainsCard = () => {
  return (
    <div className="bg-black p-4 lg:p-8">
      <div className="w-full px-4 lg:px-6 py-2 bg-[#161618] rounded-[10px] border border-[#2C2C30] flex flex-col lg:inline-flex lg:flex-row items-center gap-4 lg:gap-6 font-['Montserrat']">
        {/* Total Gains Section */}
        <div className="w-full lg:flex-1 flex flex-col gap-3.5">
          <div className="flex items-center gap-2.5">
            <div className="w-[3px] h-5 bg-[#F3C762] rounded-[10px]" />
            <div className="text-[#F2F2F2] text-base lg:text-[18px] font-normal leading-[27px]">
              TOTAL CAPITAL GAINS
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="text-white text-xl lg:text-[24px] font-medium leading-9 tracking-[0.48px]">
              $227.169,85
            </div>
            <div className="text-[#B4B4B4] text-sm font-normal leading-[21px]">
              USD
            </div>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="w-full lg:w-[103px] flex lg:flex-col gap-3.5">
          <button className="flex-1 lg:flex-none h-[33px] px-6 py-3.5 bg-transparent rounded-md border border-[#E14E18] inline-flex justify-center items-center shadow-[inset_0px_7.4px_18.5px_rgba(255,255,255,0.11)]">
            <span className="text-white text-xs font-medium">View Tax</span>
          </button>
          <button className="flex-1 lg:flex-none h-[33px] px-6 py-3.5 bg-transparent rounded-md border border-[#2C2C30] inline-flex justify-center items-center shadow-[inset_0px_7.4px_18.5px_rgba(255,255,255,0.11)]">
            <span className="text-white text-xs font-normal">Export</span>
          </button>
        </div>

        {/* Vertical Divider - Hidden on mobile */}
        <div className="hidden lg:block w-0 self-stretch border border-[#2C2C30]" />

        {/* Term Cards Section */}
        <div className="w-full flex flex-col lg:flex-row items-stretch lg:items-center gap-2">
          {/* Short Term Card */}
          <div className="flex-1 lg:w-[198px] p-4 rounded-[10px] border border-[#2C2C30] flex flex-col justify-center gap-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2.5 h-[21px]">
                <div className="w-[3px] h-5 bg-[#759D04] rounded-[10px]" />
                <div className="text-[#F2F2F2] text-sm font-normal leading-[21px]">
                  SHORT TERM
                </div>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <div className="flex items-center gap-1.5">
                <div className="text-[#759D04] text-xl lg:text-[24px] font-medium leading-9 tracking-[0.48px]">
                  +$20,300
                </div>
                <div className="text-[#ACB5BB] text-sm font-normal leading-[21px]">
                  USD
                </div>
              </div>
            </div>
          </div>

          {/* Long Term Card */}
          <div className="flex-1 lg:w-[198px] p-4 rounded-[10px] border border-[#2C2C30] flex flex-col justify-center gap-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2.5 h-[21px]">
                <div className="w-[3px] h-5 bg-[#E36030] rounded-[10px]" />
                <div className="text-[#F2F2F2] text-sm font-normal leading-[21px]">
                  LONG TERM
                </div>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <div className="flex items-center gap-1.5">
                <div className="text-[#E14E18] text-xl lg:text-[24px] font-medium leading-9 tracking-[0.48px]">
                  -$5000
                </div>
                <div className="text-[#ACB5BB] text-sm font-normal leading-[21px]">
                  USD
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapitalGainsCard;
