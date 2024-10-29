import React from 'react';

export const Channel = ({data}) => {
    return (
        <div>
            <h1>{data.message}</h1>
            <h1>{data.tutorial}</h1>
        </div>
    )
}