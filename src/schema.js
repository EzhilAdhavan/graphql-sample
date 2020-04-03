const { gql } = require('apollo-server');

const typeDefs = gql`

type Tutor {
    id: Int!
    name: String
    sex: String
    qualification: String
}

type Student {
    id: Int!
    name: String
    sex: String
    age: Int
    games: [String]
    tutor: Tutor
}

type Query {
    getAllStudents: [Student]
    getStudentById(id: Int!) : Student
    getStudentBySex(sex: String) : [Student]
    getTutors: [Tutor]
}

type Mutation {
    addTutor(id: Int, name: String, sex: String, qualification: String) : [Tutor]
}

`;

module.exports = typeDefs;