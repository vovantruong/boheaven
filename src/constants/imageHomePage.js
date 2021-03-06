const SERVICES = {
    Transaction: require('../assets/images/pages/home/service-transaction.png'),
    Games: require('../assets/images/pages/home/service-game.png'),
    Protection: require('../assets/images/pages/home/service-protection.png'),
    Devices: require('../assets/images/pages/home/service-devices.png'),
}

const ABOUTUS = {
    BubbleBall: require("../assets/images/pages/home/bubble-ball.png"),
    BubbleDice: require("../assets/images/pages/home/bubble-dice.png"),
    BubbleMahjong: require("../assets/images/pages/home/bubble-mahjong.png"),
    Bubble18: require("../assets/images/pages/home/bubble-18.png"),
    AboutMobileS: require('../assets/images/pages/home/about-mobile-show.png')
}

const GAMELOBBY = {
    IconRealPerSon: require('../assets/images/pages/home/game-lobby/icon-real-person.png'),
    IconRealPerSonMobile: require('../assets/images/pages/home/game-lobby/icon-real-person-mb.svg').default,
    IconRealPerSonActive: require('../assets/images/pages/home/game-lobby/icon-real-person-active.png'),
    IconBingo: require('../assets/images/pages/home/game-lobby/icon-bingo.png'),
    IconBingoMobile: require('../assets/images/pages/home/game-lobby/icon-bingo-mb.svg').default,
    IconBingoActive: require('../assets/images/pages/home/game-lobby/icon-bingo-avtive.png'),
    IconChess: require('../assets/images/pages/home/game-lobby/icon-chess.png'),
    IconChessMobile: require('../assets/images/pages/home/game-lobby/icon-chess-mb.svg').default,
    IconChessActive: require('../assets/images/pages/home/game-lobby/icon-chess-avtive.png'),
    IconElectronic: require('../assets/images/pages/home/game-lobby/icon-electronic.png'),
    IconElectronicMobile: require('../assets/images/pages/home/game-lobby/icon-electronic-mb.svg').default,
    IconElectronicActive: require('../assets/images/pages/home/game-lobby/icon-electronic-avtive.png'),
    IconPhysical: require('../assets/images/pages/home/game-lobby/icon-physical.png'),
    IconPhysicalMobile: require('../assets/images/pages/home/game-lobby/icon-physical-mb.svg').default,
    IconPhysicalActive: require('../assets/images/pages/home/game-lobby/icon-physical-active.png'),
    IconFishing: require('../assets/images/pages/home/game-lobby/icon-fishing.png'),
    IconFishingMobile: require('../assets/images/pages/home/game-lobby/icon-fish-mb.svg').default,
    IconFishingActive: require('../assets/images/pages/home/game-lobby/icon-fishing-avtive.png'),

    RealDG: require('../assets/images/pages/home/game-lobby/real-person/dg-real-person.png'),
    RealDGMobile: require('../assets/images/pages/home/game-lobby/real-person/mb/dg-real-mb.png'),
    RealOber: require('../assets/images/pages/home/game-lobby/real-person/ober-real-person.png'),
    RealOberMobile: require('../assets/images/pages/home/game-lobby/real-person/mb/ober-real-mb.png'),
    RealSA: require('../assets/images/pages/home/game-lobby/real-person/sa-real-person.png'),
    RealSAMobile: require('../assets/images/pages/home/game-lobby/real-person/mb/sa-real-mb.png'),
    RealWM: require('../assets/images/pages/home/game-lobby/real-person/wm-real-person.png'),
    RealWMMobile: require('../assets/images/pages/home/game-lobby/real-person/mb/wm-real-mb.png'),
    RealOB: require('../assets/images/pages/home/game-lobby/real-person/ob-real-person.png'),
    RealOBMobile: require('../assets/images/pages/home/game-lobby/real-person/mb/ob-real-mb.png'),
    RealOG: require('../assets/images/pages/home/game-lobby/real-person/og-real-person.png'),
    RealOGMobile: require('../assets/images/pages/home/game-lobby/real-person/mb/og-real-mb.png'),
    LogoRealDG: require('../assets/images/pages/home/game-lobby/real-person/logo-real-dg.png'),
    LogoRealOber: require('../assets/images/pages/home/game-lobby/real-person/logo-real-ober.png'),
    LogoRealSA: require('../assets/images/pages/home/game-lobby/real-person/logo-sa-real-.png'),
    LogoRealWM: require('../assets/images/pages/home/game-lobby/real-person/logo-real-wm.png'),
    LogoRealOB: require('../assets/images/pages/home/game-lobby/real-person/logo-real-ob.png'),
    LogoRealOG: require('../assets/images/pages/home/game-lobby/real-person/logo-real-og.png'),

    BingoSuperLottery: require('../assets/images/pages/home/game-lobby/bingo/super-lottery.png'),
    Bingo9KLottery: require('../assets/images/pages/home/game-lobby/bingo/9k-lottery.png'),
    LogoSuper: require('../assets/images/pages/home/game-lobby/bingo/logo-super.png'),
    Logo9K: require('../assets/images/pages/home/game-lobby/bingo/logo-9k.png'),

    ElectronicBetter: require('../assets/images/pages/home/game-lobby/electronic/better-electronics.png'),
    ElectronicBetterMobile: require('../assets/images/pages/home/game-lobby/electronic/mb/better-electronic-mb.png'),
    ElectronicBNG: require('../assets/images/pages/home/game-lobby/electronic/bng-electronics.png'),
    ElectronicBNGMobile: require('../assets/images/pages/home/game-lobby/electronic/mb/bng-electronic-mb.png'),
    ElectronicDT: require('../assets/images/pages/home/game-lobby/electronic/dt-electronics.png'),
    ElectronicDTMobile: require('../assets/images/pages/home/game-lobby/electronic/mb/dt-electronic-mb.png'),
    ElectronicPLAY: require('../assets/images/pages/home/game-lobby/electronic/play-electronics.png'),
    ElectronicPLAYMobile: require('../assets/images/pages/home/game-lobby/electronic/mb/play-electronic-mb.png'),
    ElectronicRTG: require('../assets/images/pages/home/game-lobby/electronic/rtg-electronics.png'),
    ElectronicRTGMobile: require('../assets/images/pages/home/game-lobby/electronic/mb/rtg-electronic-mb.png'),
    ElectronicSP: require('../assets/images/pages/home/game-lobby/electronic/sp-electronics.png'),
    ElectronicSPMobile: require('../assets/images/pages/home/game-lobby/electronic/mb/sp-electronic-mb.png'),
    LogoBetterElectronic: require('../assets/images/pages/home/game-lobby/electronic/logo-better.png'),
    LogoBNGElectronic: require('../assets/images/pages/home/game-lobby/electronic/logo-bng-e.png'),
    LogoDTElectronic: require('../assets/images/pages/home/game-lobby/electronic/logo-dt-e.png'),
    LogoPlayElectronic: require('../assets/images/pages/home/game-lobby/electronic/logo-play.png'),
    LogoRTGElectronic: require('../assets/images/pages/home/game-lobby/electronic/logo-rtg-e.png'),
    LogoSPElectronic: require('../assets/images/pages/home/game-lobby/electronic/logo-sp-e.png'),

    BestSport: require('../assets/images/pages/home/game-lobby/physical/best-sports.png'),
    SuperSport: require('../assets/images/pages/home/game-lobby/physical/super-sports.png'),
    PlaceSport: require('../assets/images/pages/home/game-lobby/physical/place-sports.png'),
    LogoBestSport: require('../assets/images/pages/home/game-lobby/physical/logo-best-sports.png'),
    LogoSuperSport: require('../assets/images/pages/home/game-lobby/physical/logo-super-sports.png'),

    SPFishing: require('../assets/images/pages/home/game-lobby/fishing/sp-fishing.png'),
    MustWinFishing: require('../assets/images/pages/home/game-lobby/fishing/must-win-fishing.png'),
    LogoSPfishing:require('../assets/images/pages/home/game-lobby/fishing/logo-sp-fishing.png'),
    LogoMustWinFishing:require('../assets/images/pages/home/game-lobby/fishing/logo-must-win.png'),

    ChessAndCard: require('../assets/images/pages/home/game-lobby/chess/chess-and-card.png'),
    MGChess: require('../assets/images/pages/home/game-lobby/chess/mg-chess.png'),
    LogoChessAndCard: require('../assets/images/pages/home/game-lobby/chess/logo-chess-and-card.png'),
    LogoMGChess: require('../assets/images/pages/home/game-lobby/chess/logo-mg-chess.png'),
    LogoOBChess: require('../assets/images/pages/home/game-lobby/chess/logo-ob-chess.png'),

}

export {SERVICES, ABOUTUS, GAMELOBBY}