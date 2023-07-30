import cn from 'classnames';

import styles from './styles/Blockquote.module.scss';

export default function Blockquote({ className, children, ...props }) {
    return (
        <blockquote {...props} className={cn(styles.blockquote, className)}>
            {children}
        </blockquote>
    );
}