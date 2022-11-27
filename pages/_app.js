import { Fragment } from 'react';
import { Toaster } from 'react-hot-toast';

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const MyApp = ({ Component, pageProps }) => {
    return (
        <Fragment>
            <Toaster
                position="top-right"
            />
            <Component {...pageProps} />
        </Fragment>
    );
}

export default MyApp
