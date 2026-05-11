import React from 'react';
import styled from 'styled-components';

/**
 * RadarChart Component
 * @param {Array} data - Array of { label: string, value: number (0-100) }
 * @param {number} size - Size of the chart in pixels
 */
const RadarChart = ({ data, size = 300 }) => {
    const center = size / 2;
    const radius = (size / 2) * 0.7; // Leave space for labels
    const angleStep = (Math.PI * 2) / data.length;

    // Calculate points for the data polygon
    const points = data.map((item, i) => {
        const value = item.value || 0;
        const x = center + radius * (value / 100) * Math.sin(i * angleStep);
        const y = center - radius * (value / 100) * Math.cos(i * angleStep);
        return `${x},${y}`;
    }).join(' ');

    // Calculate points for the background grid (concentric hexagons)
    const gridLevels = [25, 50, 75, 100];
    const gridPoints = gridLevels.map(level => {
        return data.map((_, i) => {
            const x = center + radius * (level / 100) * Math.sin(i * angleStep);
            const y = center - radius * (level / 100) * Math.cos(i * angleStep);
            return `${x},${y}`;
        }).join(' ');
    });

    return (
        <ChartContainer size={size}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                {/* Grid Lines (Axes) */}
                {data.map((_, i) => {
                    const x = center + radius * Math.sin(i * angleStep);
                    const y = center - radius * Math.cos(i * angleStep);
                    return (
                        <line 
                            key={`axis-${i}`}
                            x1={center} y1={center} 
                            x2={x} y2={y} 
                            stroke="#E0E0E0" 
                            strokeWidth="1" 
                        />
                    );
                })}

                {/* Grid Polygons (Levels) */}
                {gridPoints.map((gp, i) => (
                    <polygon 
                        key={`grid-${i}`}
                        points={gp} 
                        fill="none" 
                        stroke="#E0E0E0" 
                        strokeWidth="1" 
                    />
                ))}

                {/* Data Polygon */}
                <polygon 
                    points={points} 
                    fill="rgba(171, 71, 255, 0.2)" 
                    stroke="#AB47FF" 
                    strokeWidth="2" 
                    strokeLinejoin="round"
                />

                {/* Labels */}
                {data.map((item, i) => {
                    const x = center + (radius + 20) * Math.sin(i * angleStep);
                    const y = center - (radius + 20) * Math.cos(i * angleStep);
                    
                    // Adjust text anchor based on position
                    let textAnchor = "middle";
                    if (Math.sin(i * angleStep) > 0.1) textAnchor = "start";
                    if (Math.sin(i * angleStep) < -0.1) textAnchor = "end";

                    return (
                        <text 
                            key={`label-${i}`}
                            x={x} 
                            y={y} 
                            textAnchor={textAnchor}
                            dominantBaseline="middle"
                            fontSize="13"
                            fontWeight="600"
                            fill="#333"
                        >
                            {item.label}
                        </text>
                    );
                })}
            </svg>
        </ChartContainer>
    );
};

const ChartContainer = styled.div`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default RadarChart;
