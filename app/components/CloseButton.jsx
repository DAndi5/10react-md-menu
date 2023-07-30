import {
    useLayoutConfig,
    isPersistentLayout,
} from '@react-md/layout';
import {
    ChatSVGIcon,
    CloseSVGIcon,
    DeleteSVGIcon,
} from '@react-md/material-icons';

import {
    LayoutCloseNavigationButton,
} from 'react-md';

export default function CloseButton() {
    const {layout} = useLayoutConfig();
    return (
        <LayoutCloseNavigationButton
            buttonType="icon"
            rendered={!isPersistentLayout(layout)}
        >
            <CloseSVGIcon/>
        </LayoutCloseNavigationButton>
    );
}