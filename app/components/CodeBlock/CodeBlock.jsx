import { forwardRef } from 'react';
import cn from 'classnames';

import Code from '../Code';
import styles from './CodeBlock.module.scss';
import LineNumbers from './LineNumbers';
import { highlightCode } from './utils';

/**
 * Renders a code block with highlighted code using PrismJS.
 */
export default forwardRef(function CodeBlock(
    {
        className,
        language = 'markdown',
        children,
        highlight = true,
        lineNumbers: propLineNumbers,
        suppressHydrationWarning = false,
        ...props
    },
    ref
) {
    const code = typeof children === 'string' ? children : '';

    const lineNumbers =
        propLineNumbers ??
        (!/markup|markdown|shell/.test(language) &&
            (code.match(/\r?\n/g) || []).length + 1 > 3);

    let dangerouslySetInnerHTML;
    if (code && highlight) {
        dangerouslySetInnerHTML = {
            __html: highlightCode(code, language),
        };
    }

    return (
        <pre
            {...props}
            data-linenumbers={lineNumbers || undefined}
            ref={ref}
            className={cn(
                styles.block,
                lineNumbers && styles.counted,
                `language-${language}`,
                className
            )}
            suppressHydrationWarning={suppressHydrationWarning}
        >
      {lineNumbers && code && <LineNumbers code={code} />}
            <Code
                inline={!highlight || !code}
                dangerouslySetInnerHTML={dangerouslySetInnerHTML}
                suppressHydrationWarning={suppressHydrationWarning}
            >
        {dangerouslySetInnerHTML ? undefined : children}
      </Code>
    </pre>
    );
});