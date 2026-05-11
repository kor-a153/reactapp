import React from 'react';
import styled from 'styled-components';

/**
 * DoughnutChart Component
 * @param {number} externalValue - Percentage of external factor (0-100)
 * @param {number} internalValue - Percentage of internal factor (0-100)
 * @param {number} size - Size of the chart in pixels
 */
const DoughnutChart = ({ externalValue = 70, internalValue = 30, size = 200 }) => {
    const strokeWidth = 35;
    const center = size / 2;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    
    // Calculate the stroke-dasharray for the external value
    const dashArray = (externalValue / 100) * circumference;
    const dashOffset = 0; // Starting from top (though SVG circles start from right, we rotate it)

    return (
        <ChartWrapper size={size}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }}>
                {/* Background (Internal Factor) */}
                <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="none"
                    stroke="url(#purpleGradient)"
                    strokeWidth={strokeWidth}
                />
                
                {/* Foreground (External Factor) */}
                <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="none"
                    stroke="url(#blueGradient)"
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${dashArray} ${circumference}`}
                    strokeDashoffset={dashOffset}
                    strokeLinecap="butt"
                />

                <defs>
                    <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0075FF" />
                        <stop offset="100%" stopColor="#00C2FF" />
                    </linearGradient>
                    <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#AB47FF" />
                        <stop offset="100%" stopColor="#7B39FD" />
                    </linearGradient>
                </defs>
            </svg>
            
            <CenterText>
                <Percentage color="#F53102">{externalValue}%</Percentage>
                <Label>외부요인</Label>
            </CenterText>
        </ChartWrapper>
    );
};

const ChartWrapper = styled.div`
    position: relative;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CenterText = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Percentage = styled.div`
    font-size: 28px;
    font-weight: 800;
    color: ${({ color }) => color};
    line-height: 1;
`;

const Label = styled.div`
    font-size: 14px;
    font-weight: 700;
    color: #333;
    margin-top: 4px;
`;

export default DoughnutChart;
