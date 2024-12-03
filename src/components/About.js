import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: 'Hi, My name is Suriyaprakash A. I am a Frontend  Web Developer with a passion for building engaging and efficient web applications using modern technologies.',
        line2: 'I specialize in Frontend development with expertise in React.js, JavaScript, and Bootstrap, along with hands-on experience in CSS3',
        line3: 'On the Backend, I have knowledge in Node.js, MongoDB, and I focus on creating scalable and robust solutions .',
        line4: 'I also have experience working with AWS services, including S3 for storage solutions and EC2 for scalable computing environments.'
        
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
                <p className='pb-5'>{config.line4}</p>
            </div>
        </div>
    </section>
}