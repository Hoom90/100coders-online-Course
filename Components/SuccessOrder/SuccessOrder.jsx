import Button from '@/Commons/buttons/Button';
import Image from 'next/image';
import React from 'react';
import checkMark from './checkmark.png'

function SuccessOrder(props) {
    return (
        <div className=' m-4 shadow-2xl rounded-3xl flex flex-col justify-center items-center w-[475px]  mx-auto' >
            <Image src={checkMark} alt="" className='mb-8 mt-6'/>
            <h3 className='mb-16 font-bold'>سفارش شما با موفقیت ثبت شد</h3>
            <p className='mb-8'>اکنون میتوانید دوره خود را در داشبورد خود مشاهده کنید</p>
            <Button className='mb-8'>رفتن به داشبورد</Button>
        </div>
    );
}

export default SuccessOrder;

// 475 px