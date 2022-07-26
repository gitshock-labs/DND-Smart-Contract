import React from 'react';
import styled from 'styled-components';

const MobilePanel = styled.div`
    width: 100%;
    height: 90vh;
`;

export default function MobilePage() {
    return (
        <MobilePanel className="d-flex flex-column align-items-center justify-content-center">
            <div className="px-5">
                <div className="display-3 pb-5">Hey there!</div>
                <div className="text-muted">
                    If you are interested in using Blocks on a mobile device,
                    please check out <a
                    className="text-nowrap"
                    href="https://github.com/gitshock-labs">this GitHub discussion</a>.
                </div>
            </div>
        </MobilePanel>
    );
}