const escolas = [{
    nome: 'Turma M1',
    alunos :[{
        nome: 'Gustvo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        none: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const notas = aluno => aluno.nota

const turmas = turma => turma.alunos.map(notas)

const result = escolas.map(turmas)
console.log(result) 