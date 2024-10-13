"use client"
/**
 * CSR 에서 동적 페이지 이동(유형 2번)
 */

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

function CSRComponent () {    
    // 1. 라우터 객체 획득
    const router = useRouter();
    useEffect( ()=>{
        // 2. 타이머 설정
        setTimeout(()=>{
            // 3. 페이지 이동
            router.push('/link');
        }, 1000*2)
    }, [])    
    return (
        <>
            <div>
                - 2초후 페이지 이동
            </div>
        </>
    );
}


export default CSRComponent
