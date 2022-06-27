
const icons = {
    user: require('../assets/images/global/user-icon.png'),
    lock: require('../assets/images/global/lock-icon.png'),
    previous: require('../assets/images/global/previous-icon.png'),
    next: require('../assets/images/global/next-icon.png'),
}

const Icon = ({name, ...props}) => {
    const alt = props.alt ? props.alt : '...';
    const nameIcon = name ? name : '';
    return(
        <img className={props.className} src={icons[nameIcon]} alt={alt}/>
    )
}

export default Icon;