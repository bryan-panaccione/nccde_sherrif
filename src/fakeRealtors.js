const agents = [
  {
    _id: "1",
    agentName: "Liam O'Neill",
    expertise: "First Timers, Investors",
    yoe: 5,
    broker: "Patterson Schwarz",
    status: "Ready for New Clients",
    coverPhoto: "../img/tempProfiles/cover1.jpg",
    profilePhoto: "../img/tempProfiles/agent1.jpg",
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, amet eligendi reiciendis nemo magni doloremque eius nihil! Nemo, animi sapiente odio at qui mollitia doloremque aut totam laboriosam numquam dicta deserunt dolores quam necessitatibus possimus aperiam quod blanditiis iusto delectus fugiat sint perspiciatis reprehenderit eum. Eaque nulla quas eos vita",
  },
  {
    _id: "2",
    agentName: "Kathryn Matic",
    expertise: "First Timers, Investors",
    yoe: 1,
    broker: "Patterson Schwarz",
    status: "Ready for New Clients",
    coverPhoto: "../img/tempProfiles/cover2.jpg",
    profilePhoto: "../img/tempProfiles/agent2.jpg",
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, amet eligendi reiciendis nemo magni doloremque eius nihil! Nemo, animi sapiente odio at qui mollitia doloremque aut totam laboriosam numquam dicta deserunt dolores quam necessitatibus possimus aperiam quod blanditiis iusto delectus fugiat sint perspiciatis reprehenderit eum. Eaque nulla quas eos vita",
  },
  {
    _id: "3",
    agentName: "Tyler Pseniscka",
    expertise: "Commercial",
    yoe: 2,
    broker: "PRE Commercial Real Estate",
    status: "Ready for New Clients",
    coverPhoto: "../img/tempProfiles/cover3.jpg",
    profilePhoto: "../img/tempProfiles/agent3.jpg",
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, amet eligendi reiciendis nemo magni doloremque eius nihil! Nemo, animi sapiente odio at qui mollitia doloremque aut totam laboriosam numquam dicta deserunt dolores quam necessitatibus possimus aperiam quod blanditiis iusto delectus fugiat sint perspiciatis reprehenderit eum. Eaque nulla quas eos vita",
  },
];

export function getagents() {
  return agents;
}

export function getagent(id) {
  return agents.find((m) => m._id === id);
}

export function deleteagent(id) {
  let agentInDb = agents.find((m) => m._id === id);
  agents.splice(agents.indexOf(agentInDb), 1);
  return agentInDb;
}
