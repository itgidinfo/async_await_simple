function validatePassword(str) {
    if (typeof str !== 'string') {
        return [false, 'Error in validatePassword'];
    }
    if (str.length < 8) {
        return [false, 'Password must have at least 8 characters'];
    }
    if (str.search(/[a-z]/) === -1) {
        return [false, 'Password must contain at least one lower case letter'];
    }
    if (str.search(/[A-Z]/) === -1) {
        return [false, 'Password must contain at least one upper case letter'];
    }
    if (str.search(/[0123456789]/) === -1) {
        return [false, 'Password must contain at least one digit'];
    }
    if (str.search(/[!@#$%^&*()\-=_+~[\]{}'"\\|,./<>?]/) === -1) {
        return [false, 'Password must contain at least one symbol'];
    }
    // Temporarily removed
    // if (str.search(/[𓀀𓀁𓀂𓀃𓀄𓀅𓀆𓀈𓀉𓀊𓀋𓀌𓀍𓀎𓀏𓀐𓀑𓀒𓀓𓀔𓀞𓀟𓀠𓀡𓀢𓀣𓀤𓀥𓀦𓀧𓀨𓀩𓀪𓀫𓀬]/) === -1) {
    //     return [false, 'Password must contain at least one Egyptian hieroglyph'];
    // }
    if (str.search(/\s/) !== -1) {
        return [false, 'Password may not contain spaces'];
    }
    return [true];
}