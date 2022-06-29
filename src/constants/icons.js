
const icons = {
    user: require('../assets/images/global/user-icon.png'),
    lock: require('../assets/images/global/lock-icon.png'),
    previous: require('../assets/images/global/previous-icon.png'),
    next: require('../assets/images/global/next-icon.png'),
    member: require('../assets/images/global/member-icon.png'),
    diamon: require('../assets/images/global/diamon-icon.png'),
    bar: require('../assets/images/global/bar-icon.png'),
    cardDate: require('../assets/images/global/card-date-icon.png'),
    cardTranslate: require('../assets/images/global/card-translate-dola-icon.png'),
    visa: require('../assets/images/global/visa-icon.png'),
    addPeople: require('../assets/images/global/add-people-icon.png'),
    question: require('../assets/images/global/question-icon.png'),
    close: require('../assets/images/global/close-outline.png'),
    facebook: require('../assets/images/global/social-fb-icon.png'),
    line: require('../assets/images/global/social-line-icon.png'),
    mail: require('../assets/images/global/social-mail-icon.png'),
    arrowRight: require('../assets/images/global/rectangle-right-icon.png'),
}

const Icon = ({name, ...props}) => {
    const alt = props.alt ? props.alt : '...';
    const nameIcon = name ? name : '';
    return(
        <img className={props.className} src={icons[nameIcon]} alt={alt}/>
    )
}

export default Icon;