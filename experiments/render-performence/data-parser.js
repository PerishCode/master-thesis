const { promises: { readFile } } = require("fs")

const files = [
    // [["final", "A", 1], 20],
    // [["final", "B", 1], 20],
    // [["final", "C", 1], 20],
    // [["final", "D", 1], 20],
    // [["final", "A", 10], 20],
    // [["final", "B", 10], 20],
    // [["final", "C", 10], 20],
    // [["final", "D", 10], 20],
    // [["final", "A", 20], 20],
    // [["final", "B", 20], 20],
    // [["final", "C", 20], 20],
    // [["final", "D", 20], 20],
    // [["final", "A", 30], 20],
    // [["final", "D", 30], 20],
    // [["final", "A", 40], 20],
    // [["final", "D", 40], 20],
    // [["final", "A", 50], 20],
    // [["final", "D", 50], 20],
    // [["final", "B", 50], 20]
];

(['vanilla', 'global', 'xform','formily','final']).forEach(a => {
    ['A', 'B', 'C', 'D'].forEach(b => {
        [1, 10, 20, 30, 40, 50].forEach(c => {
            files.push([[a, b, c], 20])
        })
    })
})

// observe(function f(){
//     object.map(...);
// })

async function dataParser(fileName, count) {
    const content = await readFile("/home/perish/Documents/渲染性能实验结果/" + fileName + ".json")
    // const content = await readFile("/home/perish/Downloads/渲染性能实验结果/" + fileName + ".json")


    const profile = JSON.parse(content.toString())

    const { dataForRoots } = profile

    const actualData = dataForRoots[0].commitData.map((item) => item.duration)

    const result = actualData.reduce((sum, n) => sum + n, 0)

    return result / count
};

(async function main() {
    const final = {}

    for (const [file, count] of files) {
        const result = await dataParser(file.join('-'), count)

        const [a, b] = file

        if (!final[a]) final[a] = {};
        if (!final[a][b]) final[a][b] = [];

        final[a][b].push(parseFloat(result.toFixed(2)))

        // final.push([file, result])
    }

    console.log(final);
})();