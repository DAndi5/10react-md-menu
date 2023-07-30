import { forwardRef } from 'react';
import cn from 'classnames';

import styles from './Code.module.scss';

/**
 * This component is normally used to render inline code throughout the website.
 */
export default forwardRef(function Code(
    {
        children,
        className,
        dangerouslySetInnerHTML,
        inline = !dangerouslySetInnerHTML,
        ticked = inline,
        noWrap = false,
        ...props
    },
    ref
) {
    return (
        <code
            {...props}
            ref={ref}
            className={cn(
                styles.code,
                {
                    [styles.inline]: inline,
                    [styles.ticked]: ticked,
                    [styles.oneline]: inline && noWrap,
                },
                className
            )}
            dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        >
            {children}
        </code>
    );
});