import "./img.scss"

export const Image = ({ title, image }) => {
    return (
        <div className='portfolio-item'>
            <div className='hover-bg'>
                <div className='hover-text'>
                    <h4>{title}</h4>
                </div>
                    <img
                        src={image}
                        className='img-responsive'
                        alt={title}
                    />
            </div>
        </div>
    )
}