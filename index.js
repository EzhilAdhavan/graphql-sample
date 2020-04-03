const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/schema');

let tutorList = [
    {
        id: 20,
        name: "Tim Cook",
        sex: "Male",
        qualification: "Ph.D"
    },
    {
        id: 21,
        name: "Steve Jobs",
        sex: "Male"
    }
]

const indoorList = [
    "Carrom",
    "Chess",
    "TT"
];

const outdoorList = [
    "Cricket",
    "Football"
];


const studentsList = [
    {
        id: 1,
        name: 'Harry Potter',
        sex: 'Male',
        age: 14,
        games: indoorList,
        tutor: tutorList[0]
    },
    {
        id: 2,
        name: 'Scharlet',
        sex: 'Female',
        age: 15,
        games: outdoorList,
        tutor: tutorList[1]
    },
    {
        id: 3,
        name: 'Ezhil Adhavan',
        sex: 'Male',
        age: 24,
        games: indoorList,
        tutor: tutorList[0]
    }
];

const resolvers = {
    Query: {
        getAllStudents:() => {
            return studentsList  
        },

        getStudentById(parent, args, context, info){
            return studentsList.filter(studentsList => studentsList.id === args.id)[0]
        },

        getStudentBySex(parent, args, context, info) {
            return studentsList.filter(studentsList => studentsList.sex === args.sex)
        },

        getTutors:() => {
            return tutorList
        }
    },

    Mutation: {
        addTutor(parent, args, context, info) {
            const tutor = {
                id: args.id,
                name: args.name,
                sex: args.sex,
                qualification: args.qualification
            } 
            tutorList.push(tutor)
            return tutorList
        }
    }
}

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    persistedQueries: {
        ttl: 900, // 15 minutes
    },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});