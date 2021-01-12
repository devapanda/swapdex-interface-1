import React from 'react';
import styled, { withTheme , DefaultTheme} from 'styled-components';

interface Props {
    isInline?: boolean;
    icon?: string;
    theme: DefaultTheme;
    width?: string;
}

const IconContainer = styled.div<{ color: string; isInline?: boolean; width?: string; }>`
    align-items: center;
    background-color: ${props => (props.color ? props.color : 'transparent')};
    border-radius: 50%;
    display: ${props => (props.isInline ? 'inline-flex' : 'flex')};
    height: 26px;
    width: ${props => (props.width || '200px')};
`;

const IconImage = styled.img`
    width: 80%;
    display: flex;
`;

const LogoIconContainer = (props: Props) => {
    const { theme, icon, ...restProps } = props;

    const isSvg = new RegExp('.svg$');
    const isImage = new RegExp('(http(s?):)?.*.(?:jpg|gif|png)');

    if (!isSvg.test(icon as string) && !isImage.test(icon as string)) {
        return null;
    }

    return (
        <IconContainer color="transparent" {...restProps}>
            <IconImage src={icon as string} alt="logo" />
        </IconContainer>
    );
};

const LogoIcon = withTheme(LogoIconContainer);

export { LogoIcon };
