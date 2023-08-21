const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: "Newest" },
        { name: "Famous people" },
        { name: "Movies & TV" },
        { name: "Games" },
        { name: "Geniuses." }
      ]
    });
  } catch (error) {
    console.error("seeding", error);
  } finally {
    await db.$disconnect();
  }
}
main();
