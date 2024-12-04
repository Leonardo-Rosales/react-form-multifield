import style from './Card.module.css'
import Button from '../Button/Button'
import placeHolder from '../../assets/placeholder.png'
import Tags from '../Tags/Tags'

export default function Card({ post, deletePost }) {
    const {
        id,
        title,
        image = placeHolder,
        content,
        tags,
        category,
    } = post;

    return (
        <div className={style.card}>
            <img className={style.image} src={image} alt={title} />
            <div className={style.card_body}>
                <h3 className={style.card_title}>{title}</h3>
                <Tags tags={tags} />
                <div>{category}</div>
                <p className={style.card_description}>{content}</p>
                <Button text="Leggi di più" />
                <button
                    className={style.deleteButton}
                    onClick={() => deletePost(id)}
                >
                    Elimina
                </button>
            </div>
        </div>
    );
}