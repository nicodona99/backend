import { loremIpsum } from "lorem-ipsum"

export default async (models) => {
    const locationModel = [
        {
            name: "progetto 1",
            city: "area ?"
        },
        {
            name: "progetto 2",
            city: "area ? "
        },
        {
            name: "progetto 3",
            city: "area ? "
        },
        {
            name: "progetto 4",
            city: "area ? "
        },
        {
            name: "progetto 5",
            city: "area ? "
        },
        {
            name: "progetto 6",
            city: "area ? "
        },
        {
            name: "progetto 7",
            city: "area ? "
        },
        {
            name: "progetto 8",
            city: "area ? "
        },
        {
            name: "progetto 9",
            city: "area ? "
        },
        {
            name: "progetto 10",
            city: "area ? "
        },
        {
            name: "progetto 11",
            city: "area ? "
        },
        {
            name: "progetto 12",
            city: "area ? "
        },
        {
            name: "progetto 13",
            city: "area ? "
        },
        {
            name: "progetto 14",
            city: "area ? "
        },
        {
            name: "progetto 15",
            city: "area ? "
        }

    ]

    const location0 = await models.Location.create(locationModel[0])
    const location1 = await models.Location.create(locationModel[1])
    const location2 = await models.Location.create(locationModel[2])
    const location3 = await models.Location.create(locationModel[3])
    const location4 = await models.Location.create(locationModel[4])
    const location5 = await models.Location.create(locationModel[5])
    const location6 = await models.Location.create(locationModel[6])
    const location7 = await models.Location.create(locationModel[7])
    const location8 = await models.Location.create(locationModel[8])
    const location9 = await models.Location.create(locationModel[9])
    const location10 = await models.Location.create(locationModel[10])
    const location11 = await models.Location.create(locationModel[11])
    const location12 = await models.Location.create(locationModel[12])
    const location13= await models.Location.create(locationModel[13])
    const location14= await models.Location.create(locationModel[14])


    const dogModel = [
        {
            name: "Tony Stark",
            breed: "Co-Founder",
            age: 35,
            description: "He co-founded Oltre after a journey in the social sector started in 2002 with the establishment of Fondazione Oltre, the first Italian Venture Philanthropy foundation. Previously, he worked for 20 years in the Venture Capital and Private Equity sector, as co-founder of B&S Private Equity and General Manager of Finnova, the first VC company in Italy.",
            locationId: location0.id
        },
        {
            name: "Bruce Wayne",
            breed: "Co-Founder",
            age: 38,
            description: "prova2",
            locationId: location1.id
        },
        {
            name: "Peter Parker",
            breed: "Investement Manager",
            age: 19,
            description: "prova3",
            locationId: location2.id
        },
        {
            name: "Steven Strange",
            breed: "Investement Manager",
            age: 40,
            description: "prova4",
            locationId: location3.id
        },
        {
            name: "Diana Prince",
            breed: "Marketing",
            age: 40,
            description: "prova5",
            locationId: location4.id
        },
        {
            name: "Maria Hill",
            breed: "Marketing",
            age: 32,
            description: "prova6",
            locationId: location5.id
        },
        {
            name: "Natasha Romanov",
            breed: "Partner",
            age: 30,
            description: "prova7",
            locationId: location6.id
        },
        {
            name: "Barry Allen",
            breed: "Partner",
            age: 22,
            description: "prova8",
            locationId: location7.id
        },
        {
            name: "Wanda Maximof",
            breed: "legal assistant",
            age: 28,
            description: "prova9",
            locationId: location8.id
        },
        {
            name: "Wade Wilson",
            breed: "legal assistant",
            age: 35,
            description: "prova10",
            locationId: location9.id
        }
    ]
    
    await models.Dog.bulkCreate(dogModel)
}
