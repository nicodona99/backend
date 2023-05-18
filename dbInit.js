import { loremIpsum } from "lorem-ipsum"

export default async (models) => {
    const locationModel = [
        {
            name: "Dog Paradise",
            city: "Milan"
        },
        {
            name: "Dog City",
            city: "Roma"
        }
    ]

    const location0 = await models.Location.create(locationModel[0])
    const location1 = await models.Location.create(locationModel[1])

    const dogModel = [
        {
            name: "Tony Stark",
            breed: "Co-Founder",
            age: 35,
            description: "He co-founded Oltre after a journey in the social sector started in 2002 with the establishment of Fondazione Oltre, the first Italian Venture Philanthropy foundation. Previously, he worked for 20 years in the Venture Capital and Private Equity sector, as co-founder of B&S Private Equity and General Manager of Finnova (SO.PA.F. spa), the first VC company in Italy.",
            locationId: location0.id
        },
        {
            name: "Bruce Wayne",
            breed: "Co-Founder",
            age: 38,
            description: "prova2",
            locationId: location0.id
        },
        {
            name: "Peter Parker",
            breed: "Investement Manager",
            age: 19,
            description: "prova3",
            locationId: location0.id
        },
        {
            name: "Steven Strange",
            breed: "Investement Manager",
            age: 40,
            description: "prova4",
            locationId: location1.id
        },
        {
            name: "Diana Prince",
            breed: "Marketing",
            age: 40,
            description: "prova5",
            locationId: location1.id
        },
        {
            name: "Maria Hill",
            breed: "Marketing",
            age: 32,
            description: "prova6",
            locationId: location1.id
        },
        {
            name: "Natasha Romanov",
            breed: "Partner",
            age: 30,
            description: "prova7",
            locationId: location0.id
        },
        {
            name: "Barry Allen",
            breed: "Partner",
            age: 22,
            description: "prova8",
            locationId: location0.id
        },
        {
            name: "Wanda Maximof",
            breed: "legal assistant",
            age: 28,
            description: "prova9",
            locationId: location1.id
        },
        {
            name: "Wade Wilson",
            breed: "legal assistant",
            age: 35,
            description: "prova10",
            locationId: location1.id
        }
    ]
    
    await models.Dog.bulkCreate(dogModel)
}
