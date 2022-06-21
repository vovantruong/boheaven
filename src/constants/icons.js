
const icons = {
    user: require('../assets/images/global/user-icon.png'),
    lock: require('../assets/images/global/lock-icon.png'),
}

const Icon = props => {
    const alt = props.alt ? props.alt : '...';
    const name = props.name ? props.name : '';
    return(
        <img className={props.className} src={icons[name]} alt={alt}/>
    )
}

export default Icon;