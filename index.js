
// 校验手机号码
const isPhone = (phoneNumber) => {
    return /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(phoneNumber)
}

// 校验国内电话号
const isTelephoneOfChina = (telePhoneNumber) => {
    return /\d{3}-\d{8}|\d{4}-\d{7}/.test(telePhoneNumber)
}

// 校验电话号码 支持手机号码，3-4位区号，7-8位直播号码，1－4位分机号）
const isTelephoneOfWorld = (telePhoneNumber) => {
    return /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/.test(telePhoneNumber)
}

// 校验域名
const isDomain = (domainName) => {
    return /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/.test(domainName)
}

// 校验邮箱
const isEmail = (email) => {
    return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)
}

// 校验身份证号码
const isIDNumber = (number) => {
    return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(number)
}
// 值相等
const isEqual = (a, b) => {
    return a === b
}

module.exports = {
    isPhone,
    isTelephoneOfChina,
    isTelephoneOfWorld,
    isEmail,
    isDomain,
    isIDNumber,
    isEqual
}
