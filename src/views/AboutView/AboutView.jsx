import css from './AboutView.module.css'
import testImg from '../../utils/img/testimg.jpg'

const AboutView = () => {
    return (
        <>
            <div className={css.container}>
                <img src={testImg} className={css.img} alt="test"/>
                <div>
                    <p className={css.nameTextStyle}>Christoffer Knaving</p>
                    <p className={css.infoTextStyle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                        doloribus earum, eius et explicabo harum molestiae nam neque pariatur quae, reiciendis tempora
                        temporibus ut voluptas voluptatum! Ab aspernatur autem, cum dignissimos dolor doloribus eligendi
                        eum
                        ex illo laboriosam magni minus nostrum perferendis placeat repudiandae sunt suscipit tenetur vel
                        veniam voluptatum?</p>
                    <p className={css.infoTextStyle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                        doloribus earum, eius et explicabo harum molestiae nam neque pariatur quae, reiciendis tempora
                        temporibus ut voluptas voluptatum! Ab aspernatur autem, cum dignissimos dolor doloribus eligendi
                        eum
                        ex illo laboriosam magni minus nostrum perferendis placeat repudiandae sunt suscipit tenetur vel
                        veniam voluptatum?</p>
                </div>

            </div>

        </>
    )
}

export default AboutView