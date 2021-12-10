import React from 'react';
import { Wrapper, Content } from './Loading.styles';

const Loading = () => {
    return (
        <Wrapper>
            <Content>
                <div className="dot-pulse"></div>
            </Content>
        </Wrapper>
    )
}

export default Loading
