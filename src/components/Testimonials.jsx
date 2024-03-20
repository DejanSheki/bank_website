
import testimonialsImg from '../assets/testimonials.png';
import Star from './Star';

const Testimonials = () => {
    return (
        <section>
            <div>
                <img src={testimonialsImg} alt="Testimonials Img" />
            </div>
            <div>
                <h2>John Smith</h2>
                <p>“The online banking platform simplifies my financial tasks with its user-friendly interface and robust security features”</p>
                <div>
                    <Star fillColor="#E9ED14" />
                </div>
            </div>
        </section>
    )
}

export default Testimonials;