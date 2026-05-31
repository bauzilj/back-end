import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userId = "8d52b1e0-e2b2-4af6-af4c-acb396809e81"

const movies = [
  {
    title: "The Shawshank Redemption",
    overview: "Two imprisoned men bond over years, finding redemption and hope.",
    releaseYear: 1994,
    genres: ["Drama"],
    runtime: 142,
    posterUrl: "https://example.com/shawshank.jpg",
    createdBy: userId,
  },
  {
    title: "The Dark Knight",
    overview: "Batman faces the Joker, a criminal mastermind spreading chaos.",
    releaseYear: 2008,
    genres: ["Action", "Crime", "Drama"],
    runtime: 152,
    posterUrl: "https://example.com/dark-knight.jpg",
    createdBy: userId,
  },
  {
    title: "Pulp Fiction",
    overview: "Interwoven stories of crime, violence, and redemption in Los Angeles.",
    releaseYear: 1994,
    genres: ["Crime", "Drama"],
    runtime: 154,
    posterUrl: "https://example.com/pulp-fiction.jpg",
    createdBy: userId,
  },
  {
    title: "Fight Club",
    overview: "An office worker forms an underground fight club with a soap salesman.",
    releaseYear: 1999,
    genres: ["Drama"],
    runtime: 139,
    posterUrl: "https://example.com/fight-club.jpg",
    createdBy: userId,
  },
  {
    title: "Inception",
    overview: "A thief enters dreams to steal secrets and plant ideas.",
    releaseYear: 2010,
    genres: ["Action", "Adventure", "Sci-Fi"],
    runtime: 148,
    posterUrl: "https://example.com/inception.jpg",
    createdBy: userId,
  },
  {
    title: "Interstellar",
    overview: "Explorers travel through a wormhole to save humanity.",
    releaseYear: 2014,
    genres: ["Adventure", "Drama", "Sci-Fi"],
    runtime: 169,
    posterUrl: "https://example.com/interstellar.jpg",
    createdBy: userId,
  },
  {
    title: "The Matrix",
    overview: "A hacker discovers the reality he knows is a simulation.",
    releaseYear: 1999,
    genres: ["Action", "Sci-Fi"],
    runtime: 136,
    posterUrl: "https://example.com/matrix.jpg",
    createdBy: userId,
  },
  {
    title: "Forrest Gump",
    overview: "The extraordinary life journey of a simple but kind-hearted man.",
    releaseYear: 1994,
    genres: ["Drama", "Romance"],
    runtime: 142,
    posterUrl: "https://example.com/forrest-gump.jpg",
    createdBy: userId,
  },
  {
    title: "Gladiator",
    overview: "A Roman general seeks revenge after betrayal and loss.",
    releaseYear: 2000,
    genres: ["Action", "Adventure", "Drama"],
    runtime: 155,
    posterUrl: "https://example.com/gladiator.jpg",
    createdBy: userId,
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    overview: "A hobbit begins a perilous journey to destroy a powerful ring.",
    releaseYear: 2001,
    genres: ["Adventure", "Fantasy"],
    runtime: 178,
    posterUrl: "https://example.com/lotr-fellowship.jpg",
    createdBy: userId,
  },
];

const main = async() => {
    console.log("Seeding movies...");

    for (const movie of movies){
        await prisma.movie.create({
            data:movie,
        });
        console.log(`Created movie: ${movie.title}`);
    }
    console.log("Seedind completed!")
};

main().catch((err) => {
    console.error(err)
    process.exit(1);
})
.finally(async() => {
    await prisma.$disconnect();
});