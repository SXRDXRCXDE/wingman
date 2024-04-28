import React from "react";
import style from "./style.module.css";

import wingman from "../../assets/wingman text logo.svg";
import avatar from "../../assets/model_avatar.jfif";
import coma from "../../assets/Icon.svg";
import info_circle from "../../assets/info_circle.svg";
import apple from "../../assets/Vector.svg";
import android from "../../assets/Vector (1).svg";

export default function Main() {

    return<>
        <div className={style.container}>

            <div className={'w-full h-40 bg-[#3480C1] flex flex-col max-[750px]:items-start px-6 items-center justify-center '}>

                <img src={wingman} className={'w-[180px] max-[750px]:w-[136px] max-[750px]:h-[41px] h-[54px] object-contain '} alt={'wingman'}/>
                <span className={'text-[20px] max-[750px]:text-[16px] font-[500]  text-white '}>better dates landed by friends</span>

            </div>

            <div className={'w-full px-6 flex flex-col max-[750px]:items-start items-center mt-[48px]'}>

                <div className={'w-[120px] h-[120px] rounded-full p-[2px] bg-[#3480C1] overflow-hidden'}>
                    <img src={avatar} className={'w-full h-full object-cover rounded-full  '} alt={'wingman'}/>
                </div>

                <div className={'flex items-center gap-1 '}>
                    <span className={'text-[40px] max-[750px]:text-[32px] font-[500]'}>Hey</span>
                    <span style={{ fontFamily: 'Buffalo, sans-serif' }} className={'text-[80px] max-[750px]:text-[60px] text-[#3480C1]'}>Suzy!</span>
                </div>
                <span className={'text-[24px] max-[750px]:text-[18px] max-[750px]:-translate-y-4 -translate-y-5'}>Jess wants to be your Wingman.</span>
                <div className={'max-[750px]:w-full  w-[648px] max-[750px]:h-auto h-[156px] rounded-2xl border-2 border-[#E7E7E8] flex flex-col items-start max-[750px]:p-4 p-6'}>

                    <span className={'text-[18px] max-[750px]:text-[16px] font-[500] text-[#121212]'}>Jess says about you:</span>
                    <div className={'w-full h-auto flex items-start relative gap-3 mt-2'}>

                        <img src={coma} className={'w-[20px] h-[18px] object-contain'} alt={'wingman'}/>

                        <p className={'text-start text-[#343A41] text-[16px] max-[750px]:text-[14px] leading-[24px]'}>
                            Suzy is a collector of antique furniture, vintage clothing,
                            or other items, who is a great listener and always willing to lend an ear.<br/>
                            Suzy is looking for a person who isn’t afraid of banter.
                        </p>

                    </div>

                </div>

                <div className={'w-[420px] max-[750px]:w-full h-[56px] text-[16px] text-white rounded-full bg-[#3480C1] mt-6 flex fle-col items-center justify-center'}>
                    Accept
                </div>

                <div className={'max-[750px]:w-full max-[750px]:h-auto w-[648px] h-[162px] bg-[#FAFAFA] mt-6 rounded-xl flex items-start gap-3 p-4'}>

                    <img src={info_circle} alt={'wingman'} />

                    <div className={'flex flex-col items-start text-start'}>

                        <span className={'text-[18px] text-[#121212]'}>What is Wingman?</span>

                        <p className={'text-[16px] text-[#343A41]'}>
                            Wingman is a new app that let’s friends and family help their single friend (or family member) find a perfect match.<br/> Wingman is a trusted community of singles, joined by their closest friends and family to help them on the tricky path to love.
                        </p>

                    </div>

                </div>


            </div>


            <div className={'w-full h-[130px] max-[750px]:h-[105px] bg-[#3480C1] mt-[48px] flex flex-col items-center justify-center'}>

                <span className={'text-white text-[16px]'}>Available on:</span>

                <div className={'flex gap-4 items-center mt-4'}>
                    <img src={apple} className={'max-[750px]:w-[32px] max-[750px]:h-[32px] w-[36px] h-[36px] object-contain'}/>
                    <img src={android} className={'max-[750px]:w-[32px] max-[750px]:h-[32px] w-[36px] h-[36px] object-contain'}/>
                </div>

            </div>

        </div>
    </>
}