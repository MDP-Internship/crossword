
export default class MatrisConvert {


    static row(orientationData, orientation) {
        var isCoordinate = (orientation === "across") ? 1 : 0;
        var result = []

        for (let indexY = 0; indexY < 8; indexY++) {
            var row = orientationData
                .filter(item => item.coordinate[isCoordinate] - 1 === indexY)
                .map(item => {
                    return {
                        position: item.position,
                        answer: item.answer.map(letter => letter),
                        coordinate: item.coordinate,
                    }
                })
            result.push(this.column(row, orientation))
        }

        return result

    }

    static column(orientationData, orientation) {
        var isCoordinate = (orientation === "across") ? 0 : 1;

        let rowLetter = [];

        var position = orientationData.map(item => {
            var result = [...item.answer].map(element => { return { char: element, position: item.position } })
            return result;
        })
        var letterPositon = [].concat.apply([], position);



        var coordinate = orientationData.map(item => {
            return {
                startx: item.coordinate[isCoordinate],
                length: item.answer.length
            }
        }).map(item => {
            let array = [...Array(item.length).keys()].map(element => element + item.startx - 1)
            return array;
        })

        var coordinateMerge = [].concat.apply([], coordinate);

        for (let index = 0; index < coordinateMerge.length; index++) {
            rowLetter[coordinateMerge[index]] = {
                char: letterPositon[index].char,
                position: letterPositon[index].position
            }
        }
        for (let index = 0; index < 8; index++)
            if (typeof rowLetter[index] === "undefined")
                rowLetter[index] = 0

        return rowLetter
    }

    static result(data) {

        var clueX = data.filter(item => item.orientation === "across").map(item => {
            return {
                "coordinate": [item.startx, item.starty],
                "position": item.position,
                "answer": [...item.answer]
            }

        })

        var clueY = data.filter(item => item.orientation === "down").map(item => {
            return {
                "coordinate": [item.startx, item.starty],
                "position": item.position,
                "answer": [...item.answer]
            }

        })

        var crossWord = []

        var down = this.row(clueY, "down")
        var across = this.row(clueX, "across")

        for (let y = 0; y < 8; y++) {
            const dataX = []
            for (let x = 0; x < 8; x++) {
                dataX[x] = {
                    letter: (typeof across[y][x].char !== "undefined") ? across[y][x].char : (typeof down[x][y].char !== "undefined") ? down[x][y].char : 0,
                    clueX: (typeof across[y][x].position !== "undefined") ? across[y][x].position : null,
                    clueY: (typeof down[x][y].position !== "undefined") ? down[x][y].position : null,
                }
                crossWord[y] = dataX;
            }
        }

        return crossWord
    }
}
