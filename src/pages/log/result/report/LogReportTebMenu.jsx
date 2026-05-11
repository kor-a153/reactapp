import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';

const LogReportTebMenu = () => {
    const { id } = useParams();

    return (
        <S.MenuWrapper>
            <S.TabLink to={`/logs/result/${id}/report/patterns`}>
                패턴 분석
            </S.TabLink>
            <S.TabLink to={`/logs/result/${id}/report/action-plan`}>
                행동 계획
            </S.TabLink>
        </S.MenuWrapper>
    );
};

const S = {};

S.MenuWrapper = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: 32px;
    margin-left: 21px;
`;

S.TabLink = styled(NavLink)`
    width: 131px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border-radius: 10px;
    font-size: ${({ theme }) => theme.FONT_SIZE.h7};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    
    border: 1px solid ${({ theme }) => theme.PALETTE.third.main};
    color: ${({ theme }) => theme.PALETTE.third.main};
    background-color: ${({ theme }) => theme.PALETTE.white};

    &.active {
        background-color: ${({ theme }) => theme.PALETTE.third.main};
        color: ${({ theme }) => theme.PALETTE.white};
    }

    &:hover:not(.active) {
        background-color: ${({ theme }) => theme.PALETTE.third.light};
    }
`;

export default LogReportTebMenu;