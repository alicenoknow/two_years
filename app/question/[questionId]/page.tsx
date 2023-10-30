import React from 'react';
import { Oops, Question } from '@/components';

const Page = ({ params }: { params: { questionId: string } }) => {
    const { questionId } = params;
    const questionNum = parseInt(questionId);

    if (isNaN(questionNum)) {
        return <Oops />;
    }
    return <div className='overflow-y-scroll no-scrollbar'><Question num={questionNum} /></div>;
}

export default Page;
