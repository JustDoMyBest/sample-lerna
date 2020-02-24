// console.log(module)
// console.log(module.parent)
if(require.main === module) {
    console.log('execute directly！')
} else {
    module.exports = () => {
        console.log('Hello from common.')
    }
}