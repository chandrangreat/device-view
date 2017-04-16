import React from 'react';
import Device from './Device';

export default function Devices ({ data }) {
    return (
        <div className='devices-outer'>
            {data.map(device => (
                <Device key={device.id} device={device} />
            ))
            }
        </div>
    );
}