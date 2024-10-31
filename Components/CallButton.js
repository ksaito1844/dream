'use client'
import React, { useContext } from 'react';
import { AgoraContext } from '@/context/voiceContext';

const CallButton = ({ onClick }) => {
    const { isJoined } = useContext(AgoraContext);
    return (
        <button onClick={onClick}>
            {isJoined ? 'Leave' : 'Start Audio Chat'}
        </button>
    );
};

export default CallButton;
