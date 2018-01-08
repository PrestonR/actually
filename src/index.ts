export function isActually (isNotActually){
    return !Boolean( isNotActually == undefined || isNotActually == '' || isNotActually == null );
}

export function justWork (...likeMagic) {
    let nowGood, actually;
    if (!likeMagic.length) return;
    likeMagic.forEach(thing => {
        nowGood = typeof thing === 'function' ? thing : nowGood;
        actually = Number.isFinite(thing) ? thing : actually > 0 ? actually : 0;
    });
    return setTimeout(nowGood, actually);
}