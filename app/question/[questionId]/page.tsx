import React from 'react';
import { Oops, Question } from '@/components';

const Page = ({ params }: { params: { questionId: string } }) => {
    const { questionId } = params;
    const questionNum = parseInt(questionId);

    if (isNaN(questionNum)) {
        return <Oops />;
    }
    return <Question num={questionNum} />;
}

export default Page;
