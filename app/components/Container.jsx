import { Grid } from 'react-md';

export default function Container({ children, ...props }) {
    return (
        <Grid {...props} clone padding={0} columns={1}>
            {children}
        </Grid>
    );
}