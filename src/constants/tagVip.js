const tag = {
    v1: require('../assets/images/global/header/vip-1.png'),
    v2: require('../assets/images/global/header/vip-2.png'),
    v3: require('../assets/images/global/header/vip-3.png'),
    v4: require('../assets/images/global/header/vip-4.png'),
    v5: require('../assets/images/global/header/vip-5.png'),
    v6: require('../assets/images/global/header/vip-6.png'),
}

const Vip = props => {
    const alt = props.alt ? props.alt : '...';
    const name = props.name ? props.name : '';
    return(
        <img className={props.className} src={tag[name]} alt={alt}/>
    )
}

export default Vip;