import Link from 'next/link';

import styles from './css/homepage.module.scss';

const Homepage = () => {

    const getRandomNumber = () => {
        return Math.floor(Math.random() * 1000000000);
    }

	return (
		<div className={styles.s__container}>
			<div className='container py-5 text-center'>
				<h1>We Call</h1>

                <p className='pt-4'>We call is a video calling application, just create a room and start calling.</p>

				<Link href={`/call/${getRandomNumber()}`} className='btn btn-primary my-3 rounded-0'>
					Create room
				</Link>
			</div>
		</div>
	);
};

/*
Steps:
1. Create Offer -> Then send connection to other users.
2. Listen connection -> Get offer from other user -> Create answer -> send to other user -> 
*/

export default Homepage;
