const notes = [
    {
        course: 'Biologia',
        note: 10,
        credit: 2
    },
    {
        course: 'Matematicas',
        note: 8,
        credit: 4
    },
    {
        course: 'Ingles',
        note: 6,
        credit: 3
    }
]

const notesCredit = notes.map(function (notesObject) {
    return notesObject.note * notesObject.credit;
})

const sumNotesCredit = notesCredit.reduce(
    function (sum = 0, newValue) {
        return sum + newValue;
    }
)

const credits = notes.map(function (notesObject) {
    return notesObject.credit;
})

const sumOfCredits = credits.reduce(
    function (sum = 0, newValue) {
        return sum + newValue;
    }
)

const promedioPonderado = sumNotesCredit / sumOfCredits

console.log({notesCredit, sumNotesCredit, credits, sumOfCredits, promedioPonderado})