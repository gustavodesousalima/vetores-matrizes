let array = [1,2,3,4,5,6,7]

let count = 0

for (let i = 0; i < array.length; i++) {
    count += array[i]
}

let media = count / array.length

console.log(media)