const tag = {
    VIP1: require('../assets/images/global/header/vip-1.png'),
    VIP2: require('../assets/images/global/header/vip-2.png'),
    VIP3: require('../assets/images/global/header/vip-3.png'),
    VIP4: require('../assets/images/global/header/vip-4.png'),
    VIP5: require('../assets/images/global/header/vip-5.png'),
    VIP6: require('../assets/images/global/header/vip-6.png'),
}

const Vip = ({name = "",...props}) => {
    const alt = props.alt ? props.alt : '...';
    const nameVip = name ? name : 'v1';
    return(
        <img className={props.className} src={tag[nameVip]} alt={alt}/>
    )
}

export default Vip;