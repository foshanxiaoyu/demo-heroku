function addMoney(price1,price2,discount){
    let res = price1+price2-discount
    let message = '普通会员'

    if (res > 50000){
        return    message = 'VIP会员'
    }
    if (res > 20000){
        return    message = '白金会员'
    }
    return message
}

let msg = addMoney(20000,30000,20000)
console.log("msg", msg)
