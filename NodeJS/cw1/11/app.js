if (process.argv.length > 4) {
    console.log('zbyt dużo parametrów!')
    process.exit();
} else if (process.argv.length < 4){
    console.log('zbyt malo parametrów!!')
    process.exit();
} else {
console.log("Ok")
}