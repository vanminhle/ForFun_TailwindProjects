import WomanImg from './../assets/img/contact/woman.png';

export default function Contact() {
  return (
    <section className='section bg-white'>
      <div className='container mx-auto h-full'>
        <div className='flex h-full flex-col items-center justify-start gap-x-8 pt-36 text-center lg:flex-row lg:text-left'>
          {/* bg */}
          <div className='absolute bottom-0 left-0 right-0 top-72 -z-10 hidden bg-[#eef7f9] lg:flex'>
            bg
          </div>
          {/* text & form */}
          <div className='lg:pt-30 px-4 lg:flex-1'>
            <h1 className='h1'>Contact me</h1>
            <p className='mb-12'>I would love to get suggestions from you.</p>
            {/* form */}
            <form className='flex flex-col gap-y-4'>
              <div className='flex gap-x-10'>
                <input
                  className='h-[60px] w-full border-b border-b-primary bg-transparent pl-3 font-secondary outline-none placeholder:text-[#757879]'
                  type='text'
                  placeholder='Your name'
                />
                <input
                  className='h-[60px] w-full border-b border-b-primary bg-transparent pl-3 font-secondary outline-none placeholder:text-[#757879]'
                  type='email'
                  placeholder='Your email address'
                />
              </div>
              <input
                className='h-[60px] w-full border-b border-b-primary bg-transparent pl-3 font-secondary outline-none placeholder:text-[#757879]'
                type='text'
                placeholder='Your message'
              />
              <button className='btn mx-auto mb-[30px] self-start lg:mx-0'>Send it</button>
            </form>
          </div>
          {/* image */}
          <div className='lg:flex-1'>
            <img src={WomanImg} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
}
