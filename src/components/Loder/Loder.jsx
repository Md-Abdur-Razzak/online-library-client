
import { ThreeCircles } from 'react-loader-spinner';

const Loder = () => {
    return (
        <div className='flex justify-center mt-[70px]'>
                <ThreeCircles
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor="red"
        /> 
        </div>
    );
};

export default Loder;