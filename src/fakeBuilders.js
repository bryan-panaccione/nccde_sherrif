export const builders = [
  {
    _id: "1",
    builderName: "Liam O'Neill",
    expertise: "First Timers, Investors",
    yoe: 5,
    broker: "Patterson Schwarz",
    status: "Ready for New Clients",
    coverPhoto: "../img/tempProfiles/cover1.jpg",
    profilePhoto: "../img/tempProfiles/builder1.jpg",
    builderEmail: "liam@liam.com",
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, amet eligendi reiciendis nemo magni doloremque eius nihil! Nemo, animi sapiente odio at qui mollitia doloremque aut totam laboriosam numquam dicta deserunt dolores quam necessitatibus possimus aperiam quod blanditiis iusto delectus fugiat sint perspiciatis reprehenderit eum. Eaque nulla quas eos vita",
  },
  {
    _id: "2",
    builderName: "Kathryn Matic",
    expertise: "First Timers, Investors",
    yoe: 1,
    broker: "Patterson Schwarz",
    status: "Ready for New Clients",
    coverPhoto: "../img/tempProfiles/cover2.jpg",
    profilePhoto: "../img/tempProfiles/builder2.jpg",
    builderEmail: "kat@ryn.com",
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, amet eligendi reiciendis nemo magni doloremque eius nihil! Nemo, animi sapiente odio at qui mollitia doloremque aut totam laboriosam numquam dicta deserunt dolores quam necessitatibus possimus aperiam quod blanditiis iusto delectus fugiat sint perspiciatis reprehenderit eum. Eaque nulla quas eos vita",
  },
  {
    _id: "3",
    builderName: "Tyler Pseniscka",
    expertise: "Commercial",
    yoe: 2,
    broker: "PRE Commercial Real Estate",
    status: "Ready for New Clients",
    coverPhoto: "../img/tempProfiles/cover3.jpg",
    profilePhoto: "../img/tempProfiles/builder3.jpg",
    builderEmail: "tyler@tyler.com",
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, amet eligendi reiciendis nemo magni doloremque eius nihil! Nemo, animi sapiente odio at qui mollitia doloremque aut totam laboriosam numquam dicta deserunt dolores quam necessitatibus possimus aperiam quod blanditiis iusto delectus fugiat sint perspiciatis reprehenderit eum. Eaque nulla quas eos vita",
  },
];

export function getbuilders() {
  return builders;
}

export function getbuilder(id) {
  return builders.find((m) => m._id === id);
}

export function deletebuilder(id) {
  let builderInDb = builders.find((m) => m._id === id);
  builders.splice(builders.indexOf(builderInDb), 1);
  return builderInDb;
}
