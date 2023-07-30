import {Typography} from '@react-md/typography';
import {Grid} from '@react-md/utils';
import Code from './Code';

export function CurrentChildren({route}) {
    return (
        <Grid columns={1}>
            <Typography type="headline-4" margin="none">
                Добро пожаловать на мой сайт
            </Typography>
            <Typography margin="none">
                {/*Блог*/}
                <br/>
                {/*The current route is: <Code>{route}</Code>*/}
                Текущий путь страницы: <Code>{route}</Code>
            </Typography>
        </Grid>
    );
}