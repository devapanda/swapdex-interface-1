import React from 'react';
import ReactSVG from 'react-svg';
import styled, { withTheme , DefaultTheme} from 'styled-components';

import { Theme } from '../../../themes/commons';

interface Props {
    isInline?: boolean;
    icon?: string;
    theme: DefaultTheme;
}

const IconContainer = styled.div<{ color: string; isInline?: boolean }>`
    align-items: center;
    background-color: ${props => (props.color ? props.color : 'transparent')};
    border-radius: 50%;
    display: ${props => (props.isInline ? 'inline-flex' : 'flex')};
    height: 26px;
    justify-content: center;
    width: 200px;
`;

const LogoIconContainer = (props: Props) => {
    const { theme, icon, ...restProps } = props;

    const fallBack = null;
    const isSvg = new RegExp('.svg$');
    const isImage = new RegExp('(http(s?):)?.*.(?:jpg|gif|png)');

    let Icon;
    if (isSvg.test(icon as string)) {
        Icon = styled.img`
            width: 80%;
            display: flex;
        `;
    }
    if (isImage.test(icon as string)) {
        Icon = styled.img`
            width: 80%;
            display: flex;
        `;
    }
    if (!Icon) {
        return null;
    }

    return (
        <IconContainer color="transparent" {...restProps}>
            <Icon src={icon as string} alt="logo"></Icon>
        </IconContainer>
    );
};

const LogoIcon = withTheme(LogoIconContainer);

export { LogoIcon };
