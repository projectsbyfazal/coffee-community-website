import Heading from './common/Heading'

const Map = () => {
    return (
        <section className='section-margin' id='location'>
            <div >
                <Heading title='Our Location' line={false} />

                <div className='pt-md-2'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.45350085028!2d73.18621167385993!3d22.298682342956834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf57d966ad29%3A0xdbf410052003ed37!2sNavlakhi%20Ground!5e0!3m2!1sen!2sin!4v1774718627351!5m2!1sen!2sin"
                        width={'100%'}
                        height={440}
                        id='map-location'
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className='d-block'
                    />
                </div>

            </div>
        </section>
    )
}

export default Map
