import React, {useState, useEffect, useRef, useCallback} from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getIsAffiliate, getGeneralConfig } from '../../store/selectors';

export const PageLoading = ({ text = 'Loading...' }) => {
    const [logoActive, setLogoActive] = useState<boolean>(() => false);

    if (window && (window as any).loadingText) {
        text = (window as any).loadingText;
    }
    return (
        <div className="black-overlay">
            <div>
                <div className="swapdex-loader" />
                <div className="loading-text">
                    <strong>{text}</strong>
                </div>
            </div>
        </div>
    );
};
